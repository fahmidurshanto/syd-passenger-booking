"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerCustomerApi } from "@/utils/customerAuth";

export default function CustomerRegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim() || !email.trim() || !phone.trim() || !password) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    setIsLoading(true);
    try {
      await registerCustomerApi({ fullName, email, phone, password });
      router.push("/book");
    } catch (err) {
      setErrorMessage(err.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#083b77]">
      {/* LEFT COLUMN: Luxury Car Showcase with SYD Logo */}
      <div className="relative w-full md:w-1/2 min-h-[320px] md:min-h-screen bg-black flex flex-col justify-start p-8 sm:p-12 overflow-hidden">
        <Image
          src="/images/corporate.jpg"
          alt="Luxury Chauffeur Car"
          fill
          priority
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Top Left Golden Brand Logo */}
        <div className="relative z-10 flex items-center space-x-3.5">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 drop-shadow-md">
            <Image
              src="/images/syd-gold-circle-logo.png"
              alt="SYD Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl sm:text-2xl font-serif tracking-[0.22em] text-[#bea166] font-bold uppercase leading-none drop-shadow">
              SYD
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.32em] text-zinc-200 uppercase font-light mt-1.5 leading-none">
              Chauffeur Service
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Royal Blue Register Form (Exact Hughes Portal Style) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16 bg-[#0a4588]">
        <div className="w-full max-w-md space-y-6">
          {/* Header Typography */}
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white tracking-tight">
              Create Account
            </h1>
            <p className="text-base sm:text-lg text-sky-200 font-light pt-1">
              Client Portal Registration
            </p>
          </div>

          {errorMessage && (
            <div className="p-3.5 bg-red-950/60 border border-red-500/80 text-red-200 text-xs rounded-xl backdrop-blur-xs">
              {errorMessage}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 1. Full Name */}
            <div className="space-y-1">
              <label className="block text-xs sm:text-sm font-medium text-slate-200">
                Full Name
              </label>
              <div className="relative flex items-center rounded-xl bg-[#08366d] border border-[#165eb3] focus-within:border-sky-400 focus-within:ring-1 focus-within:ring-sky-400 transition-all shadow-inner">
                <span className="pl-4 pr-2 text-sky-300 text-base">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter full name"
                  className="w-full py-3 pr-4 text-sm text-white placeholder-sky-200/50 bg-transparent focus:outline-none font-normal"
                />
              </div>
            </div>

            {/* 2. Email Address */}
            <div className="space-y-1">
              <label className="block text-xs sm:text-sm font-medium text-slate-200">
                Email Address (Username)
              </label>
              <div className="relative flex items-center rounded-xl bg-[#08366d] border border-[#165eb3] focus-within:border-sky-400 focus-within:ring-1 focus-within:ring-sky-400 transition-all shadow-inner">
                <span className="pl-4 pr-2 text-sky-300 text-base">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full py-3 pr-4 text-sm text-white placeholder-sky-200/50 bg-transparent focus:outline-none font-normal"
                />
              </div>
            </div>

            {/* 3. Phone Number */}
            <div className="space-y-1">
              <label className="block text-xs sm:text-sm font-medium text-slate-200">
                Phone Number
              </label>
              <div className="relative flex items-center rounded-xl bg-[#08366d] border border-[#165eb3] focus-within:border-sky-400 focus-within:ring-1 focus-within:ring-sky-400 transition-all shadow-inner">
                <span className="pl-4 pr-2 text-sky-300 text-base">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <input
                  type="tel"
                  required
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+61 404 123 456"
                  className="w-full py-3 pr-4 text-sm text-white placeholder-sky-200/50 bg-transparent focus:outline-none font-normal"
                />
              </div>
            </div>

            {/* 4. Password */}
            <div className="space-y-1">
              <label className="block text-xs sm:text-sm font-medium text-slate-200">
                Password
              </label>
              <div className="relative flex items-center rounded-xl bg-[#08366d] border border-[#165eb3] focus-within:border-sky-400 focus-within:ring-1 focus-within:ring-sky-400 transition-all shadow-inner">
                <span className="pl-4 pr-2 text-sky-300 text-base">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  type="password"
                  required
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password (min. 6 chars)"
                  className="w-full py-3 pr-4 text-sm text-white placeholder-sky-200/50 bg-transparent focus:outline-none font-normal"
                />
              </div>
            </div>

            {/* 5. Optional Account Number */}
            <div className="space-y-1">
              <label className="block text-xs sm:text-sm font-medium text-slate-200">
                Account Number (Optional)
              </label>
              <div className="relative flex items-center rounded-xl bg-[#08366d] border border-[#165eb3] focus-within:border-sky-400 focus-within:ring-1 focus-within:ring-sky-400 transition-all shadow-inner">
                <span className="pl-4 pr-2 text-sky-300 font-bold text-sm">
                  #
                </span>
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder="Enter corporate or reference code"
                  className="w-full py-3 pr-4 text-sm text-white placeholder-sky-200/50 bg-transparent focus:outline-none font-normal"
                />
              </div>
            </div>

            {/* Register Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 rounded-xl bg-black hover:bg-zinc-900 disabled:opacity-50 text-white font-medium text-sm transition-all shadow-lg active:scale-95 cursor-pointer flex items-center justify-center space-x-2 border border-zinc-800"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Registering...</span>
                  </>
                ) : (
                  <span>Create Account</span>
                )}
              </button>
            </div>
          </form>

          {/* Links to Login & Home */}
          <div className="pt-4 flex items-center justify-between text-xs text-sky-200/80 border-t border-sky-900/50">
            <Link
              href="/customer/login"
              className="hover:text-white underline transition-colors"
            >
              Already have an account? Login
            </Link>

            <Link
              href="/"
              className="hover:text-white transition-colors"
            >
              Back to Home →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
