import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — LinkedIn Profile Optimizer",
  description:
    "Privacy policy for LinkedIn Profile Optimizer. Learn how we handle your LinkedIn bio and profile data.",
  alternates: {
    canonical: "https://linkedin-profile-optimizer.vercel.app/privacy",
  },
  robots: { index: false, follow: false },
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl border p-8 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-sm text-gray-400">Last updated: June 2025</p>
          </div>

          <p className="text-gray-600">
            This Privacy Policy describes how LinkedIn Profile Optimizer ("we", "us", or "our")
            collects, uses, and protects information when you use our website and services.
            By using our service, you agree to the terms of this policy.
          </p>

          {[
            {
              title: "1. Information We Collect",
              content: (
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                  <li><strong>Profile text</strong> — The LinkedIn headline and About section you paste are sent to our AI to generate your analysis. This content is processed transiently and is not stored on our servers after your session ends.</li>
                  <li><strong>Usage data</strong> — Anonymized analytics about how visitors interact with our site (pages viewed, time on page, general geographic region). This cannot identify you personally.</li>
                  <li><strong>Payment information</strong> — If you purchase the optimization, payment is processed securely by Lemon Squeezy. We never see or store your card details.</li>
                  <li><strong>Browser storage</strong> — We use localStorage to temporarily cache your analysis results so you can navigate back to them. This data stays on your device.</li>
                </ul>
              ),
            },
            {
              title: "2. How We Use Your Information",
              content: (
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                  <li>To analyze your LinkedIn profile and generate a strength score</li>
                  <li>To identify missing keywords and produce improvement tips</li>
                  <li>To rewrite your headline and About section if you purchase the optimization</li>
                  <li>To process your payment through our payment provider</li>
                  <li>To understand how our service is used so we can improve it</li>
                </ul>
              ),
            },
            {
              title: "3. Data Retention",
              content: (
                <p className="text-gray-600">
                  We do not persistently store your profile text on our servers. Your data
                  is processed in memory to generate results and discarded immediately after.
                  Analysis results are cached in your browser's localStorage and remain under
                  your control. You can clear this data at any time by clearing your browser storage.
                </p>
              ),
            },
            {
              title: "4. Third-Party Services",
              content: (
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                  <li><strong>Anthropic (Claude AI)</strong> — Your profile text is sent to Anthropic's Claude API to generate analysis. Anthropic does not use your data to train their models.</li>
                  <li><strong>Lemon Squeezy</strong> — Payment processing. Your payment information is handled entirely by Lemon Squeezy.</li>
                  <li><strong>Vercel</strong> — Hosting. Vercel may collect standard server logs as part of normal infrastructure operation.</li>
                  <li><strong>Vercel Analytics</strong> — Anonymized usage analytics. No personally identifiable information is collected.</li>
                  <li><strong>Google AdSense</strong> — We may show ads via Google AdSense. Google may use cookies for ad personalization per their privacy policy.</li>
                </ul>
              ),
            },
            {
              title: "5. Cookies and Tracking",
              content: (
                <p className="text-gray-600">
                  We use minimal cookies. Our analytics and advertising providers may set cookies
                  for anonymous usage tracking and ad personalization. You can disable cookies in
                  your browser settings, though this may affect site functionality.
                </p>
              ),
            },
            {
              title: "6. Data Security",
              content: (
                <p className="text-gray-600">
                  All data transmitted between your browser and our servers is encrypted using
                  TLS/HTTPS. We do not store sensitive personal information, and all payment
                  processing is delegated to compliant third-party providers.
                </p>
              ),
            },
            {
              title: "7. Your Rights",
              content: (
                <p className="text-gray-600">
                  Because we do not persistently store your profile data, there is typically no
                  personal data on our servers to retrieve or delete. To exercise any data rights
                  or make an inquiry, contact us at bqtools92@gmail.com.
                </p>
              ),
            },
            {
              title: "8. Children's Privacy",
              content: (
                <p className="text-gray-600">
                  Our service is intended for adults seeking professional opportunities. We do not
                  knowingly collect personal information from children under 13.
                </p>
              ),
            },
            {
              title: "9. Changes to This Policy",
              content: (
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. Changes will be reflected
                  in the "Last updated" date. Your continued use of the service constitutes
                  acceptance of the revised policy.
                </p>
              ),
            },
            {
              title: "10. Contact Us",
              content: (
                <p className="text-gray-900 font-semibold">bqtools92@gmail.com</p>
              ),
            },
          ].map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h2>
              {section.content}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
