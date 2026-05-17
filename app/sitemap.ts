import { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = siteConfig.navItems.map((route) => ({
    url: `${siteConfig.url}${route.href}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: route.href === "/" ? 1 : 0.8,
  }));

  return [...routes];
}
