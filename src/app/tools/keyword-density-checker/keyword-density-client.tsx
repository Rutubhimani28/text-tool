"use client";

import { useState, useMemo } from "react";
import { Copy, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import { Textarea } from "@/components/ui/textarea";

const STOP_WORDS = new Set([
  "the","be","to","of","and","a","in","that","have","i","it","for","not","on","with","he","as","you","do","at",
  "this","but","his","by","from","they","we","say","her","she","or","an","will","my","one","all","would","there",
  "their","what","so","up","out","if","about","who","get","which","go","me","when","make","can","like","time",
  "no","just","him","know","take","people","into","year","your","good","some","could","them","see","other","than",
  "then","now","look","only","come","its","over","think","also","back","after","use","two","how","our","work",
  "first","well","way","even","new","want","because","any","these","give","day","most","us","is","are","was",
  "were","been","has","had","did","does","am",
]);

interface KeywordEntry {
  word: string;
  count: number;
  density: number;
}

export default function KeywordDensityClient() {
  const [text, setText] = useState("");

  const { totalWords, keywords } = useMemo(() => {
    const trimmed = text.trim();
    if (!trimmed) return { totalWords: 0, keywords: [] as KeywordEntry[] };

    const words = trimmed.toLowerCase().replace(/[^a-z0-9\s]/gi, "").split(/\s+/).filter(Boolean);
    const totalWords = words.length;

    const freq: Record<string, number> = {};
    words.forEach((w) => {
      if (!STOP_WORDS.has(w) && w.length > 1) {
        freq[w] = (freq[w] || 0) + 1;
      }
    });

    const keywords: KeywordEntry[] = Object.entries(freq)
      .map(([word, count]) => ({
        word,
        count,
        density: totalWords > 0 ? (count / totalWords) * 100 : 0,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 25);

    return { totalWords, keywords };
  }, [text]);

  return (
    <div className="space-y-6">
      {/* Textarea */}
      <div className="relative group">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your article or blog post here to analyze keyword density..."
          className="min-h-[250px] text-base resize-y p-4 bg-background border-border focus-visible:ring-primary shadow-sm"
        />
        <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button size="sm" variant="secondary" onClick={() => setText("")} disabled={!text}>
            <Trash2 className="h-4 w-4 mr-2" /> Clear
          </Button>
        </div>
      </div>

      {/* Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Total words: <strong className="text-foreground">{totalWords}</strong> · Unique keywords: <strong className="text-foreground">{keywords.length}</strong>
        </p>
        <CopyButton textToCopy={`Total Words: ${totalWords}\n\nKeyword\tCount\tDensity\n${keywords.map(k => `${k.word}\t${k.count}\t${k.density.toFixed(2)}%`).join("\n")}`} />
      </div>

      {/* Table */}
      {keywords.length > 0 && (
        <div className="border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b">
                  <th className="text-left py-3 px-4 font-semibold">#</th>
                  <th className="text-left py-3 px-4 font-semibold">Keyword</th>
                  <th className="text-right py-3 px-4 font-semibold">Count</th>
                  <th className="text-right py-3 px-4 font-semibold">Density</th>
                  <th className="py-3 px-4 font-semibold w-40"></th>
                </tr>
              </thead>
              <tbody>
                {keywords.map((k, i) => (
                  <tr key={k.word} className="border-b last:border-b-0 hover:bg-muted/30 transition-colors">
                    <td className="py-2.5 px-4 text-muted-foreground">{i + 1}</td>
                    <td className="py-2.5 px-4 font-medium">{k.word}</td>
                    <td className="py-2.5 px-4 text-right">{k.count}</td>
                    <td className="py-2.5 px-4 text-right">{k.density.toFixed(2)} %</td>
                    <td className="py-2.5 px-4">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full transition-all"
                          style={{ width: `${Math.min(k.density * 10, 100)}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
