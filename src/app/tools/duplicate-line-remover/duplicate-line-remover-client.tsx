"use client";

import { useState, useEffect } from "react";
import { Copy, Trash2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function DuplicateLineRemoverClient() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [stats, setStats] = useState({ original: 0, new: 0, removed: 0 });
  
  const [options, setOptions] = useState({
    ignoreCase: false,
    sortOutput: false,
  });

  const handleProcess = () => {
    if (!inputText) {
      setOutputText("");
      setStats({ original: 0, new: 0, removed: 0 });
      return;
    }

    const lines = inputText.split("\n");
    let seen = new Set<string>();
    let uniqueLines: string[] = [];

    lines.forEach(line => {
      const compareLine = options.ignoreCase ? line.toLowerCase() : line;
      if (!seen.has(compareLine)) {
        seen.add(compareLine);
        uniqueLines.push(line);
      }
    });

    if (options.sortOutput) {
      uniqueLines.sort((a, b) => {
        if (options.ignoreCase) {
          return a.toLowerCase().localeCompare(b.toLowerCase());
        }
        return a.localeCompare(b);
      });
    }

    setOutputText(uniqueLines.join("\n"));
    setStats({
      original: lines.length,
      new: uniqueLines.length,
      removed: lines.length - uniqueLines.length
    });
  };

  useEffect(() => {
    handleProcess();
  }, [inputText, options]);

  const handleClear = () => {
    setInputText("");
    setOutputText("");
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([outputText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "unique-lines.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-6">
      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Original Lines</div>
          <div className="text-2xl font-bold">{stats.original}</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">New Lines</div>
          <div className="text-2xl font-bold text-primary">{stats.new}</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Removed</div>
          <div className="text-2xl font-bold text-destructive">{stats.removed}</div>
        </div>
      </div>

      {/* Options Panel */}
      <div className="bg-card border rounded-lg p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="ignoreCase" 
            checked={options.ignoreCase}
            onCheckedChange={(checked) => setOptions(prev => ({ ...prev, ignoreCase: checked as boolean }))}
          />
          <Label htmlFor="ignoreCase" className="cursor-pointer">Ignore Case</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="sortOutput" 
            checked={options.sortOutput}
            onCheckedChange={(checked) => setOptions(prev => ({ ...prev, sortOutput: checked as boolean }))}
          />
          <Label htmlFor="sortOutput" className="cursor-pointer">Sort Output (A-Z)</Label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Area */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold">Original List</Label>
            <Button size="sm" variant="ghost" onClick={handleClear} disabled={!inputText} className="text-muted-foreground hover:text-foreground">
              <Trash2 className="h-4 w-4 mr-2" /> Clear
            </Button>
          </div>
          <Textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste your list here (one item per line)..."
            className="min-h-[400px] text-base resize-y p-4 bg-background border-border focus-visible:ring-primary shadow-sm whitespace-pre"
          />
        </div>

        {/* Output Area */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold">Unique List</Label>
            <div className="flex space-x-2">
              <CopyButton textToCopy={outputText} />
            </div>
          </div>
          <Textarea
            value={outputText}
            readOnly
            placeholder="Your unique list will appear here..."
            className="min-h-[400px] text-base resize-y p-4 bg-muted/50 border-border focus-visible:ring-transparent shadow-sm whitespace-pre"
          />
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <Button onClick={handleDownload} disabled={!outputText} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Download Result
        </Button>
      </div>
    </div>
  );
}
