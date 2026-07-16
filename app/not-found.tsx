import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="text-center max-w-md">
        <p className="text-gold font-display text-8xl mb-4">404</p>
        <h1 className="font-display text-3xl text-charcoal mb-4">Page not found</h1>
        <p className="text-stone mb-8">The page you&rsquo;re looking for doesn&rsquo;t exist.</p>
        <Link href="/"
          className="inline-block bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-full font-semibold transition-all">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
