"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

type Message = { id: number; firstName: string; lastName: string; email: string; message: string; read: boolean; createdAt: string };
type Booking = { id: number; name: string; email: string; phone: string; checkIn: string; checkOut: string; guests: number; message: string; status: string; createdAt: string };

function Spinner() {
  return (
    <div className="flex items-center justify-center py-16" role="status">
      <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default function AdminDashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [tab, setTab] = useState<"messages" | "bookings">("messages");
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [actionMsg, setActionMsg] = useState<string | null>(null);
  const router = useRouter();

  const fetchData = useCallback(async () => {
    try {
      const [msgs, bks] = await Promise.all([
        fetch("/api/admin/messages").then((r) => { if (r.status === 401) throw new Error("unauth"); return r.json(); }),
        fetch("/api/admin/bookings").then((r) => { if (r.status === 401) throw new Error("unauth"); return r.json(); }),
      ]);
      setMessages(msgs);
      setBookings(bks);
      setAuthed(true);
    } catch {
      setAuthed(false);
      router.push("/admin/login");
    }
  }, [router]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const markRead = async (id: number) => {
    await fetch("/api/admin/messages", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read: true } : m)));
  };

  const updateStatus = async (id: number, status: string) => {
    await fetch("/api/admin/bookings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
    setActionMsg(`Booking #${id} ${status}`);
    setTimeout(() => setActionMsg(null), 3000);
  };

  const deleteMessage = async (id: number) => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    const res = await fetch(`/api/admin/messages?id=${id}`, { method: "DELETE" });
    if (res.ok) {
      setMessages((prev) => prev.filter((m) => m.id !== id));
      setActionMsg(`Message deleted`);
      setTimeout(() => setActionMsg(null), 3000);
    }
  };

  const deleteBooking = async (id: number) => {
    if (!confirm("Are you sure you want to delete this booking?")) return;
    const res = await fetch(`/api/admin/bookings?id=${id}`, { method: "DELETE" });
    if (res.ok) {
      setBookings((prev) => prev.filter((b) => b.id !== id));
      setActionMsg(`Booking deleted`);
      setTimeout(() => setActionMsg(null), 3000);
    }
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  if (authed === null) return <Spinner />;
  if (!authed) return null;

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-white border-b border-sand px-6 py-4 flex items-center justify-between">
        <h1 className="font-display text-xl text-charcoal">Admin Dashboard</h1>
        <div className="flex gap-4 items-center">
          <button onClick={() => setTab("messages")}
            aria-pressed={tab === "messages"}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === "messages" ? "bg-gold text-white" : "text-stone hover:text-charcoal"}`}>
            Messages ({messages.length})
          </button>
          <button onClick={() => setTab("bookings")}
            aria-pressed={tab === "bookings"}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === "bookings" ? "bg-gold text-white" : "text-stone hover:text-charcoal"}`}>
            Bookings ({bookings.length})
          </button>
          <button onClick={logout} className="text-sm text-stone hover:text-red-500 transition-colors">Logout</button>
        </div>
      </header>

      {actionMsg && (
        <div className="max-w-6xl mx-auto px-6 pt-4" role="status">
          <p className="bg-green-50 text-green-700 text-sm rounded-lg px-4 py-2">{actionMsg}</p>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-sand">
            <p className="text-sm text-stone mb-1">Total Bookings</p>
            <p className="text-2xl font-display text-charcoal">{bookings.length}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-sand">
            <p className="text-sm text-stone mb-1">Pending Bookings</p>
            <p className="text-2xl font-display text-amber-600">{bookings.filter((b) => b.status === "pending").length}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-sand">
            <p className="text-sm text-stone mb-1">Total Messages</p>
            <p className="text-2xl font-display text-charcoal">{messages.length}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-sand">
            <p className="text-sm text-stone mb-1">Unread Messages</p>
            <p className="text-2xl font-display text-gold">{messages.filter((m) => !m.read).length}</p>
          </div>
        </div>

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
                <div className="mt-4 flex items-center gap-4">
                  {!msg.read && (
                    <button onClick={() => markRead(msg.id)}
                      className="text-xs text-gold hover:underline font-medium">Mark as read</button>
                  )}
                  <button onClick={() => deleteMessage(msg.id)}
                    className="text-xs text-red-500 hover:underline font-medium">Delete message</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "bookings" && (
          <div className="space-y-4">
            {bookings.length === 0 && <p className="text-stone text-center py-12">No bookings yet.</p>}
            {bookings.map((b) => (
              <div key={b.id} className="bg-white rounded-xl p-6 shadow-sm border border-sand/50 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-charcoal text-lg">{b.name}</p>
                    <p className="text-sm text-stone">{b.email} {b.phone && `· ${b.phone}`}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${
                    b.status === "confirmed" ? "bg-green-100 text-green-700" :
                    b.status === "cancelled" ? "bg-red-100 text-red-700" :
                    "bg-amber-100 text-amber-700"}`}>
                    {b.status}
                  </span>
                </div>
                <div className="bg-sand/30 rounded-lg p-4 grid sm:grid-cols-4 gap-3 text-sm text-stone mb-4">
                  <div><span className="font-medium text-charcoal block mb-0.5">Check-in</span> <time>{b.checkIn}</time></div>
                  <div><span className="font-medium text-charcoal block mb-0.5">Check-out</span> <time>{b.checkOut}</time></div>
                  <div><span className="font-medium text-charcoal block mb-0.5">Guests</span> {b.guests}</div>
                  <div><span className="font-medium text-charcoal block mb-0.5">Received</span> {new Date(b.createdAt).toLocaleDateString()}</div>
                </div>
                {b.message && <p className="text-stone text-sm mb-4 italic">"{b.message}"</p>}
                
                <div className="flex gap-2 flex-wrap items-center">
                  <a href={`mailto:${b.email}?subject=Vacation Vibe Villa - Booking Status`}
                    className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium hover:bg-blue-100 transition-colors">
                    Email Guest
                  </a>
                  {b.status === "pending" && (
                    <>
                      <button onClick={() => updateStatus(b.id, "confirmed")}
                        className="px-4 py-1.5 bg-green-600 text-white rounded-lg text-xs font-medium hover:bg-green-700 transition-colors shadow-sm">Confirm</button>
                      <button onClick={() => updateStatus(b.id, "cancelled")}
                        className="px-4 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-medium hover:bg-red-100 transition-colors">Decline</button>
                    </>
                  )}
                  <button onClick={() => deleteBooking(b.id)}
                    className="ml-auto px-4 py-1.5 border border-red-200 text-red-500 rounded-lg text-xs font-medium hover:bg-red-50 transition-colors">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
