import { Suspense } from "react";
import ClientCityView from "./ClientCityView";
import { navItems } from "@/utils/navData";

export const instant = false;

export async function generateStaticParams() {
  const airportCategory = navItems.find((item) => item.title === "Airport Transfers");
  const allAirportLinks = airportCategory
    ? airportCategory.columns.flatMap((col) => col.links)
    : [];

  return allAirportLinks.map((link) => {
    const slug = link.href.split("/").pop();
    return { slug };
  });
}

async function CityContent({ params }) {
  const { slug } = await params;
  return <ClientCityView slug={slug} />;
}

export default function AirportTransferCityPage({ params }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#152442]" />}>
      <CityContent params={params} />
    </Suspense>
  );
}
