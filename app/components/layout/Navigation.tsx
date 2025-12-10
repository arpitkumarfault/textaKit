"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation } from "../../data/navigation";
import { cn } from "../../lib/utils";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {mainNavigation.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary relative group dark:text-gray-100 dark:hover:text-primary",
              isActive ? "text-primary dark:text-primary" : "text-text-primary"
            )}
          >
            {item.name}
            {/* Animated underline */}
            <span className={cn(
              "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all",
              isActive ? "w-full" : "w-0 group-hover:w-full"
            )} />
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;