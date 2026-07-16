import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { withDb } from "@/lib/prisma";
import { errorResponse, corsResponse, withCors } from "@/lib/api-utils";
import { sendEmail } from "@/lib/email";

const schema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email().max(255),
  message: z.string().min(1).max(5000),
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

    await withDb((prisma) => prisma.message.create({ data: parsed.data }));

    await sendEmail({
      subject: `New Contact Message from ${parsed.data.firstName}`,
      html: `<h2>New Contact Message</h2>
<p><strong>Name:</strong> ${parsed.data.firstName} ${parsed.data.lastName}</p>
<p><strong>Email:</strong> ${parsed.data.email}</p>
<p><strong>Message:</strong><br/>${parsed.data.message}</p>`,
    });

    return withCors(NextResponse.json({ success: true }));
  } catch (err) {
    console.error("Contact API error:", err);
    return withCors(errorResponse("Internal server error", 500));
  }
}
