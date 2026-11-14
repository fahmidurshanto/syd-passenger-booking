import Image from "next/image";

export default function AppDownloadSection() {
  return (
    <section id="app" className="py-24 bg-white border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#bea166]">
              Mobile Booking & Fleet Tracking
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#152442] leading-tight">
              Download the Hughes App
            </h2>
            <p className="text-lg text-[#2a4783] font-medium">
              Premium transfers at your fingertips
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
              Experience total travel control wherever you are. Book luxury transfers in seconds,
              track your chauffeur on a live map, receive instant flight adjustments, manage corporate
              expense billing, and view vehicle details prior to pickup.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-gray-700 text-left max-w-md mx-auto lg:mx-0">
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-[#bea166]/20 text-[#bea166] flex items-center justify-center mr-3 text-xs font-bold">✓</span>
                Real-time GPS vehicle tracking & chauffeur arrival alerts
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-[#bea166]/20 text-[#bea166] flex items-center justify-center mr-3 text-xs font-bold">✓</span>
                Automatic flight tracking & complimentary wait times
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-[#bea166]/20 text-[#bea166] flex items-center justify-center mr-3 text-xs font-bold">✓</span>
                Instant fixed-price quotes with transparent receipts
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-[#bea166]/20 text-[#bea166] flex items-center justify-center mr-3 text-xs font-bold">✓</span>
                Available across Australia, New Zealand & Singapore
              </li>
            </ul>

            {/* Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="https://apps.apple.com/pl/app/hughes-chauffeur-service/id1533756887#?platform=iphone"
                target="_blank"
                rel="noreferrer"
                className="transform hover:scale-105 transition-transform"
              >
                <Image
                  src="/images/App-Store-1.png"
                  alt="Download Hughes on App Store"
                  width={160}
                  height={52}
                  className="h-12 w-auto object-contain"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=au.com.hugheslimousines.publicapp&hl=en_AU"
                target="_blank"
                rel="noreferrer"
                className="transform hover:scale-105 transition-transform"
              >
                <Image
                  src="/images/Google-Play-1.png"
                  alt="Download Hughes on Google Play"
                  width={160}
                  height={52}
                  className="h-12 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          {/* App Mockup Graphic */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] drop-shadow-2xl">
              <Image
                src="/images/mobile-app-pop-up-image.png"
                alt="Hughes mobile app interface for premium chauffeur booking"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

