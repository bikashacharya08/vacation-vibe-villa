import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "villa-secret-key-change-in-production";

export function signToken(adminId: number) {
  return jwt.sign({ id: adminId }, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as { id: number };
  } catch {
    return null;
  }
}

export function getAdminId(request: NextRequest): number | null {
  const auth = request.headers.get("authorization");
  if (!auth?.startsWith("Bearer ")) return null;
  const payload = verifyToken(auth.slice(7));
  return payload?.id ?? null;
}
