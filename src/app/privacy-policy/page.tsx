import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | TextForge",
  description: "Learn how TextForge handles your data and respects your privacy while you use our free online text utilities.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(240,248,255,1)_100%)] dark:bg-[linear-gradient(to_bottom,rgba(20,20,25,1)_0%,rgba(10,10,15,1)_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-[100%] bg-gradient-to-tr from-blue-500/10 via-violet-500/10 to-pink-500/10 blur-[120px] -z-10 opacity-80" />

        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            At TextForge, your privacy matters. We built this platform to keep your work fast, simple, and private.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2>Overview</h2>
            <p>
              This Privacy Policy explains how TextForge (the "Site", "we", "us" or "our") collects, uses, discloses, and protects information when you visit or use our free browser-based text utilities. Our core design principle is privacy-first: the majority of processing is performed locally in your browser so your text stays on your device unless you choose to send it elsewhere. This policy describes the limited circumstances where we may collect or process identifying or usage information, how we protect that data, and your choices regarding it.
            </p>

            <h2>What Information We Collect</h2>
            <p>
              TextForge is intentionally built to minimize data collection. The primary services on this site perform text operations entirely inside your web browser. We do not require an account, and we do not ask for personal information to use the tools. However, a small subset of non-identifying information may be collected automatically to operate and improve the Site:
            </p>
            <ul>
              <li>Technical metadata such as browser type, operating system, and device characteristics.</li>
              <li>Aggregated usage metrics (features used, pages visited, general traffic patterns) collected via analytics tools we use to maintain and optimize performance.</li>
              <li>Error and performance logs that help identify and fix site issues.</li>
            </ul>

            <h2>Local-First Processing</h2>
            <p>
              Whenever possible, all text manipulation — such as word counting, case conversion, duplicate removal, or diff comparison — is executed client-side in your browser. This architecture ensures that the content you paste or type into our tools remains on your device and is not transmitted to our servers. If you use any feature that explicitly offers export, sharing, or cloud-backed functionality, the site will make clear what is shared and obtain your consent beforehand.
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies minimally when needed to provide basic functionality and remember non-sensitive preferences (for example theme choice). We may also use privacy-friendly analytics to understand how people use the site so we can make improvements. These analytics are configured to collect aggregated, non-identifying data and avoid capturing text content. You can control cookie preferences through your browser settings; blocking certain cookies may affect some features.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              To keep TextForge available and performant, we may rely on reputable third-party providers for hosting, CDN delivery, analytics, and optional advertising integrations. We evaluate vendors for privacy and security and limit the data shared to what is strictly necessary for the service they provide. We do not intentionally share your pasted text or processed outputs with these providers unless you explicitly use a feature that shares data with them.
            </p>

            <h2>Security</h2>
            <p>
              We follow industry-standard practices to help protect the information we hold. This includes HTTPS for all connections, secure hosting, and regular dependency updates. While we strive to maintain strong safeguards, no system can be guaranteed 100% secure — please avoid pasting highly sensitive personal data if you are concerned about exposure.
            </p>

            <h2>Data Retention</h2>
            <p>
              Because most operations occur locally, the Site typically does not retain your text. We retain logs and aggregated analytics for a limited period to diagnose issues and analyze trends. Personal data that is collected for support or legal reasons (for example if you contact us and provide your email) will be retained only as long as necessary to respond to the inquiry and for legal compliance.
            </p>

            <h2>Children</h2>
            <p>
              TextForge is not directed at children under 13. We do not knowingly collect personal information from children. If we become aware that a child under the applicable age has provided personal data, we will take steps to delete it.
            </p>

            <h2>Your Rights and Choices</h2>
            <p>
              Depending on your jurisdiction, you may have rights regarding the personal data we hold about you, such as the right to access, correct, or delete that data. For requests related to analytics or support records, contact us via the Contact page and we will respond in accordance with applicable law. You can also opt out of analytics tracking by using browser privacy controls or ad-blocking extensions.
            </p>

            <h2>International Transfers</h2>
            <p>
              Our infrastructure may involve providers located in other countries. Where personal data is transferred across borders, we take steps to ensure adequate protections are in place in accordance with applicable law.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may revise this Privacy Policy occasionally to reflect changes in our services or the law. Material changes will be posted on this page with an updated effective date. Continued use of the Site after changes constitutes acceptance of the revised policy.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions or requests concerning this Privacy Policy, please reach out through our Contact page. We will respond to reasonable requests to exercise your privacy rights.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
