import { Metadata } from "next";
import TextCompareClient from "./text-compare-client";
import { CheckCircle2, GitBranch } from "lucide-react";
import Link from "next/link";
import { AffiliateBanner, AffiliateLink } from "@/components/affiliate-banner";
import { GoogleAd } from "@/components/google-ad";

export const metadata: Metadata = {
  title: "Text Compare - Find Differences Between Two Texts",
  description:
    "Free online text comparison tool. Paste two blocks of text side-by-side and instantly highlight every difference at the word or line level.",
  alternates: { canonical: "/tools/text-compare" },
  openGraph: {
    title: "Text Compare Tool — TextTools",
    description: "Compare two texts and highlight the differences instantly.",
    url: "/tools/text-compare",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://text-tools-swart.vercel.app/" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://text-tools-swart.vercel.app/tools" },
    { "@type": "ListItem", position: 3, name: "Text Compare", item: "https://text-tools-swart.vercel.app/tools/text-compare" },
  ],
};

export default function TextComparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <div className="mb-8">
          <nav className="flex text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><div className="flex items-center"><span className="mx-2">/</span><Link href="/tools" className="hover:text-primary">Tools</Link></div></li>
              <li aria-current="page"><div className="flex items-center"><span className="mx-2">/</span><span className="text-foreground font-medium">Text Compare</span></div></li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Text Compare</h1>
          <p className="text-muted-foreground">Paste two texts side-by-side and instantly see every difference.</p>
        </div>

        <div className="mb-8">
          <TextCompareClient />
        </div>

        <AffiliateBanner
          title="Supercharge your coding workflow"
          description="Comparing code? Let AI write it for you with these powerful development tools."
          icon={<GitBranch className="h-6 w-6" />}
          colorScheme="blue"
        >
          <AffiliateLink href="https://github.com/features/copilot" variant="secondary">GitHub Copilot</AffiliateLink>
          <AffiliateLink href="https://cursor.com/" variant="primary">Cursor AI</AffiliateLink>
        </AffiliateBanner>

        <GoogleAd slot="TOOL_PAGE_SLOT_ID" />

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">What Is a Text Compare Tool?</h2>
          <p className="mb-6 leading-relaxed">
            A text compare (or diff) tool lets you place two pieces of text next to each other and highlights every addition, deletion, or change. It is indispensable for developers reviewing code changes, writers tracking document revisions, and students comparing essay drafts.
          </p>
          <h3 className="text-xl font-semibold mb-4">How It Works</h3>
          <ol className="list-decimal pl-6 mb-8 space-y-2">
            <li>Paste the original text in the left panel.</li>
            <li>Paste the modified text in the right panel.</li>
            <li>Differences are highlighted automatically — additions in green, deletions in red.</li>
          </ol>
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="space-y-2 mb-8 list-none pl-0">
            {["Split-screen layout for easy visual comparison.", "Line-by-line diff highlighting.", "Works entirely in your browser — no data leaves your device.", "Responsive design that works on mobile and desktop."].map((f, i) => (
              <li key={i} className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" /><span>{f}</span></li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}
