import { MetadataRoute } from "next";

const SITE_URL = "https://pdf-compressor-ecru-two.vercel.app";

const USE_CASES = [
  "pdf-for-whatsapp",
  "pdf-for-email",
  "pdf-to-1mb",
  "reduce-pdf-size",
  "large-pdf",
  "pdf-online",
  "pdf-to-200kb",
  "pdf-without-losing-quality",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  const useCaseRoutes: MetadataRoute.Sitemap = USE_CASES.map((useCase) => ({
    url: `${SITE_URL}/compress/${useCase}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...useCaseRoutes];
}
