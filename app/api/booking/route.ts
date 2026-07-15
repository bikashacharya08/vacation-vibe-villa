import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, checkIn, checkOut, guests, message } = await request.json();

    if (!name || !email || !phone || !checkIn || !checkOut || !guests) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    await prisma.booking.create({
      data: { name, email, phone, checkIn, checkOut, guests, message: message || "" },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
