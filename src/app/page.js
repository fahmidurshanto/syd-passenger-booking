"use client";

import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import ServicesSection from "../components/home/ServicesSection";
import LocationsSection from "../components/home/LocationsSection";
import ChauffeurExperienceSection from "../components/home/ChauffeurExperienceSection";
import BrandsSection from "../components/home/BrandsSection";
import CtaBannerSection from "../components/home/CtaBannerSection";
import AppDownloadSection from "../components/home/AppDownloadSection";
import FaqSection from "../components/home/FaqSection";
import ContactSection from "../components/home/ContactSection";
import BookingModal from "../components/booking/BookingModal";
import QuickBookingWidget from "../components/booking/QuickBookingWidget";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [showQuickWidget, setShowQuickWidget] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleOpenManage = () => {
    setBookingModalOpen(true);
  };

  const handleOpenQuote = () => {
    setBookingModalOpen(true);
  };

  const handleSelectCity = (cityName) => {
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onOpenManage={handleOpenManage}
          onOpenQuote={handleOpenQuote}
        />

        {/* Optional Collapsible Inline Booking Strip for Quick Desktop Access */}
        <div className="bg-[#152442] border-t border-[#22365e] py-4 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-[#bea166] animate-pulse" />
              <span className="text-xs sm:text-sm font-medium">
                Instant Sydney & Nationwide Online Chauffeur Reservations Available 24/7
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowQuickWidget(!showQuickWidget)}
                className="text-xs uppercase tracking-wider font-semibold text-[#bea166] hover:text-white transition flex items-center"
              >
                <span>{showQuickWidget ? "Hide Quick Booking" : "Show Instant Fare Calculator"}</span>
                <svg
                  className={`w-3.5 h-3.5 ml-1 transition-transform ${showQuickWidget ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {showQuickWidget && (
            <div className="max-w-5xl mx-auto mt-6 animate-fadeIn">
              <QuickBookingWidget onClose={() => setShowQuickWidget(false)} isModal={false} />
            </div>
          )}
        </div>

        {/* 7 Feature Badges */}
        <FeaturesSection />

        {/* 6 Luxury Services with Hover Description */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* Nationwide & International Locations */}
        <LocationsSection onSelectCity={handleSelectCity} />

        {/* Chauffeur Experience & Fleet Gallery */}
        <ChauffeurExperienceSection onOpenBooking={handleOpenBooking} />

        {/* Trusted Top Brands */}
        <BrandsSection />

        {/* Make Your Next Journey Stress-Free CTA */}
        <CtaBannerSection onOpenBooking={handleOpenBooking} />

        {/* SYD Mobile App Download */}
        <AppDownloadSection />

        {/* 10 Comprehensive FAQs */}
        <FaqSection />

        {/* Questions? We're Here To Help Contact Form */}
        <ContactSection />
      </main>

      {/* Complete Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking & Fare Quote Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
