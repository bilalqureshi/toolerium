import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { allow: "/", userAgent: "*" },
    sitemap: "https://cover-letter-gen-rho.vercel.app/sitemap.xml",
  };
}
// todo
