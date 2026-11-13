import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ToolContent } from "@/lib/tool-content";
import { TOOL_MAP } from "@/lib/tool-data";

interface ToolSeoContentProps {
  content: ToolContent;
}

export function ToolSeoContent({ content }: ToolSeoContentProps) {
  const relatedToolDefs = content.relatedTools
    .map((slug) => TOOL_MAP.get(slug))
    .filter(Boolean);

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none mt-12 space-y-8">
      {/* Introduction */}
      <div>
        <h2 className="text-2xl font-semibold mb-3 tracking-tight">Overview</h2>
        <p className="text-muted-foreground leading-relaxed">{content.introduction}</p>
      </div>

      {/* Features List */}
      {content.features && content.features.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4 tracking-tight">Key Features</h3>
          <ul className="space-y-2.5 list-none pl-0 my-0">
            {content.features.map((feature, i) => (
              <li key={i} className="flex items-start text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2.5 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* How to use / steps */}
      {content.steps && content.steps.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4 tracking-tight">How to Use</h3>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground leading-relaxed my-0">
            {content.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {/* Why Important */}
      {content.whyImportant && (
        <div>
          <h3 className="text-xl font-semibold mb-3 tracking-tight">Why Use This Tool?</h3>
          <p className="text-muted-foreground leading-relaxed">{content.whyImportant}</p>
        </div>
      )}

      {/* FAQs */}
      {content.faqs && content.faqs.length > 0 && (
        <div className="bg-muted/50 p-6 md:p-8 rounded-2xl border border-border mt-8">
          <h3 className="text-xl font-semibold mb-6 tracking-tight">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {content.faqs.map((faq, i) => (
              <div key={i} className="space-y-2">
                <h4 className="font-medium text-foreground text-base">{faq.question}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Tools / Internal Links */}
      {relatedToolDefs.length > 0 && (
        <div className="pt-8 border-t border-border mt-12">
          <h3 className="text-xl font-semibold mb-6 tracking-tight">Related Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedToolDefs.map((t) => t && (
              <Link
                key={t.slug}
                href={t.href}
                className="group p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-200 block"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{t.name}</h4>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
