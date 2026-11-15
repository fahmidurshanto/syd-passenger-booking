import { Suspense } from "react";
import ClientServiceView from "./ClientServiceView";
import { getAllServiceSlugs } from "@/utils/servicesData";
import { navItems } from "@/utils/navData";

export const instant = false;

export async function generateStaticParams() {
  const fromServices = getAllServiceSlugs();

  const servicesCategory = navItems.find((item) => item.title === "Services");
  const fromNav = servicesCategory
    ? servicesCategory.columns.flatMap((col) => col.links).map((link) => {
        const slug = link.href.split("/").pop();
        return { slug };
      })
    : [];

  const combined = [...fromServices, ...fromNav];
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

async function ServiceContent({ params }) {
  const { slug } = await params;
  return <ClientServiceView slug={slug} />;
}

export default function ServicePage({ params }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#152442]" />}>
      <ServiceContent params={params} />
    </Suspense>
  );
}

