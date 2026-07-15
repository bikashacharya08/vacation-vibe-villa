"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
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
      const { token } = await res.json();
      localStorage.setItem("admin_token", token);
      router.push("/admin");
    } catch {
      setError("Connection error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white rounded-2xl p-8 shadow-lg space-y-6">
        <h1 className="font-display text-2xl text-charcoal text-center">Admin Login</h1>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <input type="text" placeholder="Username" required value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-sand focus:outline-none focus:border-gold text-charcoal" />
        <input type="password" placeholder="Password" required value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-sand focus:outline-none focus:border-gold text-charcoal" />
        <button type="submit"
          className="w-full bg-gold hover:bg-gold/90 text-white py-3 rounded-xl font-semibold transition-all">
          Sign In
        </button>
      </form>
    </div>
  );
}
