"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT_ID } from "@/config/adsense";

interface GoogleAdProps {
  client?: string; // e.g. "ca-pub-1234567890123456"
  slot: string;    // e.g. "1234567890"
  format?: string;
  responsive?: string;
  className?: string;
}

export function GoogleAd({
  client = ADSENSE_CLIENT_ID,
  slot,
  format = "auto",
  responsive = "true",
  className = "",
}: GoogleAdProps) {
  const adRef = useRef<HTMLModElement>(null);
  
  useEffect(() => {
    if (client === "ca-pub-9994767233328819") return;
    try {
      if (adRef.current && !adRef.current.getAttribute("data-adsbygoogle-status")) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, [client]);

  if (client === "ca-pub-9994767233328819") {
    return null;
  }

  return (
    <div className={`overflow-hidden bg-muted/30 rounded-lg flex items-center justify-center my-8 text-muted-foreground text-sm border border-dashed border-border/50 min-h-[100px] w-full ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}
