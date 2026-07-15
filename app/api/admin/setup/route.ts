import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const adminCount = await prisma.admin.count();
  const messageCount = await prisma.message.count();
  const bookingCount = await prisma.booking.count();
  const sampleMessages = await prisma.message.findMany({ take: 3, orderBy: { id: "asc" } });

  return NextResponse.json({
    adminExists: adminCount > 0,
    adminCount,
    messageCount,
    bookingCount,
    sampleMessages,
    dbConnected: true,
  });
}
