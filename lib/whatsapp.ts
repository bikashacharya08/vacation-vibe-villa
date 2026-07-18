const whatsappApiKey = process.env.WHATSAPP_API_KEY;
const adminWhatsAppNumber = process.env.WHATSAPP_ADMIN_NUMBER;

export async function sendWhatsAppBookingNotification(data: {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  message: string;
  id: number;
}) {
  if (!whatsappApiKey || !adminWhatsAppNumber) {
    console.log("WhatsApp notification skipped: WHATSAPP_API_KEY or WHATSAPP_ADMIN_NUMBER not configured");
    return;
  }

  const text = [
    "🔔 *New Booking Request at Vacation Vibe Villa*",
    "",
    `*Name:* ${data.name}`,
    `*Email:* ${data.email}`,
    `*Phone:* ${data.phone}`,
    `*Check-in:* ${data.checkIn}`,
    `*Check-out:* ${data.checkOut}`,
    `*Guests:* ${data.guests}`,
    `*Message:* ${data.message || "None"}`,
    "",
    `View booking in admin: https://vacationvibevilla.com.np/admin`,
  ].join("\n");

  const url = new URL("https://api.callmebot.com/whatsapp.php");
  url.searchParams.set("phone", adminWhatsAppNumber.replace(/\+/g, "").replace(/-/g, ""));
  url.searchParams.set("apikey", whatsappApiKey);
  url.searchParams.set("text", text);

  try {
    const res = await fetch(url.toString(), { method: "GET" });
    if (!res.ok) {
      const body = await res.text().catch(() => "unknown");
      throw new Error(`CallMeBot failed: ${res.status} ${body}`);
    }
  } catch (err) {
    console.error("Failed to send WhatsApp notification:", err);
    throw err;
  }
}
