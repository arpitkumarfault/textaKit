"use client";

import { useEffect } from "react";
import { adsenseConfig } from "../../config/adsense";

const InArticleAd = () => {
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
    return null;
  }

  return (
    <div className="my-8">
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-client={adsenseConfig.publisherId}
        data-ad-slot={adsenseConfig.adSlots.inArticle}
        data-ad-format="fluid"
        data-ad-layout="in-article"
      />
    </div>
  );
};

export default InArticleAd;