export const bookingPageData = {
  header: {
    helpText: "Help 24/7",
    phone: "+61 2 9317 9000",
    phoneHref: "tel:+61293179000",
    loginText: "Log in",
    loginHref: "#login",
  },
  steps: [
    { num: 1, label: "Journey", active: true },
    { num: 2, label: "Vehicle", active: false },
    { num: 3, label: "Details", active: false },
  ],
  hero: {
    headline: "Where are we taking you?",
    subtitle:
      "Fixed price, free cancellation up to 4 hours before pick-up, and free waiting time at every pick-up.",
    bgImage: "/hero-bg.jpg",
  },
  benefits: [
    {
      id: "fixed-price",
      icon: "price",
      title: "Fixed price",
      desc: "Shown in full, fees included, before you book.",
    },
    {
      id: "free-waiting",
      icon: "clock",
      title: "Free waiting",
      desc: "15 minutes at homes and hotels, 45 at cruise terminals. At the airport, 30 at domestic and 45 at international terminals, from the moment your plane lands; flights are tracked.",
    },
    {
      id: "free-cancellation",
      icon: "shield",
      title: "Free cancellation",
      desc: "Up to 4 hours before pick-up in Australia and New Zealand, and 12 hours before in Singapore and the United States.",
    },
    {
      id: "support",
      icon: "phone",
      title: "People, 24/7",
      desc: "Call our reservations and live dispatch desk anytime: +61 2 9317 9000.",
    },
  ],
  serviceTypes: [
    { id: "transfer", label: "Transfer", icon: "car" },
    { id: "hourly", label: "By the hour", icon: "clock" },
  ],
  tripTypes: [
    { id: "one-way", label: "One way", icon: "arrow-right" },
    { id: "return", label: "Return", icon: "arrow-back" },
    { id: "multi-trip", label: "Multi-trip", icon: "refresh" },
  ],
  flyingNotice: {
    title: "Flying? Add your booking.",
    desc: "Your e-ticket, a PDF or a photo of it. We'll plan every transfer around your flights.",
    actions: ["Choose a file", "Take a photo", "Paste text"],
  },
  footerSupport: {
    heading: "Support, 24 hours a day",
    contacts: [
      { flag: null, label: "+61 2 9317 9000", href: "tel:+61293179000" },
      { flag: "🇦🇺", label: "1300 615 165", href: "tel:1300615165" },
      { flag: "🇺🇸", label: "(888) 389-1908", href: "tel:8883891908" },
      { flag: "🇳🇿", label: "0800 446 493", href: "tel:0800446493" },
      { flag: null, label: "res@sydairporttransfer.com.au", href: "mailto:res@sydairporttransfer.com.au" },
    ],
    feedbackText: "Send us feedback",
    copyright: "© 2026 SYD Airport Transfer Services Pty Ltd",
    abn: "ABN 52 010 237 108",
    version: "v2026.11.14",
    links: [
      { label: "Privacy policy", href: "#privacy" },
      { label: "Cookie settings", href: "#cookies" },
      { label: "Do Not Sell or Share My Personal Information", href: "#privacy" },
      { label: "Manager Login", href: "#admin" },
    ],
  },
};

