"use client";
import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

type SampleQuestion = {
  question: string;
  type: string;
  why: string;
};

type StarAnswer = {
  situation: string;
  task: string;
  action: string;
  result: string;
};

type FullQuestion = {
  question: string;
  type: string;
  star_answer: StarAnswer;
  follow_ups: string[];
};

type StoredResult = {
  sample_questions: SampleQuestion[];
  role: string;
  company: string;
  jobDescription: string;
};

type GenerateResult = {
  questions: FullQuestion[];
};

const TYPE_COLORS: Record<string, string> = {
  Behavioral: "bg-blue-100 text-blue-700",
  Situational: "bg-purple-100 text-purple-700",
  Technical: "bg-orange-100 text-orange-700",
  Motivational: "bg-green-100 text-green-700",
};

const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
);

function StarCard({ q, index }: { q: FullQuestion; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
      <button
        className="w-full text-left p-6 flex justify-between items-start gap-4 hover:bg-gray-50 transition"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-gray-400">Q{index + 1}</span>
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${TYPE_COLORS[q.type] ?? "bg-gray-100 text-gray-600"}`}
            >
              {q.type}
            </span>
          </div>
          <p className="font-semibold text-gray-900 text-sm leading-snug">{q.question}</p>
        </div>
        <span className="text-gray-400 text-lg mt-0.5 shrink-0">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="border-t px-6 pb-6 pt-4 space-y-4">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">STAR Answer Template</p>
            <p className="text-xs text-gray-400 mb-3">Fill in your own experience — these are starting points, not scripts.</p>
          </div>

          {(["situation", "task", "action", "result"] as const).map((key) => (
            <div key={key} className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs font-bold text-gray-700 uppercase mb-1">
                {key === "situation" ? "S — Situation" : key === "task" ? "T — Task" : key === "action" ? "A — Action" : "R — Result"}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">{q.star_answer[key]}</p>
            </div>
          ))}

          {q.follow_ups?.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4">
              <p className="text-xs font-bold text-yellow-800 mb-2">Likely Follow-Up Questions</p>
              <ul className="space-y-1">
                {q.follow_ups.map((fu, i) => (
                  <li key={i} className="text-sm text-yellow-900 flex gap-2">
                    <span className="shrink-0">→</span>
                    {fu}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ResultContent() {
  const [data, setData] = useState<StoredResult | null>(null);
  const [generated, setGenerated] = useState<GenerateResult | null>(null);
  const [generating, setGenerating] = useState(false);
  const [generateError, setGenerateError] = useState("");
  const [payLoading, setPayLoading] = useState(false);
  const [payError, setPayError] = useState("");
  const hasGenerated = useRef(false);
  const searchParams = useSearchParams();
  const paid = searchParams.get("paid");

  useEffect(() => {
    const stored = localStorage.getItem("ip_result");
    if (!stored) return;

    const parsed: StoredResult = JSON.parse(stored);
    setData(parsed);

    const isPaid = paid === "true" || localStorage.getItem("ip_paid") === "true";

    if (paid === "true") {
      localStorage.setItem("ip_paid", "true");
    }

    if (isPaid && !hasGenerated.current) {
      hasGenerated.current = true;
      generateFull(parsed);
    }
  }, [paid]);

  const generateFull = async (stored: StoredResult) => {
    setGenerating(true);
    setGenerateError("");
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: stored.role,
          company: stored.company,
          jobDescription: stored.jobDescription,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Generation failed.");
      }

      const result: GenerateResult = await res.json();

      if (!result.questions?.length) {
        throw new Error("Incomplete response from AI. Please try again.");
      }

      setGenerated(result);
    } catch (err: unknown) {
      setGenerateError(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    } finally {
      setGenerating(false);
    }
  };

  const handlePay = async () => {
    setPayLoading(true);
    setPayError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          returnUrl: `${window.location.origin}/result?paid=true`,
        }),
      });

      if (!res.ok) throw new Error("Could not create checkout.");

      const { url } = await res.json();
      window.location.href = url;
    } catch {
      setPayError("Could not start checkout. Please try again.");
      setPayLoading(false);
    }
  };

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <Spinner />
        <p className="text-gray-400 text-sm">Loading your results...</p>
        <a href="/" className="text-sm text-gray-400 underline mt-2">
          ← Go back and generate questions
        </a>
      </div>
    );
  }

  const isPaid =
    paid === "true" ||
    (typeof window !== "undefined" && localStorage.getItem("ip_paid") === "true");

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-2xl mx-auto space-y-6">

        {/* Header */}
        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <p className="text-xs text-gray-400 mb-1">Interview Prep for</p>
          <h1 className="text-xl font-bold text-gray-900">{data.role}</h1>
          {data.company && (
            <p className="text-sm text-gray-500 mt-0.5">at {data.company}</p>
          )}
        </div>

        {/* Free Sample Questions */}
        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="font-bold text-gray-900 mb-1">
            3 Sample Interview Questions
          </h2>
          <p className="text-xs text-gray-400 mb-4">
            Tailored to your job description — these are real questions you may face
          </p>
          <div className="space-y-4">
            {data.sample_questions?.map((q, i) => (
              <div key={i} className="border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-gray-400">Q{i + 1}</span>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${TYPE_COLORS[q.type] ?? "bg-gray-100 text-gray-600"}`}
                  >
                    {q.type}
                  </span>
                </div>
                <p className="font-semibold text-gray-900 text-sm mb-2">{q.question}</p>
                <p className="text-xs text-gray-400 italic">{q.why}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Paywall / Generated */}
        {!generated && !generating && !isPaid && (
          <div className="bg-black rounded-2xl p-8 text-center text-white">
            <p className="text-green-400 font-semibold mb-3">
              Your interview prep pack is ready to generate
            </p>
            <p className="text-lg font-bold mb-1">Unlock Your Full Interview Prep Pack</p>
            <p className="text-gray-400 text-sm mb-2">What you unlock for $19:</p>
            <ul className="text-gray-300 text-sm mb-6 space-y-1 text-left max-w-xs mx-auto">
              <li>✓ 15 questions tailored to this exact job description</li>
              <li>✓ Full STAR method answer template for each question</li>
              <li>✓ 2 likely follow-up questions per answer</li>
              <li>✓ Mix of behavioral, technical & situational questions</li>
            </ul>
            <p className="text-gray-500 text-xs mb-4">
              Human interview coaches charge $200/hr. This is $19, one time.
            </p>
            {payError && (
              <p className="text-red-400 text-sm mb-3">{payError}</p>
            )}
            <button
              onClick={handlePay}
              disabled={payLoading}
              className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition disabled:opacity-60 flex items-center justify-center gap-3 mx-auto"
            >
              {payLoading && <Spinner />}
              {payLoading ? "Redirecting to checkout..." : "Unlock Full Interview Pack — $19"}
            </button>
            <p className="text-gray-500 text-xs mt-3">One-time payment · No subscription</p>
          </div>
        )}

        {generating && (
          <div className="bg-white rounded-2xl border p-8 text-center flex flex-col items-center gap-4">
            <svg
              className="animate-spin h-8 w-8 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <div>
              <p className="text-gray-700 font-semibold">Generating your full interview prep pack...</p>
              <p className="text-gray-400 text-sm mt-1">This takes about 20 seconds</p>
            </div>
          </div>
        )}

        {generateError && (
          <div className="bg-white rounded-2xl border p-8 text-center space-y-4">
            <p className="text-red-500">{generateError}</p>
            <button
              onClick={() => {
                const stored = localStorage.getItem("ip_result");
                if (stored) generateFull(JSON.parse(stored));
              }}
              className="bg-black text-white px-6 py-2 rounded-xl text-sm font-semibold hover:bg-gray-800 transition"
            >
              Try Again
            </button>
          </div>
        )}

        {generated && (
          <>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-4 text-center">
              <p className="text-green-800 font-semibold text-sm">
                Your full interview prep pack is ready — {generated.questions.length} questions with STAR answers
              </p>
              <p className="text-green-600 text-xs mt-1">
                Click any question to expand the STAR answer and follow-up questions
              </p>
            </div>

            <div className="space-y-3">
              {generated.questions.map((q, i) => (
                <StarCard key={i} q={q} index={i} />
              ))}
            </div>

            {/* How to use */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="font-semibold text-blue-900 mb-2">How to use these answers</h3>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>Read each STAR answer and identify gaps where your real experience fits</li>
                <li>Write your own version with specific numbers, names, and outcomes</li>
                <li>Practice delivering each answer out loud in under 2 minutes</li>
                <li>Prepare for the follow-up questions — they test depth of your answer</li>
                <li>Review the questions the night before — don&apos;t memorize, just internalize</li>
              </ol>
            </div>
          </>
        )}

        {/* Cross-sell */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 border rounded-2xl p-5 text-center">
            <p className="text-sm font-medium text-gray-700 mb-1">
              Make sure your resume is ATS-ready →
            </p>
            <a
              href="https://ats-checker-lake.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm underline"
            >
              Free ATS Resume Checker
            </a>
          </div>
          <div className="bg-gray-50 border rounded-2xl p-5 text-center">
            <p className="text-sm font-medium text-gray-700 mb-1">
              Write a tailored cover letter for this role →
            </p>
            <a
              href="https://cover-letter-gen-rho.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm underline"
            >
              Free AI Cover Letter Generator
            </a>
          </div>
          <div className="bg-gray-50 border rounded-2xl p-5 text-center">
            <p className="text-sm font-medium text-gray-700 mb-1">
              Optimize your LinkedIn before they look you up →
            </p>
            <a
              href="https://linkedin-optimizer-livid.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm underline"
            >
              Free LinkedIn Profile Optimizer
            </a>
          </div>
        </div>

        <button
          onClick={() => (window.location.href = "/")}
          className="w-full text-center text-sm text-gray-400 hover:text-gray-600 py-2 transition"
        >
          ← Prep for another role
        </button>
      </div>
    </main>
  );
}

export default function Result() {
  return (
    <Suspense>
      <ResultContent />
    </Suspense>
  );
}
