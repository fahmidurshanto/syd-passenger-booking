"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import QuickBookingWidget from "@/components/booking/QuickBookingWidget";
import {
  getLocationBySlug,
  whyChooseUsFeatures,
  brandPartners,
} from "@/utils/locationsData";
import { fleetOptions } from "@/utils/fleetOptionsData";

export default function ClientLocationView({ slug }) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedFleet, setSelectedFleet] = useState("executive");
  const [activeFaq, setActiveFaq] = useState(null);

  const location = getLocationBySlug(slug);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  if (!location) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#152442] text-white p-6">
        <h1 className="text-3xl font-bold mb-4">Location Not Found</h1>
        <p className="text-gray-300 mb-6">We could not locate this destination.</p>
        <Link
          href="/locations"
          className="bg-[#bea166] text-white px-6 py-3 rounded text-sm font-semibold uppercase tracking-wider"
        >
          View All Locations
        </Link>
      </div>
    );
  }

  const currentFleet = fleetOptions[selectedFleet] || fleetOptions.executive;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex flex-col justify-center pt-36 pb-20 overflow-hidden bg-[#152442]">
          {/* Background image & gradient overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={location.coverImage || "/images/service-7.jpg"}
              alt={`${location.name} Luxury Chauffeur Transfers`}
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
              <Link href="/locations" className="hover:text-white transition">Locations</Link>
              <span className="text-gray-400">/</span>
              <span className="text-white">{location.name}</span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="max-w-3xl">
              <span className="inline-block bg-[#bea166]/20 border border-[#bea166]/50 text-[#bea166] text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                Chauffeur Service {location.name} & Surrounds
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                {location.heroTitle}
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-2xl">
                {location.heroSubtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  onClick={handleOpenBooking}
                  className="bg-[#bea166] hover:bg-[#a88d55] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded border-2 border-[#bea166] transition-all shadow-lg active:scale-95 flex items-center space-x-2"
                >
                  <span>Book {location.name} Chauffeur</span>
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
                  href="tel:+6140441000+"
                  className="border-2 border-transparent text-[#bea166] hover:text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-4 py-3.5 rounded transition-all flex items-center space-x-2"
                >
                  <svg className="w-4 h-4 mr-1 text-[#bea166]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                  </svg>
                  <span>+61 404 410 000</span>
                </a>
              </div>
            </div>

            {/* Quick Badges / Airports Serviced */}
            {location.airportsServiced && location.airportsServiced.length > 0 && (
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-3">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  Airports Serviced:
                </span>
                {location.airportsServiced.map((apt, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 border border-white/15 text-gray-200 text-xs px-3 py-1 rounded-full flex items-center space-x-1.5"
                  >
                    <span className="font-bold text-[#bea166]">{apt.code}</span>
                    <span>• {apt.name}</span>
                    {apt.transferTime && (
                      <span className="text-gray-400 text-[11px]">
                        ({apt.transferTime})
                      </span>
                    )}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Quick Booking Strip */}
        <section className="bg-[#101b33] border-t border-b border-[#22365e] py-6 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#bea166]/20 border border-[#bea166]/40 flex items-center justify-center text-[#bea166] flex-shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Need an Immediate Chauffeur in {location.name}?
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Instant fixed pricing with flight tracking and 24/7 dedicated dispatch.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full lg:w-auto">
              <button
                onClick={handleOpenBooking}
                className="w-full sm:w-auto bg-[#bea166] hover:bg-[#a88d55] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-7 py-3 rounded transition-all shadow-md active:scale-95"
              >
                Calculate Fare & Book
              </button>
            </div>
          </div>
        </section>

        {/* 7 Why Choose Us Highlights (Hughes feature cards) */}
        <section className="py-20 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                THE SYD ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                Premium {location.name} transport and airport transfers
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Make the most of your time in {location.name}, get down to business or see the sights with premium chauffeur driven transfers from SYD.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUsFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#bea166] transition duration-300 flex flex-col justify-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#152442]/5 flex items-center justify-center mb-4">
                    <Image
                      src={feat.icon}
                      alt={feat.title}
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <h3 className="text-base font-bold text-[#152442] mb-2 leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}

              {/* Extra Summary Tile */}
              <div className="bg-[#152442] text-white border border-[#152442] rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[#bea166] text-xs font-bold uppercase tracking-widest block mb-2">
                    ESTABLISHED 1904
                  </span>
                  <h3 className="text-lg font-bold mb-2">
                    Guaranteed Flat-Rate Fares
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    Never worry about surge pricing or cancellation fees. Every booking is confirmed upfront with professional flight tracking.
                  </p>
                </div>
                <button
                  onClick={handleOpenBooking}
                  className="bg-[#bea166] hover:bg-[#a88d55] text-white text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded text-center transition"
                >
                  Book Chauffeur
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Split Section: Discover Region & What Chauffeur Services We Offer */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="mb-14">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                REGIONAL EXPLORATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                See the {location.name} region in style
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Discover Location Region */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-2xl font-bold text-[#152442]">
                  {location.discover?.heading || `Discover ${location.name} region`}
                </h3>

                <p className="text-base text-gray-700 leading-relaxed font-normal">
                  {location.discover?.lead || location.description}
                </p>

                {location.discover?.paragraphs &&
                  location.discover.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {p}
                    </p>
                  ))}

                {/* Popular Local Attractions */}
                {location.discover?.attractions && location.discover.attractions.length > 0 && (
                  <div className="pt-4 space-y-4">
                    <h4 className="text-lg font-bold text-[#152442]">
                      Popular Local Attractions Include:
                    </h4>
                    <div className="space-y-3">
                      {location.discover.attractions.map((att, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-[#bea166] transition"
                        >
                          <div className="text-sm font-bold text-[#152442] mb-1">
                            {att.name}
                          </div>
                          <div className="text-xs text-gray-600 leading-relaxed">
                            {att.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: What Chauffeur Services We Offer */}
              <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#152442] mb-3">
                    What Chauffeur Services We Offer in {location.name} region
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    We offer premium chauffeur-driven {location.name} transport, including:
                  </p>
                </div>

                <ul className="space-y-3">
                  {(location.servicesOffered || [
                    `${location.name} Airport Transfers`,
                    `${location.name} Corporate Transfers`,
                    `${location.name} Private Driver & Hourly As-Directed`,
                    `${location.name} Conference and Event Services`,
                    `${location.name} All Day Hire`,
                    `${location.name} & Surrounds Luxury Tours`,
                  ]).map((service, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm font-medium text-gray-800">
                      <span className="w-5 h-5 rounded-full bg-[#bea166]/20 text-[#bea166] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                        ✓
                      </span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-200">
                  <div className="bg-[#152442] text-white rounded-xl p-5 text-center space-y-3">
                    <h4 className="text-base font-bold">
                      Need a Custom Itinerary in {location.name}?
                    </h4>
                    <p className="text-xs text-gray-300">
                      Speak directly with our regional dispatch specialists for bespoke routes or group coordination.
                    </p>
                    <button
                      onClick={handleOpenBooking}
                      className="w-full bg-[#bea166] hover:bg-[#a88d55] text-white text-xs font-semibold uppercase tracking-wider py-3 rounded transition shadow-md active:scale-95"
                    >
                      Request Chauffeur Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Transfer Routes & Times Table */}
        {location.popularRoutes && location.popularRoutes.length > 0 && (
          <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                  POPULAR ITINERARIES
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                  Key Transfer Routes in {location.name}
                </h2>
                <p className="mt-3 text-sm text-gray-600">
                  Estimated travel times and distances for frequent journeys in and around {location.name}.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {location.popularRoutes.map((route, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-[#bea166] transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#bea166] bg-[#bea166]/10 px-2.5 py-1 rounded">
                          {route.time}
                        </span>
                        <span className="text-xs font-mono text-gray-400">
                          {route.distance}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-[#152442] mb-1">
                        {route.from}
                      </h4>
                      <div className="text-xs text-gray-400 font-semibold mb-1">
                        to
                      </div>
                      <h4 className="text-base font-bold text-[#2a4783] mb-3">
                        {route.to}
                      </h4>
                      {route.desc && (
                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                          {route.desc}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] text-gray-400 font-medium">
                        Flight tracking included
                      </span>
                      <button
                        onClick={handleOpenBooking}
                        className="text-xs font-bold uppercase tracking-wider text-[#bea166] hover:text-[#152442] transition"
                      >
                        Book Route →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Brand Trust Section */}
        <section className="py-16 bg-[#152442] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
              ESTEEMED CLIENTELE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-10">
              Travel in Style with the {location.name} Chauffeur Service Trusted by Top Brands
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

        {/* Fleet Showcase */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                LUXURY TRANSPORTATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                A Vehicle to Suit Every Traveller
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Pristine luxury sedans, spacious executive SUVs, and people movers servicing {location.name} and regional Australia.
              </p>
            </div>

            {/* Fleet Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {Object.keys(fleetOptions).map((key) => {
                const opt = fleetOptions[key];
                const isActive = selectedFleet === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedFleet(key)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${isActive
                      ? "bg-[#152442] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    {opt.name.split(" ")[0]} {opt.name.split(" ")[1] || ""}
                  </button>
                );
              })}
            </div>

            {/* Selected Vehicle Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-lg p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-xl overflow-hidden bg-white shadow-inner">
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
                      onClick={handleOpenBooking}
                      className="bg-[#bea166] hover:bg-[#a88d55] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded transition shadow-md active:scale-95"
                    >
                      Book for {location.name}
                    </button>
                    <Link
                      href="/fleet"
                      className="text-xs font-bold uppercase tracking-wider text-[#152442] hover:text-[#bea166] transition"
                    >
                      View Fleet Specs →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        {location.faqs && location.faqs.length > 0 && (
          <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-8">
              <div className="text-center mb-12">
                <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                  LOCAL FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                  {location.name} Chauffeur FAQs
                </h2>
                <p className="mt-3 text-sm text-gray-600">
                  Common questions about airport transfers, event transport, and private hire in {location.name}.
                </p>
              </div>

              <div className="space-y-4">
                {location.faqs.map((faq, idx) => {
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
        )}

        {/* Final Booking Callout Strip */}
        <section className="py-16 bg-[#152442] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
                Ready to Book Your {location.name} Chauffeur?
              </h3>
              <p className="text-gray-300 text-sm max-w-xl">
                Experience stress-free travel with guaranteed flat-rate pricing, 24/7 flight tracking, and courteous accredited chauffeurs.
              </p>
            </div>
            <div className="flex items-center space-x-4 flex-shrink-0">
              <button
                onClick={handleOpenBooking}
                className="bg-[#bea166] hover:bg-[#a88d55] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-3.5 rounded transition shadow-lg active:scale-95"
              >
                Book Now
              </button>
              <a
                href="tel:+6140441000+"
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
          defaultCity={location.name}
        />
      )}

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />
    </div>
  );
}
