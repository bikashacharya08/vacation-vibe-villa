import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { withDb } from "@/lib/prisma";
import { errorResponse, corsResponse, withCors } from "@/lib/api-utils";

const schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(255),
  phone: z.string().min(1).max(50),
  checkIn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid check-in date format"),
  checkOut: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid check-out date format"),
  guests: z.number().int().min(1).max(50),
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

    return withCors(NextResponse.json({ success: true }));
  } catch (err) {
    console.error("Booking API error:", err);
    return withCors(errorResponse("Internal server error", 500));
  }
}
