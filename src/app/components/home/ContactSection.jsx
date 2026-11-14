"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2a4783] mb-4">
            Questions? We’re here to help!
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Our friendly Customer Service Team is on hand 24/7 to answer enquiries and keep you moving.
            You can contact us directly on <a href="tel:1300615165" className="text-[#bea166] font-semibold">1300 615 165</a>,
            at <a href="mailto:res@hughes.com.au" className="text-[#bea166] font-semibold">res@hughes.com.au</a> or leave your details below, and we’ll be in touch.
          </p>
        </div>

        {/* 3 Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Email */}
          <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-6 text-center hover:border-[#bea166] transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 relative">
              <Image
                src="/images/mail.png"
                alt="Email Hughes Chauffeurs"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xs uppercase font-semibold text-gray-500 tracking-wider mb-2">
              For email enquiries
            </h3>
            <div className="space-y-1">
              <a
                href="mailto:res@hughes.com.au"
                className="text-sm font-bold text-[#152442] hover:text-[#bea166] transition-colors block"
              >
                res@hughes.com.au
              </a>
              <a
                href="mailto:corporate@hughes.com.au"
                className="text-xs text-gray-600 hover:text-[#bea166] transition-colors block"
              >
                corporate@hughes.com.au
              </a>
            </div>
          </div>

          {/* Card 2: Australia Phone */}
          <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-6 text-center hover:border-[#bea166] transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 relative">
              <Image
                src="/images/call.png"
                alt="Call Hughes within Australia"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xs uppercase font-semibold text-gray-500 tracking-wider mb-2">
              For enquiries within Australia
            </h3>
            <a
              href="tel:1300615165"
              className="text-xl font-bold text-[#2a4783] hover:text-[#bea166] transition-colors block"
            >
              1300 615 165
            </a>
            <span className="text-[11px] text-gray-500 block mt-1">Available 24 Hours / 7 Days</span>
          </div>

          {/* Card 3: Global Phone */}
          <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-6 text-center hover:border-[#bea166] transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 relative">
              <Image
                src="/images/phone.png"
                alt="Hughes Global enquiries"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xs uppercase font-semibold text-gray-500 tracking-wider mb-2">
              For global enquiries
            </h3>
            <a
              href="tel:+61293179000"
              className="text-lg font-bold text-[#152442] hover:text-[#bea166] transition-colors block"
            >
              +61 2 9317 9000
            </a>
            <span className="text-[11px] text-gray-500 block mt-1">International Dispatch Desk</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-12 shadow-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-bold text-[#152442] text-center mb-6">
                Send Us a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#bea166] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#bea166] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#bea166] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#bea166] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Corporate Account Enquiry or Event Transport"
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#bea166] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your upcoming travel requirements..."
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#bea166] outline-none"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="bg-[#2a4783] hover:bg-[#152442] text-white px-10 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  Send Message
                </button>
              </div>
            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#152442]">Thank You!</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Your enquiry has been submitted. Our Hughes customer service team will contact you shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-[#bea166] hover:underline"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

