export {};

declare global {
  interface Window {
    adsbygoogle: any[];
    gtag: (...args: any[]) => void;
  }

  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SITE_URL: string;
      NEXT_PUBLIC_ADSENSE_ID: string;
      NEXT_PUBLIC_GA_MEASUREMENT_ID: string;
      CONTACT_EMAIL_TO: string;
      NODE_ENV: "development" | "production" | "test";
    }
  }
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}