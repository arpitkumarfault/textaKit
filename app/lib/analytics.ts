export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Track page views
export const pageview = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_MEASUREMENT_ID as string, {
      page_path: url,
    });
  }
};

// Track events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track tool usage
export const trackToolUsage = (toolName: string, action: string) => {
  event({
    action,
    category: "Tool Usage",
    label: toolName,
  });
};

// Track conversions
export const trackConversion = (conversionType: string) => {
  event({
    action: "conversion",
    category: "Conversions",
    label: conversionType,
  });
};