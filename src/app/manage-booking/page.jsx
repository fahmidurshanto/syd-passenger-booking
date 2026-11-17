"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ManageBookingPage() {
  const router = useRouter();
  const [bookingNumber, setBookingNumber] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [foundBooking, setFoundBooking] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setFoundBooking(null);

    const ref = bookingNumber.trim();
    const lName = lastName.trim();

    if (!ref || !lName) {
      setError("Please enter both your Booking Number and Last Name.");
      return;
    }

    setLoading(true);

    try {
      // Query backend for booking
      const res = await fetch(`http://localhost:5000/api/bookings/${encodeURIComponent(ref)}`);
      
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("No booking found with this booking number. Please check and try again.");
        }
        throw new Error("Unable to look up booking at this time. Please contact support.");
      }

      const data = await res.json();
      const booking = data.booking || data;

      // Verify last name matches passenger or customer name
      const passengerName = (booking.passengerName || booking.customerName || booking.fullName || "").toLowerCase();
      if (passengerName && !passengerName.includes(lName.toLowerCase())) {
        throw new Error("The last name entered does not match our records for this booking number.");
      }

      setFoundBooking(booking);
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07172f] text-white flex flex-col justify-between selection:bg-[#bea166] selection:text-white">
      {/* Top Header with Golden Divider & SYD Logo */}
      <header className="border-b border-[#bea166]/40 bg-[#061226]/80 backdrop-blur-sm px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3.5 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0">
              <Image
                src="/images/syd-gold-logo.png"
                alt="SYD Logo"
                fill
                priority
                className="object-contain drop-shadow"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-lg sm:text-xl font-serif tracking-[0.22em] text-[#bea166] font-bold uppercase leading-none">
                SYD
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.3em] text-zinc-300 uppercase font-light mt-1 leading-none">
                Chauffeur Service
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="text-xs sm:text-sm font-medium text-gray-300 hover:text-[#bea166] transition flex items-center space-x-1"
          >
            <span>&larr;</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-lg bg-[#0e1d33] border border-[#1b3152] rounded-2xl shadow-2xl p-7 sm:p-10 space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
              Manage your booking
            </h1>

            {/* Feature Bullets */}
            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-[#bea166] text-base leading-none">•</span>
                <span>Track your vehicle</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#bea166] text-base leading-none">•</span>
                <span>Get your chauffeur&apos;s details</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#bea166] text-base leading-none">•</span>
                <span>Message your driver</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#bea166] text-base leading-none">•</span>
                <span>Modify your booking</span>
              </li>
            </ul>

            <p className="mt-4 text-xs sm:text-sm text-gray-400">
              Enter your <strong className="text-white font-semibold">booking number</strong> and the{" "}
              <strong className="text-white font-semibold">last name</strong> it was booked under.
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="space-y-4">
            {error && (
              <div className="p-3.5 rounded-lg bg-red-950/60 border border-red-500/50 text-red-200 text-xs sm:text-sm">
                {error}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="block text-xs uppercase font-bold tracking-wider text-gray-300">
                Booking Number
              </label>
              <input
                type="text"
                value={bookingNumber}
                onChange={(e) => setBookingNumber(e.target.value)}
                placeholder="e.g. 9012845 or Hughes-XXXXXX"
                className="w-full px-4 py-3 rounded-lg bg-[#0a1626] border border-[#1c3254] text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#bea166] transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs uppercase font-bold tracking-wider text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="As it appears on the booking"
                className="w-full px-4 py-3 rounded-lg bg-[#0a1626] border border-[#1c3254] text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#bea166] transition"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-lg bg-[#bea166] hover:bg-[#a88d55] disabled:opacity-50 text-black font-bold uppercase tracking-wider text-xs sm:text-sm transition-all shadow-lg active:scale-95 cursor-pointer flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Searching...</span>
                  </>
                ) : (
                  <span>FIND MY BOOKING</span>
                )}
              </button>
            </div>
          </form>

          {/* Found Booking Details Modal / Inline View */}
          {foundBooking && (
            <div className="p-4 rounded-xl bg-[#091524] border border-[#bea166]/40 text-xs sm:text-sm space-y-2 mt-4 animate-in fade-in">
              <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                <span className="font-semibold text-[#bea166]">
                  Booking Reference: {foundBooking.bookingNumber || foundBooking.reference}
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[11px] uppercase font-bold">
                  {foundBooking.status || "Confirmed"}
                </span>
              </div>
              <p><strong className="text-gray-300">Passenger:</strong> {foundBooking.passengerName || foundBooking.customerName || "N/A"}</p>
              <p><strong className="text-gray-300">Vehicle:</strong> {foundBooking.vehicleType || "Executive Chauffeur"}</p>
              <p><strong className="text-gray-300">Pickup:</strong> {foundBooking.pickupAddress || foundBooking.pickupLocation || "N/A"}</p>
              <p><strong className="text-gray-300">Dropoff:</strong> {foundBooking.dropoffAddress || foundBooking.dropoffLocation || "N/A"}</p>
              <p><strong className="text-gray-300">Date & Time:</strong> {foundBooking.pickupDateTime ? new Date(foundBooking.pickupDateTime).toLocaleString() : "Scheduled"}</p>
            </div>
          )}

          {/* Footer Contact Help */}
          <div className="text-center pt-3 border-t border-[#1b3152] text-xs text-gray-400">
            <p>
              Can&apos;t find your booking number? Email{" "}
              <a href="mailto:info@sydairporttransfer.com.au" className="text-white hover:text-[#bea166] underline">
                info@sydairporttransfer.com.au
              </a>{" "}
              or call{" "}
              <a href="tel:+61404410000" className="text-white hover:text-[#bea166] underline font-semibold">
                +61 404 410 000
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Discreet bottom footer */}
      <footer className="text-center py-4 text-[11px] text-gray-500 border-t border-[#1b3152]/60">
        © 2026 SYD Airport Transfer & Chauffeur Services. All rights reserved.
      </footer>
    </div>
  );
}
