"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import { navItems } from "@/utils/navData";
import { fleetOptions } from "@/utils/fleetOptionsData";
import { steps } from "@/utils/stepsData";

export default function ClientCityView({ slug }) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedFleet, setSelectedFleet] = useState("executive");
  const [activeFaq, setActiveFaq] = useState(null);

  // Search for matching nav item dynamically from navData.js
  const airportCategory = navItems.find((item) => item.title === "Airport Transfers");
  const allAirportLinks = airportCategory
    ? airportCategory.columns.flatMap((col) => col.links)
    : [];

  const matchedItem = allAirportLinks.find((link) => {
    const linkSlug = link.href.split("/").pop();
    return (
      linkSlug === slug ||
      link.href.includes(slug) ||
      slug.includes(linkSlug) ||
      slug.includes(link.name.toLowerCase().replace(/[^a-z0-9]/g, ""))
    );
  });

  // Extract dynamic data with graceful fallbacks
  const cityName = matchedItem ? matchedItem.name : "Airport Transfers";
  const city = matchedItem?.city || "Capital City";
  const airportName = matchedItem?.airportName || `${city} Airport`;
  const code = matchedItem?.code || "AU";
  const badge = matchedItem?.badge || `${city} • ${code}`;
  const description = matchedItem?.description || "Reliable, luxurious private chauffeur airport transfers with real-time flight tracking, inside terminal meet-and-greet, and fixed transparent pricing.";
  const distanceToCbd = matchedItem?.distanceToCbd || "Direct to City Centre";
  const travelTimeToCbd = matchedItem?.travelTimeToCbd || "15 - 25 mins";

  const overviewParagraphs = matchedItem?.overview && matchedItem.overview.length > 0
    ? matchedItem.overview
    : [
      `SYD provides professional, reliable, and private chauffeur-driven airport transfers to and from ${airportName}, serving corporate executives, VIPs, holidaymakers, and group delegations.`,
      `Skip the stressful taxi queues and rideshare delays. Your accredited chauffeur will monitor your flight in real time, welcome you inside the terminal arrivals hall holding a personalized digital name sign, and assist with your luggage.`,
      `Enjoy fixed upfront pricing, pristine luxury vehicles equipped with dual-zone climate control, and discrete door-to-door transit to any hotel, corporate office, or regional destination.`,
    ];

  const popularRoutes = matchedItem?.popularRoutes && matchedItem.popularRoutes.length > 0
    ? matchedItem.popularRoutes
    : [
      { name: `${city} Central Business District (CBD)`, distance: "10 - 20 km", time: travelTimeToCbd, desc: "Downtown corporate offices, 5-star hotels, and convention precincts" },
      { name: `${city} Surrounding Suburbs & Coastal Areas`, distance: "15 - 30 km", time: "20 - 35 mins", desc: "Premier residential suburbs, beachfront dining, and boutique hotels" },
      { name: "Regional & Tourist Destinations", distance: "45 - 80 km", time: "45 - 75 mins", desc: "Scenic regional day trips, luxury lodges, and wine estates" },
    ];

  const meetingPoints = matchedItem?.meetingPoints || {
    domestic: "Arrivals Hall, Ground floor, directly in front of the baggage collection carousels.",
    international: "In the main International Arrivals Hall past customs clearance.",
    instructions: "Your chauffeur will monitor your flight live, greet you holding a digital iPad name board, assist with your luggage, and escort you to the reserved limousine bays.",
  };

  const faqs = matchedItem?.faqs && matchedItem.faqs.length > 0
    ? matchedItem.faqs
    : [
      {
        q: `Where will my chauffeur meet me at ${airportName}?`,
        a: `Your chauffeur will await you inside the terminal arrivals area holding a digital name board displaying your name or company, ready to assist with all bags.`,
      },
      {
        q: `What happens if my flight into ${city} is delayed?`,
        a: `SYD dispatch monitors all incoming and departing flights in real-time. If your flight is early or delayed, your chauffeur automatically adjusts pickup times with zero penalty charges.`,
      },
      {
        q: `How long is the transfer from ${airportName} to the city centre?`,
        a: `Under typical traffic conditions, travel time is approximately ${travelTimeToCbd} (${distanceToCbd}).`,
      },
      {
        q: `Are airport tolls and parking fees included in the fare?`,
        a: `Yes, SYD provides fixed, transparent all-inclusive quotes. All road tolls, airport terminal access charges, and GST are included.`,
      },
      {
        q: `Can I request child booster or baby safety seats?`,
        a: `Yes, we provide Australian-standard baby capsules, child seats, and booster seats upon request during reservation.`,
      },
    ];

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Global Header */}
      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[82vh] flex flex-col justify-center pt-36 pb-20 overflow-hidden bg-[#152442]">
          {/* Background image & dark gradient vignette */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/airport.jpg"
              alt={`${cityName} Chauffeur Service`}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0d172a]/75 backdrop-brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#152442] via-transparent to-black/60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-[#bea166] mb-4 uppercase tracking-wider font-semibold">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span className="text-gray-400">/</span>
              <Link href="/airport-transfers" className="hover:text-white transition">Airport Transfers</Link>
              <span className="text-gray-400">/</span>
              <span className="text-white">{cityName}</span>
            </div>

            {/* City Title, Subtitle, and CTAs */}
            <div className="max-w-3xl">
              <span className="inline-block bg-[#bea166]/20 border border-[#bea166]/50 text-[#bea166] text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                {badge}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                {cityName}
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-2xl">
                {description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  onClick={handleOpenBooking}
                  className="bg-[#bea166] hover:bg-[#a88d55] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded border-2 border-[#bea166] transition-all shadow-lg active:scale-95 flex items-center space-x-2"
                >
                  <span>Book {city} Transfer</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <button
                  onClick={handleOpenBooking}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#152442] font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded transition-all shadow-lg active:scale-95"
                >
                  Instant Fare Quote
                </button>

                <a
                  href="tel:+61404410000"
                  className="border-2 border-transparent text-[#bea166] hover:text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-4 py-3.5 rounded transition-all flex items-center space-x-2"
                >
                  <svg className="w-4 h-4 mr-1 text-[#bea166]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                  </svg>
                  <span>+61 404 410 000</span>
                </a>
              </div>
            </div>

            {/* Fast Facts Bar for this Airport */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/15">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
                <div className="text-[11px] uppercase tracking-wider text-[#bea166] font-semibold mb-1">
                  Distance to CBD
                </div>
                <div className="text-base sm:text-lg font-bold text-white">
                  {distanceToCbd}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
                <div className="text-[11px] uppercase tracking-wider text-[#bea166] font-semibold mb-1">
                  Est. Travel Time
                </div>
                <div className="text-base sm:text-lg font-bold text-white">
                  {travelTimeToCbd}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
                <div className="text-[11px] uppercase tracking-wider text-[#bea166] font-semibold mb-1">
                  Flight Tracking
                </div>
                <div className="text-base sm:text-lg font-bold text-white">
                  Live & Automated
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
                <div className="text-[11px] uppercase tracking-wider text-[#bea166] font-semibold mb-1">
                  Terminal Pick-Up
                </div>
                <div className="text-base sm:text-lg font-bold text-white">
                  Meet & Greet Inside
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Booking Strip */}
        <section className="bg-[#101b33] border-t border-b border-[#22365e] py-6 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#bea166]/20 border border-[#bea166]/40 flex items-center justify-center text-[#bea166] flex-shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Need a Chauffeur to or from {airportName}?
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Fixed pricing, professional meet-and-greet in the arrivals hall, and 24/7 dedicated dispatch.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full lg:w-auto">
              <button
                onClick={handleOpenBooking}
                className="w-full sm:w-auto bg-[#bea166] hover:bg-[#a88d55] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-7 py-3 rounded transition-all shadow-md active:scale-95"
              >
                Book Now & Calculate Fare
              </button>
            </div>
          </div>
        </section>

        {/* Service Overview & Narrative */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image side */}
              <div className="lg:col-span-6 relative">
                <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/HUG2201_Photo116-1-500x500.jpg"
                    alt={`SYD Chauffeur Service ${city}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 bg-[#152442]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
                    <p className="text-xs font-semibold text-[#bea166] uppercase tracking-wider mb-1">
                      {city} Chauffeur Distinction
                    </p>
                    <p className="text-sm font-light">
                      &quot;Punctual, discrete, and beautifully maintained vehicles. SYD is our trusted corporate transfer partner in {city}.&quot;
                    </p>
                  </div>
                </div>
                {/* Established badge */}
                <div className="hidden sm:block absolute -top-4 -right-4 bg-[#bea166] text-white text-xs font-bold uppercase tracking-widest py-3 px-5 rounded-lg shadow-xl">
                  Established 1904
                </div>
              </div>

              {/* Text content side */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#bea166]">
                    SYD CHAUFFEUR SERVICE
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] leading-tight">
                    Professional Chauffeured Transfers to &amp; from {airportName}
                  </h2>
                </div>

                {overviewParagraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {para}
                  </p>
                ))}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#bea166]/20 text-[#bea166] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-800">
                      Inside terminal meet &amp; greet
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#bea166]/20 text-[#bea166] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-800">
                      Real-time flight delay tracking
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#bea166]/20 text-[#bea166] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-800">
                      Full luggage assistance
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#bea166]/20 text-[#bea166] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-800">
                      Fixed flat rate with zero surge
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    onClick={handleOpenBooking}
                    className="bg-[#152442] hover:bg-[#22365e] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-3.5 rounded transition-all shadow-md active:scale-95"
                  >
                    Book Your {city} Chauffeur
                  </button>
                  <a
                    href="tel:+61404410000"
                    className="border border-[#152442] text-[#152442] hover:bg-[#152442] hover:text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3.5 rounded transition-all"
                  >
                    +61 404 410 000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Routes & Travel Times */}
        <section className="py-20 bg-[#f8f9fa] border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] mb-2 block">
                POPULAR TRANSFERS &amp; TRAVEL TIMES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] mb-4">
                Popular Destinations from {airportName}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                SYD provides seamless direct transfers connecting {airportName} with central business precincts, coastal resorts, stadiums, and regional wine valleys.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularRoutes.map((route, rIdx) => (
                <div
                  key={rIdx}
                  className="bg-white rounded-xl border border-gray-200/90 p-6 shadow-sm hover:shadow-xl hover:border-[#bea166]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#bea166] bg-[#bea166]/10 px-2.5 py-1 rounded">
                        {route.distance}
                      </span>
                      <span className="text-xs font-semibold text-gray-500 flex items-center">
                        <svg className="w-3.5 h-3.5 mr-1 text-[#bea166]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {route.time}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#152442] mb-2">
                      {route.name}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {route.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400">
                      Door-to-door luxury
                    </span>
                    <button
                      onClick={handleOpenBooking}
                      className="text-xs font-bold text-[#bea166] hover:text-[#152442] uppercase tracking-wider transition"
                    >
                      Book Route →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Terminal Meeting Points Guide for this City */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-14">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] mb-2 block">
                TERMINAL MEETING INSTRUCTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] mb-4">
                Where to Meet Your Chauffeur at {airportName}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Enjoy an authentic inside-terminal meet-and-greet service. Your driver will be positioned inside the arrivals hall holding an iPad displaying your name.
              </p>
            </div>

            <div className="bg-[#152442] text-white rounded-2xl p-8 sm:p-12 shadow-xl space-y-6">
              <div className="flex items-center space-x-3 border-b border-[#2a4783] pb-4">
                <span className="w-3 h-3 rounded-full bg-[#bea166] animate-pulse" />
                <h3 className="text-xl font-bold">
                  {airportName} Designated Pick-Up Points
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center space-x-2 text-[#bea166]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <h4 className="text-xs uppercase font-bold tracking-wider">
                      Domestic Arrivals
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                    {meetingPoints.domestic}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center space-x-2 text-[#bea166]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="text-xs uppercase font-bold tracking-wider">
                      International Arrivals
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                    {meetingPoints.international}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 leading-relaxed">
                <span className="font-semibold text-white">Chauffeur Protocol: </span>
                {meetingPoints.instructions}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#2a4783]">
                <div className="flex items-center space-x-2 text-xs text-gray-300">
                  <span className="text-[#bea166] text-lg font-bold">★</span>
                  <span>Can’t locate your chauffeur upon landing? Contact our 24/7 Operations Desk immediately.</span>
                </div>
                <a
                  href="tel:+61404410000"
                  className="bg-[#bea166] hover:bg-[#a88d55] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded transition"
                >
                  Call +61 404 410 000
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Fleet Options */}
        <section className="py-20 bg-[#152442] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] mb-2 block">
                OUR VEHICLE SELECTION IN {city.toUpperCase()}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Tailored Luxury Vehicles for {city}
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Travel in pristine comfort with our extensive fleet of late-model European sedans, spacious luxury SUVs, people movers, and coaches.
              </p>
            </div>

            {/* Fleet Tab Switcher */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
              {[
                { id: "executive", label: "Executive Sedans" },
                { id: "premium", label: "Premium Sedans" },
                { id: "suv", label: "Luxury SUVs" },
                { id: "van", label: "People Movers" },
                { id: "minibus", label: "Minibuses & Coaches" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFleet(tab.id)}
                  className={`text-xs sm:text-sm font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all ${selectedFleet === tab.id
                    ? "bg-[#bea166] text-white shadow-lg"
                    : "bg-[#22365e] text-gray-300 hover:bg-[#2a4783] hover:text-white"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Selected Vehicle Card */}
            {(() => {
              const car = fleetOptions[selectedFleet] || fleetOptions.executive;
              return (
                <div className="bg-[#1c2e54] border border-[#2a4783] rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                  <div className="lg:col-span-6 relative h-[280px] sm:h-[360px] rounded-xl overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-xs text-gray-200">
                      <span className="font-semibold text-white">{car.models}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-6">
                    <div>
                      <span className="text-xs uppercase font-bold tracking-widest text-[#bea166]">
                        VEHICLE SPECIFICATION
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-2">
                        {car.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {car.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-[#2a4783]">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-[#bea166]/20 flex items-center justify-center text-[#bea166]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Capacity</div>
                          <div className="text-xs sm:text-sm font-bold text-white">{car.passengers}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-[#bea166]/20 flex items-center justify-center text-[#bea166]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Luggage Room</div>
                          <div className="text-xs sm:text-sm font-bold text-white">{car.luggage}</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {car.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2 text-xs text-gray-300">
                          <span className="text-[#bea166] font-bold">✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex flex-wrap gap-4">
                      <button
                        onClick={handleOpenBooking}
                        className="bg-[#bea166] hover:bg-[#a88d55] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-3 rounded transition-all shadow-lg active:scale-95"
                      >
                        Book This Vehicle
                      </button>

                      <button
                        onClick={handleOpenBooking}
                        className="border border-white/30 text-white hover:bg-white hover:text-[#152442] text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded transition-all active:scale-95"
                      >
                        Instant Fare Quote
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* 4-Step Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] mb-2 block">
                HOW IT WORKS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] mb-4">
                Your Seamless {city} Airport Transfer
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                From initial booking to your final destination, enjoy seamless travel with SYD.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#f8f9fa] rounded-xl p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between"
                >
                  <div className="text-4xl font-black text-[#bea166]/40 mb-4 font-mono">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-[#152442] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City-Specific FAQs */}
        <section className="py-20 bg-[#f8f9fa] border-t border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-14">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] mb-2 block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] mb-4">
                {cityName} FAQs
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Got questions about your {city} airport transfer? Find answers regarding meeting points, flight delays, and bookings.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition bg-white"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-4.5 hover:bg-gray-50 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#152442]"
                  >
                    <span>{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-[#bea166] transform transition-transform duration-200 flex-shrink-0 ${activeFaq === idx ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {activeFaq === idx && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Other Airport Transfers */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-xl font-bold text-[#152442]">
                  Explore Other Airport Transfer Locations
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  SYD provides nationwide chauffeur coverage across all Australian capital cities and holiday destinations.
                </p>
              </div>
              <Link
                href="/airport-transfers"
                className="text-xs sm:text-sm font-semibold text-[#bea166] hover:text-[#152442] uppercase tracking-wider flex items-center"
              >
                <span>View All Hubs</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {allAirportLinks.map((item, idx) => {
                const itemSlug = item.href.split("/").pop();
                const isCurrent = itemSlug === slug;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className={`text-xs font-semibold px-4 py-2 rounded-lg border transition ${isCurrent
                      ? "bg-[#152442] text-white border-[#152442]"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:border-[#bea166] hover:text-[#152442]"
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="relative py-24 overflow-hidden bg-[#152442]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cta-bg.png"
              alt="SYD Airport Chauffeur Booking"
              fill
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#152442] via-[#152442]/90 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] mb-3 block">
                BOOK WITH AUSTRALIA&apos;S BEST
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                Ready to Book Your {cityName}?
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Reserve your luxury vehicle online with instant confirmation, or call our 24/7 customer service desk.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={handleOpenBooking}
                className="w-full sm:w-auto bg-[#bea166] hover:bg-[#a88d55] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded transition-all shadow-xl active:scale-95 text-center"
              >
                Book {city} Transfer
              </button>

              <a
                href="tel:+61404410000"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#152442] font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded transition-all shadow-xl active:scale-95 text-center flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                </svg>
                <span>Call +61 404 410 000</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
