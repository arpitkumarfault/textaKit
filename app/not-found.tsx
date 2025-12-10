import Link from "next/link";
import { Button } from "./components/ui";

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="mb-4 text-9xl font-bold text-text-tertiary/20">404</h1>
        <h2 className="mb-4 text-4xl font-bold text-text-primary">
          Page Not Found
        </h2>
        <p className="mb-8 text-xl text-text-secondary">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/">
            <Button variant="primary" size="lg">Go Home</Button>
          </Link>
          <Link href="/tools">
            <Button variant="outline" size="lg">Browse Tools</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}