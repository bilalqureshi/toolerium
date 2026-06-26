import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — PDF Compressor",
  description:
    "Learn about our free PDF compression tool. 100% client-side, private, and free — no uploads, no signup.",
  robots: { index: true, follow: true },
};

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About PDF Compressor</h1>
        <p className="text-gray-600 mb-6">
          PDF Compressor is a free, browser-based tool that reduces PDF file sizes without
          uploading your documents anywhere. Everything runs locally on your device — your
          files are never sent to a server.
        </p>
        <p className="text-gray-600 mb-6">
          Built for people who need to share PDFs over WhatsApp, email, or cloud storage
          with tight size limits. No account, no payment, no limits.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mb-3 mt-10">How it works</h2>
        <p className="text-gray-600 mb-4">
          The tool renders each PDF page to a canvas in your browser, compresses the
          output as a high-quality JPEG image, and assembles a new PDF from those images.
          This achieves significant file size reduction while preserving the visual layout.
        </p>
        <p className="text-gray-600 mb-6">
          Because the output PDF is image-based, text may not be directly selectable.
          Use the Best Quality setting if you need maximum text fidelity.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mb-3 mt-10">Other free tools</h2>
        <div className="space-y-3">
          <a
            href="https://ats-checker-lake.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border rounded-xl p-4 hover:border-gray-400 transition"
          >
            <p className="font-semibold text-gray-900">Free ATS Resume Checker</p>
            <p className="text-sm text-gray-500 mt-1">
              Check if your resume passes applicant tracking systems. Get a score, missing keywords,
              and AI-powered suggestions.
            </p>
          </a>
          <a
            href="https://cover-letter-gen-rho.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border rounded-xl p-4 hover:border-gray-400 transition"
          >
            <p className="font-semibold text-gray-900">AI Cover Letter Generator</p>
            <p className="text-sm text-gray-500 mt-1">
              Generate a tailored cover letter for any job in seconds using AI.
            </p>
          </a>
          <a
            href="https://linkedin-optimizer-livid.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border rounded-xl p-4 hover:border-gray-400 transition"
          >
            <p className="font-semibold text-gray-900">LinkedIn Profile Optimizer</p>
            <p className="text-sm text-gray-500 mt-1">
              Get your LinkedIn headline, about section, and skills optimized by AI.
            </p>
          </a>
        </div>

        <div className="mt-10 text-sm text-gray-400">
          Contact:{" "}
          <a href="mailto:bqtools92@gmail.com" className="underline">
            bqtools92@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
