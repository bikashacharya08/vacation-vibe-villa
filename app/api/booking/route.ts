import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { withDb } from "@/lib/prisma";
import { errorResponse, corsResponse, withCors } from "@/lib/api-utils";
import { sendEmail } from "@/lib/email";

const schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(255),
  phone: z.string().min(1).max(50),
  checkIn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid check-in date format"),
  checkOut: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid check-out date format"),
  guests: z.number().int().min(1).max(4, "Maximum 4 guests allowed"),
  message: z.string().max(5000).default(""),
});

export async function OPTIONS() {
  return corsResponse();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return withCors(errorResponse("Validation failed: " + parsed.error.issues.map((e) => e.message).join(", "), 400));
    }

    const checkIn = new Date(parsed.data.checkIn);
    const checkOut = new Date(parsed.data.checkOut);
    if (checkOut <= checkIn) {
      return withCors(errorResponse("Check-out must be after check-in", 400));
    }

    await withDb((prisma) => prisma.booking.create({ data: parsed.data }));

    await sendEmail({
      subject: `New Booking Request: ${parsed.data.name}`,
      html: `<h2>New Booking Request</h2>
<p><strong>Name:</strong> ${parsed.data.name}</p>
<p><strong>Email:</strong> ${parsed.data.email}</p>
<p><strong>Phone:</strong> ${parsed.data.phone}</p>
<p><strong>Dates:</strong> ${parsed.data.checkIn} to ${parsed.data.checkOut}</p>
<p><strong>Guests:</strong> ${parsed.data.guests}</p>
<p><strong>Message:</strong><br/>${parsed.data.message || "None"}</p>`,
    });

    return withCors(NextResponse.json({ success: true }));
  } catch (err) {
    console.error("Booking API error:", err);
    return withCors(errorResponse("Internal server error", 500));
  }
}
