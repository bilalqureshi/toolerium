import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const SITE_URL = "https://pdf-compressor-mbq.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Free PDF Compressor — Reduce PDF Size Online Instantly",
  description:
    "Compress PDF files instantly in your browser. No upload to servers, 100% private. Reduce PDF size for WhatsApp, email, and sharing. Free, no signup required.",
  keywords: [
    "PDF compressor",
    "compress PDF",
    "reduce PDF size",
    "PDF size reducer",
    "compress PDF for WhatsApp",
    "PDF compressor online free",
    "reduce PDF file size",
    "PDF optimizer",
    "shrink PDF",
    "PDF compression tool",
    "compress PDF without losing quality",
    "free PDF compressor",
    "PDF compressor online",
    "make PDF smaller",
    "PDF file size reducer",
  ],
  authors: [{ name: "PDF Compressor" }],
  creator: "PDF Compressor",
  publisher: "PDF Compressor",
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
    title: "Free PDF Compressor — Reduce PDF Size Instantly",
    description:
      "Compress PDF files in your browser. 100% private — your file never leaves your device. Free, no signup required.",
    url: SITE_URL,
    siteName: "PDF Compressor",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Compressor — Reduce PDF Size Instantly",
    description:
      "Compress PDF files in your browser. 100% private — your file never leaves your device.",
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
            PDF Compressor
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
                <p className="font-semibold text-gray-700 mb-1">PDF Compressor</p>
                <p>Free client-side PDF compression. Your files never leave your device.</p>
              </div>
              <div className="flex gap-6 text-sm text-gray-500">
                <a href="/" className="hover:text-gray-800">Home</a>
                <a href="/about" className="hover:text-gray-800">About</a>
                <a href="/privacy" className="hover:text-gray-800">Privacy</a>
                <a href="/terms" className="hover:text-gray-800">Terms</a>
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-6">
              © {new Date().getFullYear()} PDF Compressor · Contact:{" "}
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
