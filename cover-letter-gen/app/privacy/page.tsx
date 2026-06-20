import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Cover Letter Generator",
  description:
    "Privacy policy for Cover Letter Generator. Learn how we handle your resume data and personal information.",
  alternates: {
    canonical: "https://cover-letter-gen-rho.vercel.app/privacy",
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
            This Privacy Policy describes how Cover Letter Generator ("we", "us", or "our")
            collects, uses, and protects information when you use our website and services. By
            using our service, you agree to the collection and use of information in accordance
            with this policy.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
            <p className="text-gray-600 mb-3">
              We collect the minimum information necessary to provide our service:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
              <li>
                <strong>Resume and job description text</strong> — Content you paste into our tool
                is sent to our AI processing service to generate your cover letter. This content
                is processed transiently and is not stored on our servers after your session ends.
              </li>
              <li>
                <strong>Job details</strong> — The job title, company name, and tone preference
                you provide are used solely to customize your cover letter.
              </li>
              <li>
                <strong>Usage data</strong> — We collect anonymized analytics about how visitors
                interact with our site (pages viewed, time on page, general geographic region).
                This data cannot be used to identify you personally.
              </li>
              <li>
                <strong>Payment information</strong> — If you purchase the full cover letter
                unlock, your payment is processed securely by Stripe. We never see or store your
                credit card details.
              </li>
              <li>
                <strong>Browser storage</strong> — We use localStorage to temporarily cache your
                generated cover letter within your browser so you can return to it after payment.
                This data stays on your device and is not transmitted to our servers.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
              <li>To generate a tailored cover letter based on your resume and job description</li>
              <li>To process your payment through our payment provider</li>
              <li>To understand how our service is used so we can improve it</li>
              <li>To comply with applicable legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Data Retention</h2>
            <p className="text-gray-600">
              We do not persistently store your resume text, job description, or generated cover
              letter on our servers. Your data is processed in memory and discarded immediately
              after the cover letter is generated. The generated letter is cached in your own
              browser's localStorage and remains under your control. You can clear this data at
              any time by clearing your browser storage.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Third-Party Services</h2>
            <p className="text-gray-600 mb-3">
              We use the following third-party services to operate our platform:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
              <li>
                <strong>Anthropic (Claude AI)</strong> — Your resume and job description text is
                sent to Anthropic's Claude API to generate your cover letter. Anthropic processes
                the data under their own privacy policy and does not use your data to train their
                models.
              </li>
              <li>
                <strong>Stripe</strong> — Payment processing. Your payment information is handled
                entirely by Stripe under PCI-DSS compliance standards.
              </li>
              <li>
                <strong>Vercel</strong> — Our hosting provider. Vercel may collect standard server
                logs (IP address, user agent) as part of normal web infrastructure operation.
              </li>
              <li>
                <strong>Vercel Analytics</strong> — Anonymized usage analytics to help us
                understand how the site is being used. No personally identifiable information is
                collected through analytics.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Cookies and Tracking</h2>
            <p className="text-gray-600">
              We use minimal cookies and browser storage. Our analytics provider may set cookies
              for the purpose of anonymous usage tracking. We do not use cookies for advertising
              purposes or to build personal profiles. You can disable cookies in your browser
              settings, though this may affect certain site functionality.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Security</h2>
            <p className="text-gray-600">
              All data transmitted between your browser and our servers is encrypted using
              industry-standard TLS/HTTPS. We do not store sensitive personal information, and
              all payment processing is delegated to PCI-compliant third-party providers. While
              no method of transmission over the internet is 100% secure, we implement
              commercially reasonable safeguards to protect your information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Your Rights</h2>
            <p className="text-gray-600 mb-3">
              Depending on your location, you may have certain rights regarding your personal
              data, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
              <li>The right to access the personal data we hold about you</li>
              <li>The right to request correction of inaccurate data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to object to or restrict processing of your data</li>
              <li>The right to data portability</li>
            </ul>
            <p className="text-gray-600 mt-3">
              Because we do not persistently store your resume or personal data, there is
              typically no personal data on our servers to retrieve or delete. To exercise any
              rights or make a data-related inquiry, contact us at bqtools92@gmail.com.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Children's Privacy</h2>
            <p className="text-gray-600">
              Our service is intended for adults who are actively seeking employment. We do not
              knowingly collect personal information from children under the age of 13. If you
              believe a child has provided personal information to us, please contact us and we
              will take steps to delete such information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or for other operational, legal, or regulatory reasons. When we make
              material changes, we will update the "Last updated" date at the top of this page.
              Your continued use of the service after any changes constitutes your acceptance of
              the revised policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy or our data practices, please
              reach out to us:
            </p>
            <p className="text-gray-900 font-semibold mt-2">bqtools92@gmail.com</p>
          </div>
        </div>
      </div>
    </main>
  );
}
