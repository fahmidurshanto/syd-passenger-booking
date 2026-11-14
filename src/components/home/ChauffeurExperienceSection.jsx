import Image from "next/image";

export default function ChauffeurExperienceSection({ onOpenBooking }) {
  const cards = [
    {
      title: "Book Now",
      image: "/images/galleryimg1.jpg",
      action: "Reserve Your Car",
      onClick: onOpenBooking,
    },
    {
      title: "Join Our Team",
      image: "/images/image-gallery-5-500x500.jpg",
      action: "Explore Careers",
      href: "#contact",
    },
    {
      title: "Airline & Cruise Crewing",
      image: "/images/image-gallery-1-500x500.jpg",
      action: "Crew Logistics",
      href: "#services",
    },
    {
      title: "Our Fleet",
      image: "/images/HUG2201_Photo116-1-500x500.jpg",
      action: "View Vehicle Classes",
      href: "#fleet",
    },
    {
      title: "The Hughes Experience",
      image: "/images/image-gallery-3-500x500.jpg",
      action: "The Standard",
      href: "#services",
    },
    {
      title: "History Of Hughes",
      image: "/images/image-gallery-2-900x500.jpg",
      action: "120+ Years Heritage",
      href: "#faq",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#152442] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Your Hughes Driver: Professional, Experienced, Courteous and Discreet
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-8">
            We handpick our drivers for their exemplary driving records, experience with luxury
            service and commitment to customer service and safety. Your Hughes driver will tailor
            your experience to your needs, whether that’s sharing local knowledge or giving you the
            privacy, peace and quiet to relax in comfort and style.
          </p>
          <button
            onClick={onOpenBooking}
            className="bg-[#bea166] hover:bg-[#a88d55] text-white font-semibold text-xs uppercase tracking-widest px-8 py-3.5 rounded transition-all shadow-lg active:scale-95"
          >
            Book Now
          </button>
        </div>

        {/* 6-Photo Feature Grid */}
        <div id="fleet" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              onClick={card.onClick}
              className="group relative rounded-xl overflow-hidden shadow-lg h-72 sm:h-80 cursor-pointer"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity group-hover:opacity-90" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-xs uppercase font-semibold tracking-wider text-[#bea166] mb-1">
                  {card.action}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#bea166] transition-colors">
                  {card.title}
                </h3>
                <div className="flex items-center text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Learn more</span>
                  <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

