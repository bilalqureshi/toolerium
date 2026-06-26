import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — PDF Compressor",
  description: "Terms of service for PDF Compressor.",
  robots: { index: false, follow: false },
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: June 2026</p>

        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Use of the Tool</h2>
            <p>
              PDF Compressor is provided free of charge for personal and commercial use.
              You may use the tool to compress any PDF files you own or have the right to modify.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">No Warranty</h2>
            <p>
              The tool is provided &quot;as is&quot; without warranty of any kind. We do not guarantee
              specific compression ratios or output quality. Always keep a copy of your original
              file before compressing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Limitation of Liability</h2>
            <p>
              We are not liable for any loss or damage arising from the use of this tool,
              including loss of data. Use at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Contact</h2>
            <p>
              Questions:{" "}
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
