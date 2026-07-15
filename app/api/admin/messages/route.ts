import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminId } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const adminId = getAdminId(request);
  if (!adminId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(messages);
}

export async function PATCH(request: NextRequest) {
  const adminId = getAdminId(request);
  if (!adminId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await request.json();
  const message = await prisma.message.update({
    where: { id },
    data: { read: true },
  });

  return NextResponse.json(message);
}
