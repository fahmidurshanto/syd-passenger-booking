import Image from "next/image";

export default function FeaturesSection() {
  const features = [
    {
      title: "Australia’s Largest Chauffeur Service",
      icon: "/images/icon-1.png",
    },
    {
      title: "Global Reach Across New Zealand & Singapore",
      icon: "/images/global-reach-icon.png",
    },
    {
      title: "Full GPS Tracking On Vehicles",
      icon: "/images/icon-2.png",
    },
    {
      title: "Here To Help 24 Hours A Day",
      icon: "/images/icon-3.png",
    },
    {
      title: "Over 120 years Experience",
      icon: "/images/icon-6.png",
    },
    {
      title: "Large Events & Conference Experts",
      icon: "/images/icon5.png",
    },
    {
      title: "Courteous & Reliable Chauffeurs",
      icon: "/images/icon-4.png",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2a4783] mb-6">
            Chauffeurs At Your Service
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
            When you choose SYD, you’re choosing luxury, style, comfort and,
            most importantly, experience. We’ve been moving Australia for almost
            120 years, and in that time, we’ve learnt how to make it memorable.
            From your friendly driver to your well-appointed vehicle and small
            touches like umbrellas, coffees and local knowledge, you’ll know
            you’re in good hands with SYD.
          </p>
        </div>

        {/* Feature Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 text-center">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-start p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 relative mb-4 flex items-center justify-center transform group-hover:-translate-y-1 transition-transform">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="object-contain max-h-14 w-auto"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-[#152442] leading-snug">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

