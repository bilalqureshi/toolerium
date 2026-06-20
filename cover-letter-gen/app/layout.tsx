import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://cover-letter-gen-rho.vercel.app"),
  title: "Free AI Cover Letter Generator — Tailored to Any Job in Seconds",
  description:
    "Generate a professional, ATS-friendly cover letter in seconds. Paste your resume and job description — our AI writes a tailored, keyword-rich cover letter for you. Free to try, $3 to download.",
  keywords: [
    "cover letter generator",
    "AI cover letter generator",
    "free cover letter generator",
    "cover letter writer",
    "cover letter for job application",
    "ATS cover letter",
    "AI cover letter writer",
    "professional cover letter generator",
    "cover letter maker",
    "automatic cover letter",
    "cover letter from resume",
    "tailored cover letter generator",
    "cover letter template generator",
    "job application cover letter",
    "cover letter AI tool",
  ],
  authors: [{ name: "Cover Letter Generator" }],
  creator: "Cover Letter Generator",
  publisher: "Cover Letter Generator",
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
    canonical: "https://cover-letter-gen-rho.vercel.app",
  },
  openGraph: {
    title: "Free AI Cover Letter Generator — Tailored to Any Job in Seconds",
    description:
      "Stop writing cover letters from scratch. Paste your resume and the job description — our AI writes a tailored, ATS-friendly cover letter in seconds. Free preview, $3 to download.",
    url: "https://cover-letter-gen-rho.vercel.app",
    siteName: "Cover Letter Generator",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Free AI Cover Letter Generator — Tailored to Any Job in Seconds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Cover Letter Generator — Tailored to Any Job in Seconds",
    description:
      "Stop writing cover letters from scratch. Paste your resume + job description and get a tailored cover letter in seconds.",
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
            Cover Letter Generator
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
                  Cover Letter Generator
                </p>
                <p>Free AI-powered cover letter writer for any job.</p>
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
              © {new Date().getFullYear()} Cover Letter Generator · Contact:{" "}
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
