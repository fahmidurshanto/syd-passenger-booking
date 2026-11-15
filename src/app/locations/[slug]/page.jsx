import { Suspense } from "react";
import ClientLocationView from "./ClientLocationView";
import { getAllLocationSlugs } from "@/utils/locationsData";
import { navItems } from "@/utils/navData";

export const instant = false;

export async function generateStaticParams() {
  const fromLocations = getAllLocationSlugs();

  const locationCategory = navItems.find((item) => item.title === "Locations");
  const fromNav = locationCategory
    ? locationCategory.columns.flatMap((col) => col.links).map((link) => {
        const slug = link.href.split("/").pop();
        return { slug };
      })
    : [];

  const combined = [...fromLocations, ...fromNav];
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

async function LocationContent({ params }) {
  const { slug } = await params;
  return <ClientLocationView slug={slug} />;
}

export default function LocationPage({ params }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#152442]" />}>
      <LocationContent params={params} />
    </Suspense>
  );
}

