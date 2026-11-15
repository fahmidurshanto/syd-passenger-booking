import { Suspense } from "react";
import ClientAboutView from "./ClientAboutView";
import { getAllAboutSlugs } from "@/utils/aboutUsData";
import { navItems } from "@/utils/navData";

export const instant = false;

export async function generateStaticParams() {
  const fromAbout = getAllAboutSlugs();

  const aboutCategory = navItems.find((item) => item.title === "About Us");
  const fromNav = aboutCategory
    ? aboutCategory.columns.flatMap((col) => col.links).map((link) => {
        const slug = link.href.split("/").pop();
        return { slug };
      })
    : [];

  const combined = [...fromAbout, ...fromNav];
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

async function AboutContent({ params }) {
  const { slug } = await params;
  return <ClientAboutView slug={slug} />;
}

export default function AboutSlugPage({ params }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#152442]" />}>
      <AboutContent params={params} />
    </Suspense>
  );
}

