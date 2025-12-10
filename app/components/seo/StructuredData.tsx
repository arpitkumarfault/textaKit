// src/components/seo/StructuredData.tsx
"use client";

import { generateToolSchema } from "../../lib/seo";

type StructuredDataProps =
  | { name: string; description: string; url: string; data?: never }
  | { data: Record<string, any>; name?: never; description?: never; url?: never };

export default function StructuredData(props: StructuredDataProps) {
  const jsonLd = "data" in props 
    ? props.data 
    : generateToolSchema({
        name: props.name,
        description: props.description,
        url: props.url,
      });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} // ← This was the bug before
    />
  );
}