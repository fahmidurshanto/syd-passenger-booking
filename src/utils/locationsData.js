// Static locations data for SYD Chauffeurs
// Modeled after Hughes Chauffeur Locations (https://www.hughes.com.au/locations/)
// and individual city landing pages (https://www.hughes.com.au/locations/byron-bay/)

export const nationwideStats = [
  { value: "12", label: "Offices Across 3 Countries" },
  { value: "18", label: "Major Cities Serviced Across Oceania" },
  { value: "1,500+", label: "Size of Luxury Fleet" },
  { value: "2.8M", label: "Total Passengers Moved Each Year" },
  { value: "14,000+", label: "5-Star Passenger Reviews" },
];

export const brandPartners = [
  { name: "Qantas", logo: "/images/qantas-1024x1024.png" },
  { name: "Virgin Australia", logo: "/images/virgin-1024x1024.png" },
  { name: "Emirates", logo: "/images/emirates-1024x1024.png" },
  { name: "Marriott International", logo: "/images/marriott-1024x1024.png" },
  { name: "American Express", logo: "/images/american-express-1024x1024.png" },
  { name: "Flight Centre", logo: "/images/flight-centre-1024x1024.png" },
  { name: "Stage and Screen", logo: "/images/stageandscreen-1024x1024.png" },
  { name: "Luxury Escapes", logo: "/images/luxury-escapes-1024x1024.png" },
  { name: "Virtuoso", logo: "/images/virtuoso-1024x1024.png" },
  { name: "Journey Beyond", logo: "/images/journey-beyond-1024x1024.png" },
  { name: "Scenic Tours", logo: "/images/scenic-1024x1024.png" },
];

export const whyChooseUsFeatures = [
  {
    title: "Australia’s Largest Chauffeur Service",
    description: "An extensive national network providing reliable luxury chauffeur transport in every major Australian capital and regional centre.",
    icon: "/images/icon-1.png",
  },
  {
    title: "Global Reach Across New Zealand & Singapore",
    description: "Seamless door-to-door luxury transfers extended into key international travel hubs including Auckland, Queenstown, and Singapore Changi.",
    icon: "/images/global-reach-icon.png",
  },
  {
    title: "Full GPS Tracking On Vehicles",
    description: "Real-time dispatch telemetry and vehicle GPS tracking to ensure punctual arrivals, rapid routing adjustments, and total passenger security.",
    icon: "/images/icon-2.png",
  },
  {
    title: "Here To Help 24 Hours A Day",
    description: "Round-the-clock live operations and reservations support ready to assist with urgent schedule changes, early flights, and group logistics.",
    icon: "/images/icon-3.png",
  },
  {
    title: "Over 120 Years Experience",
    description: "A century of chauffeured heritage dating back to 1904, delivering unmatched discretion, prestige, and executive hospitality.",
    icon: "/images/icon-6.png",
  },
  {
    title: "Large Events & Conference Experts",
    description: "Specialized event coordination and logistics management for national corporate summits, VIP delegations, weddings, and film productions.",
    icon: "/images/icon5.png",
  },
  {
    title: "Courteous & Reliable Chauffeurs",
    description: "Strictly accredited, background-checked professional chauffeurs in immaculate business attire dedicated to customer care.",
    icon: "/images/icon-4.png",
  },
];

export const officeLocations = [
  { city: "Sydney", state: "NSW", country: "Australia", phone: "+61 404 410 000", address: "Mascot & Sydney CBD Precinct, NSW", isHQ: true },
  { city: "Melbourne", state: "VIC", country: "Australia", phone: "+61 404 410 000", address: "Tullamarine & Southbank Precinct, VIC" },
  { city: "Brisbane", state: "QLD", country: "Australia", phone: "+61 404 410 000", address: "Brisbane Airport & Fortitude Valley, QLD" },
  { city: "Gold Coast", state: "QLD", country: "Australia", phone: "+61 404 410 000", address: "Surfers Paradise & Coolangatta, QLD" },
  { city: "Byron Bay", state: "NSW", country: "Australia", phone: "+61 404 410 000", address: "Ballina Airport & Byron Bay CBD, NSW" },
  { city: "Perth", state: "WA", country: "Australia", phone: "+61 404 410 000", address: "Perth Airport & St Georges Terrace, WA" },
  { city: "Adelaide", state: "SA", country: "Australia", phone: "+61 404 410 000", address: "Adelaide Airport & North Terrace, SA" },
  { city: "Canberra", state: "ACT", country: "Australia", phone: "+61 404 410 000", address: "Barton & Parliamentary Triangle, ACT" },
  { city: "Hobart", state: "TAS", country: "Australia", phone: "+61 404 410 000", address: "Hobart Airport & Salamanca Precinct, TAS" },
  { city: "Cairns & Port Douglas", state: "QLD", country: "Australia", phone: "+61 404 410 000", address: "Cairns Esplanade & Port Douglas, QLD" },
  { city: "Sunshine Coast", state: "QLD", country: "Australia", phone: "+61 404 410 000", address: "Maroochydore & Noosa Heads, QLD" },
  { city: "Darwin", state: "NT", country: "Australia", phone: "+61 404 410 000", address: "Darwin Waterfront & Airport, NT" },
  { city: "Auckland", state: "North Island", country: "New Zealand", phone: "+64 9 888 0000", address: "Auckland Airport & Queen Street, Auckland" },
  { city: "Singapore", state: "Central", country: "Singapore", phone: "+65 6808 6388", address: "Marina Bay & Changi Airport Terminal Hub" },
];

export const locationsList = [
  {
    id: "byron-bay",
    slug: "byron-bay",
    aliases: ["byron-bay", "ballina", "ballina-byron-bay", "byron"],
    name: "Byron Bay",
    state: "New South Wales",
    region: "Australia East",
    heroTitle: "Ballina Byron Bay Transfers & Transport",
    heroSubtitle: "Make the most of your time in Ballina (Byron Bay), get down to business or see the sights with premium chauffeur driven transfers from SYD.",
    badge: "Northern Rivers NSW • BNK / OOL",
    cardImage: "/images/locations/byronbay.jpg",
    coverImage: "/images/locations/byronbay.jpg",
    description: "Make the most of your time in Ballina (Byron Bay), get down to business or see the sights with premium chauffeur driven transfers from SYD. Skip the airport rental car lines and unreliable rideshares with our discreet, luxury door-to-door transport.",
    keyHubs: "Ballina Byron Airport • Wategos Beach • The Farm • Bangalow • Broken Head",
    airportsServiced: [
      { name: "Ballina Byron Gateway Airport", code: "BNK", transferTime: "25 - 35 mins" },
      { name: "Gold Coast Coolangatta Airport", code: "OOL", transferTime: "45 - 55 mins" },
      { name: "Brisbane International Airport", code: "BNE", transferTime: "1 hr 50 mins" },
    ],
    discover: {
      heading: "Discover Ballina Byron Bay Region",
      lead: "Ballina Byron Bay is a nature-lovers paradise with popular coastal and hinterland activities including kayaking with dolphins, snorkelling with turtles, whale watching, spectacular waterfalls, national parks, and glow-worm caves.",
      paragraphs: [
        "It’s also home to award-winning restaurants and bars, with a cosmopolitan mix of upscale dining venues and casual beach eateries. As a world-renowned getaway for both Australian and visiting international celebrities, the region combines barefoot luxury with pristine coastal living.",
        "Whether you are landing at Ballina Byron Gateway Airport (BNK) or Gold Coast Airport (OOL) for a weekend retreat, a corporate team offsite, or a dream hinterland wedding, SYD delivers a peaceful, luxurious ride tailored to your exact itinerary.",
      ],
      attractions: [
        {
          name: "Cape Byron Lighthouse",
          desc: "A heritage-listed structure on Australia’s easternmost point. Accessible by road or via the scenic 3.7km Lighthouse Trail, offering breathtaking panoramic views of the Pacific Ocean and migrating humpback whales.",
        },
        {
          name: "The Farm Byron Bay",
          desc: "A stunning 80-acre paddock-to-plate restaurant and working farm on the outskirts of Byron Bay, showcasing the very best of northern NSW organic produce and livestock.",
        },
        {
          name: "Stone & Wood Brewery",
          desc: "The home of Australia's iconic independent craft brewer. Enjoy guided tasting room tours, curated paddles, and relaxed beer garden hospitality.",
        },
        {
          name: "Wategos Beach & Julian Rocks Marine Reserve",
          desc: "A world-renowned protected bay nestled under Cape Byron, famous for luxury beachside villas, dolphin kayaking, sea turtle snorkelling, and pristine sunset views.",
        },
        {
          name: "Bangalow & Byron Hinterland",
          desc: "Charming historic village filled with boutique galleries, antique shops, and rolling green macadamia orchards nestled within subtropical rainforest hills.",
        },
      ],
    },
    servicesOffered: [
      "Ballina Byron Bay Airport Transfers",
      "Brisbane Airport Transfer to Byron Bay",
      "Gold Coast Airport Transfers to Byron Bay",
      "Ballina Byron Bay Corporate Transfers",
      "Byron Bay Private Driver & Hourly As-Directed",
      "Ballina Byron Bay Chauffeur Services",
      "Ballina Byron Bay Conference & Wedding Services",
      "Ballina Byron Bay All Day Chauffeur Hire",
      "Byron Bay & Hinterland Luxury Tours",
    ],
    popularRoutes: [
      {
        from: "Ballina Byron Gateway Airport (BNK)",
        to: "Byron Bay CBD / Main Beach",
        distance: "34 km",
        time: "25 - 35 mins",
        desc: "Direct terminal meet-and-greet to beachfront resorts, villas, and guesthouses.",
      },
      {
        from: "Gold Coast Coolangatta Airport (OOL)",
        to: "Byron Bay Town Centre",
        distance: "68 km",
        time: "45 - 55 mins",
        desc: "Seamless Pacific Highway interstate chauffeur transfer linking QLD & NSW.",
      },
      {
        from: "Brisbane International Airport (BNE)",
        to: "Byron Bay & Hinterland",
        distance: "175 km",
        time: "1 hr 50 mins",
        desc: "Executive long-distance direct transit without train or coach connections.",
      },
      {
        from: "Byron Bay Town Centre",
        to: "Bangalow & Newrybar (Harvest)",
        distance: "18 km",
        time: "15 - 20 mins",
        desc: "Popular dining, wedding venue, and boutique shopping chauffeur service.",
      },
      {
        from: "Byron Bay Resorts",
        to: "Wategos Beach / Cape Byron Lighthouse",
        distance: "5 km",
        time: "10 mins",
        desc: "Private luxury transport avoiding limited public parking at the lighthouse.",
      },
    ],
    faqs: [
      {
        q: "How far is Byron Bay from Ballina Byron Gateway Airport (BNK)?",
        a: "Ballina Airport is approximately 34 km south of Byron Bay town centre. Transfer times typically range from 25 to 35 minutes depending on traffic. Your SYD chauffeur will meet you inside the terminal with flight tracking included.",
      },
      {
        q: "Can SYD transfer me from Gold Coast Airport (OOL) or Brisbane (BNE) to Byron Bay?",
        a: "Yes. We frequently provide direct, door-to-door luxury transfers between Gold Coast Airport (approx. 45–55 minutes) and Brisbane Airport (approx. 1 hour 50 minutes) directly to your Byron Bay resort, private rental, or event venue.",
      },
      {
        q: "Do you offer chauffeur transfers to wedding venues and hinterland retreats?",
        a: "Yes, we specialize in luxury private transfers to popular hinterland destinations including Bangalow, Newrybar, Federal, Ewingsdale, and luxury private villas throughout the region.",
      },
      {
        q: "Are child seats and extra surf/luggage space available?",
        a: "Yes, Australian-standard baby and booster seats are available upon advance request. Our Luxury SUVs and Mercedes V-Class people movers offer ample luggage space for surfboards, golf clubs, and family bags.",
      },
      {
        q: "What happens if my flight into Ballina or Gold Coast is delayed?",
        a: "All reservations include automated flight tracking. We monitor your flight's live status and adjust pickup times automatically at no extra charge, with complimentary waiting time included.",
      },
    ],
  },
  {
    id: "sydney",
    slug: "sydney",
    aliases: ["sydney", "Sydney", "nsw-sydney"],
    name: "Sydney",
    state: "New South Wales",
    region: "Australia East",
    heroTitle: "Sydney Transfers & Chauffeur Services",
    heroSubtitle: "Make the most of your time in Sydney, get down to business or see the sights with premium chauffeur driven transfers from SYD.",
    badge: "New South Wales • SYD Airport",
    cardImage: "/images/locations/sydney.jpg",
    coverImage: "/images/airport.jpg",
    description: "Make the most of your time in Sydney, get down to business or see the sights with premium chauffeur driven transfers from SYD. Hughes takes the hassle out of transport with fixed rates, flight tracking, and pristine European vehicles.",
    keyHubs: "Kingsford Smith Airport • Circular Quay • Barangaroo • North Sydney • Parramatta",
    airportsServiced: [
      { name: "Sydney Kingsford Smith Airport (T1, T2, T3)", code: "SYD", transferTime: "20 - 35 mins" },
      { name: "Western Sydney Airport (Nancy-Bird Walton)", code: "WSI", transferTime: "45 mins" },
      { name: "Bankstown Airport (Private Charters)", code: "BWU", transferTime: "30 mins" },
    ],
    discover: {
      heading: "Discover Sydney & Regional NSW in Style",
      lead: "Australia’s premier global city boasts iconic architectural wonders, sun-drenched coastal beaches, world-renowned dining precincts, and a bustling central financial district.",
      paragraphs: [
        "From high-stakes board meetings in Barangaroo to sunset cocktails overlooking the Sydney Opera House and Harbour Bridge, SYD delivers an impeccable first-class travel experience.",
        "Need to travel beyond the city? We provide bespoke private chauffeur day tours to the Blue Mountains, Hunter Valley wine estates, and the pristine Southern Highlands.",
      ],
      attractions: [
        { name: "Sydney Opera House & Circular Quay", desc: "World Heritage architectural masterpiece overlooking the stunning Sydney Harbour waters." },
        { name: "Barangaroo & Darling Harbour", desc: "Sydney's contemporary corporate crown and waterfront culinary dining quarter." },
        { name: "Bondi & Eastern Suburbs Coastal Walk", desc: "Iconic Australian beach culture with scenic clifftop walks and glamorous cafes." },
        { name: "Blue Mountains National Park", desc: "Dramatic eucalyptus-filled canyons, the Three Sisters rock formation, and luxury mountain lodges." },
      ],
    },
    servicesOffered: [
      "Sydney Kingsford Smith Airport Transfers (T1, T2, T3)",
      "Sydney Corporate & Executive Chauffeur Hire",
      "Barangaroo & Martin Place Financial District Transfers",
      "White Bay & Overseas Passenger Terminal Cruise Transfers",
      "All-Day As-Directed Chauffeur Hire",
      "Hunter Valley & Blue Mountains Luxury Wine Tours",
    ],
    popularRoutes: [
      { from: "Sydney Airport (SYD)", to: "Sydney CBD / Circular Quay", distance: "14 km", time: "20 - 35 mins", desc: "Corporate hotels, Crown Sydney, and financial district." },
      { from: "Sydney Airport (SYD)", to: "North Sydney / Chatswood", distance: "22 km", time: "25 - 45 mins", desc: "Direct transit via Eastern Distributor and Harbour Tunnel." },
      { from: "Sydney CBD", to: "Parramatta / Western Sydney", distance: "25 km", time: "35 - 50 mins", desc: "Western Sydney commercial and government center." },
      { from: "Sydney CBD", to: "Hunter Valley Wine Region", distance: "165 km", time: "2 hrs", desc: "Private cellar door luxury day tours." },
    ],
    faqs: [
      { q: "Where does my chauffeur meet me at Sydney Airport?", a: "For International arrivals (T1), your chauffeur greets you inside the arrivals hall holding a personalized digital iPad name board. For Domestic flights (T2 & T3), meeting points are situated inside the luggage baggage carousel area." },
      { q: "Do you service cruise terminals in Sydney?", a: "Yes, we provide luxury door-to-door transfers to both the Overseas Passenger Terminal (Circular Quay) and White Bay Cruise Terminal (Rozelle)." },
      { q: "Are Sydney road tolls included in the fare?", a: "Yes, all toll roads (such as the Eastern Distributor, Cross City Tunnel, and Harbour Bridge) are fully transparent and calculated upfront." },
    ],
  },
  {
    id: "melbourne",
    slug: "melbourne",
    aliases: ["melbourne", "vic-melbourne"],
    name: "Melbourne",
    state: "Victoria",
    region: "Australia East",
    heroTitle: "Melbourne Transfers & Chauffeur Services",
    heroSubtitle: "Make the most of your time in Melbourne, get down to business or see the sights with premium chauffeur driven transfers from SYD.",
    badge: "Victoria • MEL / AVV Airports",
    cardImage: "/images/locations/melbourne.jpg",
    coverImage: "/images/corporate.jpg",
    description: "Make the most of your time in Melbourne, get down to business or see the sights with premium chauffeur driven transfers from SYD. Hughes takes the hassle out of transport with prompt arrivals, Melbourne CBD transfers, and Yarra Valley tours.",
    keyHubs: "Tullamarine Airport • Melbourne CBD • Southbank • Docklands • Yarra Valley",
    airportsServiced: [
      { name: "Melbourne Tullamarine Airport (T1-T4)", code: "MEL", transferTime: "25 - 40 mins" },
      { name: "Avalon Airport", code: "AVV", transferTime: "45 - 60 mins" },
      { name: "Essendon Fields Private Charters", code: "MEB", transferTime: "20 mins" },
    ],
    discover: {
      heading: "Discover Melbourne: Culture, Commerce & Grand Events",
      lead: "Australia’s cultural and culinary capital is famous for its vibrant laneways, historic theatres, world-class coffee culture, and premier sporting spectacles like the Australian Open and Melbourne Cup.",
      paragraphs: [
        "Whether you are attending an international medical conference at the Melbourne Convention and Exhibition Centre (MCEC) or embarking on a romantic weekend to the Mornington Peninsula, our luxury chauffeur fleet ensures smooth transit.",
        "Your private chauffeur eliminates tollway stress on the Tullamarine Freeway and CityLink, dropping you directly at the door of your hotel or corporate headquarters.",
      ],
      attractions: [
        { name: "Melbourne Arts Precinct & Southbank", desc: "National Gallery of Victoria, Crown Melbourne, and riverside dining." },
        { name: "Yarra Valley Wine Country", desc: "Premier cool-climate wineries including Domaine Chandon, Rochford, and Coombe Estate." },
        { name: "Melbourne Cricket Ground (MCG) & Marvel Stadium", desc: "Heartbeat of Australian sports, AFL grand finals, and cricket blockbusters." },
        { name: "Mornington Peninsula & Peninsula Hot Springs", desc: "Coastal relaxation, boutique vineyards, and natural thermal mineral baths." },
      ],
    },
    servicesOffered: [
      "Melbourne Tullamarine Airport Transfers",
      "Avalon Airport Long-Distance Chauffeur Transfers",
      "Melbourne CBD & Collins Street Corporate Travel",
      "Station Pier Passenger Cruise Terminal Transfers",
      "Yarra Valley & Mornington Peninsula Luxury Wine Tours",
      "Major Sporting & Special Event Limousine Hire",
    ],
    popularRoutes: [
      { from: "Melbourne Airport (MEL)", to: "Melbourne CBD / Southbank", distance: "23 km", time: "25 - 40 mins", desc: "Direct route via CityLink tollway." },
      { from: "Melbourne Airport (MEL)", to: "St Kilda & Brighton", distance: "32 km", time: "35 - 50 mins", desc: "Premier bayside residential suburbs." },
      { from: "Melbourne CBD", to: "Yarra Valley Wineries", distance: "55 km", time: "55 mins", desc: "Scenic vineyard tours with dedicated chauffeur." },
      { from: "Melbourne CBD", to: "Mornington Peninsula", distance: "75 km", time: "1 hr 10 mins", desc: "Coastal estates and hot springs." },
    ],
    faqs: [
      { q: "Where will my driver meet me at Melbourne Tullamarine?", a: "Your chauffeur will greet you inside the terminal at the designated arrivals chauffeur meeting point with a personalized digital sign, assisting with your luggage to the reserved limousine parking bays." },
      { q: "Do you provide transfers to Avalon Airport?", a: "Yes, we provide 24/7 private transfers between Avalon Airport (AVV), Geelong, and the Melbourne CBD." },
    ],
  },
  {
    id: "brisbane",
    slug: "brisbane",
    aliases: ["brisbane", "qld-brisbane"],
    name: "Brisbane",
    state: "Queensland",
    region: "Australia East",
    heroTitle: "Brisbane Transfers & Chauffeur Services",
    heroSubtitle: "From your Brisbane airport transfers and corporate transfers to luxury sightseeing tours, SYD keeps you moving in comfort.",
    badge: "Queensland • BNE Airport",
    cardImage: "/images/locations/brisbane.jpg",
    coverImage: "/images/service-2.jpg",
    description: "From your Brisbane airport transfers and corporate transfers to luxury sightseeing tours, SYD keeps you moving in comfort. Seamless connection to Brisbane CBD, Howard Smith Wharves, and Sunshine Coast.",
    keyHubs: "Brisbane Airport • Brisbane CBD • Fortitude Valley • South Bank • Howard Smith Wharves",
    airportsServiced: [
      { name: "Brisbane International & Domestic Airport", code: "BNE", transferTime: "20 - 30 mins" },
      { name: "Archerfield Airport", code: "ARC", transferTime: "25 mins" },
    ],
    discover: {
      heading: "Discover Brisbane: Sunshine, River Lifestyle & Innovation",
      lead: "As Queensland’s sub-tropical capital and host of the upcoming 2032 Olympic Games, Brisbane blends relaxed riverside charm with rapid urban growth and innovation.",
      paragraphs: [
        "Cruise effortlessly from Brisbane Airport via the Airport Link tunnel into the heart of the CBD, South Bank cultural precinct, or Howard Smith Wharves.",
        "We also provide seamless intercity chauffeur transfers connecting Brisbane to the Gold Coast, Sunshine Coast, and Tamborine Mountain.",
      ],
      attractions: [
        { name: "South Bank & QAGOMA", desc: "Brisbane's cultural hub with parklands, galleries, and scenic riverside boardwalks." },
        { name: "Howard Smith Wharves", desc: "Buzzy entertainment precinct located beneath the iconic Story Bridge." },
        { name: "Mount Coot-tha Lookout", desc: "Panoramic vistas stretching across the Brisbane city skyline to Moreton Bay." },
        { name: "Tamborine Mountain & Scenic Rim", desc: "Lush rainforest walks, local distilleries, and artisan cheese makers." },
      ],
    },
    servicesOffered: [
      "Brisbane International & Domestic Airport Transfers",
      "Brisbane Convention & Exhibition Centre (BCEC) Transport",
      "Brisbane International Cruise Terminal (Luggage Point) Transfers",
      "Intercity Transfers to Gold Coast & Noosa",
      "Corporate Hourly As-Directed Chauffeur Hire",
    ],
    popularRoutes: [
      { from: "Brisbane Airport (BNE)", to: "Brisbane CBD / Queen St", distance: "16 km", time: "20 - 30 mins", desc: "Fast transit via AirportLink M7 tunnel." },
      { from: "Brisbane Airport (BNE)", to: "Gold Coast (Surfers Paradise)", distance: "85 km", time: "65 - 75 mins", desc: "Interstate highway transfer along the M1." },
      { from: "Brisbane CBD", to: "Sunshine Coast (Noosa Heads)", distance: "135 km", time: "1 hr 45 mins", desc: "Door-to-door luxury coastal holiday transfer." },
    ],
    faqs: [
      { q: "How do I meet my chauffeur at Brisbane Airport?", a: "Your chauffeur monitors your flight status and greets you inside the Domestic or International Arrivals Hall holding a digital name placard." },
      { q: "Do you service the Brisbane International Cruise Terminal?", a: "Yes, we provide dedicated transfers directly to the cruise terminal at Luggage Point in Pinkenba with ample vehicle capacity for all cruise luggage." },
    ],
  },
  {
    id: "gold-coast",
    slug: "gold-coast",
    aliases: ["gold-coast", "goldcoast", "coolangatta"],
    name: "Gold Coast",
    state: "Queensland",
    region: "Australia East",
    heroTitle: "Gold Coast Transfers & Chauffeur Services",
    heroSubtitle: "From your Gold Coast corporate and airport transfers to luxury tours, SYD keeps you moving in comfort.",
    badge: "Queensland • OOL Airport",
    cardImage: "/images/locations/goldcoast.jpg",
    coverImage: "/images/cruise.jpg",
    description: "From your Gold Coast corporate and airport transfers to luxury tours, SYD keeps you moving in comfort. Servicing Surfers Paradise, Broadbeach, Sanctuary Cove, and Byron Bay.",
    keyHubs: "Coolangatta Airport • Surfers Paradise • Broadbeach • Sanctuary Cove • Burleigh Heads",
    airportsServiced: [
      { name: "Gold Coast Coolangatta Airport", code: "OOL", transferTime: "25 - 35 mins" },
      { name: "Brisbane Airport", code: "BNE", transferTime: "65 - 80 mins" },
    ],
    discover: {
      heading: "Experience the Gold Coast in Unrivalled Luxury",
      lead: "World-class surf beaches, championship golf courses, glittering nightlife, and secluded hinterland valleys make the Gold Coast Australia's premier holiday playground.",
      paragraphs: [
        "Avoid long queues at Gold Coast Airport and travel in air-conditioned luxury to your resort in Broadbeach, Surfers Paradise, or Sanctuary Cove.",
        "Visiting for the Gold Coast Convention & Exhibition Centre or a tournament at the PGA Championship courses? Our executive fleet ensures you arrive on time and in style.",
      ],
      attractions: [
        { name: "Broadbeach & The Star Gold Coast", desc: "Premier casino, convention center, and award-winning dining hub." },
        { name: "Sanctuary Cove & Hope Island", desc: "Gated luxury resort enclaves with marina berths and championship golf." },
        { name: "Burleigh Heads & James Street", desc: "Chic coastal dining, world-class surf break, and national park headland." },
        { name: "Gold Coast Theme Parks", desc: "Comfortable family group transfers to Warner Bros. Movie World and Dreamworld." },
      ],
    },
    servicesOffered: [
      "Gold Coast Coolangatta Airport Transfers",
      "Gold Coast to Byron Bay Chauffeur Transfers",
      "Gold Coast Convention Centre (GCCEC) Event Shuttles",
      "Theme Park & Private Family Chauffeur Services",
      "Golf Day Transfers with Luggage & Club Hold",
    ],
    popularRoutes: [
      { from: "Gold Coast Airport (OOL)", to: "Surfers Paradise / Broadbeach", distance: "22 km", time: "25 - 35 mins", desc: "Direct route via Gold Coast Highway." },
      { from: "Gold Coast Airport (OOL)", to: "Sanctuary Cove", distance: "48 km", time: "45 - 55 mins", desc: "Luxury northern resort enclave." },
      { from: "Gold Coast Airport (OOL)", to: "Byron Bay NSW", distance: "68 km", time: "45 - 55 mins", desc: "Cross-border luxury transfer." },
    ],
    faqs: [
      { q: "Can you take me from Gold Coast Airport directly to Byron Bay?", a: "Yes, our Gold Coast to Byron Bay transfer is one of our most popular services. We take you straight to your hotel or Airbnb with zero waiting." },
    ],
  },
  {
    id: "perth",
    slug: "perth",
    aliases: ["perth", "wa-perth"],
    name: "Perth",
    state: "Western Australia",
    region: "Australia Regional & West",
    heroTitle: "Perth Transfers & Chauffeur Services",
    heroSubtitle: "From your Perth corporate and airport transfers to luxury tours, SYD keeps you moving in comfort.",
    badge: "Western Australia • PER Airport",
    cardImage: "/images/locations/perth.jpg",
    coverImage: "/images/service-7.jpg",
    description: "From your Perth corporate and airport transfers to luxury tours, SYD keeps you moving in comfort. Connecting Perth Airport terminals directly to Perth CBD, Fremantle, and Crown Towers.",
    keyHubs: "Perth Airport T1-T4 • Perth CBD • Crown Towers • Fremantle • Swan Valley",
    airportsServiced: [
      { name: "Perth Airport (Terminals 1, 2, 3, 4)", code: "PER", transferTime: "20 - 30 mins" },
      { name: "Jandakot Airport", code: "JAD", transferTime: "25 mins" },
    ],
    discover: {
      heading: "Discover Perth & Western Australia",
      lead: "Australia’s sunniest capital city offers pristine Indian Ocean sunsets, iconic Swan River views, and a thriving resources and corporate business headquarters.",
      paragraphs: [
        "From corporate transfers to resource company executive travel and VIP transit to Crown Towers or Optus Stadium, SYD is Perth's most trusted chauffeur team.",
        "Take a scenic private day tour into the Swan Valley wine region or down south towards the world-renowned Margaret River wineries.",
      ],
      attractions: [
        { name: "Kings Park & Botanic Garden", desc: "One of the world's largest inner-city parks with panoramic Swan River views." },
        { name: "Crown Perth & Optus Stadium", desc: "Premier entertainment complex and world-class sporting arena in Burswood." },
        { name: "Historic Fremantle & Fishing Boat Harbour", desc: "Maritime history, craft breweries, and convict architecture." },
        { name: "Swan Valley Wine Region", desc: "Western Australia's oldest wine region just 25 minutes from the CBD." },
      ],
    },
    servicesOffered: [
      "Perth Airport FIFO & Executive Transfers (T1, T2, T3, T4)",
      "Mining & Energy Corporate Account Transport",
      "Crown Towers VIP Hotel Chauffeur Transfers",
      "Optus Stadium Event Transport",
      "Swan Valley & Margaret River Luxury Winery Charters",
    ],
    popularRoutes: [
      { from: "Perth Airport (PER)", to: "Perth CBD / St Georges Terrace", distance: "14 km", time: "20 - 30 mins", desc: "Direct route via Graham Farmer Freeway." },
      { from: "Perth Airport (PER)", to: "Crown Towers Perth", distance: "11 km", time: "15 - 20 mins", desc: "Luxury casino and hotel precinct." },
      { from: "Perth CBD", to: "Fremantle", distance: "21 km", time: "30 - 40 mins", desc: "Historic port city transit." },
    ],
    faqs: [
      { q: "Do you service all terminals at Perth Airport?", a: "Yes, we service T1/T2 (Airport Drive precinct) and T3/T4 (Dunreath Drive precinct) with meet-and-greet in every arrivals hall." },
    ],
  },
  {
    id: "adelaide",
    slug: "adelaide",
    aliases: ["adelaide", "sa-adelaide"],
    name: "Adelaide",
    state: "South Australia",
    region: "Australia Regional & West",
    heroTitle: "Adelaide Transfers & Chauffeur Services",
    heroSubtitle: "From your Adelaide airport transfers and corporate transfers to Barossa Valley wine tours, SYD keeps you moving in comfort.",
    badge: "South Australia • ADL Airport",
    cardImage: "/images/locations/adelaide.jpg",
    coverImage: "/images/HUG2201_Photo116-1-500x500.jpg",
    description: "From your Adelaide airport transfers and corporate transfers to Barossa Valley wine tours, SYD keeps you moving in comfort. Gateway to Barossa Valley, McLaren Vale, and Adelaide Hills.",
    keyHubs: "Adelaide Airport • Adelaide CBD • North Adelaide • Barossa Valley • McLaren Vale",
    airportsServiced: [
      { name: "Adelaide International & Domestic Airport", code: "ADL", transferTime: "15 - 20 mins" },
    ],
    discover: {
      heading: "Discover Adelaide: Food, Wine & Cultural Heritage",
      lead: "Renowned as the wine capital of Australia, Adelaide features parkland-ringed streets, world-famous wine valleys, and historic stone architecture.",
      paragraphs: [
        "Adelaide Airport is situated conveniently close to the CBD, allowing you to reach your hotel or meeting within 15 to 20 minutes.",
        "Our knowledgeable local chauffeurs provide bespoke cellar door tours to the Barossa Valley (Penfolds, Seppeltsfield), McLaren Vale (d'Arenberg), and the Adelaide Hills.",
      ],
      attractions: [
        { name: "Barossa Valley Wineries", desc: "Australia's premier Shiraz producers and historic German settlement estates." },
        { name: "Adelaide Oval & Riverbank", desc: "World-class cricket and football venue overlooking the picturesque River Torrens." },
        { name: "McLaren Vale & Fleurieu Coast", desc: "Coastal vineyards, organic cellar doors, and the famous d'Arenberg Cube." },
        { name: "Hahndorf & Adelaide Hills", desc: "Historic German heritage township with boutique cool-climate wineries." },
      ],
    },
    servicesOffered: [
      "Adelaide Airport Chauffeur Transfers",
      "Barossa Valley Private Wine Day Tours",
      "McLaren Vale & Adelaide Hills Tours",
      "Adelaide Convention Centre Executive Transport",
      "Corporate Hourly As-Directed Hire",
    ],
    popularRoutes: [
      { from: "Adelaide Airport (ADL)", to: "Adelaide CBD / North Terrace", distance: "7 km", time: "15 mins", desc: "Short, comfortable executive transit." },
      { from: "Adelaide CBD", to: "Barossa Valley (Tanunda)", distance: "70 km", time: "60 mins", desc: "Cellar door touring." },
      { from: "Adelaide CBD", to: "McLaren Vale", distance: "40 km", time: "45 mins", desc: "Coastal wine region." },
    ],
    faqs: [
      { q: "Can I book an all-day chauffeur for wine tasting in the Barossa?", a: "Yes, our private wine tours include custom itineraries, flexible timing, and safe luxury transport while you enjoy tastings." },
    ],
  },
  {
    id: "canberra",
    slug: "canberra",
    aliases: ["canberra", "act-canberra"],
    name: "Canberra",
    state: "Australian Capital Territory",
    region: "Australia East",
    heroTitle: "Canberra Transfers & Chauffeur Services",
    heroSubtitle: "From your Canberra airport transfers and corporate transfers to luxury sightseeing tours, SYD keeps you moving in comfort.",
    badge: "ACT • CBR Airport",
    cardImage: "/images/locations/canberra.jpg",
    coverImage: "/images/corporate.jpg",
    description: "From your Canberra airport transfers and corporate transfers to luxury sightseeing tours, SYD keeps you moving in comfort. Trusted transport for government, diplomatic, and executive clients.",
    keyHubs: "Canberra Airport • Parliament House • Barton • Civic CBD • Diplomatic Precinct",
    airportsServiced: [
      { name: "Canberra Airport", code: "CBR", transferTime: "12 - 18 mins" },
    ],
    discover: {
      heading: "Canberra: The Heart of Australian Governance & Heritage",
      lead: "Australia’s capital is a master-planned city surrounded by native bushland, housing the national parliament, world-class cultural institutions, and foreign embassies.",
      paragraphs: [
        "SYD has proudly served diplomats, ministers, government departments, and visiting foreign dignitaries for over a century with utmost confidentiality and precision.",
        "Whether attending Parliamentary sitting weeks, diplomatic summits, or business conferences in Barton, our chauffeurs offer unmatched protocol expertise.",
      ],
      attractions: [
        { name: "Parliament House & Old Parliament House", desc: "The legislative heart of Australia on Capital Hill." },
        { name: "Australian War Memorial", desc: "Nationally revered commemorative shrine and museum." },
        { name: "National Gallery of Australia & Lake Burley Griffin", desc: "Australia's leading visual arts museum on the tranquil lake shore." },
      ],
    },
    servicesOffered: [
      "Canberra Airport Diplomatic & VIP Transfers",
      "Parliament House Sitting Week Chauffeur Hire",
      "Embassy & Foreign Delegation Escort Transport",
      "All-Day As-Directed Government Transport",
    ],
    popularRoutes: [
      { from: "Canberra Airport (CBR)", to: "Parliament House / Barton", distance: "8 km", time: "12 mins", desc: "Swift transit to the Parliamentary precinct." },
      { from: "Canberra Airport (CBR)", to: "Civic / City Centre", distance: "9 km", time: "15 mins", desc: "Commercial and hotel district." },
    ],
    faqs: [
      { q: "Do your chauffeurs hold security clearances for diplomatic transport?", a: "Yes, our Canberra chauffeur team is vetted with extensive background security clearances and experienced in diplomatic protocols." },
    ],
  },
  {
    id: "cairns-port-douglas",
    slug: "cairns-port-douglas",
    aliases: ["cairns-port-douglas", "cairns", "port-douglas"],
    name: "Cairns & Port Douglas",
    state: "Queensland",
    region: "Australia East",
    heroTitle: "Cairns & Port Douglas Transfers & Transport",
    heroSubtitle: "From your Cairns & Port Douglas airport transfers and corporate transfers to luxury sightseeing tours, SYD keeps you moving in comfort.",
    badge: "Tropical North QLD • CNS Airport",
    cardImage: "/images/locations/cairns.jpg",
    coverImage: "/images/service-7.jpg",
    description: "From your Cairns & Port Douglas airport transfers and corporate transfers to luxury sightseeing tours, SYD keeps you moving in comfort. Gateway to the Great Barrier Reef and Daintree Rainforest.",
    keyHubs: "Cairns Airport • Palm Cove • Port Douglas • Crystalbrook Marina • Daintree",
    airportsServiced: [
      { name: "Cairns International & Domestic Airport", code: "CNS", transferTime: "10 - 15 mins (Cairns) / 60 mins (Port Douglas)" },
    ],
    discover: {
      heading: "Experience Tropical North Queensland in Style",
      lead: "Where two UNESCO World Heritage wonders meet: the Great Barrier Reef and the ancient Daintree Rainforest.",
      paragraphs: [
        "Take the breathtaking Captain Cook Highway coastal drive from Cairns Airport directly to luxury resorts in Palm Cove or Port Douglas with your private chauffeur.",
        "Skip hot shuttle buses and rideshares with our immaculate, air-conditioned luxury SUVs and Mercedes people movers.",
      ],
      attractions: [
        { name: "Great Barrier Reef Departures", desc: "Direct transfers to Reef Fleet Terminal and Crystalbrook Superyacht Marina." },
        { name: "Daintree Rainforest & Cape Tribulation", desc: "The oldest living tropical rainforest on Earth." },
        { name: "Palm Cove Esplanade", desc: "Ancient paperbark trees lining beachfront five-star luxury resorts." },
      ],
    },
    servicesOffered: [
      "Cairns Airport to Port Douglas Transfers",
      "Cairns Airport to Palm Cove Luxury Transfers",
      "Private Daintree & Mossman Gorge Day Tours",
      "Superyacht Marina & Coral Reef Departures",
    ],
    popularRoutes: [
      { from: "Cairns Airport (CNS)", to: "Cairns CBD & Esplanade", distance: "7 km", time: "10 mins", desc: "Hotels and marina." },
      { from: "Cairns Airport (CNS)", to: "Palm Cove", distance: "26 km", time: "25 mins", desc: "Beachfront resort strip." },
      { from: "Cairns Airport (CNS)", to: "Port Douglas Resorts", distance: "66 km", time: "60 mins", desc: "Spectacular ocean-hugging Captain Cook Highway." },
    ],
    faqs: [
      { q: "How long is the transfer from Cairns Airport to Port Douglas?", a: "The drive takes approximately 60 minutes along the scenic Captain Cook Highway. Your chauffeur meets you in the terminal with luggage support." },
    ],
  },
  {
    id: "sunshine-coast",
    slug: "sunshine-coast",
    aliases: ["sunshine-coast", "sunshinecoast", "noosa"],
    name: "Sunshine Coast",
    state: "Queensland",
    region: "Australia East",
    heroTitle: "Sunshine Coast & Noosa Transfers",
    heroSubtitle: "From your Sunshine Coast corporate and airport transfers to luxury tours, SYD keeps you moving in comfort.",
    badge: "Queensland • MCY Airport",
    cardImage: "/images/locations/sunshinecoast.jpg",
    coverImage: "/images/image-gallery-2-900x500.jpg",
    description: "From your Sunshine Coast corporate and airport transfers to luxury tours, SYD keeps you moving in comfort. Direct transit to Noosa Heads, Hastings Street, and Mooloolaba.",
    keyHubs: "Sunshine Coast Airport • Noosa Heads • Hastings St • Mooloolaba • Montville",
    airportsServiced: [
      { name: "Sunshine Coast Airport (Maroochydore)", code: "MCY", transferTime: "25 - 30 mins" },
      { name: "Brisbane Airport", code: "BNE", transferTime: "1 hr 35 mins" },
    ],
    discover: {
      heading: "Discover Noosa & the Pristine Sunshine Coast",
      lead: "Pristine white sand beaches, tranquil river waterways, and the lush greenery of the Glasshouse Mountains.",
      paragraphs: [
        "Whether arriving for a holiday in Noosa Heads or a corporate conference in Maroochydore, SYD provides reliable, luxurious door-to-door transit.",
        "We also offer seamless pickups from Brisbane Airport straight to Noosa, avoiding rental car wait times.",
      ],
      attractions: [
        { name: "Hastings Street & Noosa Main Beach", desc: "Luxury boutique shopping, five-star dining, and calm north-facing beaches." },
        { name: "Noosa National Park & Fairy Pools", desc: "Dramatic coastal tracks with koala spotting and secluded bays." },
        { name: "Montville & Hinterland Art Villages", desc: "Mountain panoramas, artisan food trails, and boutique wineries." },
      ],
    },
    servicesOffered: [
      "Sunshine Coast Airport Transfers",
      "Brisbane Airport to Noosa Transfers",
      "Noosa Heads Luxury Chauffeur Travel",
      "Hinterland & Glasshouse Mountains Day Tours",
    ],
    popularRoutes: [
      { from: "Sunshine Coast Airport (MCY)", to: "Noosa Heads / Hastings St", distance: "30 km", time: "25 - 30 mins", desc: "Coastal holiday transfer." },
      { from: "Brisbane Airport (BNE)", to: "Noosa Heads", distance: "135 km", time: "1 hr 35 mins", desc: "Direct highway transfer." },
    ],
    faqs: [
      { q: "Can I book a transfer from Brisbane Airport to Noosa?", a: "Yes, we regularly transfer guests between Brisbane Airport and Noosa or Sunshine Coast resorts with flat-rate transparent pricing." },
    ],
  },
  {
    id: "hobart",
    slug: "hobart",
    aliases: ["hobart", "hobart-launceston", "tasmania"],
    name: "Hobart",
    state: "Tasmania",
    region: "Australia Regional & West",
    heroTitle: "Hobart & Southern Tasmania Transfers",
    heroSubtitle: "From your Hobart airport transfers and corporate transfers to luxury tours, SYD keeps you moving in comfort.",
    badge: "Tasmania • HBA Airport",
    cardImage: "/images/locations/hobart.jpg",
    coverImage: "/images/service-7.jpg",
    description: "From your Hobart airport transfers and corporate transfers to luxury tours, SYD keeps you moving in comfort. Waterfront, MONA, Salamanca, and Huon Valley.",
    keyHubs: "Hobart Airport • Salamanca Place • MONA Ferry • Battery Point • Huon Valley",
    airportsServiced: [
      { name: "Hobart International Airport", code: "HBA", transferTime: "15 - 20 mins" },
    ],
    discover: {
      heading: "Discover Hobart: Maritime History, Art & Wilderness",
      lead: "Nestled beneath the majestic Mount Wellington (Kunanyi), Hobart blends Georgian sandstone architecture with modern avant-garde culture.",
      paragraphs: [
        "Home to the world-famous Museum of Old and New Art (MONA) and bustling Saturday Salamanca Markets, Hobart is a sanctuary for food and wine lovers.",
        "Our accredited chauffeurs escort you in comfort to Coal River Valley vineyards, Port Arthur Historic Site, or Bruny Island ferry departures.",
      ],
      attractions: [
        { name: "MONA (Museum of Old and New Art)", desc: "World-acclaimed subterranean museum of art and curiosity." },
        { name: "Mount Wellington / Kunanyi Summit", desc: "1,271m alpine summit offering panoramic views of southern Tasmania." },
        { name: "Salamanca Place & Battery Point", desc: "Historic 1830s sandstone warehouses housing galleries and restaurants." },
      ],
    },
    servicesOffered: [
      "Hobart Airport Chauffeur Transfers",
      "MONA & Coal River Valley Wine Tours",
      "Port Arthur Historic Site Private Tours",
      "Corporate & Government Transport in Hobart",
    ],
    popularRoutes: [
      { from: "Hobart Airport (HBA)", to: "Hobart Waterfront / CBD", distance: "18 km", time: "15 - 20 mins", desc: "Direct route via Tasman Highway." },
      { from: "Hobart CBD", to: "MONA (Berriedale)", distance: "12 km", time: "20 mins", desc: "Direct luxury museum transfer." },
    ],
    faqs: [
      { q: "Do you offer private day trips to Port Arthur or Bruny Island?", a: "Yes, we provide full-day as-directed chauffeur hire for exploring southern Tasmania at your own leisurely pace." },
    ],
  },
  {
    id: "launceston",
    slug: "launceston",
    aliases: ["launceston"],
    name: "Launceston",
    state: "Tasmania",
    region: "Australia Regional & West",
    heroTitle: "Launceston & Tamar Valley Transfers",
    heroSubtitle: "From your Launceston corporate and airport transfers to luxury tours, SYD keeps you moving in comfort.",
    badge: "Tasmania • LST Airport",
    cardImage: "/images/locations/launceston.jpg",
    coverImage: "/images/galleryimg1.jpg",
    description: "From your Launceston corporate and airport transfers to luxury tours, SYD keeps you moving in comfort. Tamar Valley wine country and Cataract Gorge.",
    keyHubs: "Launceston Airport • Cataract Gorge • Tamar Valley • Cradle Mountain",
    airportsServiced: [
      { name: "Launceston Airport", code: "LST", transferTime: "15 mins" },
    ],
    discover: {
      heading: "Discover Launceston & Tamar Valley",
      lead: "Australia’s second oldest city is designated a UNESCO City of Gastronomy, celebrated for sparkling wines, artisanal cheeses, and dramatic river gorges.",
      paragraphs: [
        "Enjoy tranquil transfers from Launceston Airport into the historic city center, or spend a day visiting the premier sparkling wine houses of the Tamar Valley.",
      ],
      attractions: [
        { name: "Cataract Gorge Reserve", desc: "Spectacular natural gorge with walking trails and the world's longest single-span chairlift." },
        { name: "Tamar Valley Wine Route", desc: "Renowned for world-class sparkling wines, Pinot Noir, and Chardonnay." },
      ],
    },
    servicesOffered: [
      "Launceston Airport Transfers",
      "Tamar Valley Winery Tours",
      "Cradle Mountain Private Transfers",
    ],
    popularRoutes: [
      { from: "Launceston Airport (LST)", to: "Launceston CBD", distance: "14 km", time: "15 mins", desc: "Fast airport connection." },
    ],
    faqs: [
      { q: "Can I book a chauffeur to tour the Tamar Valley wine route?", a: "Yes, our chauffeurs know all the top cellar doors and can tailor an itinerary to your taste." },
    ],
  },
  {
    id: "newcastle",
    slug: "newcastle",
    aliases: ["newcastle", "hunter-valley"],
    name: "Newcastle",
    state: "New South Wales",
    region: "Australia East",
    heroTitle: "Newcastle & Hunter Valley Transfers",
    heroSubtitle: "From your Newcastle corporate transfers to local luxury tours, SYD keeps you moving in comfort.",
    badge: "NSW • NTL Airport",
    cardImage: "/images/locations/newcastle.jpg",
    coverImage: "/images/service-2.jpg",
    description: "From your Newcastle corporate transfers to local luxury tours, SYD keeps you moving in comfort. Connecting Newcastle CBD, Honeysuckle, and the Hunter Valley.",
    keyHubs: "Newcastle Airport • Honeysuckle Precinct • Hunter Valley • Lake Macquarie",
    airportsServiced: [
      { name: "Newcastle Airport (Williamtown)", code: "NTL", transferTime: "25 - 30 mins" },
    ],
    discover: {
      heading: "Discover Newcastle: Coastal Vitality & Historic Port",
      lead: "New South Wales' second largest city is a dynamic coastal hub boasting pristine surf breaks, thriving dining precincts, and immediate proximity to the Hunter Valley.",
      paragraphs: [
        "We support business travellers visiting Newcastle's energy and logistics hubs, as well as holidaymakers heading into the Pokolbin wine region.",
      ],
      attractions: [
        { name: "Hunter Valley Wine Country", desc: "Historic vineyards, fine dining, and boutique accommodation." },
        { name: "Newcastle Memorial Walk & Nobbys Beach", desc: "Clifftop walk offering 360-degree coastal and city views." },
      ],
    },
    servicesOffered: [
      "Newcastle Airport Transfers",
      "Hunter Valley Luxury Winery Day Tours",
      "Newcastle to Sydney CBD Chauffeur Transit",
    ],
    popularRoutes: [
      { from: "Newcastle Airport (NTL)", to: "Newcastle CBD / Honeysuckle", distance: "27 km", time: "25 - 30 mins", desc: "Waterfront hotels and business district." },
      { from: "Newcastle CBD", to: "Pokolbin (Hunter Valley)", distance: "60 km", time: "50 mins", desc: "Winery and event transfers." },
    ],
    faqs: [
      { q: "Do you offer transfers between Sydney and Newcastle?", a: "Yes, we provide comfortable door-to-door transfers along the M1 Pacific Motorway between Sydney and Newcastle." },
    ],
  },
  {
    id: "darwin",
    slug: "darwin",
    aliases: ["darwin", "nt-darwin"],
    name: "Darwin",
    state: "Northern Territory",
    region: "Australia Regional & West",
    heroTitle: "Darwin Transfers & Chauffeur Services",
    heroSubtitle: "From your Darwin airport transfers and corporate transfers to luxury sightseeing tours, SYD keeps you moving in comfort.",
    badge: "Northern Territory • DRW Airport",
    cardImage: "/images/locations/darwin.jpg",
    coverImage: "/images/service-7.jpg",
    description: "From your Darwin airport transfers and corporate transfers to luxury sightseeing tours, SYD keeps you moving in comfort. Servicing Darwin International Airport and the Waterfront.",
    keyHubs: "Darwin Airport • Darwin Waterfront • Mindil Beach • Cullen Bay",
    airportsServiced: [
      { name: "Darwin International Airport", code: "DRW", transferTime: "15 mins" },
    ],
    discover: {
      heading: "Discover Darwin: Tropical Gateway to the Top End",
      lead: "Australia’s tropical northern capital is celebrated for balmy sunsets, vibrant night markets, and access to the world-renowned Kakadu National Park.",
      paragraphs: [
        "SYD delivers executive air-conditioned travel for corporate delegations, government personnel, and visitors exploring the Top End.",
      ],
      attractions: [
        { name: "Darwin Waterfront Precinct", desc: "Wave lagoon, alfresco restaurants, and the Darwin Convention Centre." },
        { name: "Mindil Beach Sunset Markets", desc: "Iconic tropical food stalls, local crafts, and beach sunsets." },
      ],
    },
    servicesOffered: [
      "Darwin Airport Executive Transfers",
      "Darwin Convention Centre Corporate Logistics",
      "Top End Bespoke Private Charters",
    ],
    popularRoutes: [
      { from: "Darwin Airport (DRW)", to: "Darwin CBD / Waterfront", distance: "12 km", time: "15 mins", desc: "City center and convention hotels." },
    ],
    faqs: [
      { q: "Are vehicles in Darwin air-conditioned for the tropical climate?", a: "Yes, all our luxury European sedans and SUVs feature high-capacity dual-zone climate control and complimentary chilled water." },
    ],
  },
  {
    id: "auckland",
    slug: "auckland",
    aliases: ["auckland", "nz-auckland"],
    name: "Auckland",
    state: "North Island",
    region: "New Zealand",
    heroTitle: "Auckland Airport Transfers & Chauffeur Transport",
    heroSubtitle: "Professional, experienced and courteous chauffeurs and well-appointed vehicles to get you to and from Auckland Airport in comfort.",
    badge: "New Zealand • AKL Airport",
    cardImage: "/images/locations/auckland.jpg",
    coverImage: "/images/Hughes-International-scaled.png",
    description: "Professional, experienced and courteous chauffeurs and well-appointed vehicles to get you to and from Auckland Airport in comfort. Servicing Auckland CBD, Viaduct Harbour, and Waiheke ferry terminals.",
    keyHubs: "Auckland Airport • Viaduct Harbour • Wynyard Quarter • Takapuna",
    airportsServiced: [
      { name: "Auckland Airport (Domestic & International)", code: "AKL", transferTime: "30 - 45 mins" },
    ],
    discover: {
      heading: "Discover Auckland: City of Sails",
      lead: "New Zealand’s largest metropolitan center is framed by two stunning harbours, fertile volcanic cones, and world-class culinary dining.",
      paragraphs: [
        "SYD extends our trusted Australian chauffeur excellence across the Tasman to Auckland, offering fixed upfront rates, inside terminal meet-and-greets, and executive luxury.",
      ],
      attractions: [
        { name: "Viaduct Harbour & Wynyard Quarter", desc: "Lively waterfront dining, superyacht marina, and luxury hotels." },
        { name: "Waiheke Island Ferry Terminals", desc: "Connections to Waiheke's world-famous wineries and beaches." },
      ],
    },
    servicesOffered: [
      "Auckland Airport Chauffeur Transfers",
      "Auckland CBD Corporate Transport",
      "Trans-Tasman Account Integration",
    ],
    popularRoutes: [
      { from: "Auckland Airport (AKL)", to: "Auckland CBD / Viaduct", distance: "21 km", time: "30 - 45 mins", desc: "Direct route via SH20." },
    ],
    faqs: [
      { q: "Can I book both my Sydney departure and Auckland arrival on one account?", a: "Yes, SYD provides seamless trans-Tasman corporate account billing across Australia and New Zealand." },
    ],
  },
  {
    id: "wellington",
    slug: "wellington",
    aliases: ["wellington", "nz-wellington"],
    name: "Wellington",
    state: "North Island",
    region: "New Zealand",
    heroTitle: "Wellington Transfers & Transport",
    heroSubtitle: "Professional, experienced and courteous chauffeurs and well-appointed vehicles to get you to and from Wellington Airport in comfort.",
    badge: "New Zealand • WLG Airport",
    cardImage: "/images/locations/wellington.jpg",
    coverImage: "/images/service-2.jpg",
    description: "Professional, experienced and courteous chauffeurs and well-appointed vehicles to get you to and from Wellington Airport in comfort. New Zealand's cultural and political capital.",
    keyHubs: "Wellington Airport • Parliament Buildings • Lambton Quay • Te Papa",
    airportsServiced: [
      { name: "Wellington International Airport", code: "WLG", transferTime: "15 - 20 mins" },
    ],
    discover: {
      heading: "Discover Wellington: Coolest Little Capital",
      lead: "Perched between rugged green hills and a stunning natural harbour, Wellington is home to New Zealand's parliament, film industry, and renowned coffee culture.",
      paragraphs: [
        "Reliable chauffeur transport for government, diplomatic, and corporate meetings throughout the capital.",
      ],
      attractions: [
        { name: "Te Papa Tongarewa", desc: "New Zealand's innovative and interactive national museum." },
        { name: "The Beehive (Parliament Buildings)", desc: "The executive wing of the New Zealand Parliament." },
      ],
    },
    servicesOffered: [
      "Wellington Airport Transfers",
      "Government & Diplomatic Chauffeur Services",
    ],
    popularRoutes: [
      { from: "Wellington Airport (WLG)", to: "Wellington CBD / Lambton Quay", distance: "8 km", time: "15 - 20 mins", desc: "Quick harbor-side transit." },
    ],
    faqs: [
      { q: "Where does my driver meet me at Wellington Airport?", a: "Your driver greets you inside the terminal with a personalized digital iPad name board." },
    ],
  },
  {
    id: "christchurch",
    slug: "christchurch",
    aliases: ["christchurch", "nz-christchurch"],
    name: "Christchurch",
    state: "South Island",
    region: "New Zealand",
    heroTitle: "Christchurch Transfers & Transport",
    heroSubtitle: "Professional, experienced and courteous chauffeurs and well-appointed vehicles to get you to and from Christchurch Airport in comfort.",
    badge: "New Zealand • CHC Airport",
    cardImage: "/images/locations/christchurch.jpg",
    coverImage: "/images/service-7.jpg",
    description: "Professional, experienced and courteous chauffeurs and well-appointed vehicles to get you to and from Christchurch Airport in comfort. Gateway to the South Island.",
    keyHubs: "Christchurch Airport • Christchurch CBD • Canterbury Plains • Akaroa",
    airportsServiced: [
      { name: "Christchurch International Airport", code: "CHC", transferTime: "15 - 25 mins" },
    ],
    discover: {
      heading: "Discover Christchurch: The Garden City",
      lead: "Combining historic English charm with modern resilient architecture and gateway access to the Southern Alps.",
      paragraphs: [
        "Whether arriving for corporate engagements or South Island luxury touring, SYD guarantees prompt, refined service.",
      ],
      attractions: [
        { name: "Christchurch Botanic Gardens & Avon River", desc: "Tranquil punting on the Avon and heritage trees." },
      ],
    },
    servicesOffered: [
      "Christchurch Airport Transfers",
      "Canterbury Private Touring",
    ],
    popularRoutes: [
      { from: "Christchurch Airport (CHC)", to: "Christchurch CBD", distance: "10 km", time: "15 - 25 mins", desc: "Direct route via Memorial Ave." },
    ],
    faqs: [
      { q: "Do you service South Island ski fields from Christchurch?", a: "Yes, our luxury SUVs are equipped for mountain road conditions." },
    ],
  },
  {
    id: "queenstown",
    slug: "queenstown",
    aliases: ["queenstown", "nz-queenstown"],
    name: "Queenstown",
    state: "South Island",
    region: "New Zealand",
    heroTitle: "Queenstown Transfers & Transport",
    heroSubtitle: "Professional, experienced and courteous chauffeurs and well-appointed vehicles to get you to and from Queenstown Airport in comfort.",
    badge: "New Zealand • ZQN Airport",
    cardImage: "/images/locations/queenstown.jpg",
    coverImage: "/images/service-7.jpg",
    description: "Professional, experienced and courteous chauffeurs and well-appointed vehicles to get you to and from Queenstown Airport in comfort. The adventure and alpine luxury capital.",
    keyHubs: "Queenstown Airport • Lake Wakatipu • Coronet Peak • The Remarkables • Millbrook",
    airportsServiced: [
      { name: "Queenstown Airport (Frankton)", code: "ZQN", transferTime: "10 - 15 mins" },
    ],
    discover: {
      heading: "Discover Queenstown: Alpine Splendour & World-Class Luxury",
      lead: "Nestled along the glacial shores of Lake Wakatipu against the dramatic backdrop of The Remarkables mountain range.",
      paragraphs: [
        "From luxury lodge transfers to blanketed ski field drop-offs and Central Otago Pinot Noir vineyard touring, SYD provides the ultimate alpine comfort.",
      ],
      attractions: [
        { name: "Lake Wakatipu & Skyline Gondola", desc: "Scenic alpine lake and stunning views from Bob's Peak." },
        { name: "Gibbston Valley Wine Region", desc: "Pioneering Pinot Noir wineries nestled in rocky river gorges." },
        { name: "Millbrook Resort & Arrowtown", desc: "Championship golf and historic 1860s gold-mining settlement." },
      ],
    },
    servicesOffered: [
      "Queenstown Airport to Luxury Lodge Transfers",
      "Ski Field Mountain Transfers (Coronet Peak & Remarkables)",
      "Gibbston Valley Private Winery Tours",
    ],
    popularRoutes: [
      { from: "Queenstown Airport (ZQN)", to: "Queenstown Town Centre", distance: "8 km", time: "12 mins", desc: "Lake Wakatipu shores." },
      { from: "Queenstown Airport (ZQN)", to: "Arrowtown / Millbrook", distance: "14 km", time: "15 mins", desc: "Historic village and golf resort." },
    ],
    faqs: [
      { q: "Do you have ski racks and snow equipment capacity?", a: "Yes, our luxury SUVs and Mercedes people movers easily accommodate skis, snowboards, and heavy winter luggage." },
    ],
  },
  {
    id: "singapore",
    slug: "singapore",
    aliases: ["singapore", "changi", "changi-airport"],
    name: "Singapore (Changi)",
    state: "Central",
    region: "International",
    heroTitle: "Singapore Changi Airport Transfers & Transport",
    heroSubtitle: "Professional, experienced and courteous chauffeurs and well-appointed vehicles to get you to and from Changi Airport in comfort.",
    badge: "Southeast Asia • SIN Changi",
    cardImage: "/images/locations/singapore.jpg",
    coverImage: "/images/Hughes-International-scaled.png",
    description: "Professional, experienced and courteous chauffeurs and well-appointed vehicles to get you to and from Changi Airport in comfort. Servicing Marina Bay Sands, Orchard Road, and Sentosa.",
    keyHubs: "Changi Airport Terminals 1-4 • Marina Bay Sands • Orchard Road • Raffles Place • Sentosa",
    airportsServiced: [
      { name: "Singapore Changi Airport (T1, T2, T3, T4)", code: "SIN", transferTime: "20 - 30 mins" },
      { name: "Seletar Airport (Business Aviation)", code: "XSP", transferTime: "25 mins" },
    ],
    discover: {
      heading: "Discover Singapore: Global Financial & Gateway Hub",
      lead: "A vibrant global metropolis renowned for world-class infrastructure, Michelin-starred gastronomy, and iconic architecture.",
      paragraphs: [
        "SYD Singapore ensures pristine executive transportation directly from your Changi Airport terminal to your downtown hotel, Raffles Place boardroom, or Sentosa resort.",
        "Take advantage of unified corporate billing between your Australian headquarters and Asian regional visits.",
      ],
      attractions: [
        { name: "Marina Bay Sands & Gardens by the Bay", desc: "World-famous integrated resort and futuristic vertical gardens." },
        { name: "Orchard Road & Raffles Hotel", desc: "Premier luxury shopping strip and colonial heritage hospitality." },
      ],
    },
    servicesOffered: [
      "Singapore Changi Airport VIP Meet & Greet",
      "Raffles Place & Marina Bay Financial District Transfers",
      "Sentosa Island Resort Transfers",
      "Full-Day Diplomatic & Corporate As-Directed Chauffeur Hire",
    ],
    popularRoutes: [
      { from: "Changi Airport (SIN)", to: "Marina Bay / CBD", distance: "19 km", time: "20 mins", desc: "Swift transit via East Coast Parkway (ECP)." },
      { from: "Changi Airport (SIN)", to: "Orchard Road", distance: "22 km", time: "25 mins", desc: "Premier shopping and luxury hotel district." },
    ],
    faqs: [
      { q: "Where does my driver meet me at Singapore Changi Airport?", a: "Your driver awaits you in the arrivals hall just after baggage claim and customs clearance, holding a personalized sign." },
    ],
  },
  {
    id: "new-zealand",
    slug: "new-zealand",
    aliases: ["new-zealand", "newzealand"],
    name: "New Zealand",
    state: "Nationwide",
    region: "New Zealand",
    heroTitle: "New Zealand Nationwide Transfers & Transport",
    heroSubtitle: "Nationwide luxury chauffeur service covering Auckland, Wellington, Christchurch, and Queenstown.",
    badge: "Nationwide NZ • All Major Airports",
    cardImage: "/images/locations/auckland.jpg",
    coverImage: "/images/Hughes-International-scaled.png",
    description: "Nationwide private chauffeur services and scenic touring solutions across New Zealand's North and South Islands. One consistent luxury standard across Auckland, Wellington, Christchurch, and Queenstown.",
    keyHubs: "Auckland • Wellington • Christchurch • Queenstown",
    airportsServiced: [
      { name: "Auckland Airport", code: "AKL", transferTime: "30 mins" },
      { name: "Wellington Airport", code: "WLG", transferTime: "15 mins" },
      { name: "Christchurch Airport", code: "CHC", transferTime: "20 mins" },
      { name: "Queenstown Airport", code: "ZQN", transferTime: "12 mins" },
    ],
    discover: {
      heading: "New Zealand Nationwide Chauffeur Services",
      lead: "Experience seamless ground transportation across both North and South Islands with SYD's accredited New Zealand fleet.",
      paragraphs: [
        "Whether coordinating an executive multi-city business roadshow or private luxury holiday touring, our dedicated operations team handles all itinerary logistics.",
      ],
      attractions: [
        { name: "North Island", desc: "Auckland harbour culture and Wellington government center." },
        { name: "South Island", desc: "Christchurch gardens and Queenstown alpine wonderlands." },
      ],
    },
    servicesOffered: [
      "Nationwide New Zealand Airport Transfers",
      "Cross-Island Corporate Account Management",
      "Luxury Ski and Winery Touring",
    ],
    popularRoutes: [
      { from: "Auckland Airport", to: "Auckland CBD", distance: "21 km", time: "30 mins", desc: "City transfer." },
      { from: "Queenstown Airport", to: "Queenstown CBD", distance: "8 km", time: "12 mins", desc: "Alpine transfer." },
    ],
    faqs: [
      { q: "Can I manage Australian and New Zealand bookings through one contact?", a: "Yes, our central 24/7 team manages bookings across both countries seamlessly." },
    ],
  },
  {
    id: "global-network",
    slug: "global-network",
    aliases: ["global-network", "global", "worldwide"],
    name: "Global Network",
    state: "Worldwide",
    region: "International",
    heroTitle: "Worldwide Luxury Chauffeur Network",
    heroSubtitle: "Through our vetted international affiliate network, SYD coordinates prestigious luxury chauffeur transfers in over 500 cities worldwide.",
    badge: "Global • 500+ Cities Worldwide",
    cardImage: "/images/locations/singapore.jpg",
    coverImage: "/images/Hughes-International-scaled.png",
    description: "Worldwide network of vetted luxury chauffeur partners providing exceptional transport in over 500 cities worldwide. Trust SYD for all your international ground transport needs.",
    keyHubs: "London • New York • Tokyo • Paris • Dubai • Hong Kong • Los Angeles",
    airportsServiced: [
      { name: "London Heathrow", code: "LHR", transferTime: "45 mins" },
      { name: "New York JFK", code: "JFK", transferTime: "50 mins" },
      { name: "Tokyo Haneda", code: "HND", transferTime: "30 mins" },
    ],
    discover: {
      heading: "Global Ground Transportation for Multinational Travelers",
      lead: "Wherever your business or leisure takes you across the globe, experience the same hallmark standards of reliability, discretion, and duty of care.",
      paragraphs: [
        "SYD coordinates with accredited tier-one luxury limousine partners in over 500 international cities, allowing multinational corporations and private travelers to book worldwide ground travel through a single trusted Australian portal.",
      ],
      attractions: [
        { name: "Key Financial Centers", desc: "London City, Wall Street, Tokyo Marunouchi, and Dubai DIFC." },
        { name: "Global VIP Support", desc: "Bilingual chauffeurs, security escort options, and global flight tracking." },
      ],
    },
    servicesOffered: [
      "Global Airport Meet & Greet in 500+ Cities",
      "International Roadshows & Financial Summits",
      "Consolidated Corporate Billing & Reporting",
    ],
    popularRoutes: [
      { from: "London Heathrow (LHR)", to: "Central London", distance: "25 km", time: "45 mins", desc: "Mayfair and City of London." },
      { from: "JFK Airport", to: "Manhattan", distance: "28 km", time: "50 mins", desc: "Midtown hotels and offices." },
    ],
    faqs: [
      { q: "How do I book international chauffeur transport outside Australia?", a: "Simply contact our 24/7 reservations team or book via the SYD portal, specifying your international destination, flight number, and vehicle preference." },
    ],
  },
];

export const locationsOverviewFaqs = [
  {
    q: "Where does SYD offer chauffeur services in Australia?",
    a: "SYD operates dedicated offices and fleets across every major Australian capital and regional destination, including Sydney, Melbourne, Brisbane, Gold Coast, Byron Bay, Sunshine Coast, Perth, Adelaide, Cairns, Port Douglas, Canberra, Hobart, Launceston, Newcastle, and Darwin.",
  },
  {
    q: "Does SYD operate internationally?",
    a: "Yes. In addition to Australia, SYD provides direct chauffeur services across New Zealand (Auckland, Wellington, Christchurch, Queenstown) and Singapore (Changi Airport), as well as a vetted global affiliate network servicing over 500 international cities.",
  },
  {
    q: "How does the airport meet-and-greet service work at these locations?",
    a: "Your chauffeur tracks your incoming flight in real time using automated radar flight monitoring. Upon landing, your chauffeur awaits you inside the arrivals terminal holding a personalized digital iPad name board, assists with your luggage, and escorts you directly to the waiting vehicle.",
  },
  {
    q: "Are the prices fixed upfront or metered?",
    a: "All SYD transfers are booked at guaranteed fixed upfront prices. Your rate includes flight monitoring, professional meet-and-greet, toll charges, airport access fees, and generous complimentary waiting time with zero surge pricing.",
  },
  {
    q: "What types of vehicles are available across your network?",
    a: "Our fleet consists of late-model luxury European vehicles including Executive Sedans (Mercedes E-Class, BMW 5 Series), Premium Sedans (Mercedes S-Class, BMW 7 Series), Premium Luxury SUVs (Audi Q7, BMW X5), Mercedes V-Class people movers, luxury minibuses, and touring coaches up to 54 seats.",
  },
  {
    q: "Can I manage multi-city bookings and corporate accounts centrally?",
    a: "Yes. Corporate accounts can book, manage, and consolidate billing across all Australian and international cities via a single dedicated account manager or through our online booking portal and mobile app.",
  },
];

// Helper to look up a location by its URL slug or alias
export function getLocationBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim().replace(/^\/locations\//, "").replace(/\/$/, "");

  const found = locationsList.find((loc) => {
    if (loc.slug.toLowerCase() === normalized) return true;
    if (loc.id.toLowerCase() === normalized) return true;
    if (loc.aliases && loc.aliases.some((a) => a.toLowerCase() === normalized)) return true;
    return false;
  });

  if (found) return found;

  // Partial match fallback
  const partial = locationsList.find((loc) => {
    return (
      loc.slug.toLowerCase().includes(normalized) ||
      normalized.includes(loc.slug.toLowerCase()) ||
      loc.name.toLowerCase().replace(/[^a-z0-9]/g, "") === normalized.replace(/[^a-z0-9]/g, "")
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
    name: titleCaseSlug,
    state: "Australia",
    region: "Australia",
    heroTitle: `${titleCaseSlug} Transfers & Chauffeur Services`,
    heroSubtitle: `Make the most of your time in ${titleCaseSlug}, get down to business or see the sights with premium chauffeur driven transfers from SYD.`,
    badge: `${titleCaseSlug} • Luxury Chauffeur`,
    cardImage: "/images/locations/sydney.jpg",
    coverImage: "/images/airport.jpg",
    description: `Experience dependable, luxurious door-to-door chauffeur transport in ${titleCaseSlug}. Dedicated meet-and-greet, flight tracking, and transparent upfront pricing.`,
    keyHubs: `${titleCaseSlug} Airport • CBD • Key Hotel & Business Districts`,
    airportsServiced: [
      { name: `${titleCaseSlug} Airport`, code: "AU", transferTime: "20 - 30 mins" },
    ],
    discover: {
      heading: `Discover ${titleCaseSlug} in Style`,
      lead: `Enjoy seamless private transportation throughout ${titleCaseSlug} and surrounding regional areas.`,
      paragraphs: [
        `SYD provides accredited, professional chauffeur services across ${titleCaseSlug} for corporate executives, VIP delegations, and leisure travelers.`,
        `Skip the queues and uncertainty of rideshares with fixed-price chauffeur transfers, flight tracking, and pristine European luxury vehicles.`,
      ],
      attractions: [
        { name: `${titleCaseSlug} Central District`, desc: "Premier corporate offices, five-star hotels, and dining precincts." },
        { name: `${titleCaseSlug} Regional Highlights`, desc: "Scenic regional day trips and private touring destinations." },
      ],
    },
    servicesOffered: [
      `${titleCaseSlug} Airport Transfers`,
      `${titleCaseSlug} Corporate Chauffeur Transport`,
      `${titleCaseSlug} Event & Conference Logistics`,
      `${titleCaseSlug} Hourly As-Directed Hire`,
      `${titleCaseSlug} Luxury Private Tours`,
    ],
    popularRoutes: [
      { from: `${titleCaseSlug} Airport`, to: `${titleCaseSlug} CBD`, distance: "15 km", time: "20 - 30 mins", desc: "Direct executive transit." },
      { from: `${titleCaseSlug} CBD`, to: "Surrounding Suburbs", distance: "25 km", time: "30 - 45 mins", desc: "Residential and coastal transfers." },
    ],
    faqs: [
      { q: `Where will my driver meet me in ${titleCaseSlug}?`, a: "Your chauffeur will greet you inside the terminal or at your hotel lobby holding a personalized digital name sign." },
      { q: `What vehicles are available in ${titleCaseSlug}?`, a: "Our fleet includes Executive Sedans, Premium Sedans, Luxury SUVs, and Mercedes People Movers." },
    ],
  };
}

// Helper to return all slugs for static generation
export function getAllLocationSlugs() {
  const slugs = new Set();
  locationsList.forEach((loc) => {
    slugs.add(loc.slug);
    if (loc.aliases) {
      loc.aliases.forEach((a) => slugs.add(a));
    }
  });
  return Array.from(slugs).map((slug) => ({ slug }));
}

