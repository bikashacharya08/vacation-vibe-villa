"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Message = { id: number; firstName: string; lastName: string; email: string; message: string; read: boolean; createdAt: string };
type Booking = { id: number; name: string; email: string; phone: string; checkIn: string; checkOut: string; guests: number; message: string; status: string; createdAt: string };

export default function AdminDashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [tab, setTab] = useState<"messages" | "bookings">("messages");
  const [authed, setAuthed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) { router.push("/admin/login"); return; }

    const headers = { Authorization: `Bearer ${token}` };
    Promise.all([
      fetch("/api/admin/messages", { headers }).then((r) => { if (!r.ok) throw Error(); return r.json(); }),
      fetch("/api/admin/bookings", { headers }).then((r) => { if (!r.ok) throw Error(); return r.json(); }),
    ])
      .then(([msgs, bks]) => { setMessages(msgs); setBookings(bks); setAuthed(true); })
      .catch(() => { localStorage.removeItem("admin_token"); router.push("/admin/login"); });
  }, [router]);

  const markRead = async (id: number) => {
    const token = localStorage.getItem("admin_token");
    await fetch("/api/admin/messages", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id }),
    });
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read: true } : m)));
  };

  const updateStatus = async (id: number, status: string) => {
    const token = localStorage.getItem("admin_token");
    await fetch("/api/admin/bookings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id, status }),
    });
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
  };

  const logout = () => {
    localStorage.removeItem("admin_token");
    router.push("/admin/login");
  };

  if (!authed) return null;

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-white border-b border-sand px-6 py-4 flex items-center justify-between">
        <h1 className="font-display text-xl text-charcoal">Admin Dashboard</h1>
        <div className="flex gap-4 items-center">
          <button onClick={() => setTab("messages")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === "messages" ? "bg-gold text-white" : "text-stone hover:text-charcoal"}`}>
            Messages ({messages.length})
          </button>
          <button onClick={() => setTab("bookings")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === "bookings" ? "bg-gold text-white" : "text-stone hover:text-charcoal"}`}>
            Bookings ({bookings.length})
          </button>
          <button onClick={logout} className="text-sm text-stone hover:text-red-500 transition-colors">Logout</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {tab === "messages" && (
          <div className="space-y-4">
            {messages.length === 0 && <p className="text-stone text-center py-12">No messages yet.</p>}
            {messages.map((msg) => (
              <div key={msg.id} className={`bg-white rounded-xl p-6 shadow-sm border-l-4 ${msg.read ? "border-transparent" : "border-gold"}`}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-charcoal">{msg.firstName} {msg.lastName}</p>
                    <a href={`mailto:${msg.email}`} className="text-sm text-gold hover:underline">{msg.email}</a>
                  </div>
                  <span className="text-xs text-stone">{new Date(msg.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="text-stone mt-3 whitespace-pre-wrap">{msg.message}</p>
                {!msg.read && (
                  <button onClick={() => markRead(msg.id)}
                    className="mt-3 text-xs text-gold hover:underline">Mark as read</button>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "bookings" && (
          <div className="space-y-4">
            {bookings.length === 0 && <p className="text-stone text-center py-12">No bookings yet.</p>}
            {bookings.map((b) => (
              <div key={b.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-charcoal">{b.name}</p>
                    <p className="text-sm text-stone">{b.email} {b.phone && `· ${b.phone}`}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    b.status === "confirmed" ? "bg-green-100 text-green-700" :
                    b.status === "cancelled" ? "bg-red-100 text-red-700" :
                    "bg-amber-100 text-amber-700"}`}>
                    {b.status}
                  </span>
                </div>
                <div className="grid sm:grid-cols-4 gap-3 text-sm text-stone mb-3">
                  <div><span className="font-medium text-charcoal">Check-in:</span> {b.checkIn}</div>
                  <div><span className="font-medium text-charcoal">Check-out:</span> {b.checkOut}</div>
                  <div><span className="font-medium text-charcoal">Guests:</span> {b.guests}</div>
                  <div><span className="font-medium text-charcoal">Received:</span> {new Date(b.createdAt).toLocaleDateString()}</div>
                </div>
                {b.message && <p className="text-stone text-sm mb-3">{b.message}</p>}
                <div className="flex gap-2">
                  {b.status === "pending" && (
                    <>
                      <button onClick={() => updateStatus(b.id, "confirmed")}
                        className="px-4 py-1.5 bg-green-600 text-white rounded-lg text-xs font-medium hover:bg-green-700 transition-colors">Confirm</button>
                      <button onClick={() => updateStatus(b.id, "cancelled")}
                        className="px-4 py-1.5 bg-red-500 text-white rounded-lg text-xs font-medium hover:bg-red-600 transition-colors">Decline</button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
