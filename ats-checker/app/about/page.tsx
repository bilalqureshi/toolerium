import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — ATS Resume Checker",
  description:
    "Learn about ATS Resume Checker — the free tool that helps job seekers score their resume against any job description, find missing keywords, and optimize for ATS systems.",
  alternates: {
    canonical: "https://ats-checker-lake.vercel.app/about",
  },
  openGraph: {
    title: "About — ATS Resume Checker",
    description:
      "The free tool that helps job seekers score their resume against any job description and optimize for applicant tracking systems.",
    url: "https://ats-checker-lake.vercel.app/about",
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="bg-white rounded-2xl border p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            About ATS Resume Checker
          </h1>
          <p className="text-gray-600 mb-4">
            ATS Resume Checker is a free tool that helps job seekers understand
            how their resume performs against Applicant Tracking Systems — the
            software that filters most job applications before a human ever reads
            them.
          </p>
          <p className="text-gray-600 mb-4">
            We built this tool after seeing too many qualified candidates get
            filtered out not because they lacked the skills for a role, but
            because their resume was formatted or worded in a way that ATS
            software could not parse correctly. A strong resume on paper can
            score poorly with ATS if it uses the wrong keywords, has
            non-standard formatting, or is missing sections that ATS parsers
            expect.
          </p>
          <p className="text-gray-600">
            Our goal is simple: give every job seeker an honest, specific, and
            actionable ATS compatibility score for free — and offer an affordable
            optimization option for those who want their resume professionally
            rewritten to maximize their chances.
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
                <strong className="text-gray-900">Free ATS Score</strong> —
                Instantly see how your resume scores against a specific job
                description, out of 100.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">
                  Missing Keywords Report
                </strong>{" "}
                — See exactly which keywords from the job description are absent
                from your resume.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">
                  Actionable Suggestions
                </strong>{" "}
                — Get specific recommendations to improve your resume for the
                role you're targeting.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">
                  AI Resume Optimization ($3)
                </strong>{" "}
                — Our AI rewrites your entire resume to incorporate missing
                keywords naturally, optimize section structure, and maximize ATS
                compatibility.
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl border p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Our Approach
          </h2>
          <p className="text-gray-600 mb-4">
            We use state-of-the-art AI to analyze the semantic relationship
            between your resume and the job description. Unlike simple keyword
            counters, our system understands context — it recognizes when a
            skill is implied by your experience even if the exact phrase is not
            present, and flags gaps that genuinely matter for the role.
          </p>
          <p className="text-gray-600">
            We keep the pricing simple: the ATS analysis is always free, and the
            full optimization is a flat one-time $3 with no subscription. We
            believe every job seeker deserves access to tools that can make a
            real difference in their search.
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
