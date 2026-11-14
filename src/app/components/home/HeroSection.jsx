"use client";

import Image from "next/image";

export default function HeroSection({ onOpenBooking, onOpenManage, onOpenQuote }) {
  const stats = [
    {
      value: "2.95m",
      label: "Passengers moved last 12 months",
    },
    {
      value: "14,000+",
      label: "5 Star Google Reviews",
    },
    {
      value: "13",
      label: "Offices across Australia, NZ & Singapore",
    },
    {
      value: "1500+",
      label: "Size of fleet",
    },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-36 pb-12 overflow-hidden bg-[#152442]">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hughes_banner.png"
          alt="Hughes Australia Chauffeur Fleet"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/55 backdrop-brightness-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#152442] via-transparent to-black/40" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            Australia&apos;s Chauffeur Service
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-2xl">
            Experience the Hughes difference with premium transfers, tours and event transport.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
            <button
              onClick={onOpenBooking}
              className="bg-[#bea166] hover:bg-[#a88d55] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded border-2 border-[#bea166] transition-all shadow-lg active:scale-95"
            >
              Book Now
            </button>

            <button
              onClick={onOpenManage || onOpenBooking}
              className="border-2 border-white text-white hover:bg-white hover:text-[#152442] font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded transition-all shadow-lg active:scale-95"
            >
              Manage Booking
            </button>

            <button
              onClick={onOpenQuote || onOpenBooking}
              className="border-2 border-white text-white hover:bg-white hover:text-[#152442] font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded transition-all shadow-lg active:scale-95"
            >
              Get an Instant Quote
            </button>
          </div>

          {/* Track Link */}
          <div>
            <button
              onClick={onOpenManage || onOpenBooking}
              className="text-white hover:text-[#bea166] text-sm font-medium underline underline-offset-4 flex items-center transition-colors"
            >
              <svg
                className="w-4 h-4 mr-1.5 text-[#bea166]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Track my Vehicle
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Stats & App Badges Row */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full mt-12 pt-8 border-t border-white/15">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-end">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-300 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}

          {/* App download badges */}
          <div className="col-span-2 lg:col-span-1 flex flex-col sm:items-end justify-center space-y-2">
            <div className="flex items-center space-x-3">
              <a
                href="https://apps.apple.com/pl/app/hughes-chauffeur-service/id1533756887#?platform=iphone"
                target="_blank"
                rel="noreferrer"
                className="inline-block hover:opacity-80 transition"
              >
                <Image
                  src="/images/w_app-store.svg"
                  alt="Download Hughes on App Store"
                  width={110}
                  height={34}
                  className="h-8 w-auto object-contain"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=au.com.hugheslimousines.publicapp&hl=en_AU"
                target="_blank"
                rel="noreferrer"
                className="inline-block hover:opacity-80 transition"
              >
                <Image
                  src="/images/w_google-play.svg"
                  alt="Download Hughes on Google Play"
                  width={110}
                  height={34}
                  className="h-8 w-auto object-contain"
                />
              </a>
            </div>
            <span className="text-xs text-gray-300 text-right">
              Download the Hughes app
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

