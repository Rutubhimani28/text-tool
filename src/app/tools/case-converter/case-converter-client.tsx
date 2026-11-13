"use client";

import { useState } from "react";
import { Copy, Trash2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import { Textarea } from "@/components/ui/textarea";

export default function CaseConverterClient() {
  const [text, setText] = useState("");

  const handleConversion = (type: string) => {
    let result = text;
    switch (type) {
      case "upper":
        result = text.toUpperCase();
        break;
      case "lower":
        result = text.toLowerCase();
        break;
      case "title":
        result = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        break;
      case "sentence":
        result = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
        break;
      case "toggle":
        result = text.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
        break;
    }
    setText(result);
  };

  const handleClear = () => {
    setText("");
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "converted-text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => handleConversion("sentence")} variant="secondary">Sentence case</Button>
        <Button onClick={() => handleConversion("lower")} variant="secondary">lowercase</Button>
        <Button onClick={() => handleConversion("upper")} variant="secondary">UPPERCASE</Button>
        <Button onClick={() => handleConversion("title")} variant="secondary">Capitalize Each Word</Button>
        <Button onClick={() => handleConversion("toggle")} variant="secondary">tOGGLE cASE</Button>
      </div>

      {/* Editor Area */}
      <div className="relative group">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here to convert its case..."
          className="min-h-[400px] text-base resize-y p-4 bg-background border-border focus-visible:ring-primary shadow-sm"
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
