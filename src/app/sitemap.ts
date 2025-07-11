import { MetadataRoute } from "next";
import { builder } from "@builder.io/react";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourwebsite.com";

  // Get all Builder.io pages
  const pages = await builder.getAll("page", {
    options: { noTargeting: true },
    omit: "data.blocks", // Only get metadata, not full content
  });

  // Static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
  ];

  // Dynamic Builder.io routes
  const builderRoutes = pages.map((page) => ({
    url: `${baseUrl}${page.data?.url || "/"}`,
    lastModified: new Date(page.lastUpdated || page.dateCreated || Date.now()),
    changeFrequency: "weekly" as const,
    priority: page.data?.url === "/" ? 1 : 0.8,
  }));

  return [...routes, ...builderRoutes];
}

// Revalidate sitemap every hour
export const revalidate = 3600;
