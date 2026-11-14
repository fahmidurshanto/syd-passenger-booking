import Image from "next/image";
import Link from "next/link";

export default function Footer({ onOpenBooking }) {
  const quickLinks = [
    { name: "Airport Meeting Points", href: "#faq" },
    { name: "Book Now", href: "/book" },
    { name: "Manage Booking", href: "/book" },
    { name: "Contact Us", href: "#contact" },
    { name: "City Guides", href: "#locations" },
    { name: "Popular Routes", href: "#locations" },
    { name: "Corporate Transfers", href: "#services" },
    { name: "Conferences & Special Events", href: "#services" },
    { name: "Cruise Ship Transfers", href: "#services" },
    { name: "Private Driver", href: "#services" },
    { name: "Airline & Cruise Crewing", href: "#services" },
    { name: "Luxury Private Tours", href: "#services" },
  ];

  const chauffeurServices = [
    { name: "Airport Transfer Sydney", href: "#locations" },
    { name: "Sydney Chauffeur", href: "#locations" },
    { name: "Airport Transfer Melbourne", href: "#locations" },
    { name: "Melbourne Chauffeur", href: "#locations" },
    { name: "Airport Transfer Brisbane", href: "#locations" },
    { name: "Brisbane Chauffeur", href: "#locations" },
    { name: "Airport Transfer Perth", href: "#locations" },
    { name: "Perth Chauffeur", href: "#locations" },
    { name: "Airport Transfer Adelaide", href: "#locations" },
    { name: "Adelaide Chauffeur", href: "#locations" },
  ];

  return (
    <footer className="bg-[#152442] text-white pt-16 pb-8 border-t border-[#22365e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Summary & App Download */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#22365e] items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative h-11 w-11 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/logo.png"
                  alt="SYD Airport Transfer Logo"
                  fill
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
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-3xl">
              Hughes is Australia’s only fully national chauffeur service, providing premium airport
              transfers, private drivers, and chauffeurs in major cities, including Sydney, Melbourne,
              Brisbane, Perth, Adelaide, and more. With a network of first-class drivers, Hughes ensures
              unparalleled service nationwide.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col lg:items-end space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#bea166]">
              DOWNLOAD THE HUGHES APP
            </span>
            <div className="flex items-center space-x-3">
              <a
                href="https://apps.apple.com/pl/app/hughes-chauffeur-service/id1533756887#?platform=iphone"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition"
              >
                <Image
                  src="/images/w_app-store.svg"
                  alt="App Store"
                  width={110}
                  height={34}
                  className="h-9 w-auto object-contain"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=au.com.hugheslimousines.publicapp&hl=en_AU"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition"
              >
                <Image
                  src="/images/w_google-play.svg"
                  alt="Google Play"
                  width={110}
                  height={34}
                  className="h-9 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-[#22365e]">
          {/* Col 1: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#bea166] mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="hover:text-[#bea166] transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a href={link.href} className="hover:text-[#bea166] transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Chauffeur Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#bea166] mb-4">
              CHAUFFEUR SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {chauffeurServices.map((service, idx) => (
                <li key={idx}>
                  <a href={service.href} className="hover:text-[#bea166] transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tourism & Quality Accreditation Badges */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#bea166] mb-4">
              QUALITY ACCREDITATION
            </h4>
            <div className="space-y-4">
              <p className="text-xs text-gray-300 leading-relaxed">
                Gold Award Winner at NSW Tourism Awards & National Tourism Finalist. Accredited
                Quality & Sustainable Tourism business.
              </p>
              <div className="relative h-20 w-full max-w-[280px]">
                <Image
                  src="/images/Hughes-Website-footer-badges_Updated-30Apr-scaled.png"
                  alt="Quality Tourism Accredited Business Badges"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
          </div>

          {/* Col 4: Secure Payments & Social */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#bea166] mb-3">
                SECURE PAYMENTS
              </h4>
              <div className="relative h-10 w-full max-w-[220px]">
                <Image
                  src="/images/payment.png"
                  alt="Accepted Payment Methods (Visa, Mastercard, Amex, Diners, JCB)"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#bea166] mb-3">
                LET&apos;S STAY CONNECTED
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/hugheschauffeur/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#22365e] hover:bg-[#bea166] flex items-center justify-center text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/hugheschauffeur/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#22365e] hover:bg-[#bea166] flex items-center justify-center text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://au.linkedin.com/company/hughesaustralia"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#22365e] hover:bg-[#bea166] flex items-center justify-center text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © 2026 HUGHES - ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#contact" className="hover:text-[#bea166] transition">Contact</Link>
            <span>|</span>
            <Link href="#services" className="hover:text-[#bea166] transition">Sitemap</Link>
            <span>|</span>
            <Link href="#faq" className="hover:text-[#bea166] transition">Privacy</Link>
            <span>|</span>
            <Link href="#faq" className="hover:text-[#bea166] transition">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

