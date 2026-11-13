import { Metadata } from "next";
import Link from "next/link";
import ToolClient from "../[slug]/tool-client";
import { TOOL_MAP, toToolClientData } from "@/lib/tool-data";

const speakingTimeCalculatorTool = TOOL_MAP.get("speaking-time-calculator");

export const metadata: Metadata = speakingTimeCalculatorTool
  ? {
      title: `${speakingTimeCalculatorTool.name} — TextForge`,
      description: speakingTimeCalculatorTool.seoDescription,
      alternates: { canonical: speakingTimeCalculatorTool.href },
      openGraph: {
        title: `${speakingTimeCalculatorTool.name} — TextForge`,
        description: speakingTimeCalculatorTool.seoDescription,
        url: speakingTimeCalculatorTool.href,
      },
    }
  : {
      title: "Speaking Time Calculator — TextForge",
      description: "Estimate how long your text will take to speak aloud.",
    };

export default function SpeakingTimeCalculatorPage() {
  const tool = TOOL_MAP.get("speaking-time-calculator");
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

      <div className="rounded-3xl border border-border bg-card p-6">
        <ToolClient tool={toToolClientData(tool)} />
      </div>
    </div>
  );
}
