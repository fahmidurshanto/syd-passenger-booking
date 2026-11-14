import Image from "next/image";

export default function BrandsSection() {
  const brands = [
    { name: "Qantas", logo: "/images/qantas-1024x1024.png" },
    { name: "Virgin Australia", logo: "/images/virgin-1024x1024.png" },
    { name: "Emirates", logo: "/images/emirates-1024x1024.png" },
    { name: "Jetstar", logo: "/images/jetstar-1024x1024.png" },
    { name: "American Express", logo: "/images/american-express-1024x1024.png" },
    { name: "Marriott", logo: "/images/marriott-1024x1024.png" },
    { name: "Flight Centre", logo: "/images/flight-centre-1024x1024.png" },
    { name: "Luxury Escapes", logo: "/images/luxury-escapes-1024x1024.png" },
    { name: "Journey Beyond", logo: "/images/journey-beyond-1024x1024.png" },
    { name: "Abercrombie & Kent", logo: "/images/ambercrombie-and-kent-1024x1024.png" },
    { name: "Scenic Cruises", logo: "/images/scenic-1024x1024.png" },
    { name: "Virtuoso", logo: "/images/virtuoso-1024x1024.png" },
    { name: "Stage & Screen", logo: "/images/stageandscreen-1024x1024.png" },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#2a4783] mb-12">
          Travel in Style with the SYD Chauffeur service trusted by top brands
        </h2>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 items-center justify-items-center">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="w-28 h-20 relative p-2 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

