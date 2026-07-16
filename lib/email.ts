import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  subject,
  html,
}: {
  subject: string;
  html: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("No RESEND_API_KEY found, skipping email notification.");
    return;
  }
  
  try {
    await resend.emails.send({
      from: "Vacation Vibe Villa <onboarding@resend.dev>",
      to: "bikashacharya08@gmail.com",
      subject,
      html,
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
