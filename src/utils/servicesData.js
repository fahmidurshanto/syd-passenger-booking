// Static services data for SYD Chauffeurs
// Modeled after Hughes Services (https://www.hughes.com.au/services/)
// and individual service landing pages (https://www.hughes.com.au/services/chauffeur-service/)

export const servicesOverviewStats = [
  { value: "120+", label: "Years of Chauffeur Heritage" },
  { value: "100%", label: "Fixed Upfront Guaranteed Rates" },
  { value: "1,500+", label: "Luxury European Vehicles" },
  { value: "24/7", label: "Live National Dispatch & Support" },
  { value: "1000+", label: "5-Star Passenger Reviews" },
];

export const servicesList = [
  {
    id: "chauffeur-service",
    slug: "chauffeur-service",
    aliases: ["chauffeur-service", "chauffeur-services", "chauffeur"],
    category: "Chauffeur & Executive",
    name: "Chauffeur Service",
    heroTitle: "Chauffeur Services",
    heroSubtitle: "Sit back and relax with SYD. Personalised, professional, and reliable luxury transport for any occasion, from airport and corporate transfers to day trips and special events.",
    cardImage: "/images/services/chauffeur-service.jpg",
    coverImage: "/images/services/chauffeur-service.jpg",
    shortDescription: "Travel in premium comfort and style with SYD. Dedicated accredited chauffeurs, immaculate European luxury vehicles, and discreet door-to-door service.",
    overview: [
      "The SYD chauffeur experience is perfect for anyone who needs reliable, professional and luxury transport for any occasion, from airport and corporate transfers to day trips and special events.",
      "Your well-appointed vehicle and professional, courteous chauffeur will meet you at your nominated time and location and get you to your destination in comfort and style.",
      "SYD chauffeurs are premium service experts, ensuring you have a personalised travel experience, from the route taken to your personal comfort. Your chauffeur will be happy to share local insights or let you sit back and relax in privacy – with SYD it’s all about you.",
    ],
    serviceStandards: [
      "Well-appointed and pristine luxury European vehicles.",
      "Professional, experienced, courteous and discreet accredited chauffeurs.",
      "A reliable, on-time service with real-time tracking via the SYD Mobile App.",
      "Exceptional attention to detail from vehicle condition and cleanliness to passenger experience.",
      "Extensive knowledge of local roads and conditions to take the best possible route to your destination.",
      "A stress-free and personalised experience that delivers maximum comfort.",
    ],
    features: [
      {
        title: "Discreet & Professional Chauffeurs",
        desc: "Strictly vetted, police background-checked, and accredited chauffeurs in immaculate business attire.",
      },
      {
        title: "Flight & Schedule Monitoring",
        desc: "Automated real-time radar tracking of domestic and international flights with complimentary waiting time.",
      },
      {
        title: "Fixed Upfront Pricing",
        desc: "All tolls, airport access charges, and meet-and-greet services are calculated upfront with zero surge pricing.",
      },
      {
        title: "24/7 Operations Desk",
        desc: "Round-the-clock live dispatch controllers ready to handle last-minute adjustments, early flights, or multi-vehicle requests.",
      },
    ],
    offerings: [
      "Door-to-door residential and hotel luxury transfers",
      "Point-to-point business meeting transit",
      "Full-day and hourly as-directed private hire",
      "VIP and executive airport arrivals & departures",
      "Special occasion, dining, and gala transport",
      "Custom regional sightseeing & winery tours",
    ],
    faqs: [
      {
        q: "What makes SYD chauffeur service different from a taxi or rideshare?",
        a: "Unlike on-demand taxis or rideshares where driver quality, vehicle standards, and availability are inconsistent, SYD provides pre-booked, guaranteed luxury transfers with accredited professional chauffeurs in late-model European vehicles. Your fare is fixed upfront, with zero surge pricing during peak hours or bad weather.",
      },
      {
        q: "Can I book a chauffeur by the hour or for the entire day?",
        a: "Yes. We offer flexible hourly and all-day as-directed chauffeur hire. Your driver will remain on standby exclusively for you, taking you between multiple meetings, appointments, or stops at your own pace.",
      },
      {
        q: "How will I recognize my chauffeur at pickup?",
        a: "Your chauffeur will arrive 10–15 minutes early in business attire. For airport pickups, they greet you inside the terminal holding a personalized digital iPad name board. You will also receive an SMS with your driver's direct contact details and live tracking link.",
      },
      {
        q: "Are complimentary amenities provided in the vehicles?",
        a: "Yes. All SYD vehicles come equipped with chilled bottled spring water, mints, smartphone charging cables for Apple and Android, dual-zone climate control, and Wi-Fi access upon request.",
      },
    ],
  },
  {
    id: "corporate-transfers",
    slug: "corporate-transfers",
    aliases: ["corporate-transfers", "corporate", "business-transfers"],
    category: "Corporate & Business",
    name: "Corporate Transfers",
    heroTitle: "Premium Corporate Transfers",
    heroSubtitle: "For the ultimate corporate transport, travel in comfort and style with our professional, discreet chauffeurs. Your time is precious, so don't waste it driving or waiting in queues for taxis.",
    cardImage: "/images/services/corporate-transfers.jpg",
    coverImage: "/images/services/corporate-transfers.jpg",
    shortDescription: "Efficient and discreet business transport with consolidated corporate billing, priority booking, and an executive European sedan fleet.",
    overview: [
      "SYD is the transport provider of choice for leading Australian and multinational organisations because we take the hassle out of corporate transfers – with executive billing, priority booking, and pristine vehicles.",
      "Whether transporting board members between financial districts, picking up visiting international clients from the airport, or coordinating roadshows across multiple capital cities, our corporate team guarantees punctuality and discretion.",
      "Enjoy a quiet, mobile office environment with acoustic glass, dual-zone climate control, and charging ports, allowing you to prepare for your next presentation in undisturbed comfort.",
    ],
    serviceStandards: [
      "Dedicated corporate account managers and tailored Service Level Agreements (SLAs).",
      "Consolidated monthly invoicing with departmental and cost-centre breakdown.",
      "Priority fleet allocation during peak commuting hours and major business summits.",
      "Confidentiality non-disclosure compliance for all corporate chauffeurs.",
      "Real-time GPS dispatch and duty of care reporting for executive travel coordinators.",
    ],
    features: [
      {
        title: "Mobile Office Comfort",
        desc: "Quiet, acoustic-insulated cabins equipped with high-speed charging cables and generous rear legroom.",
      },
      {
        title: "Centralized Corporate Billing",
        desc: "Streamlined single-invoice monthly billing with PO numbers and automated travel receipt delivery.",
      },
      {
        title: "Duty of Care & Discretion",
        desc: "Strict confidentiality and driver vetting ensuring peace of mind for sensitive executive travels.",
      },
      {
        title: "Nationwide Coverage",
        desc: "One corporate account gives your team access to executive chauffeur fleets across all Australian capitals and NZ.",
      },
    ],
    offerings: [
      "Executive CBD office to airport transfers",
      "Inter-city roadshow and multi-meeting transit",
      "Client and VIP executive hospitality transport",
      "Board meeting and AGM luxury shuttles",
      "Corporate accounts with 30-day billing terms",
    ],
    faqs: [
      {
        q: "How do I set up a corporate account with SYD?",
        a: "Setting up a corporate account is fast and simple. Contact our corporate accounts team online or by phone. We offer 30-day payment terms, customized portal access for your travel coordinators, and automated invoicing.",
      },
      {
        q: "Can my corporate account cover travel in multiple cities?",
        a: "Yes. A single SYD account covers travel across Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, Hobart, Gold Coast, Byron Bay, and internationally in New Zealand and Singapore.",
      },
    ],
  },
  {
    id: "conferences-special-events",
    slug: "conferences-special-events",
    aliases: ["conferences-special-events", "conferences", "special-events", "events"],
    category: "Corporate & Business",
    name: "Conferences & Special Events",
    heroTitle: "Conference & Special Event Ground Transport",
    heroSubtitle: "Make the right first impression. Comprehensive transport planning and luxury fleet coordination for corporate conferences, summits, and galas.",
    cardImage: "/images/services/conferences.jpg",
    coverImage: "/images/services/conferences.jpg",
    shortDescription: "Understanding the importance of detailed conference planning, SYD specialises in providing superior transport for all your delegates and guests.",
    overview: [
      "Understanding the importance of detailed conference planning, SYD specialises in providing superior transport for all your delegates and guests.",
      "Our dedicated events logistics management team works hand-in-hand with professional conference organizers (PCOs), event managers, and venue directors to orchestrate seamless arrivals and departures.",
      "From VIP keynote speaker airport transfers in flagship Mercedes S-Class sedans to multi-coach delegate movements for hundreds of attendees, SYD manages every vehicle movement with precision.",
    ],
    serviceStandards: [
      "Dedicated onsite event coordinator and dispatch marshalling team.",
      "Live flight tracking and manifest reconciliation for multi-flight delegate arrivals.",
      "Custom branded signage and personalized greeting stations at airports and venue drop-offs.",
      "Coordinated group transport using luxury Mercedes V-Class vans, Sprinter minibuses, and coaches.",
      "24/7 communications hotline between event managers and our central dispatch operations.",
    ],
    features: [
      {
        title: "Onsite Transport Marshals",
        desc: "Professional uniformed marshals to manage curb-side logistics, passenger loading, and venue staging.",
      },
      {
        title: "Manifest & Group Scheduling",
        desc: "Advanced routing and flight grouping to optimize vehicle utilization and reduce attendee waiting times.",
      },
      {
        title: "Scalable Fleet Options",
        desc: "From individual executive sedans to 54-seat luxury touring coaches equipped with panoramic windows.",
      },
      {
        title: "Contingency & Traffic Mitigation",
        desc: "Proactive route monitoring to navigate around peak-hour bottlenecks and city road closures.",
      },
    ],
    offerings: [
      "Major convention center delegate shuttles (ICC Sydney, MCEC, BCEC, GCCEC)",
      "VIP keynote speaker and dignitary escort transfers",
      "Corporate gala dinners and award night transport",
      "Film premieres, product launches, and fashion events",
      "Offsite team building and sponsor networking excursions",
    ],
    faqs: [
      {
        q: "How early should we start planning conference transport with SYD?",
        a: "We recommend engaging our events team 4 to 8 weeks in advance for major conventions, though we regularly accommodate urgent requirements. Early booking guarantees vehicle availability across high-capacity minibuses and luxury sedans.",
      },
      {
        q: "Can SYD provide an onsite coordinator during our event?",
        a: "Yes. For medium and large-scale conferences, we provide experienced onsite transport marshals equipped with direct radio/phone contact to dispatch controllers to oversee guest boarding and staging.",
      },
    ],
  },
  {
    id: "cruise-ship-transfers",
    slug: "cruise-ship-transfers",
    aliases: ["cruise-ship-transfers", "cruise-transfers", "cruise"],
    category: "Leisure & VIP",
    name: "Cruise Ship Transfers",
    heroTitle: "Make Ground Transport as Relaxing as Your Cruise",
    heroSubtitle: "From ship to shore in style. Stress-free transfers to and from passenger cruise terminals across Australia with generous luggage space and inside meet-and-greet.",
    cardImage: "/images/services/cruise.jpg",
    coverImage: "/images/services/cruise.jpg",
    shortDescription: "Looking for a convenient and stylish way to travel to or from your cruise ship terminal? SYD provides premium pick ups from cruise terminals in every major port.",
    overview: [
      "Looking for a convenient and stylish way to travel to or from your cruise ship terminal? SYD Leisure provides pick ups from cruise ship terminals in every city of Australia.",
      "Navigating cruise passenger terminals on disembarkation day can be chaotic with thousands of travellers vying for limited taxis. With SYD, your private chauffeur is reserved in advance, ready to assist with all your heavy luggage.",
      "Whether transferring between Sydney Overseas Passenger Terminal (Circular Quay), White Bay Cruise Terminal, Station Pier in Melbourne, or the Brisbane International Cruise Terminal, travel directly to your hotel or airport in air-conditioned luxury.",
    ],
    serviceStandards: [
      "Direct terminal pick-up and drop-off at designated commercial limousine bays.",
      "Complimentary luggage assistance from terminal exits directly into the vehicle trunk.",
      "High-capacity luggage options including Luxury SUVs, Mercedes V-Class people movers, and baggage trailers.",
      "Live ship berthing monitoring to adapt to early dockings or disembarkation delays.",
    ],
    features: [
      {
        title: "All Major Australian Ports",
        desc: "Covering Sydney (OPT & White Bay), Melbourne (Station Pier), Brisbane (Luggage Point), Perth (Fremantle), and Adelaide.",
      },
      {
        title: "Extra Luggage Space",
        desc: "Roomy people movers and luxury SUVs designed to accommodate multi-week cruise suitcases, wardrobe bags, and family luggage.",
      },
      {
        title: "Punctual Pier Pickups",
        desc: "Skip taxi queues of over 300 passengers with guaranteed pre-arranged driver meet and greet.",
      },
      {
        title: "Airport Connections",
        desc: "Swift, direct transit linking cruise ship terminals directly to domestic and international airport departure terminals.",
      },
    ],
    offerings: [
      "Cruise terminal to airport direct transfers",
      "Hotel to cruise terminal departures",
      "Pre-cruise and post-cruise private day sightseeing tours",
      "Family and group transport with child safety seats",
    ],
    faqs: [
      {
        q: "Where does my chauffeur meet me at the cruise terminal?",
        a: "Your chauffeur will wait in the designated passenger pickup / limousine zone right outside the customs and baggage hall, holding a digital iPad sign with your name.",
      },
      {
        q: "What if disembarkation is delayed due to customs clearance?",
        a: "We stay in touch with you via SMS/phone and monitor port schedules. Complimentary waiting time is built into our cruise terminal transfer packages.",
      },
    ],
  },
  {
    id: "airport-transfers",
    slug: "airport-transfers",
    aliases: ["airport-transfers", "airport", "airport-transfer"],
    category: "Chauffeur & Executive",
    name: "Airport Transfers",
    heroTitle: "Luxury Airport Transfers Across Australia",
    heroSubtitle: "Avoid the traffic and taxi queues! Allow SYD to take the stress out of travelling to and from the airport with professional meet-and-greet, live flight tracking, and fixed upfront fares.",
    cardImage: "/images/services/airport.jpg",
    coverImage: "/images/services/airport.jpg",
    shortDescription: "Avoid the traffic and taxi queues! Allow SYD to take the stress out of travelling to and from the airport. Book your luxury chauffeur-driven vehicle now.",
    overview: [
      "Avoid the traffic, expensive airport parking, and long taxi queues. Allow SYD to take the stress out of travelling to and from the airport with guaranteed, pre-booked luxury.",
      "Your accredited chauffeur continuously monitors your incoming flight using automated live flight tracking, adjusting pickup times if you arrive early or encounter airspace delays.",
      "Step off your flight and straight into a waiting, climate-controlled European sedan. Your chauffeur welcomes you inside the terminal, takes charge of your luggage, and escorts you directly to the car.",
    ],
    serviceStandards: [
      "Automated flight radar tracking for commercial flights and private FBO charters.",
      "Inside-terminal meet & greet with personalized iPad name signs.",
      "Complimentary waiting time (30 mins domestic / 60 mins international past wheels down).",
      "Fixed all-inclusive flat pricing with zero airport tolls or surge charges.",
    ],
    features: [
      {
        title: "Inside Terminal Meet & Greet",
        desc: "Personalized welcome at the luggage carousel or international arrivals hall past customs clearance.",
      },
      {
        title: "Real-Time Flight Tracking",
        desc: "Automatic flight delay adaptation ensuring your driver is waiting when you touch down.",
      },
      {
        title: "All Australian Airports",
        desc: "Serving Sydney (SYD), Melbourne (MEL/AVV), Brisbane (BNE), Perth (PER), Adelaide (ADL), Gold Coast (OOL), and more.",
      },
      {
        title: "Luggage Care",
        desc: "Full assistance with heavy baggage, trolleys, and sporting equipment from terminal to vehicle.",
      },
    ],
    offerings: [
      "Domestic and International airport arrivals & departures",
      "Executive corporate airport transfers",
      "Private jet terminal (FBO) VIP tarmac and lounge pickups",
      "Family holiday transfers with child safety seats",
    ],
    faqs: [
      {
        q: "What happens if my flight is delayed?",
        a: "We monitor your flight status automatically. If your flight is delayed or arrives early, your chauffeur's pickup schedule is adjusted automatically at no additional fee.",
      },
      {
        q: "Where do I meet my driver?",
        a: "For Domestic flights, meet your driver near the designated baggage carousel. For International flights, meet your driver just past customs exit doors inside the arrivals hall.",
      },
    ],
  },
  {
    id: "international-student-transfers",
    slug: "international-student-transfers",
    aliases: ["international-student-transfers", "student-transfers", "student"],
    category: "Leisure & VIP",
    name: "International Student Transfers",
    heroTitle: "Safe International Student Transfers",
    heroSubtitle: "Keeping students moving safely. Safe, welcoming, and high-quality international student arrival and departure transfers connecting students directly to university campuses.",
    cardImage: "/images/services/international-students.jpg",
    coverImage: "/images/services/international-students.jpg",
    shortDescription: "SYD offers exceptional-quality international student transfers to universities, colleges, and student accommodation throughout Australia.",
    overview: [
      "The international student journey is an exciting milestone, and arriving in a foreign country can be overwhelming. SYD partners with leading Australian universities, education agents, and families to make arrival safe, welcoming, and effortless.",
      "Our accredited, background-checked chauffeurs meet students inside the airport terminal, assist with their heavy luggage, and deliver them directly to their university accommodation, homestay, or residential college.",
      "We provide instant arrival confirmation updates to parents and university welfare officers, giving everyone total peace of mind.",
    ],
    serviceStandards: [
      "Strict background checks and Working with Children certification for assigned chauffeurs.",
      "Direct delivery to student housing, dormitories, and homestay residential doors.",
      "Automated SMS arrival notification sent to parents, guardians, or university coordinators.",
      "Multilingual booking support and clear instructions in pre-arrival student welcome packs.",
    ],
    features: [
      {
        title: "Warm Terminal Welcome",
        desc: "Chauffeur holds a clear, personalized digital greeting board so students find their driver easily.",
      },
      {
        title: "Luggage Assistance",
        desc: "Help with oversized student travel luggage, study gear, and personal belongings.",
      },
      {
        title: "Safe Door-to-Door Transit",
        desc: "Direct escort into the accommodation reception, foyer, or homestay address.",
      },
      {
        title: "Guardian Peace of Mind",
        desc: "Instant SMS/email confirmation when the student is safely picked up and dropped off.",
      },
    ],
    offerings: [
      "Semester intake high-volume airport arrival services",
      "Individual international student university transfers",
      "Homestay and student residential village drop-offs",
      "Departure transfers at the conclusion of study semesters",
    ],
    faqs: [
      {
        q: "Can universities or education agents book in bulk for semester intakes?",
        a: "Yes. We operate dedicated airport reception desks and coordinate high-volume student transfers for major semester intakes across all capital cities.",
      },
      {
        q: "How are parents informed that their child has arrived safely?",
        a: "Our automated dispatch system sends SMS/email notifications upon pickup at the airport and upon arrival at the student residence.",
      },
    ],
  },
  {
    id: "luxury-private-tours",
    slug: "luxury-private-tours",
    aliases: ["luxury-private-tours", "luxury-tours", "tours", "sightseeing"],
    category: "Leisure & VIP",
    name: "Luxury Private Tours",
    heroTitle: "Bespoke Luxury Sightseeing Tours",
    heroSubtitle: "Choose your own adventure with unforgettable sightseeing tours. SYD's experienced and knowledgeable chauffeurs can show you all of the must-see sites in supreme comfort.",
    cardImage: "/images/services/luxury-tours.jpg",
    coverImage: "/images/services/luxury-tours.jpg",
    shortDescription: "SYD’s experienced and knowledgeable chauffeurs can show you all of the must-see sites. Tours are designed to suit your needs, utilising our wide selection of luxury vehicles.",
    overview: [
      "Whether you want to see iconic city landmarks or escape beyond the metropolis, whether travelling solo, as a couple, or with family and friends, SYD delivers an unforgettable private touring experience.",
      "Our chauffeurs combine deep local knowledge with impeccable hospitality. Travel at your own pace without the crowds, rigid schedules, or microphone chatter of commercial tour buses.",
      "Stop whenever you want for photos, enjoy private tastings at world-class cellar doors, and discover hidden gems only known to knowledgeable locals.",
    ],
    serviceStandards: [
      "Customizable itineraries tailored to your personal interests and schedule.",
      "Chilled bottled water, panoramic vehicle windows, and complimentary onboard Wi-Fi.",
      "Door-to-door pickup and return directly to your hotel or private residence.",
      "Expert local driver commentary or complete privacy whenever you prefer.",
    ],
    features: [
      {
        title: "World-Class Wine Regions",
        desc: "Bespoke winery tours to the Hunter Valley, Yarra Valley, Barossa Valley, McLaren Vale, and Margaret River.",
      },
      {
        title: "Iconic Natural Wonders",
        desc: "Day trips to the Blue Mountains, Great Ocean Road, Daintree Rainforest, and Byron Bay Hinterland.",
      },
      {
        title: "Flexible Timetable",
        desc: "Linger longer at your favorite spots with no strict bus schedules or group constraints.",
      },
      {
        title: "Prestige Fleet Choices",
        desc: "From European luxury sedans and premium SUVs to Mercedes V-Class people movers.",
      },
    ],
    offerings: [
      "Hunter Valley & Blue Mountains Luxury Day Tours (from Sydney)",
      "Yarra Valley & Mornington Peninsula Wine Tours (from Melbourne)",
      "Barossa Valley & McLaren Vale Cellar Door Tours (from Adelaide)",
      "Byron Bay Hinterland & Coastal Tours",
      "City Highlights & Architecture Private Day Tours",
    ],
    faqs: [
      {
        q: "Can we customize the tour itinerary on the day?",
        a: "Yes! Because this is your private chauffeur tour, you have complete flexibility to adjust timing, add a winery, or stop at scenic lookouts along the way.",
      },
      {
        q: "Are wine tasting fees and lunch included in the charter?",
        a: "Our charter fee covers the dedicated luxury vehicle, chauffeur, fuel, and tolls. Cellar door tasting fees and lunch can be paid directly or arranged as an all-inclusive VIP package upon advance request.",
      },
    ],
  },
  {
    id: "airline-cruise-crewing",
    slug: "airline-cruise-crewing",
    aliases: ["airline-cruise-crewing", "crewing", "crew-transport"],
    category: "Corporate & Business",
    name: "Airline & Cruise Crewing",
    heroTitle: "Airline & Cruise Ship Crew Transport",
    heroSubtitle: "Setting the standard in crew transport for over 50 years. Professional, reliable, and punctual 24/7 dedicated ground transport for flight crews and maritime personnel nationwide.",
    cardImage: "/images/services/airline.jpg",
    coverImage: "/images/services/airline.jpg",
    shortDescription: "Setting the standard in crew transport for over 50 years. Professional, reliable crew transport, nationwide.",
    overview: [
      "SYD is the industry leader in airline and cruise ship crew transport, servicing Australia’s leading passenger airlines, cargo carriers, and international cruise lines for more than half a century.",
      "We understand that on-time arrival for flight deck and cabin crew is non-negotiable. Our specialized crewing logistics department operates 24/7/365, managing layover hotel shuttles, schedule disruptions, and airport tarmac transfers.",
      "With GPS tracking across every vehicle and automated dispatch integration with airline crew scheduling systems, SYD guarantees absolute reliability.",
    ],
    serviceStandards: [
      "Rigorous adherence to airline flight departure and report time standards.",
      "Dedicated 24/7 crew logistics dispatch desk with live flight monitoring.",
      "Generous baggage holds configured specifically for multi-day crew flight luggage.",
      "Direct airport tarmac and landside hotel shuttle capabilities.",
    ],
    features: [
      {
        title: "50+ Years Crew Experience",
        desc: "Deep expertise in the unique scheduling and security requirements of aviation and maritime clients.",
      },
      {
        title: "Real-Time Tracking & Telematics",
        desc: "Live GPS monitoring giving airline dispatch controllers transparent oversight of all crew movements.",
      },
      {
        title: "Disruption Recovery",
        desc: "Rapid mobilization of backup vehicles during weather delays, flight diversions, or schedule shifts.",
      },
      {
        title: "National Airport Network",
        desc: "Seamless operations across all major Australian airports and international seaports.",
      },
    ],
    offerings: [
      "Scheduled airline crew layover transfers between airports and contracted hotels",
      "Maritime pilot and ship crew transfers to port berths and anchorages",
      "Emergency flight diversion passenger and crew rescue transport",
      "Dedicated contract vehicles branded or assigned to airline partners",
    ],
    faqs: [
      {
        q: "How does SYD handle sudden airline schedule disruptions and delays?",
        a: "Our dedicated 24/7 crew desk is integrated with flight radar systems. When flights are rescheduled or diverted, our controllers automatically adjust pickup times and reassign drivers with zero disruption.",
      },
      {
        q: "What vehicle types are used for crew transfers?",
        a: "We deploy comfortable Mercedes-Benz Sprinter minibuses, executive people movers, and sedans with specialized luggage compartments for flight crew bags.",
      },
    ],
  },
  {
    id: "all-day-chauffeur-hire",
    slug: "all-day-chauffeur-hire",
    aliases: ["all-day-chauffeur-hire", "all-day-hire", "all-day", "as-directed"],
    category: "Chauffeur & Executive",
    name: "All Day Chauffeur Hire",
    heroTitle: "All Day & Hourly Chauffeur Hire",
    heroSubtitle: "A chauffeur for the day - wherever you need to go. Sit back and relax with SYD All Day Hire, giving you exclusive access to a well-appointed luxury vehicle and dedicated driver.",
    cardImage: "/images/services/all-day.jpg",
    coverImage: "/images/services/all-day.jpg",
    shortDescription: "A chauffeur for the day - wherever you need to go. Flexible hourly or full-day as-directed chauffeur hire giving you a dedicated driver and vehicle on demand.",
    overview: [
      "Your SYD All Day Hire gives you exclusive access to a well-appointed, chauffeur driven luxury vehicle from morning until night, to get you wherever you need to go.",
      "It’s the perfect solution for busy executives navigating a multi-stop itinerary, property investors touring commercial developments, visiting dignitaries, or couples enjoying a day of luxury shopping and dining.",
      "No waiting for cabs, no parking hassles, and no stress. Your vehicle remains on standby right outside your venue, ready to depart the moment you step out.",
    ],
    serviceStandards: [
      "Dedicated personal chauffeur and luxury vehicle on standby exclusively for your party.",
      "Flexible, spontaneous routing with unlimited stops within the hired hours.",
      "Complete discretion and confidentiality for business meetings conducted inside the vehicle.",
      "Complimentary chilled spring water, daily newspapers or tablets, and device charging.",
    ],
    features: [
      {
        title: "Complete Flexibility",
        desc: "Change your destination, extend your stay, or add spontaneous stops without rebooking.",
      },
      {
        title: "Always On Standby",
        desc: "Your chauffeur waits curbside or at the nearest private bay, ready to depart on your command.",
      },
      {
        title: "Mobile Boardroom",
        desc: "Conduct private phone calls, review confidential documents, or hold discussions on the move.",
      },
      {
        title: "Zero Parking Stress",
        desc: "Step out directly at the front door while your chauffeur handles inner-city parking.",
      },
    ],
    offerings: [
      "Full-day (8-hour) executive corporate packages",
      "Half-day (4-hour) flexible city meeting hire",
      "Multi-day corporate roadshow itineraries",
      "Personal shopping and private gallery touring",
    ],
    faqs: [
      {
        q: "How many hours are included in an All Day Hire?",
        a: "Our standard All Day Hire package includes up to 8 hours of dedicated chauffeur service. Additional hours can be added at standard transparent hourly rates.",
      },
      {
        q: "Can I leave my personal luggage or shopping bags in the car between stops?",
        a: "Yes. Your vehicle is dedicated exclusively to you, and your driver remains with the vehicle, ensuring your belongings are completely secure.",
      },
    ],
  },
  {
    id: "syd-mobile-app",
    slug: "syd-mobile-app",
    aliases: ["syd-mobile-app", "signature-service", "mobile-app", "app"],
    category: "Leisure & VIP",
    name: "SYD Mobile App & Signature VIP",
    heroTitle: "SYD Mobile App & VIP Signature Experience",
    heroSubtitle: "Premium transfers at your fingertips. An elevated transport experience for the discerning passenger, combining seamless mobile technology with elite chauffeur hospitality.",
    cardImage: "/images/services/vip.jpg",
    coverImage: "/images/services/vip.jpg",
    shortDescription: "An elevated transport experience for the discerning passenger. Seamless smartphone booking, live chauffeur GPS tracking, and instant digital expense receipts.",
    overview: [
      "Experience the pinnacle of ground transportation with the SYD Mobile App and our VIP Signature Service.",
      "Book executive transfers in seconds, track your assigned chauffeur’s real-time approach on live GPS maps, view driver contact details, and receive automated digital invoices directly to your accounting software.",
      "For ultra-VIP clients, our Signature Service pairs our flagship luxury sedans (Mercedes S-Class, BMW 7 Series) with senior executive chauffeurs, providing red-carpet hospitality and priority operations monitoring.",
    ],
    serviceStandards: [
      "Instant smartphone reservations with live vehicle tracking and arrival notifications.",
      "Digital wallet integration and automated corporate expense receipt generation.",
      "VIP Signature senior chauffeurs trained in diplomatic and executive protocol.",
      "Flagship European long-wheelbase luxury vehicles with acoustic privacy glass.",
    ],
    features: [
      {
        title: "Live GPS Vehicle Tracking",
        desc: "Watch your chauffeur’s real-time location and estimated time of arrival on your smartphone.",
      },
      {
        title: "Driver Details at a Glance",
        desc: "Access your chauffeur’s name, phone number, vehicle model, and license plate ahead of pickup.",
      },
      {
        title: "One-Touch Repeat Bookings",
        desc: "Save frequent travel routes, flight numbers, and favorite vehicle classes for rapid rebooking.",
      },
      {
        title: "Instant Digital Receipts",
        desc: "PDF tax invoices sent directly to your inbox immediately upon completion of your trip.",
      },
    ],
    offerings: [
      "iOS and Android mobile app booking",
      "VIP Signature long-wheelbase transfers (Mercedes S-Class)",
      "Corporate executive travel management portal",
      "24/7 in-app customer support assistance",
    ],
    faqs: [
      {
        q: "Where can I download the SYD Mobile App?",
        a: "The SYD Mobile App is available as a free download on the Apple App Store for iOS devices and on Google Play for Android smartphones.",
      },
      {
        q: "Can I manage corporate bookings for other colleagues on the app?",
        a: "Yes. Executive assistants and travel coordinators can book, manage, and monitor transfers for other passengers directly from their app profile.",
      },
    ],
  },
];

export const servicesOverviewFaqs = [
  {
    q: "What services does SYD provide across Australia?",
    a: "SYD provides a comprehensive suite of chauffeured ground transport services including Airport Transfers, Corporate Transfers, Conferences & Special Events, Cruise Ship Transfers, All Day Chauffeur Hire, Luxury Private Tours, Airline & Cruise Crewing, International Student Transfers, and VIP Signature Travel.",
  },
  {
    q: "How does SYD calculate pricing for its services?",
    a: "All SYD transfers are booked at guaranteed fixed upfront prices. Your quote includes all toll charges, airport parking fees, professional meet-and-greet service, and complimentary waiting time, with zero hidden surcharges or peak-hour surge pricing.",
  },
  {
    q: "Can I book services for multiple cities through one account?",
    a: "Yes. SYD operates Australia's only truly nationwide chauffeur network. A single corporate or private account allows you to book and manage transport across Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, Hobart, Gold Coast, Byron Bay, and internationally in New Zealand and Singapore.",
  },
  {
    q: "What vehicles are available across your service lines?",
    a: "Our fleet consists of late-model European vehicles including Executive Sedans (Mercedes E-Class, BMW 5 Series), Premium Sedans (Mercedes S-Class, BMW 7 Series), Premium Luxury SUVs (Audi Q7, BMW X5), Mercedes V-Class people movers, and luxury minibuses and coaches up to 54 seats.",
  },
  {
    q: "How do cancellations and schedule adjustments work?",
    a: "We offer flexible cancellation policies and 24/7 dispatch support. Most standard transfers can be adjusted or cancelled with advance notice without penalty. Flight arrivals are tracked in real time, so delays are accommodated automatically.",
  },
];

// Helper to look up a service by its URL slug or alias
export function getServiceBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim().replace(/^\/services\//, "").replace(/\/$/, "");

  const found = servicesList.find((srv) => {
    if (srv.slug.toLowerCase() === normalized) return true;
    if (srv.id.toLowerCase() === normalized) return true;
    if (srv.aliases && srv.aliases.some((a) => a.toLowerCase() === normalized)) return true;
    return false;
  });

  if (found) return found;

  // Partial match fallback
  const partial = servicesList.find((srv) => {
    return (
      srv.slug.toLowerCase().includes(normalized) ||
      normalized.includes(srv.slug.toLowerCase()) ||
      srv.name.toLowerCase().replace(/[^a-z0-9]/g, "") === normalized.replace(/[^a-z0-9]/g, "")
    );
  });

  if (partial) return partial;

  // Graceful fallback for any unknown slug
  const titleCaseSlug = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    id: slug,
    slug: slug,
    category: "Chauffeur Service",
    name: titleCaseSlug,
    heroTitle: `${titleCaseSlug} Services`,
    heroSubtitle: `Experience dependable, luxurious door-to-door chauffeur transport with SYD's accredited drivers and pristine European fleet.`,
    cardImage: "/images/services/chauffeur-service.jpg",
    coverImage: "/images/services/chauffeur-service.jpg",
    shortDescription: `Professional, reliable, and luxurious ${titleCaseSlug} provided by Australia's premier nationwide chauffeur service.`,
    overview: [
      `SYD delivers exceptional ground transport solutions for ${titleCaseSlug}, ensuring every journey is punctual, discreet, and refined.`,
      `Whether for corporate executives, VIP delegations, or private occasions, our accredited chauffeurs and luxury fleet guarantee peace of mind.`,
    ],
    serviceStandards: [
      "Well-appointed and pristine luxury European vehicles.",
      "Professional, experienced, courteous and discreet accredited chauffeurs.",
      "Reliable on-time service with real-time GPS tracking.",
      "Fixed upfront transparent rates with zero surge pricing.",
    ],
    features: [
      { title: "Fixed Pricing", desc: "Transparent upfront rates with all tolls and access fees included." },
      { title: "24/7 Operations", desc: "Round-the-clock live dispatch support across Australia." },
    ],
    offerings: [
      `${titleCaseSlug} corporate and private bookings`,
      "Door-to-door luxury transfers",
      "Hourly and all-day as-directed hire",
    ],
    faqs: [
      { q: `How do I book ${titleCaseSlug}?`, a: "You can book online instantly using our fare calculator or contact our 24/7 reservations desk." },
    ],
  };
}

// Helper to return all slugs for static generation
export function getAllServiceSlugs() {
  const slugs = new Set();
  servicesList.forEach((srv) => {
    slugs.add(srv.slug);
    if (srv.aliases) {
      srv.aliases.forEach((a) => slugs.add(a));
    }
  });
  return Array.from(slugs).map((slug) => ({ slug }));
}

