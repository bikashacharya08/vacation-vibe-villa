import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { withDb } from "@/lib/prisma";
import { sendBookingNotification, sendBookingConfirmation } from "@/lib/email";
import { sendWhatsAppBookingNotification } from "@/lib/whatsapp";
import { errorResponse, corsResponse, withCors } from "@/lib/api-utils";

const schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(255),
  phone: z.string().min(1).max(50),
  checkIn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid check-in date format"),
  checkOut: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid check-out date format"),
  guests: z.number().int().min(1).max(4, "Maximum 4 guests allowed"),
  message: z.string().max(2000).default(""),
});

export async function OPTIONS(request: NextRequest) {
  return corsResponse(request.headers.get("origin"));
}

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get("origin");

    // lightweight honeypot / spam check
    const body = await request.json();
    if (body.website !== undefined && body.website !== "") {
      return withCors(errorResponse("Spam detected", 400), origin);
    }

    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return withCors(
        errorResponse(
          "Validation failed: " + parsed.error.issues.map((e) => e.message).join(", "),
          400
        ),
        origin
      );
    }

    const checkIn = new Date(parsed.data.checkIn + "T00:00:00Z");
    const checkOut = new Date(parsed.data.checkOut + "T00:00:00Z");

    if (isNaN(checkIn.getTime()) || isNaN(checkOut.getTime())) {
      return withCors(errorResponse("Invalid date format", 400), origin);
    }

    if (checkOut <= checkIn) {
      return withCors(errorResponse("Check-out must be after check-in", 400), origin);
    }

    if (!process.env.DATABASE_URL) {
      console.error("DATABASE_URL is not configured");
      return withCors(errorResponse("Booking service is unavailable. Please try again later.", 503), origin);
    }

    // Save booking to admin database
    const booking = await withDb((prisma) =>
      prisma.booking.create({
        data: {
          ...parsed.data,
          status: "pending",
        },
      })
    );

    // Send emails and WhatsApp notification immediately (fire-and-forget with logging)
    const emailPayload = { ...parsed.data };

    (async () => {
      try {
        await sendBookingNotification(emailPayload);
      } catch (err) {
        console.error("Failed to send owner booking notification:", err);
      }

      try {
        await sendBookingConfirmation(emailPayload);
      } catch (err) {
        console.error("Failed to send guest confirmation email:", err);
      }

      try {
        await sendWhatsAppBookingNotification({ ...emailPayload, id: booking.id });
      } catch (err) {
        console.error("Failed to send WhatsApp notification:", err);
      }
    })();

    return withCors(NextResponse.json({ success: true, id: booking.id }), origin);
  } catch (err) {
    console.error("Booking API error:", err);
    return withCors(errorResponse("Internal server error", 500), request.headers.get("origin"));
  }
}
