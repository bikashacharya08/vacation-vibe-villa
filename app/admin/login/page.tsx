"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        setError("Invalid credentials");
        return;
      }
      router.push("/admin");
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white rounded-2xl p-8 shadow-lg space-y-6">
        <h1 className="font-display text-2xl text-charcoal text-center">Admin Login</h1>
        {error && (
          <p className="bg-red-50 text-red-600 text-sm text-center rounded-lg px-4 py-2" role="alert">{error}</p>
        )}
        <div>
          <label htmlFor="username" className="sr-only">Username</label>
          <input id="username" type="text" placeholder="Username" required value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-sand focus:outline-none focus:border-gold text-charcoal" />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" type="password" placeholder="Password" required value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-sand focus:outline-none focus:border-gold text-charcoal" />
        </div>
        <button type="submit" disabled={loading}
          className="w-full bg-gold hover:bg-gold/90 text-white py-3 rounded-xl font-semibold transition-all disabled:opacity-50">
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
