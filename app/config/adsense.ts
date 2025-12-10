export const adsenseConfig = {
  publisherId: process.env.NEXT_PUBLIC_ADSENSE_ID || "",
  adSlots: {
    homepageTop: "1234567890",
    homepageSidebar: "1234567891",
    toolPageTop: "1234567892",
    toolPageSidebar: "1234567893",
    blogPost: "1234567894",
    inArticle: "1234567895",
    footer: "1234567896",
  },
  enabled: process.env.NODE_ENV === "production" && !!process.env.NEXT_PUBLIC_ADSENSE_ID,
  testMode: process.env.NODE_ENV === "development",
};

export const adFormats = {
  horizontal: {
    style: { display: "block" },
    format: "horizontal" as const,
    responsive: true,
  },
  vertical: {
    style: { display: "block" },
    format: "vertical" as const,
    responsive: true,
  },
  rectangle: {
    style: { display: "block" },
    format: "rectangle" as const,
    responsive: true,
  },
  auto: {
    style: { display: "block" },
    format: "auto" as const,
    responsive: true,
  },
};