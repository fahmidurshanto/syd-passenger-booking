"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import QuickBookingWidget from "@/components/booking/QuickBookingWidget";
import { keyStats } from "@/utils/keyStatsData";
import { features } from "@/utils/featuresData";
import { airports } from "@/utils/airportsData";
import { fleetOptions } from "@/utils/fleetOptionsData";
import { steps } from "@/utils/stepsData";
import { meetingPoints } from "@/utils/meetingPointsData";
import { faqs } from "@/utils/faqsData";

export default function AirportTransfersPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedMeetingTab, setSelectedMeetingTab] = useState("SYD");
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedFleet, setSelectedFleet] = useState("executive");

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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
              src="/images/airport.jpg"
              alt="SYD Airport Chauffeur Transfers Australia"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0d172a]/75 backdrop-brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#152442] via-transparent to-black/60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-[#bea166] mb-4 uppercase tracking-wider font-semibold">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span className="text-gray-400">/</span>
              <Link href="/services" className="hover:text-white transition">Services</Link>
              <span className="text-gray-400">/</span>
              <span className="text-white">Airport Transfers</span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="max-w-3xl">
              <span className="inline-block bg-[#bea166]/20 border border-[#bea166]/50 text-[#bea166] text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                Australia&apos;s National Airport Chauffeur Service
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                Luxury Airport Transfers Across Australia
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-2xl">
                Avoid the traffic, parking stress, and taxi queues. Experience dependable door-to-door airport transfers with professional meet-and-greet service, flight tracking, and fixed upfront pricing.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  onClick={handleOpenBooking}
                  className="bg-[#bea166] hover:bg-[#a88d55] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded border-2 border-[#bea166] transition-all shadow-lg active:scale-95 flex items-center space-x-2"
                >
                  <span>Book Airport Transfer</span>
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

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/15">
              {keyStats.map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#bea166] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Need an Immediate Airport Chauffeur?
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Instant fixed pricing with flight tracking and 24/7 terminal meet & greet across Australia.
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

        {/* Overview: The SYD Difference */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image with decorative border */}
              <div className="lg:col-span-6 relative">
                <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/HUG2201_Photo116-1-500x500.jpg"
                    alt="SYD Chauffeur Greeting Passenger at Airport"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 bg-[#152442]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
                    <p className="text-xs font-semibold text-[#bea166] uppercase tracking-wider mb-1">
                      First-Class Arrival Experience
                    </p>
                    <p className="text-sm font-light">
                      &quot;SYD makes arriving in any Australian capital effortless. Driver is always waiting, car is immaculate, and zero waiting in queues.&quot;
                    </p>
                  </div>
                </div>
                {/* Accent Badge */}
                <div className="hidden sm:block absolute -top-4 -right-4 bg-[#bea166] text-white text-xs font-bold uppercase tracking-widest py-3 px-5 rounded-lg shadow-xl">
                  Established 1904
                </div>
              </div>

              {/* Text content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#bea166]">
                    THE SYD EXPERIENCE
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] leading-tight">
                    On Time, Every Time. Stress-Free Airport Travel.
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Travelling to or from the airport shouldn’t be stressful. Whether you are catching an early morning domestic flight, arriving on a long-haul international journey, or organizing multi-city executive transfers, SYD provides a dependable luxury chauffeur service designed around your schedule.
                </p>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Unlike on-demand taxis or rideshares where wait times, surge pricing, and driver cancellations are common, SYD delivers guaranteed reservations, automated flight tracking, and uniformed chauffeurs who meet you directly inside the terminal arrivals area.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#bea166]/20 text-[#bea166] flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-800">
                      Inside terminal meet & greet
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#bea166]/20 text-[#bea166] flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-800">
                      Complimentary delay waiting time
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#bea166]/20 text-[#bea166] flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-800">
                      Complimentary luggage assistance
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#bea166]/20 text-[#bea166] flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-800">
                      Guaranteed flat pricing with no surge
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleOpenBooking}
                    className="bg-[#152442] hover:bg-[#22365e] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-3.5 rounded transition-all shadow-md active:scale-95"
                  >
                    Book Your Chauffeur Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Core Airport Transfer Benefits */}
        <section className="py-20 bg-[#f8f9fa] border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] mb-2 block">
                WHY TRAVEL WITH SYD
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] mb-4">
                Designed for Seamless Airport Journeys
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Every detail of our airport chauffeur service is crafted to give corporate travelers, VIPs, and families a relaxing, punctual experience from departure to arrival.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-[#152442]/5 border border-[#152442]/10 flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#152442] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Major Airport Locations Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div className="max-w-2xl">
                <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] mb-2 block">
                  NATIONWIDE & INTERNATIONAL COVERAGE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                  Australia&apos;s Major Airport Hubs
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
                  SYD operates dedicated chauffeur networks at all domestic and international terminals across Australia, New Zealand, and Singapore.
                </p>
              </div>

              <div>
                <button
                  onClick={handleOpenBooking}
                  className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#bea166] hover:text-[#152442] transition"
                >
                  <span>Book Any Location</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {airports.map((airport, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#bea166]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#bea166] bg-[#bea166]/10 px-2.5 py-1 rounded">
                        {airport.code}
                      </span>
                      <span className="text-xs font-semibold text-gray-400">
                        24/7 Service
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#152442] mb-1 group-hover:text-[#bea166] transition-colors">
                      {airport.city} Airport Transfers
                    </h3>
                    <p className="text-xs text-gray-500 font-medium mb-3">
                      {airport.name}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {airport.description}
                    </p>

                    <div className="pt-3 border-t border-gray-100">
                      <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block mb-1">
                        Key Connecting Routes:
                      </span>
                      <p className="text-xs text-gray-700 font-medium">
                        {airport.routes}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#f8f9fa] border-t border-gray-200 px-6 py-3 flex items-center justify-between">
                    <Link
                      href={`/airport-transfers/${airport.slug}`}
                      className="text-xs font-semibold text-[#152442] hover:text-[#bea166] transition flex items-center"
                    >
                      <span>Explore Details</span>
                      <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    <button
                      onClick={handleOpenBooking}
                      className="text-xs font-semibold text-[#bea166] hover:text-[#a88d55] uppercase tracking-wider transition"
                    >
                      Book Now →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Airport Fleet Selection */}
        <section className="py-20 bg-[#152442] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] mb-2 block">
                THE SYD FLEET
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Tailored Vehicles for Every Airport Traveler
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                From executive sedans for solo corporate flyers to spacious luxury people movers and coaches for touring delegations, travel in late-model European comfort.
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
              const car = fleetOptions[selectedFleet];
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

                    {/* Capacity indicators */}
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

                    {/* Features list */}
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
                        Request Quote
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
                Your Airport Journey in 4 Simple Steps
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                From your initial online reservation to curbside drop-off, SYD ensures complete peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative bg-[#f8f9fa] rounded-xl p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between"
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

        {/* Dedicated Airport Meeting Points Guide */}
        <section className="py-20 bg-[#f8f9fa] border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] mb-2 block">
                TERMINAL NAVIGATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] mb-4">
                Airport Meeting Points & Pick-up Zones
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Finding your chauffeur is effortless. View designated meeting spots across Australia’s top capital airport terminals.
              </p>
            </div>

            {/* City Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {[
                { id: "SYD", name: "Sydney (SYD)" },
                { id: "mel", name: "Melbourne (MEL)" },
                { id: "bne", name: "Brisbane (BNE)" },
                { id: "per", name: "Perth (PER)" },
                { id: "adl", name: "Adelaide (ADL)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedMeetingTab(tab.id)}
                  className={`text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-2.5 rounded-lg transition-all ${selectedMeetingTab === tab.id
                    ? "bg-[#152442] text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#bea166] hover:text-[#152442]"
                    }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Terminal Details Box */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 shadow-md max-w-4xl mx-auto space-y-6">
              <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
                <span className="w-3 h-3 rounded-full bg-[#bea166]" />
                <h3 className="text-xl font-bold text-[#152442]">
                  {meetingPoints[selectedMeetingTab].city} Meeting Locations
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#bea166] mb-1.5">
                    Terminal 1
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {meetingPoints[selectedMeetingTab].terminal1}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#bea166] mb-1.5">
                    Terminal 2 / Domestic
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {meetingPoints[selectedMeetingTab].terminal2}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#bea166] mb-1.5">
                    Terminal 3 & Special Instructions
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {meetingPoints[selectedMeetingTab].terminal3}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#152442]/5 border border-[#152442]/10 rounded-xl flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-3 text-xs sm:text-sm text-gray-700">
                  <span className="text-[#bea166] text-lg font-bold">★</span>
                  <span>Can’t locate your chauffeur upon arrival? Call our 24/7 Operations Desk immediately.</span>
                </div>
                <a
                  href="tel:+6140441000+"
                  className="text-xs font-bold text-[#bea166] hover:text-[#152442] uppercase tracking-wider"
                >
                  Call +61 404 410 000
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Airline Partners */}
        <section className="py-14 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-8 block">
              CONNECTING SEAMLESSLY WITH ALL MAJOR AIRLINES
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="relative h-10 w-28">
                <Image src="/images/qantas-1024x1024.png" alt="Qantas" fill className="object-contain" />
              </div>
              <div className="relative h-10 w-28">
                <Image src="/images/virgin-1024x1024.png" alt="Virgin Australia" fill className="object-contain" />
              </div>
              <div className="relative h-10 w-28">
                <Image src="/images/emirates-1024x1024.png" alt="Emirates" fill className="object-contain" />
              </div>
              <div className="relative h-10 w-28">
                <Image src="/images/jetstar-1024x1024.png" alt="Jetstar" fill className="object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Airport Transfers FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-14">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] mb-2 block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] mb-4">
                Airport Transfer FAQs
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Everything you need to know about booking, flight delays, meeting points, and vehicle options.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-4.5 bg-white hover:bg-gray-50 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#152442]"
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

        {/* CTA Banner */}
        <section className="relative py-24 overflow-hidden bg-[#152442]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cta-bg.png"
              alt="SYD Chauffeur Booking"
              fill
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#152442] via-[#152442]/90 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] mb-3 block">
                BOOK WITH CONFIDENCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                Ready to Experience Stress-Free Airport Travel?
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Book your luxury airport transfer online in under 2 minutes, or speak directly with our 24/7 Australian reservations team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={handleOpenBooking}
                className="w-full sm:w-auto bg-[#bea166] hover:bg-[#a88d55] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded transition-all shadow-xl active:scale-95 text-center"
              >
                Book Airport Transfer
              </button>

              <a
                href="tel:+6140441000+"
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

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}

