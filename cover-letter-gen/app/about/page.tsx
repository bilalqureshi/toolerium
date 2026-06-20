import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — AI Cover Letter Generator",
  description:
    "Learn about our free AI cover letter generator — the tool that writes professional, ATS-friendly cover letters tailored to any job in seconds.",
  alternates: {
    canonical: "https://cover-letter-gen-rho.vercel.app/about",
  },
  openGraph: {
    title: "About — AI Cover Letter Generator",
    description:
      "The free tool that writes professional, ATS-friendly cover letters tailored to any job in seconds.",
    url: "https://cover-letter-gen-rho.vercel.app/about",
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="bg-white rounded-2xl border p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            About Cover Letter Generator
          </h1>
          <p className="text-gray-600 mb-4">
            Cover Letter Generator is a free AI-powered tool that writes
            tailored, professional cover letters in seconds. Paste your resume
            and the job description, and our AI produces a personalized letter
            that connects your experience to the exact role you are applying for.
          </p>
          <p className="text-gray-600 mb-4">
            We built this tool because writing a good cover letter is genuinely
            hard. It requires understanding both your own experience and the
            specific needs of a role, and then expressing that connection in a
            compelling, natural way. Most job seekers either send a generic
            letter that gets ignored, or spend hours writing one from scratch for
            every application.
          </p>
          <p className="text-gray-600">
            We believe every job seeker deserves access to a professional-quality
            cover letter without spending hours writing one. Our tool generates a
            tailored, ATS-friendly cover letter in under a minute, for any job,
            in any industry.
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex gap-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">
                  Free Cover Letter Generation
                </strong>{" "}
                — Generate a fully tailored cover letter from your resume and
                any job description, at no cost.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Multiple Tone Options</strong>{" "}
                — Choose from Professional, Confident, Friendly, or Enthusiastic
                to match the company culture and role.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">ATS-Friendly Output</strong>{" "}
                — The generated letter naturally incorporates keywords from the
                job description, making it compatible with both ATS screening
                and human reviewers.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">
                  Unlock &amp; Download ($3)
                </strong>{" "}
                — For a one-time fee of $3, unlock the full letter to copy or
                download. No subscription or recurring charges.
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl border p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Our Approach
          </h2>
          <p className="text-gray-600 mb-4">
            We use state-of-the-art AI to understand the semantic relationship
            between your background and the job you're targeting. Unlike basic
            templates, our AI generates a unique letter for each combination of
            resume and job description — one that reads naturally and highlights
            the most relevant parts of your experience.
          </p>
          <p className="text-gray-600">
            We price the full download at $3 — low enough that cost is never a
            barrier for someone in a job search, but enough to keep the service
            running sustainably. The generation and preview are always free.
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-600 mb-2">
            Have a question, feedback, or a feature request? We would love to
            hear from you.
          </p>
          <a
            href="mailto:bqtools92@gmail.com"
            className="text-gray-900 font-semibold underline"
          >
            bqtools92@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
