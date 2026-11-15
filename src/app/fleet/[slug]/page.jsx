import { Suspense } from "react";
import ClientFleetView from "./ClientFleetView";
import { getAllFleetSlugs } from "@/utils/fleetData";
import { navItems } from "@/utils/navData";

export const instant = false;

export async function generateStaticParams() {
  const fromFleet = getAllFleetSlugs();

  const fleetCategory = navItems.find((item) => item.title === "The Fleet");
  const fromNav = fleetCategory
    ? fleetCategory.columns.flatMap((col) => col.links).map((link) => {
        const slug = link.href.split("/").pop();
        return { slug };
      })
    : [];

  const combined = [...fromFleet, ...fromNav];
  const seen = new Set();
  const unique = [];

  for (const item of combined) {
    if (item.slug && !seen.has(item.slug.toLowerCase())) {
      seen.add(item.slug.toLowerCase());
      unique.push({ slug: item.slug });
    }
  }

  return unique;
}

async function FleetContent({ params }) {
  const { slug } = await params;
  return <ClientFleetView slug={slug} />;
}

export default function FleetPage({ params }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#152442]" />}>
      <FleetContent params={params} />
    </Suspense>
  );
}

