import { Metadata } from "next";
import Script from "next/script";
import MarkdownPreviewClient from "./markdown-preview-client";
import { CheckCircle2, FileCode } from "lucide-react";
import Link from "next/link";
import { AffiliateBanner, AffiliateLink } from "@/components/affiliate-banner";

export const metadata: Metadata = {
  title: "Markdown Preview - Live Markdown Editor & HTML Exporter",
  description:
    "Write Markdown and preview the rendered HTML in real-time. Copy or download the generated HTML with a single click.",
  alternates: { canonical: "/tools/markdown-preview" },
  openGraph: {
    title: "Markdown Preview — TextForge",
    description: "Write Markdown and preview HTML in real-time.",
    url: "/tools/markdown-preview",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://text-tools-swart.vercel.app/" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://text-tools-swart.vercel.app/tools" },
    { "@type": "ListItem", position: 3, name: "Markdown Preview", item: "https://text-tools-swart.vercel.app/tools/markdown-preview" },
  ],
};

export default function MarkdownPreviewPage() {
  return (
    <>
      <Script id="markdownpreview-breadcrumb" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <div className="mb-8">
          <nav className="flex text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><div className="flex items-center"><span className="mx-2">/</span><Link href="/tools" className="hover:text-primary">Tools</Link></div></li>
              <li aria-current="page"><div className="flex items-center"><span className="mx-2">/</span><span className="text-foreground font-medium">Markdown Preview</span></div></li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Markdown Preview</h1>
          <p className="text-muted-foreground">Write Markdown on the left, see the rendered preview on the right — in real-time.</p>
        </div>

        <div className="mb-8"><MarkdownPreviewClient /></div>

        <AffiliateBanner
          title="Write Markdown with AI"
          description="Preview markdown here, and generate it effortlessly using top AI assistants."
          icon={<FileCode className="h-6 w-6" />}
          colorScheme="orange"
        >
          <AffiliateLink href="https://cursor.com/" variant="primary">Cursor AI</AffiliateLink>
          <AffiliateLink href="https://github.com/features/copilot" variant="secondary">GitHub Copilot</AffiliateLink>
        </AffiliateBanner>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">What Is Markdown?</h2>
          <p className="mb-6 leading-relaxed">
            Markdown is a lightweight markup language that lets you add formatting to plain text. It's used everywhere — from GitHub READMEs and technical documentation to blogs and note-taking apps like Notion and Obsidian. Our Markdown Preview tool gives you a live, side-by-side editor so you can see exactly how your content will look once rendered.
          </p>
          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <ul className="space-y-2 mb-8 list-none pl-0">
            {[
              "Live preview that updates as you type.",
              "Copy the generated HTML with one click.",
              "Download the HTML as a file.",
              "Supports headings, bold, italic, lists, code blocks, links, and images.",
            ].map((f, i) => (
              <li key={i} className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" /><span>{f}</span></li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}
