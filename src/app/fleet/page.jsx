"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import {
  fleetList,
  fleetOverviewStats,
  fleetOverviewFaqs,
} from "@/utils/fleetData";
import { brandPartners } from "@/utils/locationsData";

export default function FleetPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [prefilledVehicle, setPrefilledVehicle] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFaq, setActiveFaq] = useState(null);

  const handleOpenBooking = (vehicleName = "") => {
    setPrefilledVehicle(vehicleName);
    setBookingModalOpen(true);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const categories = [
    { id: "all", label: "All Vehicles" },
    { id: "Luxury Sedans", label: "Luxury Sedans" },
    { id: "Flagship Luxury", label: "Flagship Luxury" },
    { id: "Luxury SUVs", label: "Luxury SUVs" },
    { id: "Group Transport", label: "Group Transport" },
    { id: "Large Coach Transport", label: "Touring Coaches" },
  ];

  const filteredFleet = fleetList.filter((veh) => {
    if (activeCategory === "all") return true;
    return veh.category === activeCategory;
  });

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
              src="/images/fleet/fleet-bg.jpg"
              alt="SYD Chauffeur Fleet Australia"
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
              <span className="text-white">The Fleet</span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="max-w-3xl">
              <span className="inline-block bg-[#bea166]/20 border border-[#bea166]/50 text-[#bea166] text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                Australia’s Premier Luxury Chauffeur Fleet
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                Our Fleet
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-2xl">
                Discover our distinguished fleet of hired luxury vehicles, setting the stage for an extraordinary travel experience. From elegant sedans to spacious coaches, we offer a diverse range of prestige vehicles tailored to your exact journey.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  onClick={() => handleOpenBooking("")}
                  className="bg-[#bea166] hover:bg-[#a88d55] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded border-2 border-[#bea166] transition-all shadow-lg active:scale-95 flex items-center space-x-2"
                >
                  <span>Book A Vehicle Now</span>
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
              {fleetOverviewStats.map((stat, idx) => (
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Not Sure Which Vehicle Suits Your Needs?
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Read luggage allowances below or get an instant calculated quote for your passenger count.
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

        {/* Fleet Directory Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                METICULOUSLY MAINTAINED
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] tracking-tight">
                A Vehicle To Suit Every Traveller
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                Whether you are looking for a luxury limousine, executive sedan, all-wheel drive SUV, or spacious group coaches, SYD provides a prestige vehicle option for 1 to 54+ passengers.
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

            {/* Fleet Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFleet.map((veh) => (
                <div
                  key={veh.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#bea166]/60 transition-all duration-300 group"
                >
                  <div>
                    {/* Image Header with Badge */}
                    <div className="relative h-60 w-full overflow-hidden bg-gray-100 p-4 flex items-center justify-center">
                      <Image
                        src={veh.cardImage}
                        alt={`${veh.name} Luxury Chauffeur`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#152442]/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                          {veh.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-extrabold text-[#152442] mb-1">
                        {veh.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#bea166] uppercase tracking-wider mb-3">
                        {veh.models}
                      </p>

                      <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {veh.shortDescription}
                      </p>

                      {/* Specs Badges */}
                      <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-gray-100">
                        <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded font-medium flex items-center">
                          <span className="mr-1">👤</span> {veh.passengers}
                        </span>
                        <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded font-medium flex items-center">
                          <span className="mr-1">🧳</span> {veh.luggage}
                        </span>
                        {veh.smallBags && (
                          <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded font-medium flex items-center">
                            <span className="mr-1">💼</span> {veh.smallBags}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between gap-3 mt-auto">
                    <Link
                      href={`/fleet/${veh.slug}`}
                      className="text-xs font-bold uppercase tracking-wider text-[#152442] hover:text-[#bea166] flex items-center transition"
                    >
                      <span>Learn More</span>
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    <button
                      onClick={() => handleOpenBooking(veh.name)}
                      className="bg-[#bea166] hover:bg-[#a88d55] text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded transition shadow-sm active:scale-95"
                    >
                      Book Vehicle
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Fleet Difference Feature Section */}
        <section className="py-20 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative h-[440px] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                <Image
                  src="/images/image-gallery-2-900x500.jpg"
                  alt="SYD Chauffeur Vehicle Luxury Interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-[#152442]/90 backdrop-blur-md p-5 rounded-xl border border-white/10 text-white">
                  <span className="text-[#bea166] text-xs font-bold uppercase tracking-widest block mb-1">
                    FLEET INTEGRITY
                  </span>
                  <p className="text-sm font-light">
                    &quot;Our vehicles are retired before reaching 3 years of service to ensure every client enjoys the latest in safety, acoustics, and European craftsmanship.&quot;
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase font-bold tracking-widest text-[#bea166]">
                  METICULOUS MOTORING STANDARDS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] leading-tight">
                  Discover Our Distinguished Fleet Standards
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Every vehicle in the SYD fleet is subject to stringent mechanical audits, scheduled manufacturer servicing, and comprehensive daily detailing. We invest exclusively in top-tier European marques known for executive poise and safety.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <h4 className="text-sm font-bold text-[#152442] mb-1">
                      Acoustic Sound Insulation
                    </h4>
                    <p className="text-xs text-gray-600">
                      Whisper-quiet cabins designed for private calls and restful transit.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <h4 className="text-sm font-bold text-[#152442] mb-1">
                      Complimentary Amenities
                    </h4>
                    <p className="text-xs text-gray-600">
                      Chilled bottled spring water, mints, and charging ports in every car.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <h4 className="text-sm font-bold text-[#152442] mb-1">
                      Luggage Capacity Assurance
                    </h4>
                    <p className="text-xs text-gray-600">
                      Clear capacity limits and optional weatherproof trailers for large groups.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <h4 className="text-sm font-bold text-[#152442] mb-1">
                      GPS Dispatch Telemetry
                    </h4>
                    <p className="text-xs text-gray-600">
                      Real-time vehicle location and arrival tracking via the SYD App.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleOpenBooking("")}
                    className="inline-block bg-[#152442] hover:bg-[#22365e] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded transition shadow-md active:scale-95"
                  >
                    Reserve A Luxury Vehicle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Partners */}
        <section className="py-16 bg-[#152442] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
              INDUSTRY TRUST
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-10">
              The Chauffeur Fleet Trusted by Top Brands
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
                FLEET & LUGGAGE ASSISTANCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                Questions? We’re here to help!
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Everything you need to know about luggage limits, vehicle selection, and group arrangements.
              </p>
            </div>

            <div className="space-y-4">
              {fleetOverviewFaqs.map((faq, idx) => {
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
          defaultVehicle={prefilledVehicle}
        />
      )}

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking("")} />
    </div>
  );
}

