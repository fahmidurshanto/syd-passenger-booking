"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import { getFleetBySlug, fleetList } from "@/utils/fleetData";

export default function ClientFleetView({ slug }) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const vehicle = getFleetBySlug(slug);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  if (!vehicle) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#152442] text-white p-6">
        <h1 className="text-3xl font-bold mb-4">Vehicle Not Found</h1>
        <p className="text-gray-300 mb-6">We could not locate this vehicle category.</p>
        <Link
          href="/fleet"
          className="bg-[#bea166] text-white px-6 py-3 rounded text-sm font-semibold uppercase tracking-wider"
        >
          View All Vehicles
        </Link>
      </div>
    );
  }

  // Other vehicles in the fleet
  const otherVehicles = fleetList.filter((v) => v.id !== vehicle.id);

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
              src={vehicle.coverImage || "/images/fleet/fleet-bg.jpg"}
              alt={`${vehicle.name} Australia`}
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
              <Link href="/fleet" className="hover:text-white transition">The Fleet</Link>
              <span className="text-gray-400">/</span>
              <span className="text-white">{vehicle.name}</span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="max-w-3xl">
              <span className="inline-block bg-[#bea166]/20 border border-[#bea166]/50 text-[#bea166] text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                {vehicle.category} • {vehicle.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                {vehicle.heroTitle}
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-2xl">
                {vehicle.heroSubtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  onClick={handleOpenBooking}
                  className="bg-[#bea166] hover:bg-[#a88d55] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded border-2 border-[#bea166] transition-all shadow-lg active:scale-95 flex items-center space-x-2"
                >
                  <span>Book {vehicle.name}</span>
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

            {/* Quick Capacity Badges */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-3 text-xs text-gray-200">
              <span className="bg-white/10 border border-white/15 px-3 py-1.5 rounded-full flex items-center">
                <span className="text-[#bea166] font-bold mr-1.5">👤 Passengers:</span> {vehicle.passengers}
              </span>
              <span className="bg-white/10 border border-white/15 px-3 py-1.5 rounded-full flex items-center">
                <span className="text-[#bea166] font-bold mr-1.5">🧳 Luggage:</span> {vehicle.luggage}
              </span>
              {vehicle.smallBags && (
                <span className="bg-white/10 border border-white/15 px-3 py-1.5 rounded-full flex items-center">
                  <span className="text-[#bea166] font-bold mr-1.5">💼 Carry-On:</span> {vehicle.smallBags}
                </span>
              )}
              <span className="bg-white/10 border border-white/15 px-3 py-1.5 rounded-full flex items-center">
                <span className="text-[#bea166] font-bold mr-1.5">🚗 Models:</span> {vehicle.models}
              </span>
            </div>
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
                  Reserve Your {vehicle.name} with Confidence
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Fixed pricing, 24/7 flight tracking, and dedicated meet-and-greet in every major Australian city.
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

        {/* Detailed Overview: Luxury on Demand */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block">
                  THE CHAUFFEUR EXPERIENCE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] leading-tight">
                  {vehicle.name}: Luxury on Demand, Anytime, Anywhere
                </h2>

                {vehicle.overview?.map((paragraph, idx) => (
                  <p key={idx} className="text-base text-gray-600 leading-relaxed font-normal">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-2">
                  <button
                    onClick={handleOpenBooking}
                    className="bg-[#152442] hover:bg-[#22365e] text-white text-xs font-semibold uppercase tracking-wider px-8 py-3.5 rounded transition shadow-md active:scale-95"
                  >
                    Reserve {vehicle.name} Today
                  </button>
                </div>
              </div>

              {/* Large Vehicle Card */}
              <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-white p-4 flex items-center justify-center shadow-inner">
                  <Image
                    src={vehicle.cardImage}
                    alt={vehicle.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#152442]">{vehicle.name}</span>
                    <span className="bg-[#bea166]/15 text-[#8c7138] text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {vehicle.passengers}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {vehicle.models}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {vehicle.shortDescription}
                  </p>
                </div>

                <button
                  onClick={handleOpenBooking}
                  className="w-full bg-[#bea166] hover:bg-[#a88d55] text-white text-xs font-semibold uppercase tracking-wider py-3.5 rounded transition shadow-md active:scale-95 text-center"
                >
                  Book This Vehicle Class
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications & Features */}
        <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                METICULOUS DETAIL
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                Vehicle Specifications & Inclusions
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Specifications Table */}
              <div className="lg:col-span-6 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-4">
                <h3 className="text-xl font-bold text-[#152442] mb-4 pb-3 border-b border-gray-100">
                  Capacity & Engineering
                </h3>
                <div className="divide-y divide-gray-100">
                  {vehicle.specifications?.map((spec, idx) => (
                    <div key={idx} className="py-3 flex items-center justify-between text-sm">
                      <span className="text-gray-500 font-medium">{spec.label}</span>
                      <span className="text-[#152442] font-bold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Luxury Inclusions */}
              <div className="lg:col-span-6 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-4">
                <h3 className="text-xl font-bold text-[#152442] mb-4 pb-3 border-b border-gray-100">
                  Passenger Comfort & Amenities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {vehicle.features?.map((feat, idx) => (
                    <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3.5 flex items-start space-x-2.5">
                      <span className="text-[#bea166] font-bold text-sm mt-0.5">✓</span>
                      <span className="text-xs text-gray-700 font-medium leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For */}
                {vehicle.idealFor && (
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider mb-2">
                      Ideal Travel Occasions:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.idealFor.map((item, idx) => (
                        <span key={idx} className="bg-[#152442]/5 text-[#152442] text-xs px-3 py-1 rounded-full font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Our Range of Vehicles (Browse other vehicles) */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                EXPLORE FLEET
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                Our Range of Vehicles
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                Whether you need a flagship limousine or group minibuses, browse our other prestige vehicles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherVehicles.slice(0, 3).map((other) => (
                <div
                  key={other.id}
                  className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden p-6 flex flex-col justify-between hover:border-[#bea166] hover:shadow-lg transition group"
                >
                  <div>
                    <div className="relative h-44 w-full bg-white rounded-xl overflow-hidden mb-4 p-2 flex items-center justify-center shadow-inner">
                      <Image
                        src={other.cardImage}
                        alt={other.name}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#bea166] block mb-1">
                      {other.category}
                    </span>
                    <h4 className="text-lg font-bold text-[#152442] mb-1">
                      {other.name}
                    </h4>
                    <p className="text-xs text-gray-500 mb-3">
                      {other.passengers} • {other.luggage}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                    <Link
                      href={`/fleet/${other.slug}`}
                      className="text-xs font-bold uppercase tracking-wider text-[#152442] hover:text-[#bea166] transition"
                    >
                      View Details →
                    </Link>
                    <button
                      onClick={() => handleOpenBooking(other.name)}
                      className="bg-[#bea166] hover:bg-[#a88d55] text-white text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded transition"
                    >
                      Book
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        {vehicle.faqs && vehicle.faqs.length > 0 && (
          <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-8">
              <div className="text-center mb-12">
                <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                  {vehicle.name} FAQs
                </h2>
                <p className="mt-3 text-sm text-gray-600">
                  Common questions regarding passenger capacity, luggage allowances, and bookings.
                </p>
              </div>

              <div className="space-y-4">
                {vehicle.faqs.map((faq, idx) => {
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

        {/* App Download Strip */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="bg-gradient-to-r from-[#152442] to-[#223a6b] rounded-3xl p-8 sm:p-14 text-white overflow-hidden relative shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-7 space-y-5">
                  <span className="bg-[#bea166]/20 border border-[#bea166]/40 text-[#bea166] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
                    DOWNLOAD THE SYD APP
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
                Ready to Book Your {vehicle.name}?
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
          defaultVehicle={vehicle.name}
        />
      )}

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />
    </div>
  );
}

