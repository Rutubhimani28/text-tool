"use client";

import { useState, useEffect } from "react";
import { Copy, Trash2, Download, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function RemoveExtraSpacesClient() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  
  const [options, setOptions] = useState({
    removeMultipleSpaces: true,
    removeEmptyLines: true,
    removeTabs: true,
  });

  const handleCleanText = () => {
    let cleaned = inputText;

    if (options.removeTabs) {
      // Replace tabs with a single space
      cleaned = cleaned.replace(/\t/g, " ");
    }

    if (options.removeMultipleSpaces) {
      // Replace multiple spaces with a single space, but preserve newlines
      cleaned = cleaned.replace(/ +/g, " ");
    }

    if (options.removeEmptyLines) {
      // Remove lines that are entirely empty or contain only whitespace
      cleaned = cleaned.replace(/^\s*[\r\n]/gm, "");
    }

    // Trim start and end of every line (optional, but usually desired)
    // cleaned = cleaned.split('\n').map(line => line.trim()).join('\n');
    
    setOutputText(cleaned);
  };

  useEffect(() => {
    handleCleanText();
  }, [inputText, options]);

  const handleClear = () => {
    setInputText("");
    setOutputText("");
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([outputText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "cleaned-text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-6">
      {/* Options Panel */}
      <div className="bg-card border rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Cleaning Options</h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="multipleSpaces" 
              checked={options.removeMultipleSpaces}
              onCheckedChange={(checked) => setOptions(prev => ({ ...prev, removeMultipleSpaces: checked as boolean }))}
            />
            <Label htmlFor="multipleSpaces" className="cursor-pointer">Remove Multiple Spaces</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="emptyLines" 
              checked={options.removeEmptyLines}
              onCheckedChange={(checked) => setOptions(prev => ({ ...prev, removeEmptyLines: checked as boolean }))}
            />
            <Label htmlFor="emptyLines" className="cursor-pointer">Remove Empty Lines</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="tabs" 
              checked={options.removeTabs}
              onCheckedChange={(checked) => setOptions(prev => ({ ...prev, removeTabs: checked as boolean }))}
            />
            <Label htmlFor="tabs" className="cursor-pointer">Remove Tabs</Label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Area */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold">Original Text</Label>
            <Button size="sm" variant="ghost" onClick={handleClear} disabled={!inputText} className="text-muted-foreground hover:text-foreground">
              <Trash2 className="h-4 w-4 mr-2" /> Clear
            </Button>
          </div>
          <Textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste your messy text here..."
            className="min-h-[400px] text-base resize-y p-4 bg-background border-border focus-visible:ring-primary shadow-sm"
          />
        </div>

        {/* Output Area */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold">Cleaned Result</Label>
            <div className="flex space-x-2">
              <CopyButton textToCopy={outputText} />
            </div>
          </div>
          <Textarea
            value={outputText}
            readOnly
            placeholder="Your cleaned text will appear here..."
            className="min-h-[400px] text-base resize-y p-4 bg-muted/50 border-border focus-visible:ring-transparent shadow-sm"
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
