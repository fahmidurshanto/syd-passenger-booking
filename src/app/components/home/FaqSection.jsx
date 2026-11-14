"use client";

import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What airport transfer services does Hughes provide?",
      a: "Hughes provides premium chauffeur-driven airport transfers at all major airports across Australia, New Zealand and Singapore. Our service includes meet and greet at the arrivals hall, real-time flight tracking so your chauffeur adjusts for any delays, complimentary waiting time, luggage assistance and fixed pricing with no surge charges. We service Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast, Cairns, Darwin, Hobart, Canberra, Auckland, Wellington, Queenstown, Christchurch and Singapore Changi airports.",
    },
    {
      q: "How do I book a chauffeur with Hughes?",
      a: "You can book a Hughes chauffeur online at hire.hughes.com.au for an instant quote and confirmation, through the Hughes App available on iOS and Android, or by calling 1300 615 165 (Australia) or +61 2 9317 9000 (International). We recommend booking in advance for peak periods, though same-day bookings are available subject to vehicle availability.",
    },
    {
      q: "What types of vehicles are in the Hughes fleet?",
      a: "Hughes operates a fleet of 1,235 luxury vehicles across six categories: Executive Sedans (Mercedes E-Class, BMW 5 Series), Premium Sedans (Mercedes S-Class, BMW 7 Series), Premium SUVs (Audi Q7, BMW X5), People Movers (Mercedes V-Class for up to 6 passengers), Luxury Minibuses for group transfers, and Coaches seating up to 54 passengers. All vehicles are late model with leather interiors, climate control, complimentary water, phone charging cables and WiFi where available. Child seats and baby capsules are available at no additional charge.",
    },
    {
      q: "Does Hughes offer corporate accounts?",
      a: "Yes, Hughes offers corporate accounts with monthly invoicing, dedicated account management, priority bookings, generous corporate rates and comprehensive reporting for expense management. Corporate accounts can be set up through our website or by contacting corporate@hughes.com.au. We support duty of care compliance and can manage transport for conferences, road shows, board meetings and regular executive travel.",
    },
    {
      q: "What happens if my flight is delayed?",
      a: "Hughes tracks all flights in real time for airport pickup bookings. If your flight is delayed, your chauffeur's arrival time is automatically adjusted at no extra charge. Complimentary waiting time is included with all airport transfers, so there is no need to worry about additional fees if your flight arrives late.",
    },
    {
      q: "Where does Hughes Chauffeurs operate?",
      a: "Hughes operates across Australia, New Zealand and Singapore with 13 offices. In Australia, we cover Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast, Cairns and Port Douglas, Sunshine Coast, Byron Bay, Canberra, Darwin, Hobart, Launceston and Newcastle. In New Zealand, we service Auckland, Wellington, Christchurch and Queenstown. In Singapore, we cover Changi Airport transfers to all destinations including Marina Bay, Orchard Road, Sentosa Island and the CBD.",
    },
    {
      q: "How is Hughes Chauffeurs different from taxis and rideshare services?",
      a: "Hughes is a professional, pre-booked chauffeur service - not a taxi or rideshare. Key differences include fixed pricing with no surge charges ever, professional uniformed chauffeurs (not casual drivers), luxury late-model vehicles, meet and greet service at airports, real-time flight tracking, complimentary waiting time, and 24/7 availability. Hughes has been operating since 1904 and is a Quality Tourism and Sustainable Tourism Accredited Business.",
    },
    {
      q: "Does Hughes provide cruise ship terminal transfers?",
      a: "Yes, Hughes provides premium chauffeur transfers to and from cruise ship terminals in every major Australian port. This includes Sydney (Circular Quay and White Bay terminals), Melbourne (Station Pier), Brisbane Cruise Terminal, Fremantle Cruise Terminal and Marina Bay Cruise Centre in Singapore. Our chauffeurs assist with luggage and provide door-to-door service. Hughes is a member of the Australian Cruise Association.",
    },
    {
      q: "Can Hughes handle large group transfers for conferences and events?",
      a: "Yes, Hughes specialises in conference and event transport logistics. We coordinate multiple vehicles simultaneously, from executive sedans to coaches seating up to 54 passengers. Our event team manages delegate transfers, VIP transport, airport meet and greet for interstate guests, and on-site vehicle coordination. Hughes has moved 2.95 million passengers in the last 12 months and regularly manages transport for major conferences and corporate events nationwide.",
    },
    {
      q: "Does Hughes offer private tours and sightseeing?",
      a: "Yes, Hughes offers private chauffeured tours tailored to your interests across Australia, New Zealand and Singapore. Popular options include Yarra Valley and Barossa Valley wine tours, Great Ocean Road scenic drives, Sydney Harbour and Blue Mountains tours, and Sentosa Island excursions in Singapore. Tours can follow suggested itineraries or be fully customised. All day hire is also available with a dedicated chauffeur and vehicle at your disposal.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2a4783] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Everything you need to know about booking, airport transfers, vehicle classes and corporate services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between font-semibold text-[#152442] hover:text-[#2a4783] transition-colors focus:outline-none"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#bea166] text-white rotate-180"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

