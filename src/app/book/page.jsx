"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { bookingPageData } from "@/utils/bookingPageData";
import { useLocationAutocomplete, POPULAR_AU_HUBS } from "@/utils/useLocationAutocomplete";

// Dynamic import with SSR disabled for Leaflet map component
const BookingMiniMap = dynamic(
  () => import("@/components/booking/BookingMiniMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[160px] bg-slate-100 flex items-center justify-center text-xs text-slate-400">
        Loading route map...
      </div>
    ),
  }
);

export default function BookPage() {
  const { header, steps, hero, benefits, tripTypes, flyingNotice, footerSupport } =
    bookingPageData;

  // Tabs & Options
  const [activeService, setActiveService] = useState("transfer"); // 'transfer' | 'hourly'
  const [activeTripType, setActiveTripType] = useState("one-way");

  // Pick-up State
  const [pickupInput, setPickupInput] = useState("");
  const [selectedPickup, setSelectedPickup] = useState(null); // { name, subtext, lat, lng }
  const [showPickupDropdown, setShowPickupDropdown] = useState(false);

  // Drop-off State
  const [dropoffInput, setDropoffInput] = useState("");
  const [selectedDropoff, setSelectedDropoff] = useState(null);
  const [showDropoffDropdown, setShowDropoffDropdown] = useState(false);

  // Middle Stop (Add a stop)
  const [stops, setStops] = useState([]); // array of { id, text, selected }

  // Date, Time, Passengers
  const [pickupDate, setPickupDate] = useState("2026-11-14");
  const [pickupTime, setPickupTime] = useState("09:00");
  const [passengers, setPassengers] = useState(1);
  const [flightNumber, setFlightNumber] = useState("");

  const pickupContainerRef = useRef(null);
  const dropoffContainerRef = useRef(null);

  // Autocomplete Hooks
  const { suggestions: pickupSuggestions, isLoading: isPickupLoading } =
    useLocationAutocomplete(pickupInput);
  const { suggestions: dropoffSuggestions, isLoading: isDropoffLoading } =
    useLocationAutocomplete(dropoffInput);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        pickupContainerRef.current &&
        !pickupContainerRef.current.contains(event.target)
      ) {
        setShowPickupDropdown(false);
      }
      if (
        dropoffContainerRef.current &&
        !dropoffContainerRef.current.contains(event.target)
      ) {
        setShowDropoffDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Quick Date select
  const handleDateQuickSelect = (type) => {
    const d = new Date();
    if (type === "tomorrow") d.setDate(d.getDate() + 1);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    setPickupDate(`${yyyy}-${mm}-${dd}`);
  };

  // Swap Locations
  const handleSwap = () => {
    const tempP = selectedPickup;
    const tempPText = pickupInput;
    setSelectedPickup(selectedDropoff);
    setPickupInput(dropoffInput);
    setSelectedDropoff(tempP);
    setDropoffInput(tempPText);
  };

  // Start Over
  const handleStartOver = () => {
    setSelectedPickup(null);
    setPickupInput("");
    setSelectedDropoff(null);
    setDropoffInput("");
    setStops([]);
    setFlightNumber("");
    setShowPickupDropdown(false);
    setShowDropoffDropdown(false);
  };

  // Select Item Handler
  const handleSelectPickupItem = (item) => {
    setSelectedPickup(item);
    setPickupInput(item.name + (item.subtext ? ` — ${item.subtext}` : ""));
    setShowPickupDropdown(false);
  };

  const handleSelectDropoffItem = (item) => {
    setSelectedDropoff(item);
    setDropoffInput(item.name + (item.subtext ? `, ${item.subtext}` : ""));
    setShowDropoffDropdown(false);
  };

  // Middle stop handlers
  const handleAddStop = () => {
    if (stops.length < 3) {
      setStops([...stops, { id: Date.now(), text: "" }]);
    }
  };

  const handleRemoveStop = (id) => {
    setStops(stops.filter((s) => s.id !== id));
  };

  const hasBothLocations =
    selectedPickup?.lat != null && selectedDropoff?.lat != null;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800">
      {/* 1. Dark Header */}
      <header className="bg-[#0c1938] text-white border-b border-[#1b2a52] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-11 w-11 rounded-full overflow-hidden shrink-0 group-hover:scale-105 transition-transform bg-white/5">
              <Image
                src="/logo.png"
                alt="SYD Airport Transfer Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm sm:text-base font-serif tracking-[0.2em] text-[#bea166] font-bold uppercase leading-none">
                SYD Airport
              </span>
              <span className="text-sm sm:text-base font-serif tracking-[0.2em] text-white font-bold uppercase leading-none mt-1">
                Transfer
              </span>
              <span className="text-[7.5px] sm:text-[8.5px] tracking-[0.32em] text-zinc-300 uppercase font-light mt-1.5 leading-none">
                Chauffeur Services
              </span>
            </div>
          </Link>

          {/* Stepper Progress */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-medium">
            {steps.map((s, idx) => (
              <div
                key={s.num}
                className={`flex items-center space-x-2 ${
                  s.active ? "text-white font-semibold" : "text-slate-400"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${
                    s.active
                      ? "border-white bg-transparent text-white"
                      : "border-slate-500 text-slate-400"
                  }`}
                >
                  {s.num}
                </span>
                <span>{s.label}</span>
                {idx < steps.length - 1 && (
                  <span className="text-slate-600 ml-4">›</span>
                )}
              </div>
            ))}
          </div>

          {/* Right Help & Login */}
          <div className="flex items-center space-x-4 text-xs">
            <div className="hidden sm:flex items-center space-x-2 text-slate-300">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <a href={header.phoneHref} className="hover:text-white font-semibold text-white">
                {header.phone}
              </a>
            </div>
            <a
              href={header.loginHref}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded border border-slate-600 hover:border-slate-400 text-slate-200 hover:text-white text-xs font-medium transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{header.loginText}</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative bg-[#0c1938] text-white overflow-hidden pb-32 sm:pb-36 lg:pb-44">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-35 lg:opacity-85 pointer-events-none">
          <Image
            src="/images/Hughes_banner.png"
            alt="Chauffeur Welcoming Passenger"
            fill
            priority
            className="object-cover object-center lg:object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1938] via-[#0c1938]/70 lg:via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1938] via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
              {hero.headline}
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Main Floating Booking Layout */}
      <main className="relative -mt-24 sm:-mt-28 lg:-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Card (7 cols) */}
          <div className="lg:col-span-7">
            {/* Top Tabs */}
            <div className="flex items-center space-x-1 mb-0">
              <button
                type="button"
                onClick={() => setActiveService("transfer")}
                className={`flex items-center space-x-2 px-6 py-3.5 rounded-t-xl font-semibold text-xs tracking-wider transition-all cursor-pointer ${
                  activeService === "transfer"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "bg-[#16274e] text-slate-300 hover:text-white"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <span>Transfer</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveService("hourly")}
                className={`flex items-center space-x-2 px-6 py-3.5 rounded-t-xl font-semibold text-xs tracking-wider transition-all cursor-pointer ${
                  activeService === "hourly"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "bg-[#16274e] text-slate-300 hover:text-white"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>By the hour</span>
              </button>
            </div>

            {/* Main Form Body */}
            <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8 space-y-5">
              {/* Trip Types: One way / Return / Multi-trip */}
              {activeService === "transfer" && (
                <div className="inline-flex rounded-lg bg-slate-100 p-1 space-x-1 border border-slate-200 text-xs">
                  {tripTypes.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveTripType(t.id)}
                      className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-md font-medium transition-all cursor-pointer ${
                        activeTripType === t.id
                          ? "bg-white text-slate-900 shadow-xs font-semibold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {t.id === "one-way" && <span>→</span>}
                      {t.id === "return" && <span>⇄</span>}
                      {t.id === "multi-trip" && <span>⇄+</span>}
                      <span>{t.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Flying Notice Box */}
              <div className="rounded-xl border border-dashed border-sky-300 bg-sky-50/60 p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {flyingNotice.title}
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md">
                    {flyingNotice.desc}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {flyingNotice.actions.map((act) => (
                    <button
                      key={act}
                      type="button"
                      className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors shadow-2xs"
                    >
                      {act}
                    </button>
                  ))}
                </div>
              </div>

              {/* Connected Location Inputs with Route Line */}
              <div className="relative rounded-xl border border-slate-300 divide-y divide-slate-200 transition-all bg-white">
                {/* Visual Route Connecting Line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 border-l-2 border-dotted border-slate-400 pointer-events-none z-0" />

                {/* 1. Pick-up Input */}
                <div ref={pickupContainerRef} className="relative p-3 pl-14">
                  <div className="absolute left-4.5 top-5.5 w-3.5 h-3.5 rounded-full border-2 border-slate-900 bg-white z-10" />
                  <label htmlFor="pickup-input" className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                    Pick-up
                  </label>
                  <div className="flex items-center justify-between pr-2">
                    <input
                      id="pickup-input"
                      type="text"
                      autoComplete="off"
                      value={pickupInput}
                      onChange={(e) => {
                        setPickupInput(e.target.value);
                        setSelectedPickup(null);
                        setShowPickupDropdown(true);
                      }}
                      onFocus={() => setShowPickupDropdown(true)}
                      placeholder="Address, hotel or airport"
                      className="w-full text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent pt-0.5"
                    />
                    {pickupInput && (
                      <button
                        type="button"
                        onClick={() => {
                          setPickupInput("");
                          setSelectedPickup(null);
                        }}
                        className="text-slate-400 hover:text-slate-700 text-sm px-1 cursor-pointer"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  {/* Pick-up Autocomplete Dropdown */}
                  {showPickupDropdown && (
                    <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-xl shadow-2xl z-50 max-h-72 overflow-y-auto divide-y divide-slate-100">
                      {!pickupInput.trim() ? (
                        <div>
                          <div className="px-4 py-2 text-[10px] uppercase font-bold text-slate-400 tracking-wider bg-slate-50">
                            Nearby
                          </div>
                          <button
                            type="button"
                            onMouseDown={(e) => {
                              e.preventDefault();
                              handleSelectPickupItem(POPULAR_AU_HUBS[0]);
                            }}
                            className="w-full px-4 py-3 flex items-center space-x-3 text-left hover:bg-slate-50 transition-colors"
                          >
                            <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm shrink-0">
                              ✈️
                            </span>
                            <div>
                              <div className="text-xs font-bold text-slate-900">Nearest airport</div>
                              <div className="text-[11px] text-slate-500">Sydney Airport (SYD) • Mascot NSW</div>
                            </div>
                          </button>
                        </div>
                      ) : null}

                      {/* Filtered suggestions list */}
                      {pickupSuggestions.map((item, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onMouseDown={(e) => {
                            e.preventDefault();
                            handleSelectPickupItem(item);
                          }}
                          className="w-full px-4 py-3 flex items-start space-x-3 text-left hover:bg-slate-50 transition-colors"
                        >
                          <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs mt-0.5 shrink-0">
                            {item.type === "airport" ? "✈️" : "📍"}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-semibold text-slate-900 truncate">{item.name}</div>
                            <div className="text-[11px] text-slate-500 truncate">{item.subtext}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Optional Middle Stops */}
                {stops.map((stop, sIdx) => (
                  <div key={stop.id} className="relative p-3 pl-14 bg-slate-50/50 flex items-center justify-between">
                    <div className="absolute left-5 top-5 w-2.5 h-2.5 rounded-full bg-blue-600 z-10" />
                    <div className="w-full pr-4">
                      <label htmlFor={`stop-${stop.id}`} className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                        Stop {sIdx + 1}
                      </label>
                      <input
                        id={`stop-${stop.id}`}
                        type="text"
                        placeholder="Enter stop address"
                        value={stop.text}
                        onChange={(e) => {
                          const updated = [...stops];
                          updated[sIdx].text = e.target.value;
                          setStops(updated);
                        }}
                        className="w-full text-sm font-medium text-slate-900 focus:outline-none bg-transparent pt-0.5"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveStop(stop.id)}
                      className="text-slate-400 hover:text-red-500 text-xs px-2"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {/* Add a Stop Bar */}
                <div className="px-14 py-2 flex items-center justify-between bg-slate-50/30 text-xs text-slate-600">
                  <button
                    type="button"
                    onClick={handleAddStop}
                    className="flex items-center space-x-1.5 text-blue-700 hover:text-blue-900 font-semibold cursor-pointer"
                  >
                    <span className="w-4 h-4 rounded-full border border-blue-600 text-blue-600 flex items-center justify-center text-[10px] font-bold">
                      +
                    </span>
                    <span>Add a stop</span>
                  </button>

                  {/* Swap Button (Image 3) */}
                  <button
                    type="button"
                    onClick={handleSwap}
                    title="Swap Pick-up & Destination"
                    className="w-7 h-7 rounded-full bg-white border border-slate-300 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-2xs cursor-pointer font-bold"
                  >
                    ⇅
                  </button>
                </div>

                {/* 2. Drop-off Input */}
                <div ref={dropoffContainerRef} className="relative p-3 pl-14">
                  <div className="absolute left-4.5 top-5.5 w-3.5 h-3.5 rounded-xs bg-slate-900 z-10" />
                  <label htmlFor="dropoff-input" className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                    Drop-off
                  </label>
                  <div className="flex items-center justify-between pr-2">
                    <input
                      id="dropoff-input"
                      type="text"
                      autoComplete="off"
                      value={dropoffInput}
                      onChange={(e) => {
                        setDropoffInput(e.target.value);
                        setSelectedDropoff(null);
                        setShowDropoffDropdown(true);
                      }}
                      onFocus={() => setShowDropoffDropdown(true)}
                      placeholder="Enter drop off location"
                      className="w-full text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent pt-0.5"
                    />
                    {dropoffInput && (
                      <button
                        type="button"
                        onClick={() => {
                          setDropoffInput("");
                          setSelectedDropoff(null);
                        }}
                        className="text-slate-400 hover:text-slate-700 text-sm px-1 cursor-pointer"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  {/* Drop-off Autocomplete Dropdown */}
                  {showDropoffDropdown && (
                    <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-xl shadow-2xl z-50 max-h-72 overflow-y-auto divide-y divide-slate-100">
                      {dropoffSuggestions.map((item, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onMouseDown={(e) => {
                            e.preventDefault();
                            handleSelectDropoffItem(item);
                          }}
                          className="w-full px-4 py-3 flex items-start space-x-3 text-left hover:bg-slate-50 transition-colors"
                        >
                          <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs mt-0.5 shrink-0">
                            {item.type === "airport" ? "✈️" : "📍"}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-semibold text-slate-900 truncate">{item.name}</div>
                            <div className="text-[11px] text-slate-500 truncate">{item.subtext}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Optional Flight Tracker Pill when Airport selected */}
              {(selectedPickup?.type === "airport" || selectedDropoff?.type === "airport") && (
                <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center space-x-2 text-slate-700">
                    <span>✈️</span>
                    <span>Add flight number to track delays and adjust pickup time automatically:</span>
                  </div>
                  <input
                    type="text"
                    placeholder="e.g. QF 401"
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value)}
                    className="px-3 py-1.5 rounded-lg border border-amber-300 bg-white font-mono text-xs uppercase focus:outline-none max-w-[120px]"
                  />
                </div>
              )}

              {/* Date, Time & Passenger Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-5">
                  <div className="rounded-xl border border-slate-300 p-3 bg-white focus-within:border-slate-800 transition-all">
                    <label htmlFor="pickup-date-input" className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      Pick-up date
                    </label>
                    <input
                      id="pickup-date-input"
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full text-sm font-medium text-slate-900 focus:outline-none bg-transparent cursor-pointer mt-0.5"
                    />
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      type="button"
                      onClick={() => handleDateQuickSelect("today")}
                      className="px-3 py-1 rounded-full border border-slate-300 text-slate-700 text-xs hover:border-slate-800 transition-colors cursor-pointer"
                    >
                      Today
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDateQuickSelect("tomorrow")}
                      className="px-3 py-1 rounded-full border border-slate-300 text-slate-700 text-xs hover:border-slate-800 transition-colors cursor-pointer"
                    >
                      Tomorrow
                    </button>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <div className="rounded-xl border border-slate-300 p-3 bg-white focus-within:border-slate-800 transition-all">
                    <label htmlFor="pickup-time-input" className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      Pick-up time
                    </label>
                    <input
                      id="pickup-time-input"
                      type="time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full text-sm font-medium text-slate-900 focus:outline-none bg-transparent cursor-pointer mt-0.5"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="rounded-xl border border-slate-300 p-3 bg-white flex flex-col justify-between h-[66px]">
                    <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      Passengers
                    </span>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setPassengers((prev) => Math.max(1, prev - 1))}
                        className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-xs cursor-pointer"
                      >
                        −
                      </button>
                      <span className="text-sm font-bold text-slate-900 font-mono">
                        {passengers}
                      </span>
                      <button
                        type="button"
                        onClick={() => setPassengers((prev) => Math.min(8, prev + 1))}
                        className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-xs cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Continue to Vehicles & Start over (Image 3) */}
              <div className="pt-3 flex items-center justify-between">
                <button
                  type="button"
                  className="px-8 py-3.5 rounded-xl bg-[#0c1938] hover:bg-[#16274e] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Continue to vehicles
                </button>

                <button
                  type="button"
                  onClick={handleStartOver}
                  className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                >
                  Start over
                </button>
              </div>
            </div>

            {/* Save for later Note */}
            <div className="mt-4 flex items-center space-x-2 text-xs text-slate-500 px-2">
              <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <span>
                <strong className="text-slate-700">Save for later</strong> — Not ready to book? We&apos;ll email you a link that keeps it for 24 hours.
              </span>
            </div>
          </div>

          {/* Right Column: Live Route Summary Card with Leaflet Map (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden">
              {/* Map Container: Shows live map when both locations selected */}
              {hasBothLocations ? (
                <div className="relative h-48 w-full border-b border-slate-200 bg-slate-100">
                  <BookingMiniMap
                    pickupCoords={selectedPickup}
                    dropoffCoords={selectedDropoff}
                    pickupName={selectedPickup.name}
                    dropoffName={selectedDropoff.name}
                  />
                </div>
              ) : null}

              {/* Summary Itinerary Nodes */}
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  {/* Pick-up Node */}
                  <div className="flex items-start space-x-3">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-900 bg-white mt-0.5 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-bold text-slate-900 truncate">
                        {selectedPickup?.name || "Where from?"}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {pickupDate} • {pickupTime}
                      </div>
                    </div>
                  </div>

                  {/* Middle stops preview */}
                  {stops.map((st, i) => (
                    <div key={st.id} className="flex items-start space-x-3 pl-0.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-1 shrink-0" />
                      <div className="min-w-0 flex-1 text-xs text-slate-700 font-medium">
                        Stop {i + 1}: {st.text || "Stop location"}
                      </div>
                    </div>
                  ))}

                  {/* Drop-off Node */}
                  <div className="flex items-start space-x-3">
                    <span className="w-3.5 h-3.5 rounded-xs bg-slate-900 mt-0.5 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-bold text-slate-900 truncate">
                        {selectedDropoff?.name || "Where to?"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Passengers summary line */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <span>Passengers</span>
                  <span className="font-bold text-slate-900">{passengers}</span>
                </div>
              </div>

              {/* Guaranteed Benefits Strip (Fixed price, Free waiting, etc.) */}
              <div className="bg-slate-50/70 p-5 border-t border-slate-100 space-y-3 text-xs text-slate-700">
                <div className="flex items-center space-x-2.5">
                  <span className="text-blue-700 font-bold">🏷️</span>
                  <span className="font-medium">Fixed price</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="text-blue-700 font-bold">🗓️</span>
                  <span className="font-medium">Free cancellation up to 4 hours before pick-up</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="text-blue-700 font-bold">🔒</span>
                  <span className="font-medium">Secure payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 4. Support Footer */}
      <footer className="bg-[#0c1938] text-white pt-16 pb-12 border-t border-[#1b2a52] mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#1b2a52]">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-slate-300">
                {footerSupport.heading}
              </h4>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
                {footerSupport.contacts.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    className="flex items-center space-x-1.5 hover:text-white transition-colors"
                  >
                    {c.flag && <span>{c.flag}</span>}
                    <span className="font-semibold text-white">{c.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <div className="relative h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="SYD Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-serif tracking-[0.18em] text-[#bea166] font-bold uppercase leading-none">
                  SYD Airport
                </span>
                <span className="text-sm font-serif tracking-[0.18em] text-white font-bold uppercase leading-none mt-0.5">
                  Transfer
                </span>
                <span className="text-[7px] tracking-[0.25em] text-zinc-400 uppercase font-light mt-1 leading-none">
                  Chauffeur Services
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>{footerSupport.copyright}</span>
              <span>{footerSupport.abn}</span>
              <span>{footerSupport.version}</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-slate-400">
              {footerSupport.links.map((lnk) => (
                <a key={lnk.label} href={lnk.href} className="hover:text-white transition-colors">
                  {lnk.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
