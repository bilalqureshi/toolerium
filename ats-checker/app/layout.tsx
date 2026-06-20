import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://ats-checker-lake.vercel.app"),
  title: "Free ATS Resume Checker — Test & Score Your Resume Online",
  description:
    "Check your ATS resume score free in 10 seconds. See every missing keyword, get expert suggestions, and unlock a fully AI-optimized resume for just $3. No signup required.",
  keywords: [
    "ATS resume checker",
    "ATS resume test",
    "resume ATS score",
    "free ATS checker",
    "applicant tracking system checker",
    "resume keyword checker",
    "optimize resume for ATS",
    "resume score checker",
    "ATS resume scanner",
    "resume keyword analysis",
    "ATS compatibility checker",
    "resume optimizer",
    "resume checker online",
    "ATS friendly resume",
    "ATS resume score checker free",
    "how to pass ATS",
    "resume keyword optimization",
  ],
  authors: [{ name: "ATS Resume Checker" }],
  creator: "ATS Resume Checker",
  publisher: "ATS Resume Checker",
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
    canonical: "https://ats-checker-lake.vercel.app",
  },
  openGraph: {
    title: "Free ATS Resume Checker — Score Your Resume in 10 Seconds",
    description:
      "75% of resumes are rejected by ATS before a human sees them. Check your resume score free, see every missing keyword, and get an AI-optimized version for $3.",
    url: "https://ats-checker-lake.vercel.app",
    siteName: "ATS Resume Checker",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Free ATS Resume Checker — Score Your Resume in 10 Seconds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free ATS Resume Checker — Score Your Resume in 10 Seconds",
    description:
      "75% of resumes are rejected by ATS before a human sees them. Check yours free and see every missing keyword.",
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
      <body>
        <nav className="bg-white border-b px-6 py-3 flex items-center justify-between sticky top-0 z-10">
          <a href="/" className="font-bold text-gray-900 text-lg">
            ATS Resume Checker
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
                <p className="font-semibold text-gray-700 mb-1">ATS Resume Checker</p>
                <p>Free AI-powered resume scoring and optimization tool.</p>
              </div>
              <div className="flex gap-6 text-sm text-gray-500">
                <a href="/" className="hover:text-gray-800">Home</a>
                <a href="/about" className="hover:text-gray-800">About</a>
                <a href="/privacy" className="hover:text-gray-800">Privacy</a>
                <a href="/terms" className="hover:text-gray-800">Terms</a>
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-6">
              © {new Date().getFullYear()} ATS Resume Checker · Contact:{" "}
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
