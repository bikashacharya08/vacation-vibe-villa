# Vacation Vibe Villa

A world-class, luxury front-end and admin dashboard for **Vacation Vibe Villa**, located in Chitwan, Nepal. The site is designed to mimic the ultra-premium aesthetic of top-tier 5-star hotels (like The Beverly Hills Hotel), featuring cinematic scroll animations, magazine-style layouts, a sophisticated booking experience, and an integrated Progressive Web App (PWA) field guide to local wildlife.

## 🌟 Features

- **Luxury Aesthetic:** Cream, Gold, and Charcoal palette with cinematic "Reveal" scroll animations across the entire site.
- **Concierge Booking:** Minimalist, high-end booking and contact forms that send email notifications directly to the admin via Resend, and encourage immediate WhatsApp contact.
- **Admin Dashboard:** Secure, JWT-authenticated dashboard (`/admin`) to view, manage, and delete booking requests and contact messages.
- **Digital Bird Book:** An integrated, fully offline-capable PWA field guide to the birds of Chitwan National Park (`/birds_of_cnp/index.html`), installable directly to a mobile device.
- **Performance Optimized:** Built on Next.js 15 App Router with Tailwind CSS v4, utilizing heavily optimized React Server Components and Edge-friendly static rendering where applicable.

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Database:** PostgreSQL (hosted on [Neon](https://neon.tech))
- **ORM:** [Prisma](https://www.prisma.io/)
- **Email:** [Resend](https://resend.com/)
- **Deployment:** [Vercel](https://vercel.com)

## 📂 Project Structure

```text
├── app/
│   ├── api/             # Next.js API Routes (Bookings, Contact, Admin Auth)
│   ├── admin/           # Secure Admin Dashboard & Login pages
│   ├── globals.css      # Core luxury design system variables & animations
│   ├── layout.tsx       # Root layout and metadata
│   └── page.tsx         # Main single-page application (Home)
├── components/          # Reusable UI Components
│   ├── Reveal.tsx       # Core scroll-animation wrapper component
│   ├── Hero.tsx         # Cinematic Hero with text contrast optimization
│   ├── About.tsx        # Features the Namaste intro and Bird Book card
│   ├── Booking.tsx      # Concierge-style booking form
│   └── Contact.tsx      # Concierge-style contact form
├── lib/
│   ├── db.ts            # Prisma database client singleton
│   ├── email.ts         # Resend email notification logic
│   └── auth.ts          # JWT authentication helpers
├── prisma/
│   └── schema.prisma    # Database schema for Booking and Contact models
└── public/
    ├── images/          # Optimized static images for the site
    └── birds_of_cnp/    # Standalone Digital Bird Book PWA
```

## 🚀 Getting Started Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables (`.env`):**
   ```env
   DATABASE_URL="your_neon_postgres_url"
   JWT_SECRET="your_secure_random_string"
   RESEND_API_KEY="your_resend_api_key"
   ADMIN_EMAIL="admin_login_email"
   ADMIN_PASSWORD="admin_login_password"
   ```

3. **Database Setup:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

## ☁️ Deployment

The site is configured for seamless deployment on **Vercel**. Every push to the `master` branch automatically triggers a production build.
Ensure all Environment Variables are added to the Vercel project settings before deploying.
