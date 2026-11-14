"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/utils/navData";
import { getStoredCustomer, logoutCustomerApi } from "@/utils/customerAuth";

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    setCustomer(getStoredCustomer());
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await logoutCustomerApi();
    setCustomer(null);
    window.location.reload();
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Secondary Bar */}
      <div className="bg-[#152442] border-b border-[#22365e] text-white text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center space-x-6 text-[#d0d7e5]">
            <span>Australia&apos;s Chauffeur Service Since 1904</span>
            <span className="text-[#bea166]">★ 14,000+ 5-Star Reviews</span>
          </div>

          <div className="flex items-center space-x-5 ml-auto text-xs">
            <Link
              href="#contact"
              className="text-[#d0d7e5] hover:text-[#bea166] transition-colors"
            >
              Join The Fleet
            </Link>
            <span className="text-gray-600">|</span>
            <div className="relative group">
              <button className="flex items-center text-[#d0d7e5] hover:text-[#bea166] transition-colors">
                <span>Accounts</span>
                <svg
                  className="w-3 h-3 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute right-0 top-full pt-1 hidden group-hover:block z-50">
                <div className="bg-[#152442] border border-[#2a4783] rounded shadow-xl py-2 w-44 text-left">
                  <a
                    href="#contact"
                    className="block px-4 py-1.5 text-xs text-[#d0d7e5] hover:bg-[#2a4783] hover:text-white"
                  >
                    Account Applications
                  </a>
                  <a
                    href="https://client.SYD.com.au/"
                    target="_blank"
                    rel="noreferrer"
                    className="block px-4 py-1.5 text-xs text-[#d0d7e5] hover:bg-[#2a4783] hover:text-white"
                  >
                    Client Sign In
                  </a>
                </div>
              </div>
            </div>
            <span className="text-gray-600">|</span>
            {customer ? (
              <div className="flex items-center space-x-2">
                <span className="text-[#bea166] font-medium">Hi, {customer.fullName?.split(" ")[0]}</span>
                <span className="text-gray-600">|</span>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-xs text-[#d0d7e5] hover:text-white underline cursor-pointer"
                >
                  Log out
                </button>
              </div>
            ) : (
              <Link
                href="/customer/login"
                className="text-[#d0d7e5] hover:text-[#bea166] transition-colors"
              >
                Sign In
              </Link>
            )}
            <span className="text-gray-600">|</span>
            <a
              href="tel:+61404410000"
              className="flex items-center font-semibold text-[#bea166] hover:text-white transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 mr-1.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
              </svg>
              +61 404 410 000
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`transition-all duration-300 ${isScrolled
          ? "bg-[#152442]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-[#152442]/90 backdrop-blur-sm py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-11 w-11 rounded-full overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="SYD Airport Transfer Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-base sm:text-lg font-serif tracking-[0.2em] text-[#bea166] font-bold uppercase leading-none">
                SYD Airport
              </span>
              <span className="text-base sm:text-lg font-serif tracking-[0.2em] text-white font-bold uppercase leading-none mt-1">
                Transfer
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.32em] text-zinc-300 uppercase font-light mt-1.5 leading-none">
                Chauffeur Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-white hover:text-[#bea166] transition-colors flex items-center group"
                >
                  <span>{item.title}</span>
                  <svg
                    className="w-3.5 h-3.5 ml-1 text-gray-400 group-hover:text-[#bea166] transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                {/* Dropdown Menu */}
                {activeDropdown === idx && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    <div className="bg-[#152442] border border-[#2a4783] rounded-lg shadow-2xl p-6 min-w-[520px] grid grid-cols-2 gap-6 animate-fadeIn">
                      {item.columns.map((col, cIdx) => (
                        <div key={cIdx} className="space-y-3">
                          <h4 className="text-xs uppercase tracking-wider font-semibold text-[#bea166] border-b border-[#22365e] pb-1.5">
                            {col.title}
                          </h4>
                          <ul className="space-y-2">
                            {col.links.map((link, lIdx) => (
                              <li key={lIdx}>
                                <a
                                  href={link.href}
                                  className="text-xs text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block"
                                >
                                  {link.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#bea166] hover:bg-[#a88d55] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-5 py-2.5 rounded transition-all shadow-md hover:shadow-lg active:scale-95 inline-block text-center"
            >
              Book Now
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#152442] border-t border-[#22365e] px-6 py-6 space-y-6 max-h-[85vh] overflow-y-auto">
            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-[#22365e] pb-4">
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-[#bea166] block mb-2"
                >
                  {item.title}
                </a>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
                  {item.columns.flatMap((col) =>
                    col.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs text-gray-300 hover:text-white py-1 block"
                      >
                        {link.name}
                      </a>
                    ))
                  )}
                </div>
              </div>
            ))}

            <div className="pt-2 flex flex-col space-y-3">
              <Link
                href="/book"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#bea166] text-white py-3 rounded text-center font-semibold text-sm uppercase tracking-wider block"
              >
                Book a Chauffeur
              </Link>
              <a
                href="tel:+61404410000"
                className="w-full border border-[#2a4783] text-[#bea166] py-2.5 rounded text-center font-semibold text-sm flex items-center justify-center"
              >
                Call +61 404 410 000
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

