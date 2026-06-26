import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Interview Prep",
  description:
    "Privacy policy for AI Interview Prep. Learn how we handle your job description and interview data.",
  alternates: {
    canonical: "https://interview-prep-six-gules.vercel.app/privacy",
  },
  robots: { index: false, follow: false },
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl border p-8 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-400">Last updated: June 2025</p>
          </div>

          <p className="text-gray-600">
            This Privacy Policy describes how AI Interview Prep (&quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;) collects, uses, and protects information when you use our
            website and services. By using our service, you agree to the terms
            of this policy.
          </p>

          {[
            {
              title: "1. Information We Collect",
              body: "We collect the job description text, target role, and company name you enter to generate your interview questions. This content is processed transiently and is not stored on our servers after your session ends. We also collect anonymized usage analytics (pages viewed, time on page) that cannot identify you personally. If you purchase the full prep pack, payment is processed securely by Lemon Squeezy — we never see or store your card details. We use localStorage to cache your results on your device.",
            },
            {
              title: "2. How We Use Your Information",
              body: "We use your job description and role information solely to generate tailored interview questions and STAR answers. We use anonymized analytics to understand how our service is used and to improve it. We process payments through Lemon Squeezy for the paid prep pack.",
            },
            {
              title: "3. Data Retention",
              body: "We do not persistently store your job description or role information on our servers. Your data is processed in memory to generate results and discarded immediately after. Results are cached in your browser's localStorage and remain under your control. You can clear this data at any time by clearing your browser storage.",
            },
            {
              title: "4. Third-Party Services",
              body: "We use Groq to power our AI questions generation. Your job description is sent to Groq for processing. Groq does not use your data to train their models. Lemon Squeezy handles payment processing. Vercel provides hosting. Vercel Analytics provides anonymized usage data. Google AdSense may show ads and use cookies for ad personalization.",
            },
            {
              title: "5. Cookies and Tracking",
              body: "We use minimal cookies. Our analytics and advertising providers may set cookies for anonymous usage tracking and ad personalization. You can disable cookies in your browser settings, though this may affect site functionality.",
            },
            {
              title: "6. Data Security",
              body: "All data transmitted between your browser and our servers is encrypted using TLS/HTTPS. We do not store sensitive personal information, and all payment processing is delegated to compliant third-party providers.",
            },
            {
              title: "7. Your Rights",
              body: "Because we do not persistently store your data, there is typically no personal data on our servers to retrieve or delete. To exercise any data rights or make an inquiry, contact us at bqtools92@gmail.com.",
            },
            {
              title: "8. Children's Privacy",
              body: "Our service is intended for adults in job searches. We do not knowingly collect personal information from children under 13.",
            },
            {
              title: "9. Changes to This Policy",
              body: "We may update this Privacy Policy from time to time. Changes will be reflected in the 'Last updated' date. Your continued use of the service constitutes acceptance of the revised policy.",
            },
            {
              title: "10. Contact Us",
              body: "bqtools92@gmail.com",
            },
          ].map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {section.title}
              </h2>
              <p
                className={`text-gray-600 ${i === 9 ? "font-semibold text-gray-900" : ""}`}
              >
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
