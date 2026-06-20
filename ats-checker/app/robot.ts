import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { allow: "/", userAgent: "*" },
    sitemap: "https://ats-checker-lake.vercel.app/sitemap.xml", // todo: update this to your actual sitemap URL
  };
}
