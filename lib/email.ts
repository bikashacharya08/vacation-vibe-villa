import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const fromEmail = process.env.FROM_EMAIL || "noreply@vacationvibevilla.com.np";
const ownerEmail = process.env.OWNER_EMAIL;
const siteName = "Vacation Vibe Villa";

// Villa details used in confirmation emails. Override via environment variables if needed.
const villaAddress = process.env.VILLA_ADDRESS || "06 Bacchauli Road, Ratnanagar 44204";
const villaMapsLink = process.env.VILLA_MAPS_LINK || "https://www.google.com/maps/search/?api=1&query=06+Bacchauli+Road%2C+Ratnanagar+44204";
const villaWifiSsid = process.env.VILLA_WIFI_SSID || "Vacation Vibe Villa";
const villaWifiPassword = process.env.VILLA_WIFI_PASSWORD || "Welcome2Chitwan";
const villaPhone = process.env.VILLA_PHONE || "+977-9865345753";
const villaEntryNotes = process.env.VILLA_ENTRY_NOTES || `You will arrive right in front of our house, just 3 minutes before the Sauraha bus park, on the main tourist road. If you're on a tourist coach, simply call us at ${villaPhone} or tell the driver to drop you near "Gauri Gai Chowk," which is between street no. 6 and 7. Our location is just a short walk from there. You can also find us on Google by searching "Vacation Vibe Villa" for our exact location. If you're coming by car, follow the main road into Sauraha; we're easy to find, and free parking is available on-site.`;

export async function sendBookingNotification(data: {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  message: string;
}) {
  if (!resend || !ownerEmail) {
    console.log("Email skipped: RESEND_API_KEY or OWNER_EMAIL not configured");
    return;
  }

  const subject = `New Booking Request from ${data.name}`;
  const text = `
New booking request at ${siteName}

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Check-in: ${data.checkIn}
Check-out: ${data.checkOut}
Guests: ${data.guests}
Message: ${data.message || "None"}

Reply to this email to contact the guest directly.
  `.trim();

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2c2c2c;">
      <h2 style="color: #c9a96e;">New Booking Request</h2>
      <p>A new booking request has been submitted at ${siteName}.</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td style="padding: 8px 0;">${data.name}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td style="padding: 8px 0;">${data.email}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td style="padding: 8px 0;">${data.phone}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Check-in:</td><td style="padding: 8px 0;">${data.checkIn}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Check-out:</td><td style="padding: 8px 0;">${data.checkOut}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Guests:</td><td style="padding: 8px 0;">${data.guests}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Message:</td><td style="padding: 8px 0;">${data.message || "None"}</td></tr>
      </table>
      <p style="margin-top: 24px; font-size: 14px; color: #6b6b6b;">Reply to this email to contact the guest directly.</p>
    </div>
  `;

  await resend.emails.send({
    from: `${siteName} <${fromEmail}>`,
    to: ownerEmail,
    replyTo: data.email,
    subject,
    text,
    html,
  });
}

export async function sendBookingConfirmation(data: {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  message: string;
}) {
  if (!resend || !data.email) {
    console.log("Confirmation email skipped: RESEND_API_KEY or guest email not available");
    return;
  }

  const subject = `Your booking request at ${siteName} has been received`;
  const text = `
Dear ${data.name},

Thank you for your booking request at ${siteName}. We have received your details and will confirm availability within 24 hours.

Booking Details:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Check-in: ${data.checkIn}
Check-out: ${data.checkOut}
Guests: ${data.guests}
Special Requests: ${data.message || "None"}

  If you have any questions, feel free to reply to this email or contact us on WhatsApp at ${villaPhone}.

Warm regards,
${siteName} Team
  `.trim();

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2c2c2c;">
      <h2 style="color: #c9a96e;">Booking Request Received</h2>
      <p>Dear ${data.name},</p>
      <p>Thank you for your booking request at ${siteName}. We have received your details and will confirm availability within 24 hours.</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td style="padding: 8px 0;">${data.name}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td style="padding: 8px 0;">${data.email}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td style="padding: 8px 0;">${data.phone}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Check-in:</td><td style="padding: 8px 0;">${data.checkIn}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Check-out:</td><td style="padding: 8px 0;">${data.checkOut}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Guests:</td><td style="padding: 8px 0;">${data.guests}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Special Requests:</td><td style="padding: 8px 0;">${data.message || "None"}</td></tr>
      </table>
      <p style="margin-top: 24px;">If you have any questions, feel free to reply to this email or contact us on WhatsApp at <a href="https://wa.me/${villaPhone.replace(/\+/g, '').replace(/-/g, '')}" style="color: #c9a96e;">${villaPhone}</a>.</p>
      <p style="margin-top: 24px; font-size: 14px; color: #6b6b6b;">Warm regards,<br/>${siteName} Team</p>
    </div>
  `;

  await resend.emails.send({
    from: `${siteName} <${fromEmail}>`,
    to: data.email,
    subject,
    text,
    html,
  });
}

export async function sendContactNotification(data: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}) {
  if (!resend || !ownerEmail) {
    console.log("Email skipped: RESEND_API_KEY or OWNER_EMAIL not configured");
    return;
  }

  const subject = `New Message from ${data.firstName} ${data.lastName}`;
  const text = `
New message at ${siteName}

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Message: ${data.message}

Reply to this email to respond directly.
  `.trim();

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2c2c2c;">
      <h2 style="color: #c9a96e;">New Message</h2>
      <p>You have a new message from the ${siteName} website.</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td style="padding: 8px 0;">${data.firstName} ${data.lastName}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td style="padding: 8px 0;">${data.email}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Message:</td><td style="padding: 8px 0;">${data.message}</td></tr>
      </table>
      <p style="margin-top: 24px; font-size: 14px; color: #6b6b6b;">Reply to this email to respond directly.</p>
    </div>
  `;

  await resend.emails.send({
    from: `${siteName} <${fromEmail}>`,
    to: ownerEmail,
    replyTo: data.email,
    subject,
    text,
    html,
  });
}

export async function sendBookingStatusEmail(data: {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  status: "pending" | "confirmed" | "cancelled";
}) {
  if (!resend || !data.email) {
    console.log("Status email skipped: RESEND_API_KEY or guest email not available");
    return;
  }

  if (data.status === "cancelled") {
    const subject = `Update on your ${siteName} booking request`;
    const text = `
Dear ${data.name},

We regret to inform you that we are unable to accommodate your requested dates at ${siteName}.

Booking Details:
Check-in: ${data.checkIn}
Check-out: ${data.checkOut}
Guests: ${data.guests}

Please feel free to reply to this email or contact us on WhatsApp at ${villaPhone} to explore alternative dates.

Warm regards,
${siteName} Team
    `.trim();

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2c2c2c;">
        <h2 style="color: #c9a96e;">Booking Update</h2>
        <p>Dear ${data.name},</p>
        <p>We regret to inform you that we are unable to accommodate your requested dates at ${siteName}.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr><td style="padding: 8px 0; font-weight: bold;">Check-in:</td><td style="padding: 8px 0;">${data.checkIn}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Check-out:</td><td style="padding: 8px 0;">${data.checkOut}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Guests:</td><td style="padding: 8px 0;">${data.guests}</td></tr>
        </table>
        <p style="margin-top: 24px;">Please feel free to reply to this email or contact us on WhatsApp at <a href="https://wa.me/${villaPhone.replace(/\+/g, '').replace(/-/g, '')}" style="color: #c9a96e;">${villaPhone}</a> to explore alternative dates.</p>
        <p style="margin-top: 24px; font-size: 14px; color: #6b6b6b;">Warm regards,<br/>${siteName} Team</p>
      </div>
    `;

    await resend.emails.send({
      from: `${siteName} <${fromEmail}>`,
      to: data.email,
      subject,
      text,
      html,
    });
    return;
  }

  if (data.status !== "confirmed") return;

  const subject = `Your booking at ${siteName} is confirmed`;
  const text = `
Dear ${data.name},

Great news! Your booking at ${siteName} is confirmed.

Booking Details:
Check-in: ${data.checkIn}
Check-out: ${data.checkOut}
Guests: ${data.guests}

Location:
${villaAddress}
Google Maps: ${villaMapsLink}

How to find and enter the house:
${villaEntryNotes}

WiFi:
Network name (SSID): ${villaWifiSsid}
Password: ${villaWifiPassword}

Amenities on request:
- Washing machine
- Iron
Please let us know in advance if you would like to use any of these.

If you have any questions, reply to this email or contact us on WhatsApp at ${villaPhone}.

Looking forward to hosting you!

Warm regards,
${siteName} Team
  `.trim();

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2c2c2c;">
      <h2 style="color: #c9a96e;">Booking Confirmed</h2>
      <p>Dear ${data.name},</p>
      <p>Great news! Your booking at ${siteName} is confirmed.</p>

      <h3 style="margin-top: 24px; font-size: 16px; color: #2c2c2c;">Booking Details</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; font-weight: bold;">Check-in:</td><td style="padding: 8px 0;">${data.checkIn}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Check-out:</td><td style="padding: 8px 0;">${data.checkOut}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Guests:</td><td style="padding: 8px 0;">${data.guests}</td></tr>
      </table>

      <h3 style="margin-top: 24px; font-size: 16px; color: #2c2c2c;">Location</h3>
      <p>${villaAddress}</p>
      <p><a href="${villaMapsLink}" style="color: #c9a96e;">View on Google Maps</a></p>

      <h3 style="margin-top: 24px; font-size: 16px; color: #2c2c2c;">How to find and enter the house</h3>
      <p style="white-space: pre-line;">${villaEntryNotes}</p>

      <h3 style="margin-top: 24px; font-size: 16px; color: #2c2c2c;">WiFi</h3>
      <p><strong>Network name (SSID):</strong> ${villaWifiSsid}</p>
      <p><strong>Password:</strong> ${villaWifiPassword}</p>

      <h3 style="margin-top: 24px; font-size: 16px; color: #2c2c2c;">Amenities available on request</h3>
      <ul>
        <li>Washing machine</li>
        <li>Iron</li>
      </ul>
      <p>Please reply to this email or message us on WhatsApp if you would like to use any of these.</p>

      <p style="margin-top: 24px;">If you have any questions, reply to this email or contact us on WhatsApp at <a href="https://wa.me/${villaPhone.replace(/\+/g, '').replace(/-/g, '')}" style="color: #c9a96e;">${villaPhone}</a>.</p>
      <p style="margin-top: 24px; font-size: 14px; color: #6b6b6b;">Looking forward to hosting you!<br/>${siteName} Team</p>
    </div>
  `;

  await resend.emails.send({
    from: `${siteName} <${fromEmail}>`,
    to: data.email,
    subject,
    text,
    html,
  });
}
