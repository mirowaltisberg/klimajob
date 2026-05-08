import type { MetadataRoute } from "next";
import { getIndexableJobListings } from "@/lib/job-catalog";
import { getLandingPath, TOP_LANDING_PAGES } from "@/lib/landing-pages";
import { buildJobSlug } from "@/lib/job-slug";

export const revalidate = 3600;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://klimajob.ch";

function toAbsolute(path: string): string {
  return `${SITE_URL}${path}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const jobs = await getIndexableJobListings(400);
  const now = new Date();
  const landingPageDate = new Date("2025-06-01");
  const cutoffMs = now.getTime() - 90 * 24 * 60 * 60 * 1000;
  const minDescriptionLength = 250;
  const validJobs = jobs.filter((job) => {
    if (!job.id || !job.title) return false;
    const descriptionLength = (job.fullDescription?.length || job.description?.length || 0);
    const postedMs = job.datePosted ? Date.parse(job.datePosted) : 0;
    return descriptionLength >= minDescriptionLength && postedMs > cutoffMs;
  });

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: toAbsolute("/"),
      lastModified: now,
      changeFrequency: "hourly",
      priority: 1,
    },
    ...TOP_LANDING_PAGES.map((page) => ({
      url: toAbsolute(getLandingPath(page)),
      lastModified: landingPageDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  const jobRoutes: MetadataRoute.Sitemap = validJobs.map((job) => ({
    url: toAbsolute(`/jobs/${buildJobSlug(job)}`),
    lastModified: job.datePosted ? new Date(job.datePosted) : now,
    changeFrequency: "daily",
    priority: 0.7,
  }));

  return [...staticRoutes, ...jobRoutes];
}
