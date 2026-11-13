import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { TOOL_MAP, toToolClientData } from "@/lib/tool-data";
import { ArrowRight } from "lucide-react";
import ToolClient from "./tool-client";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Array.from(TOOL_MAP.keys()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = TOOL_MAP.get(slug);

  if (!tool) {
    return {
      title: "Tool Not Found — TextForge",
      description: "The requested text tool does not exist.",
    };
  }

  return {
    title: `${tool.name} — TextForge`,
    description: tool.seoDescription,
    alternates: { canonical: tool.href },
    openGraph: {
      title: `${tool.name} — TextForge`,
      description: tool.seoDescription,
      url: tool.href,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = TOOL_MAP.get(slug);

  if (!tool) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl text-center">
        <h1 className="text-3xl font-bold mb-4">Tool Not Found</h1>
        <p className="text-muted-foreground mb-6">The tool you are looking for does not exist yet or has been moved.</p>
        <Link href="/tools" className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
          <ArrowRight className="h-4 w-4 ml-2" /> Browse all tools
        </Link>
      </div>
    );
  }

  return (
    <>
      <Script id="tool-jsonld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: tool.name,
        operatingSystem: "All",
        applicationCategory: "UtilitiesApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description: tool.seoDescription,
      })}} />
      <Script id="tool-breadcrumb" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://text-tools-swart.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://text-tools-swart.vercel.app/tools" },
          { "@type": "ListItem", position: 3, name: tool.name, item: `https://text-tools-swart.vercel.app${tool.href}` },
        ],
      })}} />

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        <div className="mb-8">
          <nav className="flex text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li>
                <div className="flex items-center"><span className="mx-2">/</span><Link href="/tools" className="hover:text-primary">Tools</Link></div>
              </li>
              <li aria-current="page">
                <div className="flex items-center"><span className="mx-2">/</span><span className="text-foreground font-medium">{tool.name}</span></div>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{tool.name}</h1>
          <p className="text-muted-foreground">{tool.desc}</p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <ToolClient tool={toToolClientData(tool)} />
        </div>
      </div>
    </>
  );
}
