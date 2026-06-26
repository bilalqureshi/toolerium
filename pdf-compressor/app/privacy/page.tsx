import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PDF Compressor",
  description: "Privacy policy for PDF Compressor.",
  robots: { index: false, follow: false },
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: June 2026</p>

        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Your Files Stay on Your Device</h2>
            <p>
              PDF Compressor processes all files entirely within your browser. Your PDF is never
              uploaded to any server. We have no access to your documents at any point.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Data We Collect</h2>
            <p>
              We collect anonymous usage analytics (page views, general usage patterns) via
              Vercel Analytics. No personally identifiable information is collected. We do not
              use cookies for tracking purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Advertising</h2>
            <p>
              We use Google AdSense to display ads. Google may use cookies to serve ads based
              on your prior visits to this or other websites. You can opt out of personalised
              advertising at{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                google.com/settings/ads
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Contact</h2>
            <p>
              Questions about this policy:{" "}
              <a href="mailto:bqtools92@gmail.com" className="underline">
                bqtools92@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
