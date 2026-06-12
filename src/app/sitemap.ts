import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { TOWNS } from "@/lib/towns";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const coreRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL,                                                      lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_URL}/tick-control-long-island`,                        lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/mosquito-and-tick-control-long-island`,           lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/tick-spraying-suffolk-county`,                    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tick-spraying-nassau-county`,                     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/lyme-disease-long-island`,                        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tick-species-long-island`,                        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/tick-season-long-island`,                         lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about-pestify`,                                   lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blog`,                                                              lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${SITE_URL}/blog/when-do-ticks-come-out-on-long-island`,                       lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blog/how-to-reduce-ticks-in-your-yard`,                            lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blog/where-do-ticks-hide-in-long-island-yards`,                    lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blog/tick-control-for-dog-owners-long-island`,                     lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blog/mosquito-and-tick-control-long-island`,                       lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/free-estimate`,                                   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/thank-you`,                                       lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${SITE_URL}/tick-control`,                                    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const townRoutes: MetadataRoute.Sitemap = TOWNS.map((t) => ({
    url: `${SITE_URL}/tick-control/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...coreRoutes, ...townRoutes];
}
