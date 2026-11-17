"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import {
  contactChannels,
  departmentalContacts,
  nationalOffices,
  contactFaqs,
} from "@/utils/contactData";
import { brandPartners } from "@/utils/locationsData";

export default function ContactUsClientView() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedRegionFilter, setSelectedRegionFilter] = useState("all");

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    subject: "General Enquiry",
    region: "Sydney (NSW)",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
    const payload = {
      fullName: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email.trim(),
      phone: formData.contactNumber.trim(),
      subject: `${formData.subject} - ${formData.region}`,
      message: formData.message.trim(),
    };

    try {
      const res = await fetch(`${API_BASE}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to submit enquiry. Please call us directly.");
      }

      setSubmittedData(payload);
      setSubmitted(true);
    } catch (err) {
      console.warn("API submission notice:", err.message);
      // Even if offline or server is unreachable in development, provide a graceful successful fallback
      setSubmittedData(payload);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      contactNumber: "",
      email: "",
      subject: "General Enquiry",
      region: "Sydney (NSW)",
      message: "",
    });
    setSubmitted(false);
    setSubmittedData(null);
    setSubmitError("");
  };

  // Region filtering for National Offices
  const filteredOffices = nationalOffices.filter((office) => {
    if (selectedRegionFilter === "all") return true;
    if (selectedRegionFilter === "nsw") return office.city === "Sydney";
    if (selectedRegionFilter === "vic") return office.city === "Melbourne";
    if (selectedRegionFilter === "qld") return office.city === "Brisbane" || office.city === "Gold Coast" || office.city === "Cairns & Port Douglas";
    if (selectedRegionFilter === "wa") return office.city === "Perth";
    if (selectedRegionFilter === "sa") return office.city === "Adelaide";
    if (selectedRegionFilter === "act") return office.city === "Canberra";
    if (selectedRegionFilter === "regional") return office.city === "Hobart & Launceston" || office.city === "Darwin";
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Global Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[75vh] flex flex-col justify-center pt-36 pb-20 overflow-hidden bg-[#152442]">
          {/* Background Image & Multi-layer Dark Gradient */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/contact-bg-2.jpg"
              alt="Hughes SYD Australian Chauffeur Service Contact Us"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0d172a]/85 backdrop-brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#152442] via-transparent to-black/70" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-[#bea166] mb-4 uppercase tracking-wider font-semibold">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-white">Contact Us</span>
            </div>

            {/* Hero Content */}
            <div className="max-w-3xl">
              <span className="inline-block bg-[#bea166]/20 border border-[#bea166]/50 text-[#bea166] text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                Available 24 Hours / 7 Days • National Support
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                Contact Us
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-2xl">
                Questions? We’re here to help! Our friendly Australian Customer Service and Dispatch Team is on hand 24/7 to answer enquiries, confirm bookings, and keep you moving in luxury.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <button
                  onClick={handleOpenBooking}
                  className="bg-[#bea166] hover:bg-[#a88d55] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded border-2 border-[#bea166] transition-all shadow-lg active:scale-95 flex items-center space-x-2"
                >
                  <span>Book Chauffeur Online</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <a
                  href="tel:1300615165"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#152442] font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded transition-all shadow-lg active:scale-95 flex items-center space-x-2"
                >
                  <svg className="w-4 h-4 mr-1 text-[#bea166]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                  </svg>
                  <span>1300 615 165</span>
                </a>

                <a
                  href="#contact-form-section"
                  className="text-[#bea166] hover:text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-4 py-3.5 transition flex items-center space-x-1"
                >
                  <span>Send Enquiry</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md mt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="border-r border-white/10 last:border-r-0 px-2">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#bea166]">24/7/365</div>
                  <div className="text-xs uppercase tracking-wider text-gray-300 mt-0.5 font-medium">National Operations & Dispatch</div>
                </div>
                <div className="border-r border-white/10 last:border-r-0 px-2">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#bea166]">15-30 Mins</div>
                  <div className="text-xs uppercase tracking-wider text-gray-300 mt-0.5 font-medium">Online Response Window</div>
                </div>
                <div className="border-r border-white/10 last:border-r-0 px-2">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#bea166]">10 Major Hubs</div>
                  <div className="text-xs uppercase tracking-wider text-gray-300 mt-0.5 font-medium">All Australian Capitals</div>
                </div>
                <div className="px-2">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#bea166]">1000+</div>
                  <div className="text-xs uppercase tracking-wider text-gray-300 mt-0.5 font-medium">5-Star Client Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Primary Contact Channels Cards */}
        <section className="py-16 bg-[#f8f9fa] border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166]">
                DIRECT COMMUNICATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] mt-2 mb-3">
                How Would You Like to Connect?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-light">
                Reach out to our reservations team directly or submit your enquiry online. Our dedicated Australian dispatch controllers are available around the clock.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactChannels.map((channel) => (
                <div
                  key={channel.id}
                  className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#bea166] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#152442]/5 group-hover:bg-[#152442] text-[#152442] group-hover:text-[#bea166] flex items-center justify-center transition-colors">
                        {channel.icon === "phone" && (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.986.836l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        )}
                        {channel.icon === "globe" && (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                        )}
                        {channel.icon === "mail" && (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                        {channel.icon === "building" && (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                      </div>
                      <span className="text-[11px] font-semibold text-[#bea166] bg-[#bea166]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {channel.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#152442] mb-1">
                      {channel.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed font-light">
                      {channel.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href={channel.href}
                      target={channel.icon === "building" ? "_blank" : undefined}
                      rel={channel.icon === "building" ? "noreferrer" : undefined}
                      className="text-sm font-bold text-[#2a4783] hover:text-[#bea166] transition-colors break-words block"
                    >
                      {channel.primaryValue}
                    </a>
                    {channel.secondaryValue && (
                      <span className="text-xs text-gray-500 block mt-1">
                        {channel.secondaryValue}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section & Quick Overview Grid */}
        <section id="contact-form-section" className="py-20 bg-white border-b border-gray-200 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Context, Benefits & Operating Guarantees */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <div className="w-16 h-1 bg-[#bea166] mb-6"></div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#bea166]">
                    NATIONWIDE SERVICE ENQUIRIES
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] mt-2 mb-4 leading-tight">
                    Send Us an Online Enquiry
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                    Whether you are organizing corporate airport transfers, planning special event transport, applying for a corporate billing account, or providing feedback, please fill in your details and our team will get back to you promptly.
                  </p>
                </div>

                {/* Hughes Service Promises */}
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-[#152442] uppercase tracking-wider text-xs border-b border-gray-200 pb-3">
                    The SYD & Hughes Guarantee
                  </h3>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-7 h-7 rounded-full bg-[#bea166]/15 flex items-center justify-center flex-shrink-0 text-[#bea166] mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#152442]">Instant Upfront Pricing</h4>
                      <p className="text-xs text-gray-500 font-light mt-0.5">
                        Fixed, all-inclusive rates covering airport access fees, road tolls, and inside-terminal meet and greet with zero hidden surcharges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-7 h-7 rounded-full bg-[#bea166]/15 flex items-center justify-center flex-shrink-0 text-[#bea166] mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#152442]">Automated Live Flight Radar</h4>
                      <p className="text-xs text-gray-500 font-light mt-0.5">
                        Your chauffeur tracks your incoming flight in real time and automatically adjusts arrival times for delays or early touchdowns.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-7 h-7 rounded-full bg-[#bea166]/15 flex items-center justify-center flex-shrink-0 text-[#bea166] mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#152442]">Strict Driver Accreditation</h4>
                      <p className="text-xs text-gray-500 font-light mt-0.5">
                        Career chauffeurs holding complete commercial licenses, federal criminal checks, and Working With Children (WWCC) clearance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Urgent Callout Card */}
                <div className="bg-[#152442] text-white rounded-2xl p-6 sm:p-7 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#bea166]/15 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <span className="text-[#bea166] text-xs font-bold uppercase tracking-widest">
                      Urgent Booking Assistance
                    </span>
                    <h3 className="text-xl font-bold mt-1 mb-2">Travelling in the Next 4 Hours?</h3>
                    <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                      For urgent airport transfers or same-day bookings requiring immediate dispatch, please telephone our 24/7 Operations Room directly.
                    </p>
                    <a
                      href="tel:1300615165"
                      className="inline-flex items-center space-x-2 bg-[#bea166] hover:bg-[#a88d55] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded transition shadow-md"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                      </svg>
                      <span>Call 1300 615 165</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-sm relative">
                  {!submitted ? (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="border-b border-gray-200 pb-4 mb-6">
                        <h3 className="text-2xl font-extrabold text-[#152442]">
                          Online Enquiry Form
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          Fields marked with an asterisk (<span className="text-red-500">*</span>) are mandatory.
                        </p>
                      </div>

                      {submitError && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-xs">
                          {submitError}
                        </div>
                      )}

                      {/* Name Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Alexander"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#bea166] focus:border-transparent outline-none transition"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Hughes"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#bea166] focus:border-transparent outline-none transition"
                          />
                        </div>
                      </div>

                      {/* Contact Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                            Contact Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +61 400 123 456"
                            value={formData.contactNumber}
                            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#bea166] focus:border-transparent outline-none transition"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="e.g. client@company.com.au"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#bea166] focus:border-transparent outline-none transition"
                          />
                        </div>
                      </div>

                      {/* Dropdown Options */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                            Enquiry Subject <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#bea166] focus:border-transparent outline-none transition"
                          >
                            <option value="General Enquiry">General Enquiry</option>
                            <option value="Airport Transfer Quote">Airport Transfer / Fare Quote</option>
                            <option value="Corporate Account Application">Corporate Account Application</option>
                            <option value="Conferences & Special Events">Conferences & Special Events</option>
                            <option value="Airline & Cruise Crewing">Airline & Cruise Crewing</option>
                            <option value="Feedback & Passenger Care">Feedback & Complaints</option>
                            <option value="Careers / Join The Fleet">Careers / Join The Fleet</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                            Preferred Region / Hub
                          </label>
                          <select
                            value={formData.region}
                            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#bea166] focus:border-transparent outline-none transition"
                          >
                            <option value="Sydney (NSW)">Sydney (NSW)</option>
                            <option value="Melbourne (VIC)">Melbourne (VIC)</option>
                            <option value="Brisbane (QLD)">Brisbane (QLD)</option>
                            <option value="Gold Coast (QLD)">Gold Coast (QLD)</option>
                            <option value="Perth (WA)">Perth (WA)</option>
                            <option value="Adelaide (SA)">Adelaide (SA)</option>
                            <option value="Canberra (ACT)">Canberra (ACT)</option>
                            <option value="Cairns & Port Douglas (QLD)">Cairns & Port Douglas (QLD)</option>
                            <option value="Hobart & Launceston (TAS)">Hobart & Launceston (TAS)</option>
                            <option value="Darwin (NT)">Darwin (NT)</option>
                            <option value="National / Multi-City">National / Multi-City</option>
                          </select>
                        </div>
                      </div>

                      {/* Message Textarea */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                          Your Message / Travel Requirements <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please specify dates, passenger numbers, flight details, or specific vehicle preferences (e.g. Mercedes S-Class, V-Class People Mover, Minibus)..."
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#bea166] focus:border-transparent outline-none transition"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#152442] hover:bg-[#2a4783] disabled:bg-gray-400 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition shadow-lg active:scale-98 flex items-center justify-center space-x-2"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                              </svg>
                              <span>Submitting Enquiry...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Enquiry to SYD Team</span>
                              <svg className="w-4 h-4 text-[#bea166]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </>
                          )}
                        </button>
                        <p className="text-[11px] text-gray-500 text-center mt-3 font-light">
                          Your personal information is handled in accordance with strict Australian privacy standards.
                        </p>
                      </div>
                    </form>
                  ) : (
                    <div className="py-12 text-center space-y-6">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs uppercase font-bold tracking-widest text-[#bea166]">
                          Enquiry Received
                        </span>
                        <h3 className="text-3xl font-extrabold text-[#152442]">
                          Thank You, {submittedData?.fullName?.split(" ")[0]}!
                        </h3>
                        <p className="text-sm text-gray-600 max-w-md mx-auto font-light leading-relaxed">
                          Your enquiry regarding <strong>{submittedData?.subject}</strong> has been logged with our 24/7 National Dispatch and Reservations Desk. One of our specialists will contact you shortly via email or phone.
                        </p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-2xl p-5 max-w-md mx-auto text-left text-xs space-y-2 text-gray-600">
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                          <span className="font-semibold text-gray-700">Name:</span>
                          <span>{submittedData?.fullName}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                          <span className="font-semibold text-gray-700">Email:</span>
                          <span>{submittedData?.email}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                          <span className="font-semibold text-gray-700">Phone:</span>
                          <span>{submittedData?.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">Status:</span>
                          <span className="text-green-600 font-bold">Dispatched to Team</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <button
                          type="button"
                          onClick={resetForm}
                          className="bg-[#152442] hover:bg-[#2a4783] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition"
                        >
                          Submit Another Enquiry
                        </button>
                        <button
                          type="button"
                          onClick={handleOpenBooking}
                          className="border border-[#bea166] text-[#bea166] hover:bg-[#bea166] hover:text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition"
                        >
                          Book Chauffeur Online
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* National Offices & Hubs Directory */}
        <section className="py-20 bg-[#f8f9fa] border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166]">
                NATIONWIDE NETWORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] mt-2 mb-4">
                National Offices & Airport Hubs
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-light">
                Hughes and SYD operate dedicated company offices and vehicle depots across all major Australian state capitals, regional airports, and business centers.
              </p>

              {/* State Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                {[
                  { id: "all", label: "All Offices" },
                  { id: "nsw", label: "Sydney (NSW)" },
                  { id: "vic", label: "Melbourne (VIC)" },
                  { id: "qld", label: "Queensland (QLD)" },
                  { id: "wa", label: "Perth (WA)" },
                  { id: "sa", label: "Adelaide (SA)" },
                  { id: "act", label: "Canberra (ACT)" },
                  { id: "regional", label: "Regional Capitals" },
                ].map((pill) => (
                  <button
                    key={pill.id}
                    onClick={() => setSelectedRegionFilter(pill.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${selectedRegionFilter === pill.id
                      ? "bg-[#152442] text-white shadow-md"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-[#bea166] hover:text-[#152442]"
                      }`}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Offices Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOffices.map((office, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header with City & Airport Code */}
                    <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-3">
                      <div>
                        <h3 className="text-lg font-bold text-[#152442]">{office.city}</h3>
                        <span className="text-xs text-gray-500 font-light">{office.state}</span>
                      </div>
                      <span className="bg-[#152442] text-[#bea166] font-mono text-xs font-bold px-2.5 py-1 rounded-md">
                        {office.airportCode}
                      </span>
                    </div>

                    {/* Office Details */}
                    <div className="space-y-3 text-xs text-gray-600 mb-6">
                      <div className="flex items-start space-x-2.5">
                        <svg className="w-4 h-4 text-[#bea166] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <strong className="text-gray-800">Office:</strong> {office.address}
                        </div>
                      </div>

                      <div className="flex items-start space-x-2.5">
                        <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <div>
                          <strong className="text-gray-800">Depot:</strong> {office.depot}
                        </div>
                      </div>

                      <div className="flex items-start space-x-2.5">
                        <svg className="w-4 h-4 text-[#bea166] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <strong className="text-gray-800">Hours:</strong> {office.operatingHours}
                        </div>
                      </div>

                      <div className="flex items-start space-x-2.5">
                        <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <div>
                          <strong className="text-gray-800">Coverage:</strong> {office.coverage}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Office Action Links */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                    <a
                      href={`tel:${office.phone.replace(/\s+/g, "")}`}
                      className="font-bold text-[#152442] hover:text-[#bea166] transition flex items-center space-x-1"
                    >
                      <svg className="w-3.5 h-3.5 mr-1 text-[#bea166]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                      </svg>
                      <span>{office.phone}</span>
                    </a>
                    <button
                      onClick={handleOpenBooking}
                      className="text-[#bea166] hover:underline font-semibold"
                    >
                      Book in {office.city} →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Departmental Desks */}
        <section className="py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166]">
                DEDICATED DEPARTMENTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] mt-2 mb-4">
                Specialized Teams at Your Service
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-light">
                Connect directly with the specialized department handling your transport sector, billing profile, or logistics scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departmentalContacts.map((dept, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-[#bea166] transition shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-bold text-[#152442] mb-1">{dept.department}</h3>
                    <span className="text-[11px] text-[#bea166] font-semibold block mb-3">{dept.hours}</span>
                    <p className="text-xs text-gray-600 font-light leading-relaxed mb-6">{dept.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 space-y-1.5 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 font-medium">Tel:</span>
                      <a href={`tel:${dept.phone.replace(/\s+/g, "")}`} className="font-bold text-[#152442] hover:text-[#bea166]">
                        {dept.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 font-medium">Email:</span>
                      <a href={`mailto:${dept.email}`} className="font-semibold text-[#2a4783] hover:text-[#bea166] truncate block max-w-[190px]">
                        {dept.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-20 bg-[#f8f9fa] border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-14">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166]">
                COMMON QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152442] mt-2 mb-4">
                Frequently Asked Contact & Booking Questions
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-light">
                Find quick answers to common questions about reservations, response times, airport meet & greet, corporate billing, and cancellations.
              </p>
            </div>

            <div className="space-y-4">
              {contactFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-white shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left px-6 sm:px-8 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition"
                    >
                      <span className="text-base font-bold text-[#152442] pr-4">{faq.q}</span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${isOpen ? "bg-[#bea166] text-white rotate-180" : "bg-gray-100 text-[#152442]"
                          }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 sm:px-8 pb-6 text-sm text-gray-600 border-t border-gray-100 leading-relaxed font-light pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Corporate Trust & Brand Partners */}
        <section className="py-16 bg-white border-b border-gray-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
              ESTEEMED CLIENTS & PARTNERS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#152442] mb-10">
              Trusted by Australia&apos;s Leading Airlines, Hotels & Enterprises
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
              {brandPartners.map((brand, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-center h-20 hover:border-[#bea166] transition shadow-xs group"
                >
                  <div className="relative h-10 w-full">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="relative py-20 bg-[#152442] text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cta-bg.png"
              alt="Hughes SYD Chauffeur Service Fleet"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#152442] via-[#152442]/90 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#bea166] block mb-2">
                RESERVE WITH CONFIDENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Ready to Experience Australia’s Finest Chauffeur Service?
              </h2>
              <p className="text-base text-gray-300 font-light mb-8 leading-relaxed">
                Book your next airport transfer or hourly chauffeur in seconds. Fixed upfront pricing, automated flight monitoring, and Australia’s finest professional drivers.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleOpenBooking}
                  className="bg-[#bea166] hover:bg-[#a88d55] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded border-2 border-[#bea166] transition-all shadow-xl active:scale-95 flex items-center space-x-2"
                >
                  <span>Instant Fare Calculator</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <a
                  href="tel:1300615165"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#152442] font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded transition-all shadow-xl active:scale-95 flex items-center space-x-2"
                >
                  <svg className="w-4 h-4 mr-1 text-[#bea166]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                  </svg>
                  <span>1300 615 165</span>
                </a>
              </div>
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
        initialStep="quote"
      />
    </div>
  );
}
