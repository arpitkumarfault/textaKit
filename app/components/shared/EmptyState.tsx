import { Button } from "../ui";
import Link from "next/link";

interface EmptyStateProps {
  icon?: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
}

const EmptyState = ({
  icon = "📝",
  title,
  description,
  actionLabel,
  actionHref,
  onAction,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
      <div className="mb-4 text-6xl">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mb-6 max-w-md text-gray-600">{description}</p>
      {(actionLabel && actionHref) && (
        <Link href={actionHref}>
          <Button variant="primary">{actionLabel}</Button>
        </Link>
      )}
      {(actionLabel && onAction) && (
        <Button variant="primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;