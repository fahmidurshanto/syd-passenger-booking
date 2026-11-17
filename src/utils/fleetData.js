// Static fleet data for SYD Chauffeurs
// Modeled after Hughes The Fleet (https://www.hughes.com.au/the-fleet/)
// and individual vehicle landing pages (https://www.hughes.com.au/the-fleet/executive-sedan/)

export const fleetOverviewStats = [
  { value: "1,500+", label: "Vehicles Across Oceania" },
  { value: "100%", label: "Late-Model Prestige Vehicles" },
  { value: "1 - 54+", label: "Passenger Seating Capacities" },
  { value: "24/7", label: "Real-Time GPS Fleet Dispatch" },
  { value: "1000+", label: "5-Star Passenger Reviews" },
];

export const fleetList = [
  {
    id: "executive-sedans",
    slug: "executive-sedans",
    aliases: ["executive-sedans", "executive-sedan", "executive"],
    category: "Luxury Sedans",
    name: "Executive Sedans",
    badge: "1 - 3 Passengers • 2 Suitcases",
    heroTitle: "Executive Sedans",
    heroSubtitle: "Executive Sedans: Luxury on Demand, Anytime, Anywhere. Quiet, refined, and impeccably maintained for business or pleasure.",
    cardImage: "/images/fleet/executive-sedan.jpg",
    coverImage: "/images/fleet/fleet-bg.jpg",
    models: "Mercedes-Benz E-Class • Genesis G80 • BMW 5 Series",
    passengers: "3 Passengers",
    luggage: "2 Large Suitcases",
    smallBags: "2 Small Bags",
    shortDescription: "Perfect for 1-3 passengers with minimal luggage, our executive sedans are well-appointed for your comfort. Vehicle options include Mercedes E Class, Genesis, or similar.",
    overview: [
      "Experience the epitome of refined elegance with our fleet of executive sedans, available for hire anytime and anywhere. Our meticulously selected sedans are designed to elevate your travel experience, whether it’s for business or pleasure. Step into the world of utmost comfort as you settle into plush leather seats, surrounded by a serene and sophisticated interior.",
      "From a curated selection of prestige car brands and models, our fleet of executive sedans are clean, quiet and can be booked at any time for any location. With ample legroom and advanced sound insulation, you can enjoy a tranquil ride while our experienced chauffeurs navigate the roads with precision. From airport transfers to corporate meetings or special events, our executive sedans offer unmatched style, convenience, and reliability, making every trip a memorable one.",
      "No matter where you are, our executive sedans are at your service, ready to provide a seamless and luxurious travel experience. Whether you’re attending a business conference, exploring a new city, or simply seeking a comfortable ride to the airport that’s hassle-free, our sedans are available at your convenience.",
      "With our easy booking process, you can reserve your executive sedan effortlessly, ensuring a stress-free and timely arrival. Our dedicated chauffeurs, trained in hospitality and professionalism, will cater to your every need, offering a personalized and attentive service throughout your journey. Experience the pinnacle of luxury and convenience with our executive sedans, delivering an unparalleled level of comfort and style that exceeds your expectations, no matter the time or place.",
    ],
    features: [
      "Plush leather seating with ergonomic lumbar support",
      "Dual-zone acoustic climate control for a serene ride",
      "Complimentary chilled bottled spring water and mints",
      "Smartphone high-speed charging cables (Lightning & USB-C)",
      "Automated live flight tracking and terminal meet-and-greet",
      "Pristine interior detailing and daily sanitization",
    ],
    specifications: [
      { label: "Max Passengers", value: "Up to 3 Passengers" },
      { label: "Luggage Capacity", value: "2 Large Suitcases + 2 Small Bags" },
      { label: "Models Included", value: "Mercedes E-Class, Genesis G80, BMW 5" },
      { label: "Climate Control", value: "Dual-Zone Automatic AC" },
      { label: "Connectivity", value: "USB-C & Wireless Charging Onboard" },
      { label: "Child Restraints", value: "Available on advance request" },
    ],
    idealFor: [
      "Corporate airport transfers & executive commuting",
      "CBD business meetings and inter-office roadshows",
      "VIP private dining and hotel transfers",
      "Solo and couple leisure city transit",
    ],
    faqs: [
      {
        q: "How much luggage can fit in an Executive Sedan?",
        a: "Our executive sedans comfortably hold up to 2 standard check-in suitcases (up to 28 inches) plus 2 small carry-on bags or laptop briefcases in the boot.",
      },
      {
        q: "Can I request a specific vehicle model like Mercedes E-Class?",
        a: "Yes. When booking, you can note vehicle model preferences in your reservation notes, and our fleet allocation team will do their utmost to fulfill your request.",
      },
      {
        q: "Are child or baby seats available in executive sedans?",
        a: "Yes, Australian standard baby capsules, forward-facing child seats, and booster seats can be fitted upon request during booking.",
      },
    ],
  },
  {
    id: "premium-sedans",
    slug: "premium-sedans",
    aliases: ["premium-sedans", "premium-sedan", "first-class-sedans"],
    category: "Flagship Luxury",
    name: "Premium Sedans",
    badge: "1 - 3 Passengers • Flagship S-Class / 7-Series",
    heroTitle: "Premium Sedans",
    heroSubtitle: "The Pinnacle of Chauffeured Prestige. Long-wheelbase luxury sedans featuring unparalleled rear legroom, executive comfort, and road elegance.",
    cardImage: "/images/fleet/premium-sedan.jpg",
    coverImage: "/images/fleet/fleet-bg.jpg",
    models: "Mercedes-Benz S-Class • BMW 7 Series • Audi A8",
    passengers: "3 Passengers",
    luggage: "2 Large Suitcases",
    smallBags: "2 Small Bags",
    shortDescription: "Perfect for 1-3 passengers with minimal luggage, our premium sedans include the latest prestige models with top of the line features. Vehicle options include BMW 7 Series, Audi A8, Mercedes S Class, or Genesis.",
    overview: [
      "Our fleet meets the highest standards of luxury and comfort. Our meticulous selection process ensures that you experience the utmost elegance and sophistication on every single journey.",
      "Step into the opulent interior of our premium flagship sedans, where premium materials and state-of-the-art craftsmanship converge. Sink into supple Nappa leather seats that offer personalized contour adjustments and acoustic privacy blinds, cocooning you from city noise.",
      "Our senior executive chauffeurs have an intimate understanding of local roads, traffic patterns, and popular destinations, allowing them to navigate efficiently and provide you with a seamless and stress-free journey.",
      "Whether arriving at a red-carpet gala, welcoming an international ambassador, or celebrating a major corporate milestone, our premium sedans command unrivaled respect and presence.",
    ],
    features: [
      "Ultra-spacious long-wheelbase rear executive legroom",
      "Reclining rear seats with heating, ventilation, and massage function",
      "Acoustic noise-cancelling double-glazed windows for total confidentiality",
      "Rear privacy electric sunshades on side windows and rear windshield",
      "Silk-smooth air suspension delivering an effortless ride",
      "Handpicked senior chauffeurs with diplomatic VIP protocol training",
    ],
    specifications: [
      { label: "Max Passengers", value: "Up to 3 Passengers" },
      { label: "Luggage Capacity", value: "2 Large Suitcases + 2 Small Bags" },
      { label: "Models Included", value: "Mercedes S-Class, BMW 7 Series, Audi A8" },
      { label: "Suspension", value: "Adaptive Self-Leveling Air Suspension" },
      { label: "Rear Seating", value: "Reclining Executive Seats with Privacy Blinds" },
      { label: "Refreshments", value: "Complimentary Spring Water & Mints" },
    ],
    idealFor: [
      "Diplomatic, ministerial, and CEO executive travel",
      "Red-carpet galas, film awards, and premier events",
      "Luxury wedding arrivals and honeymoon getaways",
      "High-stakes confidential mobile meetings",
    ],
    faqs: [
      {
        q: "What makes Premium Sedans different from Executive Sedans?",
        a: "Premium Sedans represent the automotive industry's flagship models (such as the Mercedes-Benz S-Class and BMW 7 Series). They feature longer wheelbases for significantly expanded rear legroom, air suspension for supreme smoothness, and luxury amenities like reclining acoustic seats.",
      },
      {
        q: "Can confidential phone calls be conducted safely in the vehicle?",
        a: "Absolutely. Premium sedans feature acoustic double-pane privacy glass and active noise mitigation, and all chauffeurs adhere to strict confidentiality non-disclosure standards.",
      },
    ],
  },
  {
    id: "premium-luxury-suvs",
    slug: "premium-luxury-suvs",
    aliases: ["premium-luxury-suvs", "premium-suvs", "premium-suv", "suvs", "suv"],
    category: "Luxury SUVs",
    name: "Premium Luxury SUVs",
    badge: "1 - 4 Passengers • 5 Suitcases",
    heroTitle: "Premium Luxury SUVs",
    heroSubtitle: "Versatility, Elevated Views, and Superior Cargo Capacity. Handpicked prestige all-wheel-drive SUVs designed to accommodate extra luggage in total comfort.",
    cardImage: "/images/fleet/premium-suv.jpg",
    coverImage: "/images/fleet/fleet-bg.jpg",
    models: "Audi Q7 • BMW X5 • Mercedes-Benz GLE",
    passengers: "3 - 4 Passengers",
    luggage: "5 Large Suitcases",
    smallBags: "3 Small Bags",
    shortDescription: "Perfect for 1-4 passengers with up to 5 suitcases, our premium SUVs include the latest prestige models with top of the line features. Vehicle options include Audi Q7, BMW X5, Mercedes GLE or similar.",
    overview: [
      "Experience the perfect blend of versatility, luxury, and power with our premium luxury SUVs. Designed to accommodate your every need, our handpicked selection of prestige all-wheel-drive vehicles delivers both commanding road presence and generous cargo volume.",
      "Step inside a haven of refined comfort, featuring elevated seating positions that provide panoramic vistas of the city and coastline. Equipped with advanced all-weather driving technology, our SUVs ensure a smooth, stable, and safe ride in any driving conditions.",
      "Not only do our premium SUVs exude luxury, but our highly skilled and friendly chauffeurs ensure a remarkable experience on the road. Whether you have extra holiday baggage, golf bags, surf equipment, or child prams, you won't have to compromise on legroom or elegance.",
    ],
    features: [
      "Elevated ride height with panoramic views of city and countryside",
      "Generous cargo volume accommodating up to 5 full-sized suitcases",
      "Quattro and xDrive all-wheel drive stability in all weather conditions",
      "Panoramic glass sunroof and multi-zone independent climate control",
      "Ideal for golf getaways, ski equipment, and family airport journeys",
      "Flexible seating with ISOFIX child seat anchor points",
    ],
    specifications: [
      { label: "Max Passengers", value: "Up to 4 Passengers" },
      { label: "Luggage Capacity", value: "5 Large Suitcases + 3 Small Bags" },
      { label: "Models Included", value: "Audi Q7, BMW X5, Mercedes-Benz GLE" },
      { label: "Drivetrain", value: "All-Wheel Drive (AWD)" },
      { label: "Cargo Hold", value: "Extra-Large Cargo Bay for Golf & Skis" },
      { label: "Child Restraints", value: "Multiple ISOFIX points fitted" },
    ],
    idealFor: [
      "Family airport transfers with strollers and heavy luggage",
      "Golf group excursions (ample room for golf bags and carts)",
      "Regional touring, coastal trips, and ski field transfers",
      "Executive travellers who prefer an elevated road view",
    ],
    faqs: [
      {
        q: "Can a Luxury SUV accommodate golf bags or ski gear?",
        a: "Yes. Our luxury SUVs easily accommodate multiple sets of golf clubs, oversized luggage, or winter sports equipment alongside standard suitcases.",
      },
      {
        q: "How many passengers can travel comfortably with 5 suitcases?",
        a: "Up to 3 or 4 passengers can travel with 5 large suitcases comfortably, without encroaching on passenger cabin space.",
      },
    ],
  },
  {
    id: "people-movers",
    slug: "people-movers",
    aliases: ["people-movers", "people-mover", "van", "mercedes-v-class", "v-class"],
    category: "Group Transport",
    name: "People Movers",
    badge: "Up to 6 - 7 Passengers • 6 Suitcases",
    heroTitle: "People Movers",
    heroSubtitle: "Effortless Group Transportation: Spacious Conference-Style Seating. Luxurious, roomy, and ergonomically designed for executive teams and families.",
    cardImage: "/images/fleet/people-mover.jpg",
    coverImage: "/images/fleet/fleet-bg.jpg",
    models: "Mercedes-Benz V-Class • Mercedes Valente",
    passengers: "6 - 7 Passengers",
    luggage: "6 Large Suitcases",
    smallBags: "4 Small Bags",
    shortDescription: "Perfect for up to 6 passengers with standard luggage, our people movers are luxurious and roomy, with ergonomic design for your comfort. Vehicle options include Mercedes V Class or similar.",
    overview: [
      "When it comes to transporting groups, our fleet of luxury Mercedes-Benz V-Class people mover vans is the ultimate solution. Designed to accommodate up to 6 or 7 passengers in complete comfort, they make group journeys enjoyable and collaborative.",
      "Featuring versatile conference-style face-to-face seating configurations, your team can review presentation slides, hold strategy briefings, or simply converse comfortably while on the move.",
      "Dual electric sliding doors, low step-in heights, and an expansive rear luggage bay ensure easy boarding and ample room for multi-passenger luggage without squeezing into tight spaces.",
    ],
    features: [
      "Face-to-face conference seating layout for executive collaboration",
      "Expansive rear cargo bay accommodating up to 6 large suitcases",
      "Dual power-sliding side passenger doors for effortless boarding",
      "Individual rear climate air vents and multiple USB device chargers",
      "Privacy tinted rear panoramic windows with sunblind protection",
      "Ideal for corporate roadshows, wedding parties, and multi-family travel",
    ],
    specifications: [
      { label: "Max Passengers", value: "6 to 7 Passengers" },
      { label: "Luggage Capacity", value: "6 Large Suitcases + 4 Small Bags" },
      { label: "Models Included", value: "Mercedes-Benz V-Class, Valente" },
      { label: "Seating Layout", value: "Face-to-Face Conference or Forward-Facing" },
      { label: "Doors", value: "Dual Electric Sliding Doors" },
      { label: "Charging", value: "Individual USB Ports at Every Seat" },
    ],
    idealFor: [
      "Executive roadshows and mobile business presentations",
      "Multi-generational family airport transfers",
      "Bridal parties and wedding guest transport",
      "Corporate event delegate shuttles",
    ],
    faqs: [
      {
        q: "Can the seats in the Mercedes V-Class be configured facing each other?",
        a: "Yes. Our Mercedes V-Class vehicles can be arranged in conference-style seating (rear passengers facing each other) or standard forward-facing rows.",
      },
      {
        q: "Is there enough luggage room for 6 passengers flying internationally?",
        a: "Yes. The Mercedes V-Class features an extended cargo hold that comfortably holds 6 full-size suitcases plus carry-on bags.",
      },
    ],
  },
  {
    id: "luxury-minibuses",
    slug: "luxury-minibuses",
    aliases: ["luxury-minibuses", "luxury-minibus", "minibuses", "minibus", "sprinter"],
    category: "Group Transport",
    name: "Luxury Minibuses",
    badge: "9 - 14 Passengers • Trailer Option",
    heroTitle: "Luxury Minibuses",
    heroSubtitle: "Luxury Minibus Hire: Unforgettable Group Travel in Style. High-back reclining seats, panoramic windows, and dedicated luggage trailers for medium-sized groups.",
    cardImage: "/images/fleet/minibus.jpg",
    coverImage: "/images/fleet/fleet-bg.jpg",
    models: "Mercedes-Benz Sprinter Minibus (12 - 14 Seats)",
    passengers: "9 - 14 Passengers",
    luggage: "Full Group Luggage (Trailer Option)",
    smallBags: "Overhead Carry-On Storage",
    shortDescription: "Perfect for 9-14 passengers with a trailer option for additional luggage, our Mercedes Sprinter minibuses are a luxurious option for groups. Vehicle options include Mercedes Sprinter or similar.",
    overview: [
      "Elevate your group travel experience with the luxury of our Mercedes-Benz Sprinter minibus hire service. Hiring a luxury minibus offers a multitude of benefits, making it an ideal choice for corporate delegations, inbound tour groups, and wedding parties.",
      "Firstly, it eliminates the need for multiple smaller vehicles or coordinating separate rideshares, streamlining travel logistics and keeping everyone together on schedule.",
      "Step into a spacious, walk-in cabin featuring high-roof ceilings, plush high-back reclining leather seats, individual passenger reading lights, and an integrated public address (PA) system for tour guides and event organizers.",
      "For passengers with heavy airport baggage, golf bags, or cruise suitcases, we provide enclosed, weather-sealed luggage trailers at no additional stress.",
    ],
    features: [
      "Spacious walk-in high-roof cabin with center aisle access",
      "High-back reclining seats upholstered in luxury leatherette",
      "Enclosed weatherproof luggage trailer for high-volume baggage",
      "Integrated PA microphone system for group announcements and commentary",
      "Individual passenger reading lights and ducted air-conditioning",
      "Tinted privacy glass and generous overhead cabin parcel racks",
    ],
    specifications: [
      { label: "Max Passengers", value: "9 to 14 Passengers" },
      { label: "Luggage Capacity", value: "Generous Boot + Weatherproof Trailer" },
      { label: "Models Included", value: "Mercedes-Benz Sprinter Deluxe" },
      { label: "Cabin Height", value: "Walk-in High Roof Ceiling" },
      { label: "Audio System", value: "PA System & Microphone Installed" },
      { label: "Trailer Option", value: "Enclosed Towable Baggage Trailer" },
    ],
    idealFor: [
      "Corporate delegate movements between hotels and convention centers",
      "Private winery day tours to the Hunter, Yarra, or Barossa valleys",
      "Sports teams, golf touring groups, and wedding parties",
      "Inbound international tour delegations with tour guides",
    ],
    faqs: [
      {
        q: "Do your minibuses have luggage trailers for airport luggage?",
        a: "Yes. When transferring groups with full flight or cruise luggage, we attach an enclosed, weather-protected luggage trailer ensuring ample passenger legroom inside the cabin.",
      },
      {
        q: "Can the driver use a microphone for tour commentary?",
        a: "Yes. Our Mercedes Sprinter minibuses come equipped with built-in PA systems with handheld microphones for tour guides or corporate group leaders.",
      },
    ],
  },
  {
    id: "luxury-coaches",
    slug: "luxury-coaches",
    aliases: ["luxury-coaches", "coaches", "coach", "small-coach", "large-coach"],
    category: "Large Coach Transport",
    name: "Luxury Coaches",
    badge: "21 - 54+ Passengers • Under-Floor Hold",
    heroTitle: "Luxury Coaches",
    heroSubtitle: "Effortless Large-Group Travel: Discover the Benefits of Coach Hire. Full-capacity luxury touring coaches equipped with panoramic windows and under-floor cargo hold.",
    cardImage: "/images/fleet/coach.png",
    coverImage: "/images/fleet/fleet-bg.jpg",
    models: "Executive Touring Coaches (21 - 54 Seats)",
    passengers: "21 - 54+ Passengers",
    luggage: "Full Under-Floor Luggage Hold",
    smallBags: "Cabin Overhead Luggage Racks",
    shortDescription: "Perfect for 21-54 passengers with standard luggage with a trailer option for additional luggage, our air-conditioned, luxury coaches are a great option for larger groups.",
    overview: [
      "Experience the pinnacle of large-scale group transportation with our luxury coach hire service. Hiring a coach offers an array of advantages, making it the perfect choice for large group transfers, conferences, school tours, and sporting events.",
      "One of the key reasons to hire a coach is the ability to transport a large delegation together, promoting camaraderie, punctuality, and a unified travel experience while avoiding the chaos of dozens of cars.",
      "Our modern luxury touring coaches feature panoramic scenic windows, deep-cushioned high-back seats with footrests, advanced climate control, audio-visual display systems, and vast under-floor luggage holds capable of handling hundreds of suitcases.",
    ],
    features: [
      "High-capacity passenger seating from 21 up to 54+ passengers",
      "Vast under-floor luggage holds capable of storing hundreds of bags",
      "Full audio-visual entertainment systems with overhead screens",
      "High-output ducted air-conditioning and individual ventilation nozzles",
      "Ergonomic reclining seats with fold-down armrests and footrests",
      "Dedicated group logistics manager assigned to coordinate multi-coach fleets",
    ],
    specifications: [
      { label: "Max Passengers", value: "21 to 54+ Passengers" },
      { label: "Luggage Capacity", value: "Massive Under-Floor Luggage Hold" },
      { label: "Seating", value: "High-Back Reclining Coach Seats with Footrests" },
      { label: "Audio-Visual", value: "Overhead Screens & PA Microphone System" },
      { label: "Climate", value: "Full-Cabin Ducted Air-Conditioning" },
      { label: "Coordination", value: "Dedicated Group Dispatch Coordinator" },
    ],
    idealFor: [
      "Major corporate conventions and multi-venue conference shuttles",
      "International cruise ship excursion group tours",
      "School sports excursions and university delegations",
      "Large festival, concert, and major sporting event movements",
    ],
    faqs: [
      {
        q: "What coach sizes are available in your fleet?",
        a: "We provide mid-sized luxury coaches (21–28 seats) up to full-capacity executive touring coaches (48–54+ seats) across Australia.",
      },
      {
        q: "Can multiple coaches be coordinated for large conferences?",
        a: "Yes. Our events team regularly coordinates multi-coach convoys moving thousands of delegates simultaneously, with on-site dispatch marshals provided.",
      },
    ],
  },
];

export const fleetOverviewFaqs = [
  {
    q: "How do I choose the right vehicle for my journey?",
    a: "Selection depends on passenger count and luggage volume. For 1–3 passengers with 2 suitcases, an Executive or Premium Sedan is ideal. For families with extra luggage or golf bags, a Luxury SUV is best. For groups of 4–7, the Mercedes V-Class People Mover provides conference seating. For larger parties of 8+, our Mercedes Sprinter minibuses and luxury coaches offer ample space.",
  },
  {
    q: "Are your vehicles smoke-free and sanitized?",
    a: "Yes. All SYD vehicles adhere to a strict non-smoking policy and undergo comprehensive interior detailing and sanitization between every passenger transfer.",
  },
  {
    q: "Can I request child safety seats for younger passengers?",
    a: "Yes. Australian standard rear-facing baby capsules, forward-facing child seats, and booster seats can be added to your reservation during booking.",
  },
  {
    q: "What amenities are included inside the vehicles?",
    a: "All vehicles include chilled bottled spring water, mints, smartphone charging cables (Apple Lightning and USB-C), climate control, and flight monitoring. Wi-Fi is available upon request.",
  },
  {
    q: "Can you provide vehicles across multiple Australian cities on the same day?",
    a: "Yes. With over 1,500 vehicles nationwide, you can book departures in Sydney, arrivals in Melbourne, and hotel transfers in Brisbane through a single account.",
  },
];

// Helper to look up a vehicle class by its URL slug or alias
export function getFleetBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim().replace(/^\/fleet\//, "").replace(/\/$/, "");

  const found = fleetList.find((v) => {
    if (v.slug.toLowerCase() === normalized) return true;
    if (v.id.toLowerCase() === normalized) return true;
    if (v.aliases && v.aliases.some((a) => a.toLowerCase() === normalized)) return true;
    return false;
  });

  if (found) return found;

  // Partial match fallback
  const partial = fleetList.find((v) => {
    return (
      v.slug.toLowerCase().includes(normalized) ||
      normalized.includes(v.slug.toLowerCase()) ||
      v.name.toLowerCase().replace(/[^a-z0-9]/g, "") === normalized.replace(/[^a-z0-9]/g, "")
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
    category: "Luxury Vehicles",
    name: titleCaseSlug,
    badge: "1 - 4 Passengers",
    heroTitle: `${titleCaseSlug}`,
    heroSubtitle: `Experience the pinnacle of luxury, comfort, and reliability with SYD's ${titleCaseSlug}.`,
    cardImage: "/images/fleet/executive-sedan.jpg",
    coverImage: "/images/fleet/fleet-bg.jpg",
    models: "Prestige European Fleet",
    passengers: "Up to 4 Passengers",
    luggage: "Standard Luggage Capacity",
    smallBags: "Small Carry-On Bags",
    shortDescription: `Pristine ${titleCaseSlug} offering superior comfort, climate control, and professional accredited chauffeur hospitality.`,
    overview: [
      `Our ${titleCaseSlug} meets the highest standards of luxury and comfort, ensuring that you experience the utmost elegance on every journey.`,
      `Whether for corporate airport transfers, VIP hospitality, or special events, our fleet guarantees peace of mind and punctual transit.`,
    ],
    features: [
      "Plush leather seating with climate control",
      "Acoustic noise-cancelling interior cabin",
      "Complimentary bottled water and mobile charging",
      "Live flight tracking and terminal meet-and-greet",
    ],
    specifications: [
      { label: "Class", value: titleCaseSlug },
      { label: "Condition", value: "Late-model luxury" },
      { label: "Chauffeur", value: "Accredited professional" },
      { label: "Pricing", value: "Fixed upfront rates" },
    ],
    idealFor: [
      "Airport transfers and corporate meetings",
      "Special occasions and dining",
      "Day trips and touring",
    ],
    faqs: [
      { q: `How do I book ${titleCaseSlug}?`, a: "You can book online in 60 seconds with instant confirmation, or call our 24/7 team." },
    ],
  };
}

// Helper to return all slugs for static generation
export function getAllFleetSlugs() {
  const slugs = new Set();
  fleetList.forEach((v) => {
    slugs.add(v.slug);
    if (v.aliases) {
      v.aliases.forEach((a) => slugs.add(a));
    }
  });
  return Array.from(slugs).map((slug) => ({ slug }));
}

