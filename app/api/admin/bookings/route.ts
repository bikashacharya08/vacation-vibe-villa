import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { withDb } from "@/lib/prisma";
import { getAdminId } from "@/lib/auth";
import { errorResponse, corsResponse, withCors } from "@/lib/api-utils";

export async function OPTIONS() {
  return corsResponse();
}

export async function GET(request: NextRequest) {
  const adminId = getAdminId(request);
  if (!adminId) return withCors(errorResponse("Unauthorized", 401));

  const bookings = await withDb((prisma) => prisma.booking.findMany({ orderBy: { createdAt: "desc" } }));
  return withCors(NextResponse.json(bookings));
}

const patchSchema = z.object({
  id: z.number().int().positive(),
  status: z.enum(["pending", "confirmed", "cancelled"]),
});

export async function PATCH(request: NextRequest) {
  const adminId = getAdminId(request);
  if (!adminId) return withCors(errorResponse("Unauthorized", 401));

  try {
    const body = await request.json();
    const parsed = patchSchema.safeParse(body);
    if (!parsed.success) return withCors(errorResponse("Invalid request", 400));

    const booking = await withDb((prisma) =>
      prisma.booking.update({
        where: { id: parsed.data.id },
        data: { status: parsed.data.status },
      })
    );
    return withCors(NextResponse.json(booking));
  } catch (err) {
    console.error("Bookings API error:", err);
    return withCors(errorResponse("Internal server error", 500));
  }
}
