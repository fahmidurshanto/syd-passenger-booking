"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import {
  servicesList,
  servicesOverviewStats,
  servicesOverviewFaqs,
} from "@/utils/servicesData";
import { fleetOptions } from "@/utils/fleetOptionsData";
import { brandPartners, whyChooseUsFeatures } from "@/utils/locationsData";

export default function ServicesPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedFleet, setSelectedFleet] = useState("executive");
  const [activeFaq, setActiveFaq] = useState(null);

  const handleOpenBooking = (serviceName = "") => {
    setPrefilledService(serviceName);
    setBookingModalOpen(true);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const categories = [
    { id: "all", label: "All Services" },
    { id: "Corporate & Business", label: "Corporate & Business" },
    { id: "Chauffeur & Executive", label: "Chauffeur & Executive" },
    { id: "Leisure & VIP", label: "Leisure & VIP" },
  ];

  const filteredServices = servicesList.filter((srv) => {
    if (activeCategory === "all") return true;
    return srv.category === activeCategory;
  });

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
              alt="SYD Nationwide Chauffeur Services Australia"
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
              <span className="text-white">Services</span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="max-w-3xl">
              <span className="inline-block bg-[#bea166]/20 border border-[#bea166]/50 text-[#bea166] text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                Premier Chauffeured Ground Transport
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                Nationwide chauffeur-driven transfer, tour and event transport services
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-2xl">
                Experience the SYD difference. From premium airport and corporate transfers to event transport and luxury tours, SYD delivers on all your transport needs across Australia and overseas.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  onClick={() => handleOpenBooking("")}
                  className="bg-[#bea166] hover:bg-[#a88d55] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded border-2 border-[#bea166] transition-all shadow-lg active:scale-95 flex items-center space-x-2"
                >
                  <span>Book Service Now</span>
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
              {servicesOverviewStats.map((stat, idx) => (
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Looking for a Custom Chauffeur Solution?
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Fixed pricing, consolidated corporate billing, and 24/7 dedicated dispatch across Australia and New Zealand.
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

        {/* Services Showcase Cards Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                BESPOKE GROUND TRANSPORT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] tracking-tight">
                Experience the SYD Difference
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                From premium airport and corporate transfers to event transport and luxury tours, SYD delivers on all your transport needs with exceptional attention to detail.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#152442] text-white shadow-md"
                      : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Services Grid (Modeled after Hughes Fancy Boxes) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((srv) => (
                <div
                  key={srv.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#bea166]/60 transition-all duration-300 group"
                >
                  <div>
                    {/* Image Header with Badge */}
                    <div className="relative h-60 w-full overflow-hidden bg-gray-900">
                      <Image
                        src={srv.cardImage}
                        alt={`${srv.name} Chauffeur Services`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#152442]/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                          {srv.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-2xl font-extrabold drop-shadow-sm">
                          {srv.name}
                        </h3>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {srv.shortDescription}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-gray-100">
                        {srv.features?.slice(0, 2).map((feat, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-700 font-medium">
                            <span className="text-[#bea166] mr-2 font-bold">✓</span>
                            <span>{feat.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between gap-3 mt-auto">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="text-xs font-bold uppercase tracking-wider text-[#152442] hover:text-[#bea166] flex items-center transition"
                    >
                      <span>Learn More</span>
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    <button
                      onClick={() => handleOpenBooking(srv.name)}
                      className="bg-[#bea166] hover:bg-[#a88d55] text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded transition shadow-sm active:scale-95"
                    >
                      Book Service
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chauffeur Standards Feature Section */}
        <section className="py-20 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative h-[440px] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                <Image
                  src="/images/HUG2201_Photo116-1-500x500.jpg"
                  alt="Professional SYD Chauffeur"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-[#152442]/90 backdrop-blur-md p-5 rounded-xl border border-white/10 text-white">
                  <span className="text-[#bea166] text-xs font-bold uppercase tracking-widest block mb-1">
                    CHAUFFEUR EXCELLENCE
                  </span>
                  <p className="text-sm font-light">
                    &quot;Your SYD Chauffeur: Professional, Experienced, Courteous, and Discreet. Handpicked for exemplary driving records and devotion to client hospitality.&quot;
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase font-bold tracking-widest text-[#bea166]">
                  UNCOMPROMISING SERVICE STANDARDS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] leading-tight">
                  Your Hughes & SYD Chauffeur Experience
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We handpick our chauffeurs for their exemplary driving records, experience with luxury hospitality, and commitment to customer care. Every driver undergoes thorough police background vetting, commercial accreditation, and defensive driving certification.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <h4 className="text-sm font-bold text-[#152442] mb-1">
                      Flawless Discretion
                    </h4>
                    <p className="text-xs text-gray-600">
                      Strict non-disclosure standards for executive and high-profile travellers.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <h4 className="text-sm font-bold text-[#152442] mb-1">
                      Extensive Route Knowledge
                    </h4>
                    <p className="text-xs text-gray-600">
                      Skilled navigation around traffic delays and major urban congestion.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <h4 className="text-sm font-bold text-[#152442] mb-1">
                      Luggage & Meet Care
                    </h4>
                    <p className="text-xs text-gray-600">
                      Complete baggage assistance and inside terminal welcome service.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <h4 className="text-sm font-bold text-[#152442] mb-1">
                      Immaculate Vehicles
                    </h4>
                    <p className="text-xs text-gray-600">
                      Pristine cleanliness, chilled bottled water, and mobile charging cables.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/about-us"
                    className="inline-block bg-[#152442] hover:bg-[#22365e] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded transition shadow-md"
                  >
                    Discover Our Driver Standards
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Showcase */}
        <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                CHAUFFEUR FLEET OPTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                A Vehicle to Suit Every Traveller
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Whether you are travelling solo, with colleagues, family, or as a large group, we have vehicle options for 1 to 54+ passengers.
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

        {/* Brand Partners */}
        <section className="py-16 bg-[#152442] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
              RECOGNIZED EXCELLENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-10">
              Trusted by Leading Airlines, Corporations & Hotels
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
              {brandPartners.slice(0, 6).map((brand, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center h-20 hover:bg-white/10 transition group"
                >
                  <div className="relative w-24 h-10">
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

        {/* FAQs Section */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                QUESTIONS & ANSWERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                Questions? We’re here to help!
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Our customer service team is on hand 24/7 to answer enquiries and keep you moving.
              </p>
            </div>

            <div className="space-y-4">
              {servicesOverviewFaqs.map((faq, idx) => {
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

        {/* App Download Strip */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="bg-gradient-to-r from-[#152442] to-[#223a6b] rounded-3xl p-8 sm:p-14 text-white overflow-hidden relative shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-7 space-y-5">
                  <span className="bg-[#bea166]/20 border border-[#bea166]/40 text-[#bea166] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
                    MOBILE CONVENIENCE
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    Download the SYD Mobile App
                  </h2>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl">
                    Most convenient way to schedule and track bookings across Australia. Real-time driver telemetry, automated flight tracking, and instant digital expense receipts.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href="https://apps.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block hover:opacity-90 transition active:scale-95"
                    >
                      <Image
                        src="/images/App-Store-1.png"
                        alt="Download SYD App on Apple App Store"
                        width={150}
                        height={46}
                        className="h-11 w-auto object-contain"
                      />
                    </a>
                    <a
                      href="https://play.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block hover:opacity-90 transition active:scale-95"
                    >
                      <Image
                        src="/images/Google-Play-1.png"
                        alt="Download SYD App on Google Play Store"
                        width={150}
                        height={46}
                        className="h-11 w-auto object-contain"
                      />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-64 h-80 sm:h-96">
                    <Image
                      src="/images/mobile-app-pop-up-image.png"
                      alt="SYD Chauffeur Mobile Application Preview"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
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
          defaultService={prefilledService}
        />
      )}

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking("")} />
    </div>
  );
}

