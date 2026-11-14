"use client";

import { useState } from "react";

export default function QuickBookingWidget({ onClose, isModal = false }) {
  const [bookingType, setBookingType] = useState("transfer"); // transfer, hourly, return
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [vehicle, setVehicle] = useState("executive");
  const [passengers, setPassengers] = useState(2);
  const [luggage, setLuggage] = useState(2);
  const [hours, setHours] = useState(3);
  const [quoteCalculated, setQuoteCalculated] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [activeTab, setActiveTab] = useState("book"); // book, track

  // Tracking state
  const [trackRef, setTrackRef] = useState("");
  const [trackResult, setTrackResult] = useState(null);

  const vehicleRates = {
    executive: {
      name: "Executive Sedan",
      example: "Mercedes E-Class / BMW 5 Series / Genesis G80",
      base: 125,
      hourly: 110,
      capacity: "1-3 Passengers • 2 Bags",
    },
    premium: {
      name: "Premium Sedan",
      example: "Mercedes-Benz S-Class / BMW 7 Series / Audi A8",
      base: 185,
      hourly: 155,
      capacity: "1-3 Passengers • 2 Bags",
    },
    suv: {
      name: "Luxury Premium SUV",
      example: "Audi Q7 / BMW X5 / Lexus RX",
      base: 165,
      hourly: 140,
      capacity: "1-4 Passengers • 4 Bags",
    },
    peopleMover: {
      name: "People Mover (Van)",
      example: "Mercedes-Benz V-Class Luxury Chauffeur Van",
      base: 195,
      hourly: 165,
      capacity: "1-6 Passengers • 6 Bags",
    },
    minibus: {
      name: "Luxury Minibus",
      example: "Mercedes Sprinter Luxury Executive Coach",
      base: 280,
      hourly: 220,
      capacity: "7-14 Passengers • 14 Bags",
    },
  };

  const calculateEstimate = () => {
    const rate = vehicleRates[vehicle] || vehicleRates.executive;
    if (bookingType === "hourly") {
      return rate.hourly * Number(hours);
    }
    const mult = bookingType === "return" ? 1.9 : 1.0;
    return Math.round(rate.base * mult);
  };

  const handleGetQuote = (e) => {
    e.preventDefault();
    setQuoteCalculated(true);
  };

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (!trackRef) return;
    setTrackResult({
      ref: trackRef.toUpperCase(),
      status: "Chauffeur Dispatched & On Route",
      driver: "David Miller (5.0 ★)",
      car: "Mercedes-Benz E-Class (Plate: NSW • HGH-882)",
      eta: "14 minutes",
      location: "Approaching Airport Boulevard / Terminal 1",
    });
  };

  return (
    <div className={`bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden ${isModal ? "max-w-2xl w-full" : "w-full"}`}>
      {/* Top Header Tabs */}
      <div className="bg-[#152442] px-6 py-4 flex items-center justify-between border-b border-[#22365e]">
        <div className="flex space-x-6">
          <button
            onClick={() => setActiveTab("book")}
            className={`text-sm font-semibold tracking-wide uppercase transition-colors pb-1 border-b-2 ${activeTab === "book"
                ? "text-[#bea166] border-[#bea166]"
                : "text-gray-400 border-transparent hover:text-white"
              }`}
          >
            Chauffeur Booking & Quote
          </button>
          <button
            onClick={() => setActiveTab("track")}
            className={`text-sm font-semibold tracking-wide uppercase transition-colors pb-1 border-b-2 ${activeTab === "track"
                ? "text-[#bea166] border-[#bea166]"
                : "text-gray-400 border-transparent hover:text-white"
              }`}
          >
            Track My Vehicle
          </button>
        </div>

        {isModal && onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-[#22365e] transition"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {activeTab === "book" ? (
        <div className="p-6">
          {!bookingConfirmed ? (
            <form onSubmit={handleGetQuote} className="space-y-4">
              {/* Type Switcher */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-gray-100 rounded-lg">
                <button
                  type="button"
                  onClick={() => setBookingType("transfer")}
                  className={`py-1.5 text-xs sm:text-sm font-medium rounded-md transition ${bookingType === "transfer"
                      ? "bg-white text-[#152442] shadow-sm font-semibold"
                      : "text-gray-600 hover:text-[#152442]"
                    }`}
                >
                  One Way Transfer
                </button>
                <button
                  type="button"
                  onClick={() => setBookingType("return")}
                  className={`py-1.5 text-xs sm:text-sm font-medium rounded-md transition ${bookingType === "return"
                      ? "bg-white text-[#152442] shadow-sm font-semibold"
                      : "text-gray-600 hover:text-[#152442]"
                    }`}
                >
                  Return Journey
                </button>
                <button
                  type="button"
                  onClick={() => setBookingType("hourly")}
                  className={`py-1.5 text-xs sm:text-sm font-medium rounded-md transition ${bookingType === "hourly"
                      ? "bg-white text-[#152442] shadow-sm font-semibold"
                      : "text-gray-600 hover:text-[#152442]"
                    }`}
                >
                  By The Hour / Tour
                </button>
              </div>

              {/* Pickup & Dropoff Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Pick-up Location
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="3" strokeWidth="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v3m0 14v3M2 12h3m14 0h3" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sydney Airport T1 International"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#bea166] focus:border-[#bea166] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    {bookingType === "hourly" ? "Primary Destination / Area" : "Drop-off Destination"}
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      required
                      placeholder={bookingType === "hourly" ? "e.g. Sydney CBD & North Shore" : "e.g. Four Seasons Hotel Sydney"}
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#bea166] focus:border-[#bea166] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Date, Time & Hours */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Pick-up Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#bea166] focus:border-[#bea166] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Pick-up Time
                  </label>
                  <input
                    type="time"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#bea166] focus:border-[#bea166] outline-none"
                  />
                </div>

                {bookingType === "hourly" ? (
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Hire Duration
                    </label>
                    <select
                      value={hours}
                      onChange={(e) => setHours(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#bea166] focus:border-[#bea166] outline-none"
                    >
                      <option value="2">2 Hours Min</option>
                      <option value="3">3 Hours</option>
                      <option value="4">4 Hours (Half Day)</option>
                      <option value="6">6 Hours</option>
                      <option value="8">8 Hours (Full Day)</option>
                      <option value="10">10 Hours</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Passengers & Luggage
                    </label>
                    <div className="flex space-x-2">
                      <select
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        className="w-1/2 px-2 py-2 text-sm border border-gray-300 rounded-md outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                          <option key={n} value={n}>
                            {n} Pax
                          </option>
                        ))}
                      </select>
                      <select
                        value={luggage}
                        onChange={(e) => setLuggage(e.target.value)}
                        className="w-1/2 px-2 py-2 text-sm border border-gray-300 rounded-md outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6, "7+"].map((n) => (
                          <option key={n} value={n}>
                            {n} Bags
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Vehicle Selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Select Fleet Vehicle Class
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {Object.entries(vehicleRates).map(([key, item]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setVehicle(key)}
                      className={`p-2.5 text-left border rounded-lg transition-all ${vehicle === key
                          ? "border-[#bea166] bg-[#bea166]/10 text-[#152442] shadow-sm font-semibold"
                          : "border-gray-200 hover:border-gray-400 bg-white"
                        }`}
                    >
                      <div className="text-xs font-bold text-[#152442]">{item.name}</div>
                      <div className="text-[10px] text-gray-500 truncate">{item.example.split("/")[0]}</div>
                      <div className="text-[10px] text-[#bea166] font-medium mt-0.5">{item.capacity}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quote Result Box */}
              {quoteCalculated && (
                <div className="mt-4 p-4 bg-gray-50 border border-[#bea166]/40 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-semibold">Estimated Fixed Quote</div>
                    <div className="text-2xl font-bold text-[#152442]">
                      AUD ${calculateEstimate()}
                      <span className="text-xs font-normal text-gray-500 ml-1.5">(All Inclusive, No Surge)</span>
                    </div>
                    <div className="text-xs text-green-700 font-medium">
                      ✓ Complimentary waiting time • Real-time flight tracking • Uniformed chauffeur
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setBookingConfirmed(true)}
                    className="w-full sm:w-auto bg-[#bea166] hover:bg-[#a88d55] text-white px-6 py-2.5 rounded font-semibold text-xs tracking-wider uppercase transition shadow"
                  >
                    Confirm & Reserve
                  </button>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-between">
                <a
                  href="tel:+61404410000"
                  className="text-xs text-gray-600 hover:text-[#152442] flex items-center"
                >
                  <svg className="w-3.5 h-3.5 mr-1 text-[#bea166]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                  </svg>
                  Prefer to call? +61 404 410 000
                </a>

                <button
                  type="submit"
                  className="bg-[#2a4783] hover:bg-[#152442] text-white px-6 py-2.5 rounded text-xs uppercase font-semibold tracking-wider transition shadow"
                >
                  {quoteCalculated ? "Recalculate Quote" : "Get Instant Quote"}
                </button>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#152442]">Booking Request Received!</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Your reservation reference is <strong className="text-[#bea166]">HGH-{Math.floor(100000 + Math.random() * 900000)}</strong>.
                Our Sydney dispatch desk will monitor your flight details and confirm via SMS and email.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setBookingConfirmed(false);
                    setQuoteCalculated(false);
                  }}
                  className="text-xs font-semibold text-[#2a4783] hover:underline"
                >
                  Make Another Booking
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Track Vehicle Tab */
        <div className="p-6">
          <form onSubmit={handleTrackSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                Booking Reference or Phone Number
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="e.g. HGH-948271 or 0412 345 678"
                  value={trackRef}
                  onChange={(e) => setTrackRef(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#bea166] focus:border-[#bea166] outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#bea166] hover:bg-[#a88d55] text-white px-5 py-2 rounded text-xs font-semibold uppercase tracking-wider"
                >
                  Locate
                </button>
              </div>
            </div>

            {trackResult && (
              <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg space-y-2 text-left animate-fadeIn">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-xs font-semibold text-gray-500">Booking {trackResult.ref}</span>
                  <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded font-semibold">
                    {trackResult.status}
                  </span>
                </div>
                <div className="text-sm"><strong>Chauffeur:</strong> {trackResult.driver}</div>
                <div className="text-sm"><strong>Vehicle:</strong> {trackResult.car}</div>
                <div className="text-sm"><strong>Current Position:</strong> {trackResult.location}</div>
                <div className="text-sm text-[#2a4783] font-bold">Estimated Arrival: {trackResult.eta}</div>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}

