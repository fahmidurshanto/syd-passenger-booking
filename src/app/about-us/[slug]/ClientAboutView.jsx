"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import {
  getAboutBySlug,
  aboutOverviewStats,
  coreValues,
  historyMilestones,
  teamStories,
  aboutPages,
} from "@/utils/aboutUsData";
import { brandPartners } from "@/utils/locationsData";

export default function ClientAboutView({ slug }) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const pageData = getAboutBySlug(slug);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  if (!pageData) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#152442] text-white p-6">
        <h1 className="text-3xl font-bold mb-4">Section Not Found</h1>
        <p className="text-gray-300 mb-6">We could not locate this About Us page.</p>
        <Link
          href="/about-us"
          className="bg-[#bea166] text-white px-6 py-3 rounded text-sm font-semibold uppercase tracking-wider"
        >
          View About Us Overview
        </Link>
      </div>
    );
  }

  const isHistoryPage = pageData.slug === "our-history" || pageData.id === "our-history";
  const otherAboutPages = aboutPages.filter((p) => p.slug !== pageData.slug);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex flex-col justify-center pt-36 pb-20 overflow-hidden bg-[#152442]">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={pageData.coverImage || "/images/about/about-hero.jpg"}
              alt={pageData.title}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0d172a]/85 backdrop-brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#152442] via-transparent to-black/60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto">
            {/* Breadcrumbs */}
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-[#bea166] mb-4 uppercase tracking-wider font-semibold">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span className="text-gray-400">/</span>
              <Link href="/about-us" className="hover:text-white transition">About Us</Link>
              <span className="text-gray-400">/</span>
              <span className="text-white">{pageData.title}</span>
            </div>

            {/* Title & Subtitle */}
            <div className="max-w-3xl">
              <span className="inline-block bg-[#bea166]/20 border border-[#bea166]/50 text-[#bea166] text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                Est. 1904 • 120+ Years Australian Heritage
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                {pageData.heroTitle || pageData.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-2xl">
                {pageData.heroSubtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button
                  onClick={handleOpenBooking}
                  className="bg-[#bea166] hover:bg-[#a88d55] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded border-2 border-[#bea166] transition-all shadow-lg active:scale-95 flex items-center space-x-2"
                >
                  <span>Book A Chauffeur</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <a
                  href="tel:1300615165"
                  className="bg-transparent hover:bg-white/10 text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded border-2 border-white/50 hover:border-white transition-all flex items-center space-x-2"
                >
                  <svg className="w-4 h-4 mr-1 text-[#bea166]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>1300 615 165</span>
                </a>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md mt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                {aboutOverviewStats.map((stat, idx) => (
                  <div key={idx} className="border-r border-white/10 last:border-r-0 px-2">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#bea166]">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider text-gray-300 mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Booking Strip */}
        <section className="bg-gray-50 border-b border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#152442]/10 flex items-center justify-center text-[#152442]">
                  <svg className="w-6 h-6 text-[#bea166]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#152442]">Reserve Your Australian Chauffeur</h3>
                  <p className="text-xs text-gray-600">Fixed upfront pricing, 24/7 dispatch & automated flight tracking</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <button
                  onClick={handleOpenBooking}
                  className="w-full sm:w-auto bg-[#152442] hover:bg-[#1f3560] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded transition shadow flex items-center justify-center space-x-2"
                >
                  <span>Instant Online Reservation</span>
                  <svg className="w-4 h-4 text-[#bea166]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <Link
                  href="/about-us"
                  className="w-full sm:w-auto border border-gray-300 hover:border-gray-400 text-gray-700 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded text-center transition"
                >
                  About Overview
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content & Sidebar Grid */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Main Content */}
              <div className="lg:col-span-8">
                {/* Lead Statement */}
                <div className="mb-10">
                  <div className="w-16 h-1 bg-[#bea166] mb-6"></div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#152442] mb-6 leading-tight">
                    {pageData.lead}
                  </h2>
                  <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                    {pageData.paragraphs?.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>

                {/* If History Page: Visual Timeline Image Banner */}
                {isHistoryPage && (
                  <div className="mb-16">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                      <Image
                        src="/images/about/history-timeline.jpg"
                        alt="120 Years of Hughes & SYD Chauffeur History"
                        width={1200}
                        height={675}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                        <span className="text-[#bea166] text-xs font-bold uppercase tracking-widest">
                          1904 — 2024
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold mt-1">
                          120 Years of Ground Transport Evolution
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-300 mt-1">
                          From horse-drawn hansoms to Australia’s most advanced luxury fleet.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Historical Milestones (If History Page or has timeline) */}
                {(isHistoryPage || pageData.timeline) && (
                  <div className="mb-16">
                    <div className="flex items-center space-x-3 mb-8">
                      <span className="w-3 h-8 bg-[#bea166] rounded-sm"></span>
                      <h3 className="text-2xl font-extrabold text-[#152442]">Historical Milestones Through The Eras</h3>
                    </div>

                    <div className="relative border-l-2 border-[#bea166]/40 ml-4 pl-6 sm:pl-8 space-y-10">
                      {(pageData.timeline || historyMilestones).map((m, idx) => (
                        <div key={idx} className="relative group">
                          {/* Dot marker */}
                          <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#152442] border-4 border-[#bea166] group-hover:scale-125 transition-transform" />
                          <div className="bg-gray-50 hover:bg-[#152442]/5 border border-gray-200 rounded-xl p-6 transition shadow-sm">
                            <span className="inline-block bg-[#152442] text-[#bea166] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                              {m.year}
                            </span>
                            <h4 className="text-lg font-bold text-[#152442] mb-2">{m.title}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Team Stories (If History Page or has stories) */}
                {(isHistoryPage || pageData.stories) && (
                  <div className="mb-16">
                    <div className="flex items-center space-x-3 mb-8">
                      <span className="w-3 h-8 bg-[#bea166] rounded-sm"></span>
                      <h3 className="text-2xl font-extrabold text-[#152442]">Stories From Our Chauffeurs & Team</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {(pageData.stories || teamStories).map((story, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-[#152442] to-[#1f3560] text-white rounded-2xl p-7 shadow-lg flex flex-col justify-between relative overflow-hidden"
                        >
                          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#bea166]/10 rounded-full blur-2xl" />
                          <div>
                            <div className="text-[#bea166] text-2xl font-serif mb-3">“</div>
                            <h4 className="text-lg font-bold text-white mb-1">{story.title}</h4>
                            <p className="text-xs uppercase tracking-wider text-[#bea166] font-semibold mb-4">
                              {story.role}
                            </p>
                            <p className="text-sm text-gray-200 leading-relaxed font-light">
                              {story.story}
                            </p>
                          </div>
                          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                            <span>SYD Family Culture</span>
                            <span className="text-[#bea166] font-bold">120+ Years Strong</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Highlights / Accreditation Badges */}
                {pageData.highlights && pageData.highlights.length > 0 && (
                  <div className="mb-16">
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="w-3 h-8 bg-[#bea166] rounded-sm"></span>
                      <h3 className="text-2xl font-extrabold text-[#152442]">
                        {isHistoryPage ? "Heritage Highlights" : "Key Standards & Commitments"}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pageData.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3.5 bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-[#bea166]/50 transition shadow-sm"
                        >
                          <div className="w-6 h-6 rounded-full bg-[#bea166]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-[#bea166]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-sm font-semibold text-gray-800 leading-snug">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Frequently Asked Questions */}
                {pageData.faqs && pageData.faqs.length > 0 && (
                  <div className="mb-16">
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="w-3 h-8 bg-[#bea166] rounded-sm"></span>
                      <h3 className="text-2xl font-extrabold text-[#152442]">Frequently Asked Questions</h3>
                    </div>

                    <div className="space-y-4">
                      {pageData.faqs.map((faq, idx) => {
                        const isOpen = activeFaq === idx;
                        return (
                          <div
                            key={idx}
                            className="border border-gray-200 rounded-xl overflow-hidden transition-all bg-white shadow-sm"
                          >
                            <button
                              onClick={() => toggleFaq(idx)}
                              className="w-full text-left px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition"
                            >
                              <span className="text-base font-bold text-[#152442] pr-4">{faq.q}</span>
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                                  isOpen ? "bg-[#bea166] text-white rotate-180" : "bg-gray-100 text-[#152442]"
                                }`}
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </button>
                            {isOpen && (
                              <div className="px-6 pb-6 text-sm text-gray-600 border-t border-gray-100 leading-relaxed font-light pt-4">
                                {faq.a}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Sidebar */}
              <div className="lg:col-span-4 space-y-8">
                {/* Book Now Card */}
                <div className="bg-[#152442] text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#bea166]/15 rounded-full blur-2xl" />
                  <span className="text-[#bea166] text-xs font-bold uppercase tracking-widest">
                    Direct Booking
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-2 mb-3">
                    Experience Australian Chauffeur Excellence
                  </h3>
                  <p className="text-sm text-gray-300 font-light mb-6">
                    Lock in upfront transparent pricing with our 24/7 national fleet.
                  </p>
                  <button
                    onClick={handleOpenBooking}
                    className="w-full bg-[#bea166] hover:bg-[#a88d55] text-white font-bold text-xs uppercase tracking-widest py-4 rounded transition shadow-lg text-center"
                  >
                    Reserve Now
                  </button>
                  <a
                    href="tel:1300615165"
                    className="block w-full border border-white/20 hover:border-white text-center text-xs font-bold uppercase tracking-widest text-white py-3.5 rounded mt-3 transition"
                  >
                    Call 1300 615 165
                  </a>
                </div>

                {/* Explore Other About Us Sections */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-lg font-bold text-[#152442] mb-4 pb-3 border-b border-gray-200">
                    Explore About Us
                  </h4>
                  <ul className="space-y-2.5">
                    {otherAboutPages.map((sub, idx) => (
                      <li key={idx}>
                        <Link
                          href={`/about-us/${sub.slug}`}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-white hover:text-[#bea166] text-gray-700 text-sm font-semibold transition border border-transparent hover:border-gray-200"
                        >
                          <span>{sub.title}</span>
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/about-us"
                        className="flex items-center justify-between p-3 rounded-lg bg-[#152442]/5 text-[#152442] text-sm font-bold transition hover:bg-[#152442] hover:text-white mt-2"
                      >
                        <span>View Overview Page</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* National Operations Center Desk Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#152442] flex items-center justify-center text-[#bea166]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#152442]">24/7 Operations Desk</h4>
                      <p className="text-xs text-gray-500">National Headquarters</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-gray-600">
                    <div className="flex items-start space-x-2">
                      <span className="font-semibold text-gray-900 w-20">National:</span>
                      <span>1300 615 165</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="font-semibold text-gray-900 w-20">Direct:</span>
                      <span>+61 2 8339 7777</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="font-semibold text-gray-900 w-20">Email:</span>
                      <span className="text-[#bea166]">bookings@hughes.com.au</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="font-semibold text-gray-900 w-20">Offices:</span>
                      <span>Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, Gold Coast</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="font-semibold text-gray-900 w-20">Hours:</span>
                      <span>24 Hours / 365 Days</span>
                    </div>
                  </div>
                </div>

                {/* Luxury Fleet Quick Card */}
                <div className="bg-gradient-to-br from-gray-900 to-[#152442] text-white rounded-2xl p-6 shadow-sm">
                  <h4 className="text-base font-bold mb-2 text-[#bea166]">Our Luxury Fleet</h4>
                  <p className="text-xs text-gray-300 mb-4 font-light">
                    Explore Mercedes-Benz S-Class, BMW 7 Series, Audi A8, luxury SUVs, and executive passenger vans.
                  </p>
                  <Link
                    href="/fleet"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white hover:text-[#bea166] transition"
                  >
                    <span>View All Fleet Models</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars */}
        <section className="py-16 bg-gray-50 border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#bea166] text-xs font-bold uppercase tracking-widest">
                Our Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#152442] mt-2">
                Four Pillars of Australian Chauffeur Excellence
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#bea166]/50 transition"
                >
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3 className="text-base font-bold text-[#152442] mb-2">{value.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-light">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Partners Showcase */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-8">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                Trusted by Australia’s Leading Airlines, Luxury Hotels & Corporations
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
              {brandPartners.map((partner, idx) => (
                <span
                  key={idx}
                  className="text-base sm:text-lg font-bold tracking-wider text-gray-600 hover:text-[#152442] transition"
                >
                  {partner.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* App Download Banner */}
        <section className="bg-gradient-to-r from-[#152442] via-[#1a2f55] to-[#152442] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[#bea166] text-xs font-bold uppercase tracking-widest">
                  Mobile Convenience
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">Download the SYD Chauffeur App</h3>
                <p className="text-sm text-gray-300 font-light mt-1">
                  Book, track live chauffeur location, and view digital driver receipts on iOS and Android.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleOpenBooking}
                  className="bg-[#bea166] hover:bg-[#a88d55] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded transition shadow"
                >
                  Book On Web
                </button>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/30 hover:border-white text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded transition"
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/30 hover:border-white text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded transition"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Strip */}
        <section className="py-16 bg-[#0f1a30] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Experience 120 Years of Chauffeur Heritage?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg font-light mb-8 max-w-2xl mx-auto">
              Whether you require airport transfers, corporate roadshows, or luxury wedding transport, our team is at your service 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleOpenBooking}
                className="bg-[#bea166] hover:bg-[#a88d55] text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded transition shadow-lg"
              >
                Book A Chauffeur Online
              </button>
              <a
                href="tel:1300615165"
                className="border-2 border-white/40 hover:border-white text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded transition"
              >
                Speak With Our Team: 1300 615 165
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Booking Modal */}
      {bookingModalOpen && (
        <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
      )}
    </div>
  );
}

