import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/result", "/api/"],
    },
    sitemap: "https://ats-checker-lake.vercel.app/sitemap.xml",
  };
}
