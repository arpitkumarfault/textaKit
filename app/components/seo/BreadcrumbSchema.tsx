import { generateBreadcrumbSchema } from "../../lib/seo";

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = generateBreadcrumbSchema(items);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default BreadcrumbSchema;