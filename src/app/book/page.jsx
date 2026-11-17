"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { bookingPageData } from "@/utils/bookingPageData";
import { useLocationAutocomplete, POPULAR_AU_HUBS } from "@/utils/useLocationAutocomplete";
import { getStripe } from "@/utils/stripe";
import { calculateStripeSurcharge } from "@/utils/stripeFee";
import StripePaymentForm from "@/components/booking/StripePaymentForm";
import { getStoredCustomer, fetchCurrentCustomer, logoutCustomerApi } from "@/utils/customerAuth";

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
  const { header, steps, hero, benefits, tripTypes, flyingNotice, vehicles, footerSupport } =
    bookingPageData;

  // Active Wizard Step: 1 = Journey, 2 = Vehicle, 3 = Details
  const [currentStep, setCurrentStep] = useState(1);

  // Tabs & Options (Step 1)
  const [activeService, setActiveService] = useState("transfer"); // 'transfer' | 'hourly'
  const [activeTripType, setActiveTripType] = useState("one-way");

  // Pick-up State
  const [pickupInput, setPickupInput] = useState("Sydney Airport (SYD) — Mascot NSW • Intl & Domestic • Flight tracked");
  const [selectedPickup, setSelectedPickup] = useState(POPULAR_AU_HUBS[0]);
  const [showPickupDropdown, setShowPickupDropdown] = useState(false);

  // Drop-off State
  const [dropoffInput, setDropoffInput] = useState("Sydney Opera House, Bennelong Point, Sydney NSW 2000");
  const [selectedDropoff, setSelectedDropoff] = useState(POPULAR_AU_HUBS[4]);
  const [showDropoffDropdown, setShowDropoffDropdown] = useState(false);

  // Middle Stop (Add a stop)
  const [stops, setStops] = useState([]);

  // Date, Time, Passengers
  const [pickupDate, setPickupDate] = useState("2026-11-14");
  const [pickupTime, setPickupTime] = useState("09:00");
  const [passengers, setPassengers] = useState(1);

  // Step 2: Vehicle & Luggage State
  const [checkinBags, setCheckinBags] = useState(1);
  const [carryonBags, setCarryonBags] = useState(0);
  const [babyCapsules, setBabyCapsules] = useState(0);
  const [babySeats, setBabySeats] = useState(0);
  const [boosterSeats, setBoosterSeats] = useState(0);
  const [showChildSeats, setShowChildSeats] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]); // default Executive Sedan

  // Step 3: Passenger & Payment Details State
  const [isBookingForSomeoneElse, setIsBookingForSomeoneElse] = useState(false);
  const [passengerFirstName, setPassengerFirstName] = useState("");
  const [passengerLastName, setPassengerLastName] = useState("");
  const [countryCode, setCountryCode] = useState("+880");
  const [countryFlag, setCountryFlag] = useState("🇧🇩");
  const [passengerMobile, setPassengerMobile] = useState("");
  const [passengerEmail, setPassengerEmail] = useState("");
  const [pickupSignName, setPickupSignName] = useState("");

  // Optional Accordion Toggles
  const [showChauffeurNote, setShowChauffeurNote] = useState(false);
  const [chauffeurNote, setChauffeurNote] = useState("");
  const [showReference, setShowReference] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");
  const [showVoucher, setShowVoucher] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");

  // Payment Method: 'card' | 'cash'
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Stripe & Booking Submission State
  const [isSubmittingBooking, setIsSubmittingBooking] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [createdBooking, setCreatedBooking] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [publishableKey, setPublishableKey] = useState("");
  const [paymentSuccessData, setPaymentSuccessData] = useState(null);

  // Logged-in Customer State
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const existing = getStoredCustomer();
    if (existing) {
      setCustomer(existing);
      autoFillPassenger(existing);
    }
    fetchCurrentCustomer().then((cust) => {
      if (cust) {
        setCustomer(cust);
        autoFillPassenger(cust);
      }
    });
  }, []);

  const autoFillPassenger = (cust) => {
    if (!cust) return;
    if (cust.fullName) {
      const parts = cust.fullName.trim().split(" ");
      setPassengerFirstName(parts[0] || "");
      setPassengerLastName(parts.slice(1).join(" ") || "");
      setPickupSignName(cust.fullName);
    }
    if (cust.email) {
      setPassengerEmail(cust.email);
    }
    if (cust.phone) {
      setPassengerMobile(cust.phone.replace("+61", "").replace("+880", "").trim());
    }
  };

  const pickupContainerRef = useRef(null);
  const dropoffContainerRef = useRef(null);

  // Autocomplete Hooks
  const { suggestions: pickupSuggestions } = useLocationAutocomplete(pickupInput);
  const { suggestions: dropoffSuggestions } = useLocationAutocomplete(dropoffInput);

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
    setCurrentStep(1);
    setSelectedPickup(null);
    setPickupInput("");
    setSelectedDropoff(null);
    setDropoffInput("");
    setStops([]);
    setCheckinBags(1);
    setCarryonBags(0);
    setBabyCapsules(0);
    setBabySeats(0);
    setBoosterSeats(0);
    setShowChildSeats(false);
    setSelectedVehicle(vehicles[0]);
    setIsBookingForSomeoneElse(false);
    setPassengerFirstName("");
    setPassengerLastName("");
    setPassengerMobile("");
    setPassengerEmail("");
    setPickupSignName("");
    setShowChauffeurNote(false);
    setChauffeurNote("");
    setShowReference(false);
    setReferenceCode("");
    setShowVoucher(false);
    setVoucherCode("");
    setPaymentMethod("card");
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

  const totalBags = checkinBags + carryonBags;
  const totalChildSeats = babyCapsules + babySeats + boosterSeats;

  // Base fare calculation
  const baseVehicleFare = selectedVehicle?.baseFareAUD || 88;
  const childSeatFare = totalChildSeats > 0 ? 30 : 0;
  const rawSubtotal = baseVehicleFare + childSeatFare;
  const feeCalc = calculateStripeSurcharge(rawSubtotal, "domestic");

  // Handle Proceed to Payment / Create Booking Intent
  const handleProceedToPayment = async () => {
    setBookingError("");
    if (!passengerFirstName.trim() || !passengerLastName.trim()) {
      setBookingError("Please enter passenger first and last name.");
      return;
    }
    if (!passengerEmail.trim() || !passengerMobile.trim()) {
      setBookingError("Please provide passenger contact details (mobile and email).");
      return;
    }

    setIsSubmittingBooking(true);
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

    try {
      // 1. Create or register booking on backend
      const bookingPayload = {
        serviceType: activeService,
        tripType: activeTripType,
        pickup: selectedPickup?.name || pickupInput,
        dropoff: selectedDropoff?.name || dropoffInput,
        pickupTime: `${pickupDate}T${pickupTime}:00`,
        passengers: Number(passengers) || 1,
        luggage: Number(checkinBags + carryonBags) || 0,
        vehicleType: selectedVehicle?.name || "Executive Sedan",
        passengerName: `${passengerFirstName} ${passengerLastName}`.trim(),
        passengerPhone: `${countryCode} ${passengerMobile}`.trim(),
        passengerEmail: passengerEmail.trim().toLowerCase(),
        flightNumber: "",
        notes: [
          pickupSignName ? `Sign: ${pickupSignName}` : "",
          chauffeurNote ? `Chauffeur Note: ${chauffeurNote}` : "",
          referenceCode ? `Ref: ${referenceCode}` : "",
          voucherCode ? `Voucher: ${voucherCode}` : "",
        ]
          .filter(Boolean)
          .join(" | "),
        paymentMethod: paymentMethod === "cash" ? "cash" : "online",
        fare: {
          currency: "AUD",
          baseFare: feeCalc.baseFare,
          surcharge: feeCalc.surcharge,
          total: feeCalc.total,
        },
      };

      const bookingRes = await fetch(`${API_BASE}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingPayload),
      });

      let bookingData = {};
      if (bookingRes.ok) {
        bookingData = await bookingRes.json();
      } else {
        const errBody = await bookingRes.json().catch(() => ({}));
        console.warn("Backend booking create error:", errBody);
        // Fallback demo mock booking number
        bookingData = {
          booking: {
            _id: "mock_" + Date.now(),
            bookingNumber: "SYD-" + Math.floor(14000 + 0 + Math.random() * 900000),
            ...bookingPayload,
          },
        };
      }

      const activeBooking = bookingData.booking || bookingData;
      setCreatedBooking(activeBooking);

      // 2. Create Stripe PaymentIntent on backend
      const intentRes = await fetch(`${API_BASE}/payments/create-intent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingId: activeBooking.id || activeBooking._id,
          bookingNumber: activeBooking.bookingNumber,
          amount: feeCalc.total,
          currency: "AUD",
        }),
      });

      if (intentRes.ok) {
        const intentData = await intentRes.json();
        setClientSecret(intentData.clientSecret);
        setPublishableKey(intentData.publishableKey);
      } else {
        const errJson = await intentRes.json().catch(() => ({}));
        setBookingError(errJson.message || "Unable to initialize Stripe payment. Please check server.");
      }
    } catch (err) {
      console.warn("Payment initialization warning:", err);
      setBookingError("Payment server connection unavailable. Make sure syd-bookings-server is running on port 5000.");
    } finally {
      setIsSubmittingBooking(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800">
      {/* 1. Dark Top Header */}
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

          {/* Stepper Progress Bar (Step 1 / 2 / 3) */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-medium">
            {steps.map((s, idx) => {
              const isPassed = currentStep > s.num;
              const isCurrent = currentStep === s.num;

              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => {
                    if (s.num === 1) setCurrentStep(1);
                    if (s.num === 2 && hasBothLocations) setCurrentStep(2);
                  }}
                  className={`flex items-center space-x-2 transition-colors cursor-pointer ${isCurrent
                    ? "text-white font-semibold"
                    : isPassed
                      ? "text-[#bea166] font-semibold"
                      : "text-slate-400"
                    }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${isPassed
                      ? "border-[#bea166] bg-[#bea166] text-slate-950 font-bold"
                      : isCurrent
                        ? "border-white bg-transparent text-white font-bold"
                        : "border-slate-500 text-slate-400"
                      }`}
                  >
                    {isPassed ? "✓" : s.num}
                  </span>
                  <span>{s.label}</span>
                  {idx < steps.length - 1 && (
                    <span className="text-slate-600 ml-4">›</span>
                  )}
                </button>
              );
            })}
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

            {customer ? (
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-[#bea166] font-medium hidden sm:inline">
                  Hi, {customer.fullName?.split(" ")[0]}
                </span>
                <button
                  type="button"
                  onClick={async () => {
                    await logoutCustomerApi();
                    setCustomer(null);
                    window.location.reload();
                  }}
                  className="px-3 py-1.5 rounded border border-slate-600 hover:border-slate-400 text-slate-200 hover:text-white text-xs font-medium cursor-pointer"
                >
                  Log out
                </button>
              </div>
            ) : (
              <Link
                href="/customer/login"
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded border border-slate-600 hover:border-slate-400 text-slate-200 hover:text-white text-xs font-medium transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{header.loginText}</span>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* 2. Page Top Banner: Step 1 shows hero, Step 2/3 shows clean white banner */}
      {currentStep === 1 ? (
        <section className="relative bg-[#0c1938] text-white overflow-hidden pb-32 sm:pb-36 lg:pb-44">
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-35 lg:opacity-85 pointer-events-none">
            <Image
              src="/images/syd_banner.png"
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
      ) : (
        <div className="bg-white border-b border-slate-200/90 pt-10 pb-8 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-serif font-normal text-[#1a2d59] tracking-tight">
              {currentStep === 2 ? "Choose your vehicle" : "Who’s travelling?"}
            </h1>
          </div>
        </div>
      )}

      {/* 3. Main Floating Booking Layout */}
      <main
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full flex-grow ${currentStep === 1 ? "-mt-24 sm:-mt-28 lg:-mt-32" : "pt-8"
          }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ======================================================== */}
          {/* LEFT COLUMN (7 cols): STEP 1 (Journey) OR STEP 2 (Vehicles) */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 space-y-6">
            {currentStep === 1 && (
              /* ================= STEP 1: JOURNEY CONFIG ================= */
              <div>
                {/* Top Tabs */}
                <div className="flex items-center space-x-1 mb-0">
                  <button
                    type="button"
                    onClick={() => setActiveService("transfer")}
                    className={`flex items-center space-x-2 px-6 py-3.5 rounded-t-xl font-semibold text-xs tracking-wider transition-all cursor-pointer ${activeService === "transfer"
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
                    className={`flex items-center space-x-2 px-6 py-3.5 rounded-t-xl font-semibold text-xs tracking-wider transition-all cursor-pointer ${activeService === "hourly"
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

                {/* Form Card Body */}
                <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8 space-y-5">
                  {/* Trip Types: One way / Return / Multi-trip */}
                  {activeService === "transfer" && (
                    <div className="inline-flex rounded-lg bg-slate-100 p-1 space-x-1 border border-slate-200 text-xs">
                      {tripTypes.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setActiveTripType(t.id)}
                          className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-md font-medium transition-all cursor-pointer ${activeTripType === t.id
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

                      {/* Dropdown */}
                      {showPickupDropdown && (
                        <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-xl shadow-2xl z-50 max-h-72 overflow-y-auto divide-y divide-slate-100">
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

                    {/* Middle Stops */}
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
                          className="text-slate-400 hover:text-red-500 text-xs px-2 cursor-pointer"
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

                  {/* Continue Button to Step 2 */}
                  <div className="pt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
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

                <div className="mt-4 flex items-center space-x-2 text-xs text-slate-500 px-2">
                  <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  <span>
                    <strong className="text-slate-700">Save for later</strong> — Not ready to book? We&apos;ll email you a link that keeps it for 24 hours.
                  </span>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              /* ================= STEP 2: CHOOSE YOUR VEHICLE ================= */
              <div className="space-y-6">
                {/* Luggage Box Card (Screenshot Style) */}
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-slate-900">Luggage</span>
                      <span className="text-[#a47a46] font-normal">— please confirm</span>
                      <button
                        type="button"
                        onClick={() => {
                          setCheckinBags(0);
                          setCarryonBags(0);
                        }}
                        className="text-[#1a4da1] hover:underline font-semibold cursor-pointer pl-1 underline"
                      >
                        No luggage
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowChildSeats(!showChildSeats)}
                      className="text-[#1a4da1] hover:text-[#0c1938] font-medium flex items-center space-x-1.5 cursor-pointer group"
                    >
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[11px] font-bold transition-all ${showChildSeats
                        ? "border-[#1a4da1] bg-[#1a4da1] text-white"
                        : "border-[#1a4da1] text-[#1a4da1] group-hover:bg-[#1a4da1]/10"
                        }`}>
                        {showChildSeats ? "−" : "+"}
                      </span>
                      <span className="font-semibold text-xs sm:text-sm">Child seats</span>
                      <span className="text-slate-400 font-normal text-xs sm:text-sm pl-0.5">Optional</span>
                    </button>
                  </div>

                  {/* Bags Counters Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    {/* Check-in Bags Counter */}
                    <div className="p-3.5 rounded-xl border-2 border-[#b5874c] bg-white flex items-center justify-between shadow-2xs">
                      <div className="flex items-center space-x-2.5 text-slate-700 pl-1">
                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="1.8" />
                          <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" strokeWidth="1.8" />
                        </svg>
                        <span className="text-xs font-semibold text-slate-700">Check-in</span>
                      </div>
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
                        <button
                          type="button"
                          onClick={() => setCheckinBags((prev) => Math.max(0, prev - 1))}
                          className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-slate-50 font-medium text-base cursor-pointer"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-xs text-slate-700 font-mono font-medium">
                          {checkinBags > 0 ? checkinBags : "—"}
                        </span>
                        <button
                          type="button"
                          onClick={() => setCheckinBags((prev) => Math.min(8, prev + 1))}
                          className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-slate-50 font-medium text-base cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Carry-on Bags Counter */}
                    <div className="p-3.5 rounded-xl border border-slate-300 bg-white flex items-center justify-between shadow-2xs">
                      <div className="flex items-center space-x-2.5 text-slate-700 pl-1">
                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="4" y="8" width="16" height="12" rx="2" strokeWidth="1.8" />
                          <path d="M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2" strokeWidth="1.8" />
                        </svg>
                        <span className="text-xs font-semibold text-slate-700">Carry-on</span>
                      </div>
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
                        <button
                          type="button"
                          onClick={() => setCarryonBags((prev) => Math.max(0, prev - 1))}
                          className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-slate-50 font-medium text-base cursor-pointer"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-xs text-slate-700 font-mono font-medium">
                          {carryonBags > 0 ? carryonBags : "—"}
                        </span>
                        <button
                          type="button"
                          onClick={() => setCarryonBags((prev) => Math.min(8, prev + 1))}
                          className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-slate-50 font-medium text-base cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Red Marked Accordion Section: Child Seats Expansion */}
                  {showChildSeats && (
                    <div className="pt-2 pb-1 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                      <p className="text-xs font-medium text-slate-600">
                        $30 SGD, however many seats.
                      </p>

                      <div className="rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden bg-white shadow-2xs">
                        {/* 1. Baby capsule */}
                        <div className="p-3.5 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                          <div className="space-y-0.5">
                            <h5 className="text-xs sm:text-sm font-medium text-slate-900">
                              Baby capsule
                            </h5>
                            <p className="text-[11px] text-slate-500">
                              Rear-facing, 0–12 months
                            </p>
                          </div>
                          <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
                            <button
                              type="button"
                              onClick={() => setBabyCapsules((prev) => Math.max(0, prev - 1))}
                              className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-slate-50 font-medium text-base cursor-pointer"
                            >
                              −
                            </button>
                            <span className="w-8 text-center text-xs text-slate-800 font-mono font-medium">
                              {babyCapsules}
                            </span>
                            <button
                              type="button"
                              onClick={() => setBabyCapsules((prev) => Math.min(4, prev + 1))}
                              className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-slate-50 font-medium text-base cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* 2. Baby seat */}
                        <div className="p-3.5 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                          <div className="space-y-0.5">
                            <h5 className="text-xs sm:text-sm font-medium text-slate-900">
                              Baby seat
                            </h5>
                            <p className="text-[11px] text-slate-500">
                              Forward-facing, 1–4 years
                            </p>
                          </div>
                          <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
                            <button
                              type="button"
                              onClick={() => setBabySeats((prev) => Math.max(0, prev - 1))}
                              className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-slate-50 font-medium text-base cursor-pointer"
                            >
                              −
                            </button>
                            <span className="w-8 text-center text-xs text-slate-800 font-mono font-medium">
                              {babySeats}
                            </span>
                            <button
                              type="button"
                              onClick={() => setBabySeats((prev) => Math.min(4, prev + 1))}
                              className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-slate-50 font-medium text-base cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* 3. Booster seat */}
                        <div className="p-3.5 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                          <div className="space-y-0.5">
                            <h5 className="text-xs sm:text-sm font-medium text-slate-900">
                              Booster seat
                            </h5>
                            <p className="text-[11px] text-slate-500">
                              4–7 years
                            </p>
                          </div>
                          <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
                            <button
                              type="button"
                              onClick={() => setBoosterSeats((prev) => Math.max(0, prev - 1))}
                              className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-slate-50 font-medium text-base cursor-pointer"
                            >
                              −
                            </button>
                            <span className="w-8 text-center text-xs text-slate-800 font-mono font-medium">
                              {boosterSeats}
                            </span>
                            <button
                              type="button"
                              onClick={() => setBoosterSeats((prev) => Math.min(4, prev + 1))}
                              className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-slate-50 font-medium text-base cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Summary Notice exact from screenshot */}
                  <div className="text-xs text-slate-700 pt-3 leading-relaxed border-t border-slate-100">
                    <p>
                      <strong>{passengers} passenger</strong>,{" "}
                      <span className="underline font-semibold">{totalBags} bags</span>. That&apos;s more than one vehicle takes. Call us on{" "}
                      <a href="tel:+6140441000+" className="text-blue-700 underline font-medium inline-flex items-center space-x-0.5">
                        <span>🌐</span>
                        <span>+61 404 410 000</span>
                      </a>
                      ,{" "}
                      <a href="tel:+6140441000+" className="text-blue-700 underline font-medium inline-flex items-center space-x-0.5">
                        <span>🇦🇺</span>
                        <span>+61 404 410 000</span>
                      </a>
                      ,{" "}
                      <a href="tel:18883891908" className="text-blue-700 underline font-medium inline-flex items-center space-x-0.5">
                        <span>🇺🇸</span>
                        <span>+61 404 410 000</span>
                      </a>{" "}
                      or{" "}
                      <a href="tel:+6140441000+" className="text-blue-700 underline font-medium inline-flex items-center space-x-0.5">
                        <span>🇳🇿</span>
                        <span>+61 404 410 000</span>
                      </a>{" "}
                      and we&apos;ll arrange it.
                    </p>
                  </div>
                </div>

                {/* Warning message from screenshot */}
                <div className="text-xs text-amber-900/90 leading-relaxed font-normal pt-1">
                  <p className="font-semibold text-amber-950">
                    No vehicles fit this trip&apos;s passengers/luggage.
                  </p>
                  <p className="mt-0.5">
                    Please call Syd on{" "}
                    <a href="tel:+6140441000+" className="text-blue-700 underline font-medium inline-flex items-center space-x-0.5">
                      <span>🌐</span>
                      <span>+61 404 410 000</span>
                    </a>
                    ,{" "}
                    <a href="tel:+6140441000+" className="text-blue-700 underline font-medium inline-flex items-center space-x-0.5">
                      <span>🇦🇺</span>
                      <span>+61 404 410 000</span>
                    </a>
                    ,{" "}
                    <a href="tel:18883891908" className="text-blue-700 underline font-medium inline-flex items-center space-x-0.5">
                      <span>🇺🇸</span>
                      <span>+61 404 410 000</span>
                    </a>{" "}
                    or{" "}
                    <a href="tel:+6140441000+" className="text-blue-700 underline font-medium inline-flex items-center space-x-0.5">
                      <span>🇳🇿</span>
                      <span>+61 404 410 000</span>
                    </a>
                    .
                  </p>
                </div>

                {/* Continue to Details Action Buttons */}
                <div className="pt-6 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="px-8 py-3.5 rounded-xl bg-[#0c1938] hover:bg-[#16274e] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    Continue to details
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
            )}

            {currentStep === 3 && (
              /* ================= STEP 3: WHO'S TRAVELLING? ================= */
              <div className="space-y-6">
                {/* 1. Login Reminder Banner */}
                <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 sm:p-4.5 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center space-x-2.5 text-slate-700">
                    <span className="w-5 h-5 rounded-full border border-blue-600 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0">
                      👤
                    </span>
                    <span>
                      {customer ? (
                        <>
                          Signed in as <strong className="text-slate-900">{customer.fullName}</strong> ({customer.email}).
                        </>
                      ) : (
                        <>
                          <strong className="text-slate-900">Booked with us before?</strong> Log in and we&apos;ll fill this in.
                        </>
                      )}
                    </span>
                  </div>
                  {customer ? (
                    <button
                      type="button"
                      onClick={() => autoFillPassenger(customer)}
                      className="text-blue-700 hover:text-blue-900 underline font-semibold shrink-0 cursor-pointer"
                    >
                      Fill My Details
                    </button>
                  ) : (
                    <Link
                      href="/customer/login"
                      className="text-blue-700 hover:text-blue-900 underline font-semibold shrink-0"
                    >
                      Log in
                    </Link>
                  )}
                </div>

                {/* 3. Passenger Details Form */}
                <div className="space-y-4">
                  {/* Booking for someone else checkbox */}
                  <div className="flex items-start space-x-3 pt-1">
                    <input
                      id="someone-else-check"
                      type="checkbox"
                      checked={isBookingForSomeoneElse}
                      onChange={(e) => setIsBookingForSomeoneElse(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <div>
                      <label
                        htmlFor="someone-else-check"
                        className="text-xs sm:text-sm font-semibold text-slate-800 cursor-pointer"
                      >
                        Booking for someone else
                      </label>
                      <p className="text-[11px] text-slate-500">
                        Tick this if the passenger isn&apos;t you.
                      </p>
                    </div>
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border-2 border-[#b5874c] p-3 bg-white shadow-2xs">
                      <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                        First name
                      </label>
                      <input
                        type="text"
                        value={passengerFirstName}
                        onChange={(e) => setPassengerFirstName(e.target.value)}
                        placeholder=""
                        className="w-full text-sm font-medium text-slate-900 focus:outline-none bg-transparent pt-0.5"
                      />
                    </div>
                    <div className="rounded-xl border border-slate-300 p-3 bg-white focus-within:border-slate-800 transition-all">
                      <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                        Last name
                      </label>
                      <input
                        type="text"
                        value={passengerLastName}
                        onChange={(e) => setPassengerLastName(e.target.value)}
                        placeholder=""
                        className="w-full text-sm font-medium text-slate-900 focus:outline-none bg-transparent pt-0.5"
                      />
                    </div>
                  </div>

                  {/* Contact Fields: Mobile & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Mobile with country flag */}
                    <div className="rounded-xl border border-slate-300 p-3 bg-white focus-within:border-slate-800 transition-all">
                      <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                        Mobile
                      </label>
                      <div className="flex items-center space-x-2 pt-0.5">
                        <div className="flex items-center space-x-1 border-r border-slate-200 pr-2 cursor-pointer text-xs font-semibold text-slate-700">
                          <span>{countryFlag}</span>
                          <span>{countryCode}</span>
                          <span className="text-[10px] text-slate-400">▼</span>
                        </div>
                        <input
                          type="tel"
                          value={passengerMobile}
                          onChange={(e) => setPassengerMobile(e.target.value)}
                          placeholder=""
                          className="w-full text-sm font-medium text-slate-900 focus:outline-none bg-transparent"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="rounded-xl border border-slate-300 p-3 bg-white focus-within:border-slate-800 transition-all">
                      <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        value={passengerEmail}
                        onChange={(e) => setPassengerEmail(e.target.value)}
                        placeholder=""
                        className="w-full text-sm font-medium text-slate-900 focus:outline-none bg-transparent pt-0.5"
                      />
                    </div>
                  </div>

                  {/* Pick-up sign name */}
                  <div className="rounded-xl border border-slate-300 p-3 bg-white focus-within:border-slate-800 transition-all">
                    <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      Name on the pick-up sign
                    </label>
                    <input
                      type="text"
                      value={pickupSignName}
                      onChange={(e) => setPickupSignName(e.target.value)}
                      placeholder=""
                      className="w-full text-sm font-medium text-slate-900 focus:outline-none bg-transparent pt-0.5"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 pl-1">
                    Add a name and your chauffeur will hold a sign with it in arrivals.
                  </p>
                </div>

                {/* 4. Optional Accordion Rows */}
                <div className="pt-2 space-y-3">
                  {/* Note for chauffeur */}
                  <div className="border-t border-slate-200/80 pt-3">
                    <button
                      type="button"
                      onClick={() => setShowChauffeurNote(!showChauffeurNote)}
                      className="w-full flex items-center justify-between text-left text-xs sm:text-sm text-slate-800 hover:text-blue-700 cursor-pointer"
                    >
                      <span className="flex items-center space-x-2 font-medium">
                        <span className="w-4 h-4 rounded-full border border-blue-600 text-blue-600 flex items-center justify-center text-[10px] font-bold">
                          {showChauffeurNote ? "−" : "+"}
                        </span>
                        <span>Note for your chauffeur</span>
                      </span>
                      <span className="text-slate-400 font-normal">Optional</span>
                    </button>
                    {showChauffeurNote && (
                      <div className="mt-2.5 animate-in fade-in">
                        <textarea
                          rows={2}
                          value={chauffeurNote}
                          onChange={(e) => setChauffeurNote(e.target.value)}
                          placeholder="Special instructions, gate number, or luggage assistance requests..."
                          className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-slate-800 bg-white"
                        />
                      </div>
                    )}
                  </div>

                  {/* Reference */}
                  <div className="border-t border-slate-200/80 pt-3">
                    <button
                      type="button"
                      onClick={() => setShowReference(!showReference)}
                      className="w-full flex items-center justify-between text-left text-xs sm:text-sm text-slate-800 hover:text-blue-700 cursor-pointer"
                    >
                      <span className="flex items-center space-x-2 font-medium">
                        <span className="w-4 h-4 rounded-full border border-blue-600 text-blue-600 flex items-center justify-center text-[10px] font-bold">
                          {showReference ? "−" : "+"}
                        </span>
                        <span>Reference</span>
                      </span>
                      <span className="text-slate-400 font-normal">Optional</span>
                    </button>
                    {showReference && (
                      <div className="mt-2.5 animate-in fade-in">
                        <input
                          type="text"
                          value={referenceCode}
                          onChange={(e) => setReferenceCode(e.target.value)}
                          placeholder="Cost centre, project code, or internal reference"
                          className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-slate-800 bg-white"
                        />
                      </div>
                    )}
                  </div>

                  {/* Voucher or discount code */}
                  <div className="border-t border-slate-200/80 pt-3">
                    <button
                      type="button"
                      onClick={() => setShowVoucher(!showVoucher)}
                      className="w-full flex items-center justify-between text-left text-xs sm:text-sm text-slate-800 hover:text-blue-700 cursor-pointer"
                    >
                      <span className="flex items-center space-x-2 font-medium">
                        <span className="w-4 h-4 rounded-full border border-blue-600 text-blue-600 flex items-center justify-center text-[10px] font-bold">
                          {showVoucher ? "−" : "+"}
                        </span>
                        <span>Voucher or discount code</span>
                      </span>
                    </button>
                    {showVoucher && (
                      <div className="mt-2.5 flex items-center space-x-2 animate-in fade-in">
                        <input
                          type="text"
                          value={voucherCode}
                          onChange={(e) => setVoucherCode(e.target.value)}
                          placeholder="Enter promo code"
                          className="flex-1 text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-slate-800 bg-white uppercase font-mono"
                        />
                        <button
                          type="button"
                          className="px-4 py-3 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 cursor-pointer"
                        >
                          Apply
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* 5. Payment Selection Box */}
                <div className="pt-2 space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-700">
                    Payment
                  </h4>

                  <div className="space-y-3">
                    {/* Option 1: Card, Apple Pay or Google Pay */}
                    <div
                      onClick={() => setPaymentMethod("card")}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${paymentMethod === "card"
                        ? "border-slate-900 ring-2 ring-slate-900/10 bg-white shadow-xs"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                        }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === "card"
                          ? "border-slate-900"
                          : "border-slate-300"
                          }`}>
                          {paymentMethod === "card" && (
                            <div className="w-2 h-2 rounded-full bg-slate-900" />
                          )}
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-900 block">
                            Card, Apple Pay or Google Pay
                          </span>
                          <span className="text-[11px] text-slate-500 block">
                            Paid securely
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1.5 shrink-0">
                        <span className="px-1.5 py-0.5 rounded border border-slate-200 text-[9px] font-bold text-slate-600 bg-slate-50 font-mono">
                          VISA
                        </span>
                        <span className="px-1.5 py-0.5 rounded border border-slate-200 text-[9px] font-bold text-slate-600 bg-slate-50 font-mono">
                          MC
                        </span>
                        <span className="px-1.5 py-0.5 rounded border border-slate-200 text-[9px] font-bold text-slate-600 bg-slate-50 font-mono">
                          AMEX
                        </span>
                        <span className="text-xs text-slate-400 pl-1">▼</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 text-xs text-slate-500 pt-1">
                    <span>🔒</span>
                    <span>Secure payment.</span>
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-slate-500 pt-2">
                    <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    <span>
                      <strong className="text-slate-700">Save for later</strong> Not ready to book? We&apos;ll email you a link that keeps it for 24 hours.
                    </span>
                  </div>

                  {bookingError && (
                    <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl mt-3">
                      {bookingError}
                    </div>
                  )}

                  {/* Embedded Stripe Elements Form if clientSecret is ready */}
                  {clientSecret && (
                    <div className="mt-4 p-5 bg-white border-2 border-slate-900 rounded-2xl shadow-lg space-y-3 animate-in fade-in">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                          Complete Card Payment
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-900">
                          ${feeCalc.total.toFixed(2)} AUD
                        </span>
                      </div>
                      <Elements
                        stripe={getStripe(publishableKey)}
                        options={{
                          clientSecret,
                          appearance: { theme: "stripe" },
                        }}
                      >
                        <StripePaymentForm
                          booking={createdBooking}
                          amount={feeCalc.total.toFixed(2)}
                          currency="AUD"
                          onPaymentSuccess={(data) => {
                            setPaymentSuccessData(data);
                          }}
                          onCancel={() => {
                            setClientSecret("");
                          }}
                        />
                      </Elements>
                    </div>
                  )}

                  {/* Payment Success Confirmation Modal/Box */}
                  {paymentSuccessData && (
                    <div className="mt-4 p-6 bg-emerald-50 border border-emerald-300 rounded-2xl shadow-md text-center space-y-3 animate-in zoom-in-95">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mx-auto font-bold">
                        ✓
                      </div>
                      <h4 className="text-base font-bold text-emerald-950">
                        Booking & Payment Confirmed!
                      </h4>
                      <p className="text-xs text-emerald-800">
                        Booking Reference:{" "}
                        <strong className="font-mono text-emerald-950">
                          {createdBooking?.bookingNumber || paymentSuccessData?.bookingNumber || "SYD-SUCCESS"}
                        </strong>
                      </p>
                      <p className="text-xs text-emerald-700 max-w-md mx-auto">
                        A confirmation SMS and receipt have been sent to your email. Your chauffeur will be waiting at arrivals.
                      </p>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={handleStartOver}
                          className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl uppercase tracking-wider"
                        >
                          Book another transfer
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* 6. Action Buttons */}
                {!clientSecret && !paymentSuccessData && (
                  <div className="pt-6 flex items-center justify-between">
                    <button
                      type="button"
                      disabled={isSubmittingBooking}
                      onClick={handleProceedToPayment}
                      className="px-8 py-3.5 rounded-xl bg-[#0c1938] hover:bg-[#16274e] disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer flex items-center space-x-2"
                    >
                      {isSubmittingBooking ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Initializing Payment...</span>
                        </>
                      ) : (
                        <span>Continue to payment</span>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleStartOver}
                      className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                    >
                      Start over
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN (5 cols): LIVE TRIP SUMMARY & MINI MAP      */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden">
              {/* Mini Map */}
              {hasBothLocations && (
                <div className="relative h-48 w-full border-b border-slate-200 bg-slate-100">
                  <BookingMiniMap
                    pickupCoords={selectedPickup}
                    dropoffCoords={selectedDropoff}
                    pickupName={selectedPickup?.name}
                    dropoffName={selectedDropoff?.name}
                  />
                </div>
              )}

              {/* Itinerary Nodes */}
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  {/* Pick-up */}
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

                  {/* Middle Stops */}
                  {stops.map((st, i) => (
                    <div key={st.id} className="flex items-start space-x-3 pl-0.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-1 shrink-0" />
                      <div className="min-w-0 flex-1 text-xs text-slate-700 font-medium">
                        Stop {i + 1}: {st.text || "Stop location"}
                      </div>
                    </div>
                  ))}

                  {/* Drop-off */}
                  <div className="flex items-start space-x-3">
                    <span className="w-3.5 h-3.5 rounded-xs bg-slate-900 mt-0.5 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-bold text-slate-900 truncate">
                        {selectedDropoff?.name || "Where to?"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pax & Luggage Summary Table */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span>Passengers</span>
                    <span className="font-bold text-slate-900">{passengers}</span>
                  </div>

                  {currentStep >= 2 && (
                    <>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1.5">
                          <span>Luggage</span>
                          {currentStep === 3 && (
                            <button
                              type="button"
                              onClick={() => setCurrentStep(2)}
                              className="text-blue-700 hover:text-blue-900 underline font-medium cursor-pointer"
                            >
                              Change
                            </button>
                          )}
                        </div>
                        <span className="font-bold text-slate-900">
                          {checkinBags} check-in, {carryonBags} carry-on
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Vehicle</span>
                        <span className="font-bold text-slate-900">
                          {selectedVehicle?.name || "Executive Sedan"}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Total Fare Readout (Step 2) */}
                {currentStep >= 2 && (
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">Total, all inclusive</span>
                      <span className="text-2xl font-bold font-serif text-slate-900">
                        ${selectedVehicle?.baseFareAUD || 88}{" "}
                        <span className="text-xs font-sans text-slate-500 font-normal">AUD</span>
                      </span>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => alert("Showing breakdown...")}
                        className="text-xs text-blue-700 hover:text-blue-900 underline font-medium cursor-pointer"
                      >
                        See the breakdown
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Guarantees */}
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
