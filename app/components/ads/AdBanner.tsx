"use client";

import { useEffect } from "react";
import { adsenseConfig } from "../../config/adsense";

interface AdBannerProps {
  slot: keyof typeof adsenseConfig.adSlots;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
  responsive?: boolean;
  className?: string;
}

const AdBanner = ({
  slot,
  format = "auto",
  responsive = true,
  className = "",
}: AdBannerProps) => {
  useEffect(() => {
    if (adsenseConfig.enabled) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {}
        );
      } catch (err) {
        console.error("AdSense error:", err);
      }
    }
  }, []);

  if (!adsenseConfig.enabled) {
    return null;
  }

  return (
    <div className={`my-4 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adsenseConfig.publisherId}
        data-ad-slot={adsenseConfig.adSlots[slot]}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
};

export default AdBanner;