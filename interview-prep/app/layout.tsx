import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

// TODO: Replace with your actual Vercel URL after first deploy
const SITE_URL = "https://interview-prep-ai.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Free AI Interview Prep Tool — 15 Questions + STAR Answers for Any Role",
  description:
    "Prepare for any job interview with AI-generated questions and STAR method answers tailored to your role and company. Get 3 sample questions free, unlock 15 full Q&A with follow-up tips for $19.",
  keywords: [
    "interview prep",
    "interview questions",
    "STAR method answers",
    "behavioral interview questions",
    "technical interview prep",
    "job interview preparation",
    "AI interview coach",
    "interview questions and answers",
    "software engineer interview questions",
    "product manager interview questions",
    "data scientist interview prep",
    "interview practice",
    "common interview questions",
    "interview tips",
    "interview preparation tool",
  ],
  authors: [{ name: "AI Interview Prep" }],
  creator: "AI Interview Prep",
  publisher: "AI Interview Prep",
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
    title: "Free AI Interview Prep — 15 Questions + STAR Answers",
    description:
      "Stop winging interviews. Paste the job description and get AI-generated questions and STAR method answers tailored to the exact role and company.",
    url: SITE_URL,
    siteName: "AI Interview Prep",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Free AI Interview Prep Tool — Questions + STAR Answers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Interview Prep — 15 Questions + STAR Answers",
    description:
      "Paste the job description, get 15 tailored interview questions with STAR method answers. Free to try, $19 to unlock all.",
    images: ["/og.png"],
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
            Interview Prep AI
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
                  AI Interview Prep
                </p>
                <p>Free AI-powered interview questions and STAR answers.</p>
              </div>
              <div className="flex gap-6 text-sm text-gray-500">
                <a href="/" className="hover:text-gray-800">
                  Home
                </a>
                <a href="/about" className="hover:text-gray-800">
                  About
                </a>
                <a href="/privacy" className="hover:text-gray-800">
                  Privacy
                </a>
                <a href="/terms" className="hover:text-gray-800">
                  Terms
                </a>
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-6">
              © {new Date().getFullYear()} AI Interview Prep · Contact:{" "}
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
