"use client";

import { useState } from "react";
import { Copy, CheckCircle2 } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/utils";

interface CopyButtonProps extends ButtonProps {
  textToCopy: string;
}

export function CopyButton({ textToCopy, className, variant = "secondary", size = "sm", ...props }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (!textToCopy) return;
    try {
      await copyToClipboard(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <Button 
      variant={variant} 
      size={size} 
      className={className} 
      onClick={handleCopy} 
      disabled={!textToCopy || props.disabled}
      {...props}
    >
      {isCopied ? (
        <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 dark:text-green-400" />
      ) : (
        <Copy className="h-4 w-4 mr-2" />
      )}
      {isCopied ? "Copied!" : "Copy"}
    </Button>
  );
}
