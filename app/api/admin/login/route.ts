import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { withDb } from "@/lib/prisma";
import { signToken, setAuthCookie } from "@/lib/auth";
import { errorResponse, corsResponse, withCors } from "@/lib/api-utils";

const schema = z.object({
  username: z.string().min(1).max(100),
  password: z.string().min(1).max(200),
});

export async function OPTIONS() {
  return corsResponse();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return withCors(errorResponse("Invalid credentials", 401));
    }

    const admin = await withDb((prisma) => prisma.admin.findUnique({ where: { username: parsed.data.username } }));
    if (!admin) {
      return withCors(errorResponse("Invalid credentials", 401));
    }

    const valid = await bcrypt.compare(parsed.data.password, admin.password);
    if (!valid) {
      return withCors(errorResponse("Invalid credentials", 401));
    }

    const token = signToken(admin.id);
    const response = NextResponse.json({ success: true });
    setAuthCookie(response, token);

    return withCors(response);
  } catch (err) {
    console.error("Login API error:", err);
    return withCors(errorResponse("Internal server error", 500));
  }
}
