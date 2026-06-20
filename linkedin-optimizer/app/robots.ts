import { MetadataRoute } from "next";

const SITE_URL = "https://linkedin-profile-optimizer.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/result", "/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
