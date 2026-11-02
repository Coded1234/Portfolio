import type { MetadataRoute } from "next";
import { sitePages, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePages.map(({ path }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
