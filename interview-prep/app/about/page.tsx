import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — AI Interview Prep Tool",
  description:
    "Learn about AI Interview Prep — the free tool that generates tailored interview questions and STAR method answers from any job description.",
  alternates: {
    canonical: "https://interview-prep-six-gules.vercel.app/about",
  },
  openGraph: {
    title: "About — AI Interview Prep Tool",
    description:
      "The tool that turns any job description into 15 tailored interview questions with STAR method answers.",
    url: "https://interview-prep-six-gules.vercel.app/about",
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="bg-white rounded-2xl border p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            About AI Interview Prep
          </h1>
          <p className="text-gray-600 mb-4">
            AI Interview Prep generates tailored interview questions and STAR
            method answers from any job description. Paste the posting, tell us
            the role and company, and get the questions most likely to come up —
            with answer templates you can customize before the interview.
          </p>
          <p className="text-gray-600 mb-4">
            Most interview prep is either too generic (reading a list of "top 50
            behavioral questions") or too expensive ($200/hr for a career coach).
            We built this tool to sit in the middle: AI that reads the actual job
            description and generates questions specific to that role, that
            company, and those responsibilities.
          </p>
          <p className="text-gray-600">
            Our goal is to make thorough interview prep accessible to every job
            seeker — not just those who can afford a coach.
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <ul className="space-y-4 text-gray-600">
            {[
              {
                title: "3 Free Sample Questions",
                desc: "Tailored to your job description — no signup, no credit card. See the quality before you pay.",
              },
              {
                title: "15 Full Interview Questions ($19)",
                desc: "A complete prep pack covering behavioral, situational, technical, and motivational questions for the exact role.",
              },
              {
                title: "STAR Method Answers",
                desc: "Each question comes with a Situation, Task, Action, and Result template — ready to customize with your own experience.",
              },
              {
                title: "Follow-Up Question Tips",
                desc: "The 2 most common follow-up questions for each answer, so you're not caught off guard when the interviewer digs deeper.",
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
            We use state-of-the-art AI to read the job description and identify
            what the hiring manager actually cares about — the skills,
            responsibilities, and red flags embedded in the posting. Questions
            are generated from that analysis, not from a template list.
          </p>
          <p className="text-gray-600">
            The pricing is intentional: the sample questions are free so you can
            see the value before committing, and the full pack is a flat $19
            — less than 10 minutes of a human coach. Human interview coaches
            charge $200/hr. We believe preparation shouldn&apos;t be a luxury.
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
            <a
              href="https://linkedin-optimizer-livid.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
            >
              <p className="font-semibold text-gray-900">
                Free LinkedIn Profile Optimizer
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Score your LinkedIn profile and get an AI-optimized headline and
                bio that attracts recruiters.
              </p>
            </a>
            <a
              href="https://pdf-compressor-ecru-two.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
            >
              <p className="font-semibold text-gray-900">Free PDF Compressor</p>
              <p className="text-sm text-gray-500 mt-1">
                Compress your resume PDF before emailing it to recruiters.
              </p>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl border p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-600 mb-2">
            Have a question, feedback, or a feature request? We&apos;d love to hear
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
