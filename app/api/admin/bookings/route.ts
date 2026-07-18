import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { withDb } from "@/lib/prisma";
import { getAdminId } from "@/lib/auth";
import { sendBookingStatusEmail } from "@/lib/email";
import { errorResponse, corsResponse, withCors } from "@/lib/api-utils";

export async function OPTIONS(request: NextRequest) {
  return corsResponse(request.headers.get("origin"));
}

export async function GET(request: NextRequest) {
  const adminId = getAdminId(request);
  if (!adminId) return withCors(errorResponse("Unauthorized", 401), request.headers.get("origin"));

  const bookings = await withDb((prisma) => prisma.booking.findMany({ orderBy: { createdAt: "desc" } }));
  return withCors(NextResponse.json(bookings), request.headers.get("origin"));
}

const patchSchema = z.object({
  id: z.number().int().positive(),
  status: z.enum(["pending", "confirmed", "cancelled"]),
});

export async function PATCH(request: NextRequest) {
  const adminId = getAdminId(request);
  const origin = request.headers.get("origin");
  if (!adminId) return withCors(errorResponse("Unauthorized", 401), origin);

  try {
    const body = await request.json();
    const parsed = patchSchema.safeParse(body);
    if (!parsed.success) return withCors(errorResponse("Invalid request", 400), origin);

    const booking = await withDb((prisma) =>
      prisma.booking.update({
        where: { id: parsed.data.id },
        data: { status: parsed.data.status },
      })
    );

    // Send status email to guest for confirmed or cancelled bookings
    if (booking.email && (parsed.data.status === "confirmed" || parsed.data.status === "cancelled")) {
      (async () => {
        try {
          await sendBookingStatusEmail({
            name: booking.name,
            email: booking.email,
            checkIn: booking.checkIn,
            checkOut: booking.checkOut,
            guests: booking.guests,
            status: parsed.data.status,
          });
        } catch (err) {
          console.error("Failed to send booking status email:", err);
        }
      })();
    }

    return withCors(NextResponse.json(booking), origin);
  } catch (err) {
    console.error("Bookings API error:", err);
    return withCors(errorResponse("Internal server error", 500), origin);
  }
}

export async function DELETE(request: NextRequest) {
  const adminId = getAdminId(request);
  const origin = request.headers.get("origin");
  if (!adminId) return withCors(errorResponse("Unauthorized", 401), origin);

  try {
    const url = new URL(request.url);
    const id = parseInt(url.searchParams.get("id") || "", 10);
    if (!id) return withCors(errorResponse("Invalid booking ID", 400), origin);

    await withDb((prisma) => prisma.booking.delete({ where: { id } }));
    return withCors(NextResponse.json({ success: true }), origin);
  } catch (err) {
    console.error("Bookings API delete error:", err);
    return withCors(errorResponse("Internal server error", 500), origin);
  }
}
