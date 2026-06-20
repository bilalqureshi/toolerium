import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

// TODO: Replace with your actual Vercel URL after first deploy
const SITE_URL = "https://linkedin-profile-optimizer.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Free LinkedIn Profile Optimizer — AI-Powered Bio & Headline Generator",
  description:
    "Optimize your LinkedIn bio, headline, and About section with AI. Get a profile strength score, missing keywords, and a fully rewritten profile that attracts recruiters. Free to try, $5 to unlock.",
  keywords: [
    "LinkedIn profile optimizer",
    "LinkedIn bio optimizer",
    "LinkedIn headline generator",
    "LinkedIn about section writer",
    "LinkedIn profile checker",
    "LinkedIn profile score",
    "LinkedIn profile tips",
    "optimize LinkedIn profile for recruiters",
    "AI LinkedIn profile writer",
    "LinkedIn summary generator",
    "LinkedIn profile review",
    "LinkedIn keywords",
    "LinkedIn profile improvement",
    "professional LinkedIn bio",
    "LinkedIn profile makeover",
  ],
  authors: [{ name: "LinkedIn Profile Optimizer" }],
  creator: "LinkedIn Profile Optimizer",
  publisher: "LinkedIn Profile Optimizer",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Free LinkedIn Profile Optimizer — AI Bio & Headline Generator",
    description:
      "Stop getting ignored by recruiters. Get your LinkedIn profile strength score, see exactly what's missing, and unlock a fully AI-optimized bio and headline for $5.",
    url: SITE_URL,
    siteName: "LinkedIn Profile Optimizer",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Free LinkedIn Profile Optimizer — AI Bio & Headline Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free LinkedIn Profile Optimizer — AI Bio & Headline Generator",
    description:
      "Get your LinkedIn profile score free, see what recruiters are missing, and unlock an AI-optimized bio and headline for $5.",
    images: ["/og.png"],
  },
  verification: {
    google: "WFQ4jaDMvpX8-UWvVp1zK0g7CF9oU1UYid8iz6L7rmw",
  },
  other: {
    "google-adsense-account": "ca-pub-4727099105535137",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4727099105535137"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <nav className="bg-white border-b px-6 py-3 flex items-center justify-between sticky top-0 z-10">
          <a href="/" className="font-bold text-gray-900 text-lg">
            LinkedIn Optimizer
          </a>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="/" className="hover:text-gray-900">
              Home
            </a>
            <a href="/about" className="hover:text-gray-900">
              About
            </a>
          </div>
        </nav>
        {children}
        <Analytics />
        <footer className="mt-8 border-t pt-8 pb-8 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500">
                <p className="font-semibold text-gray-700 mb-1">
                  LinkedIn Profile Optimizer
                </p>
                <p>Free AI-powered LinkedIn bio and headline optimizer.</p>
              </div>
              <div className="flex gap-6 text-sm text-gray-500">
                <a href="/" className="hover:text-gray-800">Home</a>
                <a href="/about" className="hover:text-gray-800">About</a>
                <a href="/privacy" className="hover:text-gray-800">Privacy</a>
                <a href="/terms" className="hover:text-gray-800">Terms</a>
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-6">
              © {new Date().getFullYear()} LinkedIn Profile Optimizer · Contact:{" "}
              <a href="mailto:bqtools92@gmail.com" className="underline">
                bqtools92@gmail.com
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
