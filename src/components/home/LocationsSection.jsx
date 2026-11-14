"use client";

import { useState } from "react";

export default function LocationsSection({ onSelectCity }) {
  const [activeTab, setActiveTab] = useState("nsw");

  const regions = [
    {
      id: "nsw",
      name: "New South Wales",
      cities: [
        {
          name: "Sydney",
          desc: "Chauffeured luxury transfers across Sydney Kingsford Smith Airport (SYD), Sydney CBD, North Sydney, Eastern Suburbs, Western Sydney, and regional NSW.",
          routes: "Airport • CBD • Circular Quay • Barangaroo • Blue Mountains",
        },
        {
          name: "Byron Bay",
          desc: "Premium chauffeur transfers to and from Ballina Byron Gateway Airport and Gold Coast Airport to Byron Bay luxury resorts and hinterlands.",
          routes: "Ballina Airport • Wategos Beach • Hinterland • Bangalow",
        },
        {
          name: "Newcastle",
          desc: "Executive transport connecting Newcastle Airport, Newcastle city centre, Hunter Valley wine tours, and Lake Macquarie.",
          routes: "Williamtown Airport • Hunter Valley Wine Country • Honeysuckle",
        },
      ],
    },
    {
      id: "vic",
      name: "Victoria",
      cities: [
        {
          name: "Melbourne",
          desc: "Premier chauffeur service across Melbourne Tullamarine (MEL) and Avalon (AVV) airports, Melbourne CBD, Southbank, Yarra Valley, and Mornington Peninsula.",
          routes: "Tullamarine Airport • Southbank • Yarra Valley • Mornington",
        },
      ],
    },
    {
      id: "qld",
      name: "Queensland",
      cities: [
        {
          name: "Brisbane",
          desc: "Dedicated chauffeur solutions for Brisbane Airport (BNE), Brisbane CBD, Fortitude Valley, South Bank, and conference precincts.",
          routes: "BNE Domestic/International • Brisbane CBD • Convention Centre",
        },
        {
          name: "Gold Coast",
          desc: "Luxury transfers serving Gold Coast Coolangatta Airport (OOL), Surfers Paradise, Broadbeach, Sanctuary Cove, and theme parks.",
          routes: "Coolangatta Airport • Broadbeach • Sanctuary Cove • Marina Mirage",
        },
        {
          name: "Sunshine Coast",
          desc: "Seamless travel between Sunshine Coast Airport (MCY), Noosa Heads, Mooloolaba, Maroochydore, and the Glasshouse Mountains.",
          routes: "Sunshine Coast Airport • Noosa Heads • Hastings St • Montville",
        },
        {
          name: "Cairns & Port Douglas",
          desc: "Door-to-door luxury transfers linking Cairns Airport (CNS) with Palm Cove, Port Douglas, the Great Barrier Reef departures, and Daintree.",
          routes: "Cairns Airport • Palm Cove • Port Douglas • Crystalbrook Marina",
        },
      ],
    },
    {
      id: "sa",
      name: "South Australia",
      cities: [
        {
          name: "Adelaide",
          desc: "Executive chauffeur travel for Adelaide Airport (ADL), Adelaide CBD, North Adelaide, Barossa Valley, McLaren Vale, and Adelaide Hills wine regions.",
          routes: "Adelaide Airport • CBD • Barossa Valley • McLaren Vale",
        },
      ],
    },
    {
      id: "wa",
      name: "Western Australia",
      cities: [
        {
          name: "Perth",
          desc: "Corporate and VIP chauffeur services across Perth Airport (PER), Perth CBD, Fremantle, Optus Stadium, Swan Valley, and Margaret River.",
          routes: "Perth Airport • Perth CBD • Crown Towers • Fremantle • Swan Valley",
        },
      ],
    },
    {
      id: "tas",
      name: "Tasmania",
      cities: [
        {
          name: "Hobart",
          desc: "Private luxury transfers covering Hobart Airport (HBA), Hobart Waterfront, MONA, Battery Point, Salamanca, and Huon Valley.",
          routes: "Hobart Airport • Salamanca Place • MONA Ferry • Battery Point",
        },
        {
          name: "Launceston",
          desc: "Chauffeur services for Launceston Airport (LST), Tamar Valley vineyards, Cradle Mountain excursions, and downtown Launceston.",
          routes: "Launceston Airport • Tamar Valley • Cataract Gorge",
        },
      ],
    },
    {
      id: "nt",
      name: "Northern Territory",
      cities: [
        {
          name: "Darwin",
          desc: "Chauffeured luxury for Darwin International Airport (DRW), Darwin Waterfront, Mindil Beach, and Top End corporate charters.",
          routes: "Darwin Airport • Waterfront Precinct • Mindil Beach",
        },
      ],
    },
    {
      id: "act",
      name: "Australian Capital Territory",
      cities: [
        {
          name: "Canberra",
          desc: "Diplomatic, government and corporate transfers servicing Canberra Airport (CBR), Parliament House, Parliamentary Triangle, and embassies.",
          routes: "Canberra Airport • Parliament House • Barton • Civic CBD",
        },
      ],
    },
    {
      id: "intl",
      name: "International",
      cities: [
        {
          name: "Singapore (Changi)",
          desc: "SYD Singapore provides premier Changi Airport (SIN) arrival meet-and-greet, Marina Bay Sands, Orchard Road, Sentosa Island, and CBD corporate travel.",
          routes: "Changi Airport Terminals 1-4 • Marina Bay • Sentosa • Orchard Rd",
        },
        {
          name: "New Zealand",
          desc: "Covering Auckland (AKL), Wellington (WLG), Christchurch (CHC), and Queenstown (ZQN) with bespoke chauffeur luxury.",
          routes: "Auckland • Wellington • Christchurch • Queenstown Ski Resorts",
        },
      ],
    },
  ];

  const currentRegion = regions.find((r) => r.id === activeTab) || regions[0];

  return (
    <section id="locations" className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2a4783] mb-4">
            Australia’s oldest and only nationwide chauffeur service
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            With offices around Australia, we keep you moving across the country. Alongside our luxury
            airport and A to B transfers, we offer tour services to see the sights in style, using one of our
            suggested itineraries or choosing your own adventure.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-[#bea166] uppercase tracking-wider">
            Find out more about our locations and the services on offer.
          </p>
        </div>

        {/* State / Region Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gray-200 pb-4">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveTab(region.id)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${activeTab === region.id
                ? "bg-[#2a4783] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Cities in Active Region */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
          {currentRegion.cities.map((city, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col justify-between hover:border-[#bea166] hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-[#152442] group-hover:text-[#2a4783] transition-colors">
                    {city.name}
                  </h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-[#bea166]/15 text-[#8c7138] rounded">
                    Chauffeur Available
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {city.desc}
                </p>
                <div className="text-[11px] text-gray-500 mb-6 font-medium">
                  <strong className="text-gray-700">Key Hubs:</strong> {city.routes}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <button
                  onClick={() => onSelectCity && onSelectCity(city.name)}
                  className="text-xs font-semibold text-[#2a4783] hover:text-[#bea166] flex items-center uppercase tracking-wider transition-colors"
                >
                  <span>Book In {city.name}</span>
                  <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <span className="text-xs text-gray-400 font-mono">1300 615 165</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

