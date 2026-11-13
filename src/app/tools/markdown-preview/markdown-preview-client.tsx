"use client";

import { useState, useMemo } from "react";
import { Copy, Trash2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CopyButton } from "@/components/copy-button";

/* ────────────────────────────────────────────
   Tiny Markdown → HTML converter (no deps)
   Supports: headings, bold, italic, code blocks,
   inline code, links, images, lists, blockquotes,
   horizontal rules, paragraphs.
   ──────────────────────────────────────────── */
function markdownToHtml(md: string): string {
  let html = md;

  // Code blocks (``` ... ```)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_m, _lang, code) => {
    return `<pre><code>${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`;
  });

  // Headings
  html = html.replace(/^######\s(.+)$/gm, "<h6>$1</h6>");
  html = html.replace(/^#####\s(.+)$/gm, "<h5>$1</h5>");
  html = html.replace(/^####\s(.+)$/gm, "<h4>$1</h4>");
  html = html.replace(/^###\s(.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^##\s(.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^#\s(.+)$/gm, "<h1>$1</h1>");

  // Horizontal rules
  html = html.replace(/^---$/gm, "<hr>");

  // Bold + italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Blockquotes
  html = html.replace(/^>\s(.+)$/gm, "<blockquote>$1</blockquote>");

  // Unordered lists
  html = html.replace(/^\s*[-*]\s(.+)$/gm, "<li>$1</li>");
  html = html.replace(/((<li>.*<\/li>\n?)+)/g, "<ul>$1</ul>");

  // Paragraphs — wrap remaining bare lines
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("<ol") ||
        trimmed.startsWith("<pre") ||
        trimmed.startsWith("<blockquote") ||
        trimmed.startsWith("<hr")
      ) {
        return trimmed;
      }
      return `<p>${trimmed.replace(/\n/g, "<br>")}</p>`;
    })
    .join("\n");

  return html;
}

const DEFAULT_MD = `# Welcome to Markdown Preview

This is a **live** Markdown editor built into TextTools.

## Features

- **Bold** and *italic* text
- [Links](https://text-tools-swart.vercel.app)
- Inline \`code\` and code blocks
- Lists, headings, blockquotes

> "The best way to predict the future is to invent it." — Alan Kay

---

### Code Example

\`\`\`js
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

Enjoy writing! ✨
`;

export default function MarkdownPreviewClient() {
  const [markdown, setMarkdown] = useState(DEFAULT_MD);
  const html = useMemo(() => markdownToHtml(markdown), [markdown]);

  const handleDownloadHtml = () => {
    const fullHtml = `<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Markdown Export</title></head>\n<body>\n${html}\n</body>\n</html>`;
    const element = document.createElement("a");
    const file = new Blob([fullHtml], { type: "text/html" });
    element.href = URL.createObjectURL(file);
    element.download = "markdown-export.html";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-6">
      {/* Action Bar */}
      <div className="flex flex-wrap items-center gap-2 justify-end">
        <CopyButton textToCopy={html} size="sm" variant="secondary" />
        <Button size="sm" variant="outline" onClick={handleDownloadHtml} disabled={!markdown}>
          <Download className="h-4 w-4 mr-2" /> Download HTML
        </Button>
        <Button size="sm" variant="ghost" onClick={() => setMarkdown("")} disabled={!markdown}>
          <Trash2 className="h-4 w-4 mr-2" /> Clear
        </Button>
      </div>

      {/* Editor + Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[500px]">
        <div className="space-y-2">
          <Label className="text-base font-semibold">Markdown Editor</Label>
          <Textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Write your Markdown here..."
            className="min-h-[500px] text-sm resize-y p-4 bg-background border-border focus-visible:ring-primary shadow-sm font-mono"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-base font-semibold">Preview</Label>
          <div
            className="min-h-[500px] p-5 border rounded-lg bg-card overflow-auto prose prose-sm dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
}
