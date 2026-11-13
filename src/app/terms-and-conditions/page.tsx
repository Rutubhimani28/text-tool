import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | TextForge",
  description: "Review the terms of use for TextForge and how you may use our free online text utilities.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(240,248,255,1)_100%)] dark:bg-[linear-gradient(to_bottom,rgba(20,20,25,1)_0%,rgba(10,10,15,1)_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-[100%] bg-gradient-to-tr from-blue-500/10 via-violet-500/10 to-pink-500/10 blur-[120px] -z-10 opacity-80" />

        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Terms & Conditions</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            By using TextForge, you agree to use these utilities responsibly and lawfully.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2>Introduction</h2>
            <p>
              These Terms & Conditions ("Terms") govern your access to and use of TextForge (the "Site"). By using the Site, you agree to comply with these Terms. If you do not agree, please do not use the Site.
            </p>

            <h2>Permitted Use</h2>
            <p>
              TextForge provides browser-based utilities to manipulate and analyze text. You may use the tools for lawful purposes and in accordance with these Terms. You are responsible for ensuring your use complies with applicable laws, regulations, and any third-party terms that apply to content you process using the Site.
            </p>

            <h2>Prohibited Conduct</h2>
            <p>
              You must not use the Site to engage in illegal activities, distribute malware, infringe intellectual property, harass others, or otherwise harm people or systems. You may not attempt to probe, scan, or test the vulnerability of the Site or its infrastructure. We reserve the right to suspend or block access for users who violate these rules.
            </p>

            <h2>Content and Intellectual Property</h2>
            <p>
              The Site, its design, code, and original content are owned or licensed by the site operator. Unless explicitly stated otherwise, all rights are reserved. You are free to use the outputs produced by the tools (for example transformed text) but you should not republish or redistribute proprietary parts of the Site itself without permission.
            </p>

            <h2>User-Provided Content</h2>
            <p>
              You retain ownership of text you paste into the tools. By using the tools, you grant TextForge a limited, non-exclusive license to process that content solely for the purpose of providing the requested functionality. We do not claim ownership over your content.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              The Site is provided "as-is" and "as-available" without warranties of any kind. While we strive for accuracy and reliability, we do not guarantee the Site will meet all your needs, be free of defects, or operate uninterrupted. You use the Site at your own risk.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, TextForge and its operators are not liable for indirect, incidental, consequential, or punitive damages arising from your use of the Site. This includes any loss of data, revenue, or reputational damage. Some jurisdictions do not allow certain limitations of liability, so these exclusions may not apply to you in full.
            </p>

            <h2>Termination</h2>
            <p>
              We may restrict, suspend, or terminate access to the Site at any time, with or without notice, for any reason including suspected abuse or breach of these Terms. Users may discontinue use at any time.
            </p>

            <h2>Third-Party Links and Services</h2>
            <p>
              The Site may contain links to third-party websites or services. These links are provided for convenience only and do not imply endorsement. We are not responsible for the content or practices of linked sites.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless TextForge, its affiliates, and their officers, agents, and employees from any claim or demand arising out of your use of the Site, your violation of these Terms, or infringement of any rights of another party.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms are governed by the laws of the jurisdiction where the site operator is based, excluding conflict-of-law rules. If any provision of these Terms is found invalid, the remaining provisions will remain in effect.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We may update these Terms as our services evolve. We will post changes on this page with an updated effective date. Continued use after changes indicates acceptance of the revised Terms.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about these Terms or to report abuse, please contact us via the Contact page. We aim to respond promptly to legitimate inquiries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
