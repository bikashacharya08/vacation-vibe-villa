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

  const messages = await withDb((prisma) => prisma.message.findMany({ orderBy: { createdAt: "desc" } }));
  return withCors(NextResponse.json(messages));
}

const patchSchema = z.object({ id: z.number().int().positive() });

export async function PATCH(request: NextRequest) {
  const adminId = getAdminId(request);
  if (!adminId) return withCors(errorResponse("Unauthorized", 401));

  try {
    const body = await request.json();
    const parsed = patchSchema.safeParse(body);
    if (!parsed.success) return withCors(errorResponse("Invalid message ID", 400));

    const message = await withDb((prisma) =>
      prisma.message.update({
        where: { id: parsed.data.id },
        data: { read: true },
      })
    );
    return withCors(NextResponse.json(message));
  } catch (err) {
    console.error("Messages API error:", err);
    return withCors(errorResponse("Internal server error", 500));
  }
}

export async function DELETE(request: NextRequest) {
  const adminId = getAdminId(request);
  if (!adminId) return withCors(errorResponse("Unauthorized", 401));

  try {
    const url = new URL(request.url);
    const id = parseInt(url.searchParams.get("id") || "", 10);
    if (!id) return withCors(errorResponse("Invalid message ID", 400));

    await withDb((prisma) => prisma.message.delete({ where: { id } }));
    return withCors(NextResponse.json({ success: true }));
  } catch (err) {
    console.error("Messages API delete error:", err);
    return withCors(errorResponse("Internal server error", 500));
  }
}
