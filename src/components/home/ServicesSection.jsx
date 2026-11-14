import Image from "next/image";

export default function ServicesSection({ onOpenBooking }) {
  const services = [
    {
      title: "Cruise Ship Transfers",
      image: "/images/cruise.jpg",
      description:
        "Looking for a convenient and stylish way to travel to or from your cruise ship terminal? SYD Leisure provides pick ups from cruise ship terminals in every city of Australia.",
      icon: (
        <svg className="w-10 h-10 text-[#bea166]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17l1.5-6h15l1.5 6M4 21c1.5 0 2-1 3-1s1.5 1 3 1 2-1 3-1 1.5 1 3 1 2-1 3-1M7 11V6a2 2 0 012-2h6a2 2 0 012 2v5" />
        </svg>
      ),
    },
    {
      title: "Corporate Transfers",
      image: "/images/corporate.jpg",
      description:
        "For the ultimate corporate transport, travel in comfort and style with our professional, discreet chauffeurs. Your time is precious, so don't waste it driving or waiting in queues for taxis.",
      icon: (
        <svg className="w-10 h-10 text-[#bea166]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Conferences & Special Events",
      image: "/images/service-2.jpg",
      description:
        "Understanding the importance of detailed conference planning, SYD specialises in providing superior transport for all your delegates and guests.",
      icon: (
        <svg className="w-10 h-10 text-[#bea166]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Luxury Tours",
      image: "/images/service-7.jpg",
      description:
        "SYD’ experienced and knowledgeable chauffeurs can show you all of the must-see sites. Tours are designed to suit your needs, utilising our wide selection of well appointed vehicles.",
      icon: (
        <svg className="w-10 h-10 text-[#bea166]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "International Student Transfers",
      image: "/images/interational-students.jpg",
      description:
        "SYD offers exceptional-quality international student transfers to universities throughout Australia, providing peace of mind for families and academic institutions.",
      icon: (
        <svg className="w-10 h-10 text-[#bea166]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      title: "Airport Transfers",
      image: "/images/airport.jpg",
      description:
        "Avoid the traffic and taxi queues! Allow SYD to take the stress out of travelling to and from the airport. Book your luxury chauffeur-driven vehicle now.",
      icon: (
        <svg className="w-10 h-10 text-[#bea166]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2a4783] mb-4">
            Moving you in comfort and style wherever you need to go
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Whether you are looking to get to and from the airport, rushing to a
            corporate meeting or planning a special event, SYD has a luxury
            transport option to get you where you need to be.
          </p>
        </div>

        {/* 6 Luxury Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden shadow-lg h-[400px] flex flex-col justify-end p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer"
              onClick={onOpenBooking}
            >
              {/* Background Photo with Zoom on Hover */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#152442] via-[#152442]/70 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 space-y-3">
                <div className="mb-2 transform transition-transform duration-300 group-hover:scale-110 origin-left">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white tracking-wide">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {service.description}
                </p>

                <div className="pt-2 flex items-center text-[#bea166] text-xs font-semibold uppercase tracking-wider group-hover:text-white transition-colors">
                  <span>Book This Service</span>
                  <svg
                    className="w-4 h-4 ml-1.5 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
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

