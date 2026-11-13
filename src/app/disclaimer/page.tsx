import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | TextTools",
  description: "Read the disclaimer for TextTools and understand the limits of the service.",
};

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(240,248,255,1)_100%)] dark:bg-[linear-gradient(to_bottom,rgba(20,20,25,1)_0%,rgba(10,10,15,1)_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-[100%] bg-gradient-to-tr from-blue-500/10 via-violet-500/10 to-pink-500/10 blur-[120px] -z-10 opacity-80" />

        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Disclaimer</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            TextTools is provided for convenience and informational purposes. Please review your own work carefully before relying on the results.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2>Purpose and Scope</h2>
            <p>
              The content and utilities provided on TextTools are intended for general informational and productivity purposes. This Disclaimer clarifies the limits of liability, accuracy, and suitability of the information and tools on the Site. It is not a substitute for professional advice in areas such as legal, medical, financial, or technical domains.
            </p>

            <h2>Informational Use Only</h2>
            <p>
              The text processing utilities are designed to assist with common tasks — counting words, converting case, comparing text, and formatting. While we work to provide accurate and reliable tools, the Site does not guarantee that outputs will be suitable for every use case. You should independently verify critical results, especially when content is used in legal documents, medical reports, contracts, or other professional contexts where errors could have significant consequences.
            </p>

            <h2>No Professional Advice</h2>
            <p>
              Nothing on this Site constitutes legal, medical, financial, or professional advice. If you require such advice, consult a qualified professional in the relevant field. Relying on the Site's outputs for specialized decision-making is done at your own risk.
            </p>

            <h2>No Warranty</h2>
            <p>
              The Site and its content are provided "as-is" without warranties of any kind, express or implied. We disclaim all warranties, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Site will be error-free or uninterrupted.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, TextTools and its contributors are not liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your use of (or inability to use) the Site. This includes data loss, business interruption, or any damages resulting from reliance on the Site's outputs.
            </p>

            <h2>Third-Party Content and Links</h2>
            <p>
              The Site may link to external resources or incorporate third-party content for convenience. Links do not imply endorsement and we are not responsible for the content or practices of third-party sites. Use third-party resources at your discretion and in accordance with their terms.
            </p>

            <h2>User Responsibility</h2>
            <p>
              You are responsible for how you use and verify any output from the Site. Before publishing or using processed content in professional or official contexts, review it thoroughly and, where appropriate, consult subject-matter experts. If you choose to share information through the Site that you consider sensitive, understand that while the Site is designed for local processing, no online system is entirely risk-free.
            </p>

            <h2>Changes and Updates</h2>
            <p>
              We may update the tools and content over time. This Disclaimer may be revised without prior notice; the current version is posted on this page. It is your responsibility to review the Disclaimer periodically.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions about this Disclaimer or concerns about liability, please contact us via the Contact page. We will respond to reasonable inquiries and consider feedback to improve our guidance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
