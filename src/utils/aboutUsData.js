// Static data for SYD About Us & History
// Modeled after Hughes About Us (https://www.hughes.com.au/about-us/)
// and Our History (https://www.hughes.com.au/about-us/our-history/)

export const aboutOverviewStats = [
  { value: "1904", label: "Founded in Australia (120+ Years)" },
  { value: "12", label: "Offices Across 3 Countries" },
  { value: "1,500+", label: "Size of Luxury Fleet" },
  { value: "2.8M", label: "Passengers Moved Each Year" },
  { value: "1000+", label: "5-Star Customer Reviews" },
];

export const coreValues = [
  {
    title: "Punctuality & Reliability",
    desc: "We understand that time is your most precious asset. Our live radar flight tracking and GPS dispatch ensure your chauffeur is always waiting ahead of schedule.",
    icon: "⏱️",
  },
  {
    title: "Discretion & Confidentiality",
    desc: "Trusted by diplomats, ministers, and global executives for over a century. All chauffeurs adhere to strict privacy and non-disclosure standards.",
    icon: "🔒",
  },
  {
    title: "Rigorous Safety & Accreditation",
    desc: "Strict commercial driver licensing, criminal background screening, Working With Children checks, and daily vehicle mechanical audits.",
    icon: "🛡️",
  },
  {
    title: "Genuine Hospitality",
    desc: "Warm Australian hospitality delivered with polite professionalism. We cater to every passenger's preference, from engaging conversation to quiet privacy.",
    icon: "✨",
  },
];

export const historyMilestones = [
  {
    year: "1904",
    title: "The Pioneer Era",
    desc: "The Hughes family establishes Australia's original chauffeured service in Melbourne and Sydney, transitioning from horse-drawn hansom cabs to early motorized limousines.",
  },
  {
    year: "1920s–30s",
    title: "The Golden Age of Motoring",
    desc: "The fleet expands with imported luxury Packards, Cadillacs, and Rolls-Royces, serving visiting British royalty, prime ministers, and international celebrities.",
  },
  {
    year: "1950s–60s",
    title: "Aviation & Crew Logistics",
    desc: "As the jet airliner age arrives in Australia, we become the contracted crew transport partner for Qantas and domestic carriers, running 24/7 airport shuttles.",
  },
  {
    year: "1980s–90s",
    title: "Nationwide Office Network",
    desc: "Establishing company-owned operations offices in Brisbane, Perth, Adelaide, Canberra, and the Gold Coast to form Australia's only truly national chauffeur provider.",
  },
  {
    year: "2000s–10s",
    title: "Digital Dispatch & Telematics",
    desc: "Pioneering online corporate booking portals, automated flight radar integration, and real-time vehicle GPS tracking across all Australian capitals.",
  },
  {
    year: "2020s & Beyond",
    title: "Oceania & Global Expansion",
    desc: "Expanding trans-Tasman operations into New Zealand and Singapore, while transitioning the fleet toward electric and hybrid European luxury vehicles.",
  },
];

export const teamStories = [
  {
    title: "Meet John & Nicole, a father-and-daughter duo",
    role: "Senior Chauffeurs, Sydney & Melbourne Operations",
    story: "John's decade-long journey at the company not only reflects an unwavering commitment to chauffeur excellence but also paved the way for his daughter Nicole to step into the family tradition. Together, they represent the warm personal dedication and pride that characterizes our multi-generational team.",
  },
  {
    title: "The Faces Behind the 24/7 Desk",
    role: "National Dispatch & Reservations Team",
    story: "Behind every seamless arrival is our dedicated 24/7 operations room. From controllers with over 30 years of tenure to young logistics innovators, our team monitors hundreds of domestic and international flights around the clock to adjust schedules whenever weather or delays occur.",
  },
];

export const aboutPages = [
  {
    id: "our-history",
    slug: "our-history",
    aliases: ["our-history", "history", "heritage"],
    title: "Our History Since 1904",
    heroTitle: "Driving Australia for 120 Years",
    heroSubtitle: "Australia’s original chauffeur service with a rich history dating back to 1904. From horse-drawn carriages and early motorcars to today’s luxury European fleet.",
    coverImage: "/images/about/about-hero.jpg",
    cardImage: "/images/about/history-timeline.jpg",
    lead: "Hughes and SYD have been Australia's leading luxury ground transport provider for over a century. In that time, automotive technology and city skylines have transformed, but our hallmark devotion to punctuality, discretion, and passenger comfort has never wavered.",
    paragraphs: [
      "Founded in 1904, our company pioneered motorized chauffeuring in Australia, providing bespoke transport for society galas, government officials, and business pioneers navigating the expanding cities.",
      "Over the past 120 years, our vehicles have carried visiting royalty, global heads of state, pop icons, and generations of Australian families celebrating life’s greatest milestones.",
      "Today, with 12 offices across Australia, New Zealand, and Singapore and over 1,500 luxury vehicles, we honor our heritage by delivering the same personalized care with modern digital convenience.",
    ],
    highlights: [
      "Over 120 years of continuous Australian transport operations",
      "Official provider for historic royal tours and state visits",
      "50+ years of dedicated commercial aviation crew ground transport",
      "First national chauffeur service to introduce GPS flight telemetry",
    ],
    timeline: historyMilestones,
    stories: teamStories,
    faqs: [
      {
        q: "When was the company founded?",
        a: "The company was established in 1904 in Melbourne and Sydney, making it Australia's oldest and only nationwide chauffeur service with 120+ years of continuous service.",
      },
      {
        q: "What types of historical vehicles have been in the fleet?",
        a: "Our fleet has evolved from early 20th-century Daimler and Packard limousines to classic Cadillacs, Rolls-Royces, and today's modern Mercedes-Benz, BMW, and Audi European vehicles.",
      },
    ],
  },
  {
    id: "chauffeur-experience",
    slug: "chauffeur-experience",
    aliases: ["chauffeur-experience", "the-experience", "experience"],
    title: "The SYD Chauffeur Experience",
    heroTitle: "The Hallmarks of Our Service",
    heroSubtitle: "Discover what sets the SYD chauffeur experience apart: impeccable discretion, punctual arrivals, and personalized customer care tailored to your journey.",
    coverImage: "/images/about/about-hero.jpg",
    cardImage: "/images/HUG2201_Photo116-1-500x500.jpg",
    lead: "The SYD chauffeur experience is engineered for travelers who appreciate the peace of mind that comes with guaranteed luxury and professional duty of care.",
    paragraphs: [
      "From the moment your booking is confirmed, our operations center takes ownership of every variable: monitoring incoming flight radar, selecting optimal traffic routes, and coordinating terminal curbside access.",
      "Your chauffeur meets you inside the terminal or at your private residence in immaculate business attire, handles all luggage, and ensures the vehicle cabin temperature and sound environment match your exact preferences.",
      "Whether you desire complete silence to focus on executive work or local insights on city attractions, your journey is personalized entirely around you.",
    ],
    highlights: [
      "Immaculately detailed late-model European luxury sedans and SUVs",
      "Complimentary chilled bottled water, mints, and mobile device chargers",
      "Inside terminal meet-and-greet with personalized iPad name signs",
      "Fixed upfront transparent rates with zero surge pricing",
    ],
    faqs: [
      {
        q: "What training do SYD chauffeurs undergo?",
        a: "All chauffeurs undergo extensive customer service etiquette training, executive defensive driving courses, route navigation exams, and VIP protocol certifications.",
      },
      {
        q: "Are the chauffeurs bound by non-disclosure agreements?",
        a: "Yes. All our drivers sign comprehensive confidentiality and privacy agreements, ensuring complete discretion for confidential business meetings conducted onboard.",
      },
    ],
  },
  {
    id: "driver-standards-accreditation",
    slug: "driver-standards-accreditation",
    aliases: ["driver-standards-accreditation", "driver-standards", "accreditation"],
    title: "Driver Standards & Accreditation",
    heroTitle: "Australia's Strictest Driver Accreditation",
    heroSubtitle: "Learn about our rigorous background checks, professional certifications, and elite hospitality training standards that safeguard our passengers.",
    coverImage: "/images/about/about-hero.jpg",
    cardImage: "/images/HUG2201_Photo116-1-500x500.jpg",
    lead: "Your safety, security, and comfort are non-negotiable. We maintain the highest driver qualification and vehicle compliance standards in the Australian transport industry.",
    paragraphs: [
      "Every chauffeur operating under the SYD banner must pass rigorous federal and state police background checks, continuous driving record reviews, and medical fitness exams.",
      "In addition to commercial passenger vehicle accreditation, our drivers hold current Working With Children Checks (WWCC), ensuring safe travel for families and student delegations.",
      "Our vehicles undergo scheduled 10,000-kilometer mechanical inspections and daily sanitization, ensuring mechanical integrity and showroom cleanliness on every single trip.",
    ],
    highlights: [
      "Commercial Chauffeur Passenger Transport Accreditation",
      "Comprehensive National Police Criminal History Screening",
      "Working With Children (WWCC) Certified Drivers",
      "Periodic Medical & Vision Fitness Clearance",
      "Strict Zero-Tolerance Drug and Alcohol Policy",
      "Comprehensive Commercial Passenger Liability Insurance",
    ],
    faqs: [
      {
        q: "Are SYD drivers employee chauffeurs or rideshare contractors?",
        a: "Our core fleet is operated by professional, career chauffeurs and accredited luxury vehicle operators trained in corporate hospitality and executive safety protocols.",
      },
      {
        q: "What insurance coverage is in place for passengers?",
        a: "All journeys are covered by comprehensive commercial passenger liability insurance meeting and exceeding state and federal regulatory transport requirements.",
      },
    ],
  },
  {
    id: "faq",
    slug: "faq",
    aliases: ["faq", "faqs", "support"],
    title: "Frequently Asked Questions",
    heroTitle: "Frequently Asked Questions",
    heroSubtitle: "Find instant answers to common questions about booking procedures, child seats, cancellations, luggage capacities, and corporate accounts.",
    coverImage: "/images/about/about-hero.jpg",
    cardImage: "/images/about/about-hero.jpg",
    lead: "Need help planning your journey? Below are answers to the most frequently asked questions regarding our nationwide chauffeur services.",
    paragraphs: [
      "If you require personalized guidance or have special requirements, our 24/7 customer service and dispatch team is always available by phone or email.",
    ],
    highlights: [
      "24/7 live assistance across all Australian time zones",
      "Instant online quotes with automated fixed pricing",
      "Flexible corporate billing and automated receipts",
    ],
    faqs: [
      {
        q: "How far in advance do I need to book?",
        a: "While we recommend booking at least 12–24 hours in advance to guarantee your preferred vehicle model, our 24/7 dispatch desk regularly accommodates last-minute bookings subject to fleet availability.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Bookings can be cancelled without penalty up to 2 hours prior to the scheduled pickup time for sedans and SUVs, and up to 24 hours for minibuses and coaches. Cancellations within these windows may incur a fee.",
      },
      {
        q: "Can I book a baby capsule or child seat?",
        a: "Yes. Australian standard rear-facing baby capsules, forward-facing child seats, and booster seats can be fitted to your vehicle upon advance request during booking.",
      },
      {
        q: "Are tolls and airport parking included in the quoted fare?",
        a: "Yes. All SYD quotes are 100% transparent and all-inclusive. Road tolls, airport access charges, and inside-terminal meet-and-greet services are calculated upfront with zero hidden fees.",
      },
      {
        q: "What happens if my flight arrives late?",
        a: "We monitor commercial flights in real time using automated radar tracking. Your pickup time is automatically updated at no extra cost, and complimentary waiting time is included once your plane touches down.",
      },
    ],
  },
  {
    id: "careers",
    slug: "careers",
    aliases: ["careers", "join-the-fleet", "jobs"],
    title: "Careers & Join The Fleet",
    heroTitle: "Join Australia’s Most Respected Chauffeur Team",
    heroSubtitle: "Join our growing national transport network as an accredited professional chauffeur, operations controller, or independent luxury vehicle operator.",
    coverImage: "/images/about/about-hero.jpg",
    cardImage: "/images/corporate.jpg",
    lead: "Representing Australia's premier chauffeur brand since 1904, our team is built on pride, professionalism, and genuine customer care.",
    paragraphs: [
      "We are always looking for passionate individuals who take pride in exceptional driving, executive hospitality, and punctuality.",
      "Whether you are an experienced commercial chauffeur seeking steady executive clientele or an independent prestige vehicle owner looking to partner with a trusted national brand, SYD offers industry-leading support, flexible scheduling, and competitive remuneration.",
      "We also offer dynamic careers in our 24/7 dispatch and operations centers in Sydney, Melbourne, and Brisbane, managing flight tracking, customer reservations, and corporate accounts.",
    ],
    highlights: [
      "Consistent high-tier corporate, airline, and VIP private clientele",
      "Flexible roster options for full-time and part-time chauffeurs",
      "Modern fleet management and dispatch technology via the driver app",
      "Professional uniform, training, and career progression pathways",
    ],
    faqs: [
      {
        q: "What are the requirements to become a SYD chauffeur?",
        a: "Candidates must possess a valid state driver's license with clean history, commercial passenger vehicle driver accreditation, a clean National Police Certificate, a Working With Children Check, and exceptional customer service skills.",
      },
      {
        q: "Can independent luxury vehicle owners partner with SYD?",
        a: "Yes. We welcome applications from operators with late-model European sedans, premium SUVs, and Mercedes V-Class people movers that meet our strict age and maintenance criteria.",
      },
    ],
  },
];

export const aboutUsOverviewFaqs = [
  {
    q: "How long has SYD been operating in Australia?",
    a: "Our company has been providing luxury chauffeured transport in Australia since 1904, making us the nation's oldest and only nationwide chauffeur service with over 120 years of continuous heritage.",
  },
  {
    q: "In which cities does SYD operate dedicated offices?",
    a: "We operate 12 dedicated offices across Australia (Sydney, Melbourne, Brisbane, Gold Coast, Byron Bay, Perth, Adelaide, Canberra, Hobart, Cairns, Sunshine Coast, Darwin) as well as international hubs in Auckland (New Zealand) and Singapore.",
  },
  {
    q: "How many vehicles are in the national fleet?",
    a: "Our fleet consists of over 1,500 meticulously maintained European luxury vehicles, including Executive Sedans (Mercedes E-Class, BMW 5 Series), Premium Sedans (Mercedes S-Class, BMW 7 Series), Luxury SUVs, Mercedes V-Class people movers, and coaches up to 54 seats.",
  },
  {
    q: "What safety protocols are followed by your chauffeurs?",
    a: "All drivers undergo commercial passenger vehicle accreditation, federal criminal history checks, Working With Children clearance, and periodic medical assessments. All vehicles adhere to strict mechanical audits and daily sanitization.",
  },
  {
    q: "Can I manage multi-city travel through a single account?",
    a: "Yes. Our centralized reservations and corporate billing portal allows clients to coordinate transfers across all Australian capitals and overseas destinations with consolidated monthly invoicing.",
  },
];

// Helper to look up an About Us section by its slug
export function getAboutBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim().replace(/^\/about-us\//, "").replace(/\/$/, "");

  const found = aboutPages.find((p) => {
    if (p.slug.toLowerCase() === normalized) return true;
    if (p.id.toLowerCase() === normalized) return true;
    if (p.aliases && p.aliases.some((a) => a.toLowerCase() === normalized)) return true;
    return false;
  });

  if (found) return found;

  // Partial match fallback
  const partial = aboutPages.find((p) => {
    return (
      p.slug.toLowerCase().includes(normalized) ||
      normalized.includes(p.slug.toLowerCase()) ||
      p.title.toLowerCase().replace(/[^a-z0-9]/g, "") === normalized.replace(/[^a-z0-9]/g, "")
    );
  });

  if (partial) return partial;

  // Graceful fallback
  const titleCaseSlug = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    id: slug,
    slug: slug,
    title: titleCaseSlug,
    heroTitle: titleCaseSlug,
    heroSubtitle: `Australia's premier nationwide chauffeur service since 1904.`,
    coverImage: "/images/about/about-hero.jpg",
    cardImage: "/images/about/about-hero.jpg",
    lead: `SYD delivers unmatched discretion, luxury, and reliability across Australia.`,
    paragraphs: [
      `With over a century of chauffeured heritage, our team provides seamless travel solutions for corporate, VIP, and private clients.`,
    ],
    highlights: [
      "120+ years of Australian heritage",
      "Over 1,500 luxury vehicles nationwide",
      "24/7 dedicated dispatch and live flight tracking",
    ],
    faqs: [
      { q: `How can I contact SYD for ${titleCaseSlug}?`, a: "You can reach our 24/7 reservations team on 1300 615 165 or book online." },
    ],
  };
}

// Helper to return all slugs for static generation
export function getAllAboutSlugs() {
  const slugs = new Set();
  aboutPages.forEach((p) => {
    slugs.add(p.slug);
    if (p.aliases) {
      p.aliases.forEach((a) => slugs.add(a));
    }
  });
  return Array.from(slugs).map((slug) => ({ slug }));
}

