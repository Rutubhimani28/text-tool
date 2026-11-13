"use client";

import { useState } from "react";
import { Copy, Trash2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function CharacterCounterClient() {
  const [text, setText] = useState("");
  const [maxLength, setMaxLength] = useState<number | "">("");

  const characters = text.length;
  const charactersWithoutSpaces = text.replace(/\s+/g, "").length;
  const isOverLimit = maxLength !== "" && characters > Number(maxLength);
  const remaining = maxLength !== "" ? Number(maxLength) - characters : null;

  const handleClear = () => {
    setText("");
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "character-count-result.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-6">
      {/* Top Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4 md:p-6 text-center flex flex-col items-center justify-center h-full">
            <span className={`text-3xl md:text-4xl font-bold mb-1 ${isOverLimit ? 'text-destructive' : 'text-primary'}`}>
              {characters}
            </span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Characters</span>
          </CardContent>
        </Card>
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4 md:p-6 text-center flex flex-col items-center justify-center h-full">
            <span className="text-3xl md:text-4xl font-bold text-primary mb-1">{charactersWithoutSpaces}</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Without Spaces</span>
          </CardContent>
        </Card>
        <Card className="bg-primary/5 border-primary/20 col-span-2 md:col-span-1">
          <CardContent className="p-4 md:p-6 text-center flex flex-col items-center justify-center h-full">
            <span className={`text-3xl md:text-4xl font-bold mb-1 ${remaining !== null && remaining < 0 ? 'text-destructive' : 'text-primary'}`}>
              {remaining !== null ? remaining : "∞"}
            </span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Remaining</span>
          </CardContent>
        </Card>
      </div>

      {/* Length Limit Input */}
      <div className="flex items-center space-x-4 p-4 border rounded-lg bg-card">
        <Label htmlFor="maxLength" className="font-medium whitespace-nowrap">Max Length Limit:</Label>
        <input
          id="maxLength"
          type="number"
          min="0"
          value={maxLength}
          onChange={(e) => setMaxLength(e.target.value === "" ? "" : Number(e.target.value))}
          placeholder="e.g. 280 (Twitter)"
          className="flex-1 max-w-[200px] px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
        />
      </div>

      {/* Editor Area */}
      <div className="relative group">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          className={`min-h-[300px] text-base resize-y p-4 bg-background shadow-sm transition-colors ${
            isOverLimit ? "border-destructive focus-visible:ring-destructive" : "border-border focus-visible:ring-primary"
          }`}
        />
        
        {/* Action Toolbar */}
        <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <CopyButton textToCopy={text} />
          <Button size="sm" variant="secondary" onClick={handleClear} disabled={!text}>
            <Trash2 className="h-4 w-4 mr-2" /> Clear
          </Button>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <Button onClick={handleDownload} disabled={!text} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Download as TXT
        </Button>
      </div>
    </div>
  );
}
