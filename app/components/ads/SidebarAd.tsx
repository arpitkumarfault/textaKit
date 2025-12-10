"use client";

import { useEffect } from "react";
import { adsenseConfig } from "../../config/adsense";

interface SidebarAdProps {
  slot: keyof typeof adsenseConfig.adSlots;
  className?: string;
}

const SidebarAd = ({ slot, className = "" }: SidebarAdProps) => {
  useEffect(() => {
    if (adsenseConfig.enabled) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense error:", err);
      }
    }
  }, []);

  if (!adsenseConfig.enabled) {
    return (
      <div className={`rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center ${className}`}>
        <p className="text-gray-500">Ad Placeholder</p>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adsenseConfig.publisherId}
        data-ad-slot={adsenseConfig.adSlots[slot]}
        data-ad-format="vertical"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default SidebarAd;