import "./globals.css";

export const metadata = {
  title: "Chauffeured Cars | Corporate Transport | Hughes Luxury Cars",
  description:
    "Experience personalised chauffeur driven luxury Hughes Chauffeured Cars. Australia's oldest and finest luxury transport company.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-[#363636] font-sans">
        {children}
      </body>
    </html>
  );
}
