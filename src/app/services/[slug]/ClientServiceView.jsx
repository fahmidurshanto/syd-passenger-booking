"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import { getServiceBySlug } from "@/utils/servicesData";
import { fleetOptions } from "@/utils/fleetOptionsData";
import { brandPartners } from "@/utils/locationsData";

export default function ClientServiceView({ slug }) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedFleet, setSelectedFleet] = useState("executive");
  const [activeFaq, setActiveFaq] = useState(null);

  const service = getServiceBySlug(slug);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#152442] text-white p-6">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="text-gray-300 mb-6">We could not locate this chauffeur service.</p>
        <Link
          href="/services"
          className="bg-[#bea166] text-white px-6 py-3 rounded text-sm font-semibold uppercase tracking-wider"
        >
          View All Services
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
              src={service.coverImage || "/images/services/chauffeur-service.jpg"}
              alt={`${service.name} Australia`}
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
              <Link href="/services" className="hover:text-white transition">Services</Link>
              <span className="text-gray-400">/</span>
              <span className="text-white">{service.name}</span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="max-w-3xl">
              <span className="inline-block bg-[#bea166]/20 border border-[#bea166]/50 text-[#bea166] text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                SYD Signature Service • {service.category}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                {service.heroTitle}
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-2xl">
                {service.heroSubtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  onClick={handleOpenBooking}
                  className="bg-[#bea166] hover:bg-[#a88d55] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded border-2 border-[#bea166] transition-all shadow-lg active:scale-95 flex items-center space-x-2"
                >
                  <span>Book {service.name}</span>
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
                  Need a Quote for {service.name}?
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

        {/* Overview Section: Sit Back and Relax */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block">
                  LUXURY GROUND TRANSPORT
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] leading-tight">
                  Sit back and relax with SYD
                </h2>

                {service.overview?.map((paragraph, idx) => (
                  <p key={idx} className="text-base text-gray-600 leading-relaxed font-normal">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-2">
                  <button
                    onClick={handleOpenBooking}
                    className="bg-[#152442] hover:bg-[#22365e] text-white text-xs font-semibold uppercase tracking-wider px-8 py-3.5 rounded transition shadow-md active:scale-95"
                  >
                    Reserve Your Chauffeur Today
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-96 sm:h-[460px] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                <Image
                  src={service.cardImage || "/images/services/chauffeur-service.jpg"}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-[#152442]/90 backdrop-blur-md p-5 rounded-xl border border-white/10 text-white">
                  <span className="text-[#bea166] text-xs font-bold uppercase tracking-widest block mb-1">
                    ESTABLISHED 1904
                  </span>
                  <p className="text-sm font-light">
                    &quot;Australia&apos;s oldest and only nationwide chauffeur service. Dedicated offices in every major city.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* At Your Service Section (Hughes 6 Expectations Checklist) */}
        <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                EXCELLENCE IN EVERY DETAIL
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                At Your Service
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Whether you are travelling for business or pleasure, let SYD make the journey as memorable as the destination. Here’s what you can expect from our chauffeur service:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {(service.serviceStandards || [
                "Well-appointed and luxury vehicles.",
                "Professional, experienced, courteous and discreet chauffeurs.",
                "A reliable, on-time service with real-time tracking via the SYD App.",
                "Exceptional attention to detail from vehicle condition and cleanliness to passenger experience.",
                "Extensive knowledge of local roads and conditions to take the best possible route to your destination.",
                "A stress-free and personalised experience that delivers maximum comfort.",
              ]).map((standard, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#bea166] hover:shadow-md transition flex items-start space-x-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#bea166]/15 text-[#bea166] flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">
                    {standard}
                  </p>
                </div>
              ))}
            </div>

            {/* Reassurance Callout */}
            <div className="bg-[#152442] text-white rounded-2xl p-8 max-w-4xl mx-auto text-center space-y-4">
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Whether you are booking for yourself or managing the travel for a VIP passenger, we keep the process simple too, with effortless online booking, transparent tax invoicing, and 24/7 Australian dispatch support.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#bea166] uppercase tracking-wider">
                Make your next transfer a seamless, personalised and premium experience with SYD.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        {service.features && service.features.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                  KEY ADVANTAGES
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                  Why Choose SYD for {service.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#bea166] transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#152442]/5 text-[#bea166] flex items-center justify-center font-extrabold text-lg mb-4">
                        0{idx + 1}
                      </div>
                      <h3 className="text-base font-bold text-[#152442] mb-2">
                        {feat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Offerings Checklist Section */}
        {service.offerings && service.offerings.length > 0 && (
          <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block">
                    TAILORED SOLUTIONS
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                    What We Offer in {service.name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    Comprehensive ground transportation packages configured to your specific schedule and passenger requirements:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.offerings.map((offering, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-gray-200 rounded-xl p-4 flex items-center space-x-3 text-xs sm:text-sm font-medium text-gray-800"
                      >
                        <span className="text-[#bea166] font-bold">✓</span>
                        <span>{offering}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#152442] text-white rounded-2xl p-8 space-y-5 text-center">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block">
                    NEED ASSISTANCE?
                  </span>
                  <h3 className="text-2xl font-bold">
                    Speak With Our 24/7 Team
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Our dedicated operations team is available around the clock to organize custom multi-stop routes, corporate bookings, and group vehicle logistics.
                  </p>
                  <div className="pt-2 flex flex-col space-y-3">
                    <button
                      onClick={handleOpenBooking}
                      className="bg-[#bea166] hover:bg-[#a88d55] text-white text-xs font-semibold uppercase tracking-wider py-3.5 rounded transition shadow-md active:scale-95"
                    >
                      Book Online Now
                    </button>
                    <a
                      href="tel:+61404410000"
                      className="border border-white/20 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider py-3 rounded transition"
                    >
                      Call +61 404 410 000
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Fleet Showcase */}
        <section className="py-20 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                PREMIUM VEHICLE FLEET
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                A Vehicle to Suit Every Traveller
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Whether you are looking for an executive sedan or moving larger groups in comfort, SYD has you covered.
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
                      Book This Vehicle
                    </button>
                    <Link
                      href="/fleet"
                      className="text-xs font-bold uppercase tracking-wider text-[#152442] hover:text-[#bea166] transition"
                    >
                      View All Fleet Specs →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-8">
              <div className="text-center mb-12">
                <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                  {service.name} FAQs
                </h2>
                <p className="mt-3 text-sm text-gray-600">
                  Common questions regarding {service.name.toLowerCase()} across Australia.
                </p>
              </div>

              <div className="space-y-4">
                {service.faqs.map((faq, idx) => {
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
                Ready to Book {service.name}?
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
          defaultService={service.name}
        />
      )}

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />
    </div>
  );
}

