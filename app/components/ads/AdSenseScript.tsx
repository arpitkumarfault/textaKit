import Script from "next/script";
import { adsenseConfig } from "../../config/adsense";

const AdSenseScript = () => {
  if (!adsenseConfig.enabled) return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseConfig.publisherId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default AdSenseScript;