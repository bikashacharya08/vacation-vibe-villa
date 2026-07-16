"use client";

export default function AdminError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="text-center max-w-md">
        <h1 className="font-display text-3xl text-charcoal mb-4">Dashboard error</h1>
        <p className="text-stone mb-8">Something went wrong loading the dashboard.</p>
        <button onClick={reset}
          className="bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-full font-semibold transition-all">
          Try again
        </button>
      </div>
    </div>
  );
}
