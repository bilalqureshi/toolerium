import { MetadataRoute } from "next";

const ROLES = [
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
  const base = "https://ats-checker-lake.vercel.app";
  const rolePages: MetadataRoute.Sitemap = ROLES.map((role) => ({
    url: `${base}/for/${role}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ...rolePages,
  ];
}
