import { MetadataRoute } from "next";

const SITE_URL = "https://interview-prep-six-gules.vercel.app";

const ROLE_SLUGS = [
  "software-engineer",
  "product-manager",
  "data-scientist",
  "ux-designer",
  "marketing-manager",
  "financial-analyst",
  "project-manager",
  "sales-representative",
  "devops-engineer",
  "frontend-developer",
  "backend-developer",
  "machine-learning-engineer",
  "business-analyst",
  "data-analyst",
  "cybersecurity-analyst",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const rolePages: MetadataRoute.Sitemap = ROLE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/for/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
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
    ...rolePages,
  ];
}
