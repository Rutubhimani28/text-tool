"use client";

import { useState, useMemo } from "react";
import { Copy, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function diffLines(a: string[], b: string[]) {
  const result: { type: "same" | "added" | "removed"; text: string }[] = [];
  const maxLen = Math.max(a.length, b.length);
  for (let i = 0; i < maxLen; i++) {
    if (i >= a.length) {
      result.push({ type: "added", text: b[i] });
    } else if (i >= b.length) {
      result.push({ type: "removed", text: a[i] });
    } else if (a[i] === b[i]) {
      result.push({ type: "same", text: a[i] });
    } else {
      result.push({ type: "removed", text: a[i] });
      result.push({ type: "added", text: b[i] });
    }
  }
  return result;
}

export default function TextCompareClient() {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");

  const diff = useMemo(() => {
    if (!leftText && !rightText) return [];
    return diffLines(leftText.split("\n"), rightText.split("\n"));
  }, [leftText, rightText]);

  const stats = useMemo(() => {
    let added = 0, removed = 0, same = 0;
    diff.forEach((d) => {
      if (d.type === "added") added++;
      else if (d.type === "removed") removed++;
      else same++;
    });
    return { added, removed, same };
  }, [diff]);

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Unchanged</div>
          <div className="text-2xl font-bold">{stats.same}</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Added</div>
          <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{stats.added}</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Removed</div>
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">{stats.removed}</div>
        </div>
      </div>

      {/* Text Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold">Original Text</Label>
            <Button size="sm" variant="ghost" onClick={() => setLeftText("")} disabled={!leftText}>
              <Trash2 className="h-4 w-4 mr-2" /> Clear
            </Button>
          </div>
          <Textarea
            value={leftText}
            onChange={(e) => setLeftText(e.target.value)}
            placeholder="Paste the original text here..."
            className="min-h-[300px] text-sm resize-y p-4 bg-background border-border focus-visible:ring-primary shadow-sm font-mono"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold">Modified Text</Label>
            <Button size="sm" variant="ghost" onClick={() => setRightText("")} disabled={!rightText}>
              <Trash2 className="h-4 w-4 mr-2" /> Clear
            </Button>
          </div>
          <Textarea
            value={rightText}
            onChange={(e) => setRightText(e.target.value)}
            placeholder="Paste the modified text here..."
            className="min-h-[300px] text-sm resize-y p-4 bg-background border-border focus-visible:ring-primary shadow-sm font-mono"
          />
        </div>
      </div>

      {/* Diff Output */}
      {diff.length > 0 && (
        <div className="space-y-2">
          <Label className="text-base font-semibold">Differences</Label>
          <div className="border rounded-lg bg-card overflow-hidden">
            <div className="max-h-[500px] overflow-y-auto p-4 font-mono text-sm space-y-0.5">
              {diff.map((d, i) => (
                <div
                  key={i}
                  className={`px-3 py-1 rounded-sm whitespace-pre-wrap break-all ${
                    d.type === "added"
                      ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border-l-2 border-emerald-500"
                      : d.type === "removed"
                      ? "bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300 border-l-2 border-red-500"
                      : "text-muted-foreground"
                  }`}
                >
                  <span className="mr-3 select-none font-semibold">
                    {d.type === "added" ? "+" : d.type === "removed" ? "−" : " "}
                  </span>
                  {d.text || " "}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
