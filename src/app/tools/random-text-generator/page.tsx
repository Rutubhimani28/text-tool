import { Metadata } from "next";
import Link from "next/link";
import ToolClient from "../[slug]/tool-client";
import { TOOL_MAP, toToolClientData } from "@/lib/tool-data";

const randomTextGeneratorTool = TOOL_MAP.get("random-text-generator");

export const metadata: Metadata = randomTextGeneratorTool
  ? {
      title: `${randomTextGeneratorTool.name} — TextForge`,
      description: randomTextGeneratorTool.seoDescription,
      alternates: { canonical: randomTextGeneratorTool.href },
      openGraph: {
        title: `${randomTextGeneratorTool.name} — TextForge`,
        description: randomTextGeneratorTool.seoDescription,
        url: randomTextGeneratorTool.href,
      },
    }
  : {
      title: "Random Text Generator — TextForge",
      description: "Generate random placeholder text for demos and testing.",
    };

const useCases = [
  {
    title: "Mockups and wireframes",
    description: "Fill in page sections with readable placeholder copy so design reviewers can focus on layout, spacing, hierarchy, and visual flow.",
  },
  {
    title: "Prototype reviews",
    description: "Share natural-looking text with clients, teammates, or stakeholders before the final written content is ready.",
  },
  {
    title: "Formatting and testing",
    description: "Test how paragraphs, columns, cards, and typography behave with realistic content rather than repeated filler words.",
  },
];

export default function RandomTextGeneratorPage() {
  const tool = TOOL_MAP.get("random-text-generator");
  if (!tool) return null;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
      <nav className="flex text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li><div className="flex items-center"><span className="mx-2">/</span><Link href="/tools" className="hover:text-primary">Tools</Link></div></li>
          <li aria-current="page"><div className="flex items-center"><span className="mx-2">/</span><span className="text-foreground font-medium">{tool.name}</span></div></li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{tool.name}</h1>
      <p className="text-muted-foreground mb-6">{tool.desc}</p>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        {useCases.map((item) => (
          <div key={item.title} className="rounded-2xl border border-border bg-card p-4">
            <h2 className="text-base font-semibold mb-2">{item.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-8 rounded-2xl border border-border bg-muted/20 p-5">
        <h2 className="text-xl font-semibold mb-3">Why this tool is useful</h2>
        <p className="text-muted-foreground leading-relaxed">
          Designers, developers, and marketing teams often need realistic text early in a project when final copy is still being drafted.
          This generator creates natural-looking placeholder content so you can test layouts, evaluate readability, and review visual flow without waiting for approved copy.
        </p>
      </div>

      <div className="rounded-3xl border border-border bg-card p-6">
        <ToolClient tool={toToolClientData(tool)} />
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-5">
        <h2 className="text-xl font-semibold mb-3">When to use it</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
          <li>Before the final website content is approved.</li>
          <li>During UX reviews, client presentations, and content audits.</li>
          <li>To test typography, paragraph rhythm, and card spacing in a realistic way.</li>
        </ul>
      </div>
    </div>
  );
}
