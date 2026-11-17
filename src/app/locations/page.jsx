"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import QuickBookingWidget from "@/components/booking/QuickBookingWidget";
import {
  locationsList,
  nationwideStats,
  officeLocations,
  brandPartners,
  locationsOverviewFaqs,
} from "@/utils/locationsData";
import { fleetOptions } from "@/utils/fleetOptionsData";

export default function LocationsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [prefilledCity, setPrefilledCity] = useState("");
  const [activeRegion, setActiveRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFleet, setSelectedFleet] = useState("executive");
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedOfficeTab, setSelectedOfficeTab] = useState("all");

  const handleOpenBooking = (cityName = "") => {
    setPrefilledCity(cityName);
    setBookingModalOpen(true);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const regions = [
    { id: "all", label: "All Locations" },
    { id: "New South Wales", label: "New South Wales" },
    { id: "Victoria", label: "Victoria" },
    { id: "Queensland", label: "Queensland" },
    { id: "Western Australia", label: "Western Australia" },
    { id: "South Australia", label: "South Australia" },
    { id: "Tasmania", label: "Tasmania" },
    { id: "Australian Capital Territory", label: "ACT" },
    { id: "Northern Territory", label: "Northern Territory" },
    { id: "New Zealand", label: "New Zealand" },
    { id: "International", label: "International" },
  ];

  const filteredLocations = locationsList.filter((loc) => {
    const matchesRegion =
      activeRegion === "all" ||
      loc.state === activeRegion ||
      loc.region === activeRegion;

    const matchesSearch =
      searchQuery.trim() === "" ||
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (loc.keyHubs && loc.keyHubs.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesRegion && matchesSearch;
  });

  const filteredOffices =
    selectedOfficeTab === "all"
      ? officeLocations
      : selectedOfficeTab === "australia"
      ? officeLocations.filter((o) => o.country === "Australia")
      : officeLocations.filter((o) => o.country !== "Australia");

  const currentFleet = fleetOptions[selectedFleet] || fleetOptions.executive;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header onOpenBooking={() => handleOpenBooking("")} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex flex-col justify-center pt-36 pb-20 overflow-hidden bg-[#152442]">
          {/* Background image & gradient overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/corporate.jpg"
              alt="SYD Nationwide Luxury Chauffeur Service Australia"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0d172a]/80 backdrop-brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#152442] via-transparent to-black/60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-[#bea166] mb-4 uppercase tracking-wider font-semibold">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-white">Locations</span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="max-w-3xl">
              <span className="inline-block bg-[#bea166]/20 border border-[#bea166]/50 text-[#bea166] text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                Australia’s Only Nationwide Chauffeur Service
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                Australia’s Only Nationwide Chauffeur Service
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-2xl">
                Premium transport, wherever you are. SYD delivers on all your transport needs with services across the country and now servicing key global destinations New Zealand & Singapore. From sleek sedans to spacious coaches, we have a vehicle for every passenger count and travel occasion.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  onClick={() => handleOpenBooking("")}
                  className="bg-[#bea166] hover:bg-[#a88d55] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded border-2 border-[#bea166] transition-all shadow-lg active:scale-95 flex items-center space-x-2"
                >
                  <span>Book Chauffeur Now</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <button
                  onClick={() => handleOpenBooking("")}
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

            {/* 5 Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 pt-8 border-t border-white/15">
              {nationwideStats.map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-3.5 text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#bea166] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-300 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Booking Strip */}
        <section className="bg-[#101b33] border-t border-b border-[#22365e] py-6 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#bea166]/20 border border-[#bea166]/40 flex items-center justify-center text-[#bea166] flex-shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Looking to Book a Chauffeur Anywhere in Australia?
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Fixed transparent pricing, 24/7 flight tracking, and dedicated meet-and-greet in every major city.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full lg:w-auto">
              <button
                onClick={() => handleOpenBooking("")}
                className="w-full sm:w-auto bg-[#bea166] hover:bg-[#a88d55] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-7 py-3 rounded transition-all shadow-md active:scale-95"
              >
                Calculate Fare & Book
              </button>
            </div>
          </div>
        </section>

        {/* Locations Directory Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                NATIONAL & INTERNATIONAL DESTINATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] tracking-tight">
                Premium transport, wherever you are
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                Hughes and SYD keep you moving across the country and overseas. Alongside our luxury airport and A-to-B transfers, we offer corporate travel, VIP delegations, and custom sightseeing tours.
              </p>
            </div>

            {/* Search and Filter Row */}
            <div className="mb-10 space-y-4">
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by city, state, or key airport..."
                    className="w-full bg-white border border-gray-300 rounded-full px-5 py-3 pl-11 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#bea166] shadow-sm transition"
                  />
                  <svg
                    className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Region Pills */}
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setActiveRegion(region.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      activeRegion === region.id
                        ? "bg-[#152442] text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {region.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Cards Grid */}
            {filteredLocations.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8">
                <p className="text-gray-500 text-base mb-4">
                  No destinations found matching &quot;{searchQuery}&quot;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveRegion("all");
                  }}
                  className="text-xs uppercase font-bold text-[#bea166] hover:underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredLocations.map((loc) => (
                  <div
                    key={loc.id}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#bea166]/60 transition-all duration-300 group"
                  >
                    <div>
                      {/* Image header */}
                      <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                        <Image
                          src={loc.cardImage || "/images/corporate.jpg"}
                          alt={`${loc.name} Chauffeur Service`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#152442]/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                            {loc.badge || loc.state}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-2xl font-extrabold drop-shadow-sm">
                            {loc.name}
                          </h3>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6">
                        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                          {loc.description}
                        </p>

                        {loc.keyHubs && (
                          <div className="pt-2 pb-3 border-t border-gray-100 text-xs text-gray-500">
                            <span className="font-semibold text-gray-700">Key Hubs:</span>{" "}
                            {loc.keyHubs}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between gap-3 mt-auto">
                      <Link
                        href={`/locations/${loc.slug}`}
                        className="text-xs font-bold uppercase tracking-wider text-[#152442] hover:text-[#bea166] flex items-center transition"
                      >
                        <span>View Location</span>
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>

                      <button
                        onClick={() => handleOpenBooking(loc.name)}
                        className="bg-[#bea166] hover:bg-[#a88d55] text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded transition shadow-sm active:scale-95"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Nationwide Presence & Regional Offices */}
        <section className="py-20 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs uppercase font-bold tracking-widest text-[#bea166]">
                  OCEANIA INFRASTRUCTURE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] leading-tight">
                  Over a Century of Transport Excellence
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  With 12 dedicated offices across Australia, New Zealand, and Singapore, SYD operates Australia’s only truly national chauffeured ground transport network.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Every city office is staffed by local dispatch specialists, live flight tracking controllers, and accredited professional chauffeurs equipped to meet your timetable 24 hours a day, 365 days a year.
                </p>

                {/* Office Filter Tabs */}
                <div className="flex space-x-2 pt-2">
                  <button
                    onClick={() => setSelectedOfficeTab("all")}
                    className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider ${
                      selectedOfficeTab === "all"
                        ? "bg-[#152442] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    All Offices ({officeLocations.length})
                  </button>
                  <button
                    onClick={() => setSelectedOfficeTab("australia")}
                    className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider ${
                      selectedOfficeTab === "australia"
                        ? "bg-[#152442] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Australia
                  </button>
                  <button
                    onClick={() => setSelectedOfficeTab("international")}
                    className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider ${
                      selectedOfficeTab === "international"
                        ? "bg-[#152442] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    International
                  </button>
                </div>
              </div>

              {/* Office Cards List */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
                  {filteredOffices.map((office, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-[#bea166] transition group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-[#152442] group-hover:text-[#2a4783] transition">
                          {office.city}
                        </h4>
                        {office.isHQ && (
                          <span className="bg-[#bea166] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                            HQ Hub
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mb-1 font-medium">
                        {office.address}
                      </div>
                      <div className="text-xs text-gray-400 mb-3">
                        {office.state}, {office.country}
                      </div>
                      <div className="pt-2 border-t border-gray-200 flex items-center justify-between text-xs">
                        <a
                          href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                          className="text-[#2a4783] hover:text-[#bea166] font-semibold transition"
                        >
                          {office.phone}
                        </a>
                        <span className="text-[11px] text-green-700 font-semibold bg-green-50 px-2 py-0.5 rounded">
                          24/7 Active
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Partners Showcase */}
        <section className="py-16 bg-[#152442] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
              CORPORATE EXCELLENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-10">
              Travel in Style with the Chauffeur Service Trusted by Top Brands
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
              {brandPartners.slice(0, 6).map((brand, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center h-24 hover:bg-white/10 transition group"
                >
                  <div className="relative w-28 h-12">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition opacity-80 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Showcase */}
        <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                THE SYD CHAUFFEUR FLEET
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                A Vehicle to Suit Every Traveller
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                From executive solo commuters to large tour delegations, our modern European fleet guarantees consistent elegance in every city.
              </p>
            </div>

            {/* Fleet Type Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {Object.keys(fleetOptions).map((key) => {
                const opt = fleetOptions[key];
                const isActive = selectedFleet === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedFleet(key)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      isActive
                        ? "bg-[#152442] text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {opt.name.split(" ")[0]} {opt.name.split(" ")[1] || ""}
                  </button>
                );
              })}
            </div>

            {/* Selected Vehicle Card */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={currentFleet.image}
                    alt={currentFleet.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-block bg-[#bea166]/15 text-[#8c7138] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
                    {currentFleet.passengers} • {currentFleet.luggage}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#152442]">
                    {currentFleet.name}
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {currentFleet.models}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {currentFleet.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {currentFleet.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-700 font-medium">
                        <span className="text-[#bea166] font-bold">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={() => handleOpenBooking("")}
                      className="bg-[#bea166] hover:bg-[#a88d55] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded transition shadow-md active:scale-95"
                    >
                      Book This Vehicle
                    </button>
                    <Link
                      href="/fleet"
                      className="text-xs font-bold uppercase tracking-wider text-[#152442] hover:text-[#bea166] transition"
                    >
                      Explore Full Fleet →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                HAVE QUESTIONS?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                Nationwide Chauffeur Services FAQs
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Everything you need to know about booking chauffeur transport across Australia and internationally.
              </p>
            </div>

            <div className="space-y-4">
              {locationsOverviewFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden transition"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between space-x-4 focus:outline-none"
                    >
                      <span className="text-base font-bold text-[#152442]">
                        {faq.q}
                      </span>
                      <span className="text-[#bea166] text-xl font-bold flex-shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final Booking Callout Strip */}
        <section className="py-16 bg-[#152442] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
                Ready to Experience First-Class Chauffeur Travel?
              </h3>
              <p className="text-gray-300 text-sm max-w-xl">
                Book online in 60 seconds with instant confirmation, live vehicle tracking, and 24/7 client dispatch.
              </p>
            </div>
            <div className="flex items-center space-x-4 flex-shrink-0">
              <button
                onClick={() => handleOpenBooking("")}
                className="bg-[#bea166] hover:bg-[#a88d55] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-3.5 rounded transition shadow-lg active:scale-95"
              >
                Book Now
              </button>
              <a
                href="tel:+61404410000"
                className="border border-white/30 text-white hover:bg-white/10 text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3.5 rounded transition"
              >
                Call 24/7 Team
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Booking Modal */}
      {bookingModalOpen && (
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          defaultCity={prefilledCity}
        />
      )}

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking("")} />
    </div>
  );
}
