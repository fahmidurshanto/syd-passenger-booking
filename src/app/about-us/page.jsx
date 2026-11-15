"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import {
  aboutOverviewStats,
  coreValues,
  aboutPages,
  aboutUsOverviewFaqs,
} from "@/utils/aboutUsData";
import { brandPartners } from "@/utils/locationsData";

export default function AboutUsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

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
              src="/images/about/about-hero.jpg"
              alt="SYD Chauffeur Heritage Australia"
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
              <span className="text-white">About Us</span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="max-w-3xl">
              <span className="inline-block bg-[#bea166]/20 border border-[#bea166]/50 text-[#bea166] text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                Australia’s Original Chauffeur Service Since 1904
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                About Us
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-2xl">
                Hughes and SYD have been Australia’s leading luxury ground transport providers since 1904. We are Australia’s original chauffeur service with a rich history dating back to the start of the 20th Century.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  onClick={handleOpenBooking}
                  className="bg-[#bea166] hover:bg-[#a88d55] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded border-2 border-[#bea166] transition-all shadow-lg active:scale-95 flex items-center space-x-2"
                >
                  <span>Book Chauffeur Now</span>
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

            {/* 5 Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 pt-8 border-t border-white/15">
              {aboutOverviewStats.map((stat, idx) => (
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Experience Australia’s Original Chauffeur Service
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Fixed pricing, 24/7 flight tracking, and dedicated meet-and-greet across Australia, NZ, and Singapore.
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

        {/* Introduction Section (Hughes Copy) */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block">
                  A LEGACY OF CHAUFFEURED EXCELLENCE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] leading-tight">
                  Hughes and SYD have been Australia’s leading luxury ground transport providers since 1904
                </h2>
                <p className="text-base text-gray-600 leading-relaxed font-normal">
                  We’re Australia’s original chauffeur service with a rich history dating back to the start of the 20th Century. In that time, much has changed, but one thing has remained constant: our unwavering commitment to passenger safety, discretion, and punctual service.
                </p>
                <p className="text-base text-gray-600 leading-relaxed font-normal">
                  The SYD team, from our 24/7 operations room staff to our accredited professional chauffeurs, are premium passenger experience experts. Whether you need reliable airport transfers, intercity business roadshows, event logistics, or bespoke private tours, we keep you moving in comfort and style.
                </p>
                <p className="text-sm font-semibold text-[#152442]">
                  Trust SYD with your transport – an Australian industry leader for over 120 years and counting.
                </p>

                <div className="pt-2">
                  <Link
                    href="/about-us/our-history"
                    className="inline-block bg-[#152442] hover:bg-[#22365e] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded transition shadow-md"
                  >
                    Explore Our 120-Year History
                  </Link>
                </div>
              </div>

              {/* Visual Timeline Preview Card */}
              <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-gray-900 shadow-inner">
                  <Image
                    src="/images/about/history-timeline.jpg"
                    alt="Hughes and SYD Historical Motoring Timeline"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#bea166] block mb-1">
                      1904 — 2026
                    </span>
                    <h4 className="text-lg font-bold">120 Years of Motoring Innovation</h4>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    <span>From Hansom Cabs to EV Luxury</span>
                    <span className="text-[#bea166]">100% Australian Heritage</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Discover how Australia&apos;s oldest chauffeured service evolved through six eras of transportation to become the nation&apos;s premier ground transport leader.
                  </p>
                </div>

                <Link
                  href="/about-us/our-history"
                  className="block w-full bg-[#bea166] hover:bg-[#a88d55] text-white text-xs font-semibold uppercase tracking-wider py-3 rounded transition shadow-md text-center"
                >
                  View Historical Timeline
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars / Values Section */}
        <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                WHAT SETS US APART
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                Our Guiding Principles
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Built on four enduring pillars that guarantee consistency, discretion, and peace of mind on every journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#bea166] transition flex flex-col justify-between"
                >
                  <div>
                    <div className="text-3xl mb-4">{val.icon}</div>
                    <h3 className="text-base font-bold text-[#152442] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore About Us Subpages Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                DISCOVER OUR STORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442]">
                Explore SYD Heritage & Standards
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Learn more about our century of service, driver qualifications, career opportunities, and direct customer support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutPages.map((page) => (
                <div
                  key={page.id}
                  className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#bea166]/60 transition-all duration-300 group"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                      <Image
                        src={page.cardImage || "/images/about/about-hero.jpg"}
                        alt={page.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-xl font-extrabold">{page.title}</h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {page.lead}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-gray-200">
                        {page.highlights?.slice(0, 2).map((item, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-700 font-medium">
                            <span className="text-[#bea166] mr-2 font-bold">✓</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-gray-200 flex items-center justify-between gap-3 mt-auto">
                    <Link
                      href={`/about-us/${page.slug}`}
                      className="text-xs font-bold uppercase tracking-wider text-[#152442] hover:text-[#bea166] flex items-center transition"
                    >
                      <span>Read More</span>
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    <button
                      onClick={handleOpenBooking}
                      className="bg-[#bea166] hover:bg-[#a88d55] text-white text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded transition shadow-sm"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Partners */}
        <section className="py-16 bg-[#152442] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
              RECOGNIZED NATIONWIDE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-10">
              Trusted by Top Brands for Over a Century
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
              {aboutUsOverviewFaqs.map((faq, idx) => {
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
                    SMARTPHONE FREEDOM
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
        />
      )}

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />
    </div>
  );
}

