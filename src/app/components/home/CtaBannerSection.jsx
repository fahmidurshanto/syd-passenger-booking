import Image from "next/image";

export default function CtaBannerSection({ onOpenBooking }) {
  return (
    <section className="relative py-20 bg-[#152442] overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/images/cta-bg.png"
          alt="Hughes Background Pattern"
          fill
          className="object-cover object-left-top"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Make your next journey stress-free with Hughes
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            Experience the Hughes difference and take your next journey in comfort
            and style. Book your car today.
          </p>
        </div>

        <div>
          <button
            onClick={onOpenBooking}
            className="bg-[#bea166] hover:bg-[#a88d55] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-10 py-4 rounded transition-all shadow-xl active:scale-95 whitespace-nowrap"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}

