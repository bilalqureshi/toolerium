import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — LinkedIn Profile Optimizer",
  description:
    "Learn about LinkedIn Profile Optimizer — the free AI tool that helps professionals score their LinkedIn bio and headline, find missing recruiter keywords, and get a fully optimized profile.",
  alternates: {
    canonical: "https://linkedin-optimizer-livid.vercel.app/about",
  },
  openGraph: {
    title: "About — LinkedIn Profile Optimizer",
    description:
      "The free tool that helps professionals score their LinkedIn profile, find missing keywords, and get an AI-optimized bio and headline.",
    url: "https://linkedin-optimizer-livid.vercel.app/about",
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="bg-white rounded-2xl border p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            About LinkedIn Profile Optimizer
          </h1>
          <p className="text-gray-600 mb-4">
            LinkedIn Profile Optimizer is a free tool that helps professionals
            understand why their LinkedIn profile isn't getting found by
            recruiters — and gives them an AI-powered rewrite to fix it.
          </p>
          <p className="text-gray-600 mb-4">
            Most LinkedIn profiles are invisible in recruiter searches not
            because the person lacks the right experience, but because their
            headline and About section are missing the exact keywords recruiters
            type into LinkedIn's search bar. A strong career on paper can
            produce near-zero recruiter inbound if the profile isn't optimized
            for LinkedIn's algorithm.
          </p>
          <p className="text-gray-600">
            Our goal is simple: give every professional an honest, specific
            profile strength score for free — and offer an affordable AI rewrite
            for those who want their headline and bio professionally optimized
            to attract the right opportunities.
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <ul className="space-y-4 text-gray-600">
            {[
              {
                title: "Free Profile Strength Score",
                desc: "Instantly see how your LinkedIn profile scores for your target role, out of 100.",
              },
              {
                title: "Missing Keywords Report",
                desc: "See exactly which recruiter search terms are absent from your headline and About section.",
              },
              {
                title: "3 Specific Improvement Tips",
                desc: "Actionable, role-specific suggestions — not generic LinkedIn advice.",
              },
              {
                title: "AI Profile Optimization ($5)",
                desc: "A fully rewritten headline (max 220 chars), optimized About section, and 8–12 recommended skills — all tailored to your target role.",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <div>
                  <strong className="text-gray-900">{item.title}</strong> —{" "}
                  {item.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl border p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Our Approach</h2>
          <p className="text-gray-600 mb-4">
            We use state-of-the-art AI to analyze the semantic relationship
            between your current LinkedIn profile and the role you're targeting.
            Unlike keyword counters, our system understands context — it
            identifies which missing terms would have the most impact on
            LinkedIn's search ranking for your specific role.
          </p>
          <p className="text-gray-600">
            We keep the pricing simple: the profile analysis is always free, and
            the full AI optimization is a flat one-time $5 with no subscription.
            We believe every professional deserves access to tools that can
            meaningfully improve their career opportunities.
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Also Try These Free Tools
          </h2>
          <div className="space-y-3">
            <a
              href="https://ats-checker-lake.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
            >
              <p className="font-semibold text-gray-900">
                Free ATS Resume Checker
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Score your resume against any job description and see every
                missing keyword.
              </p>
            </a>
            <a
              href="https://cover-letter-gen-rho.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
            >
              <p className="font-semibold text-gray-900">
                Free AI Cover Letter Generator
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Generate a tailored, ATS-friendly cover letter for any job in
                seconds.
              </p>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl border p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-600 mb-2">
            Have a question, feedback, or a feature request? We'd love to hear
            from you.
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
