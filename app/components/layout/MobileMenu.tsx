"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation } from "../../data/navigation";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[90] bg-black/50 md:hidden"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed inset-y-0 right-0 z-[100] w-full max-w-sm bg-surface border-l border-border shadow-2xl md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border p-4">
                <h2 className="text-lg font-semibold text-text-primary">Menu</h2>
                <button
                  onClick={onClose}
                  className="rounded-lg p-2 text-text-secondary hover:bg-surface-hover transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-2">
                  {mainNavigation.map((item, index) => {
                    const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                            isActive
                              ? "bg-primary/10 text-primary border border-primary/20"
                              : "text-text-primary hover:bg-surface-hover"
                          )}
                        >
                          <div>{item.name}</div>
                          {item.description && (
                            <div className="mt-1 text-xs text-text-tertiary">
                              {item.description}
                            </div>
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer */}
              <div className="border-t border-border p-4">
                <Link
                  href="/contact"
                  className="block w-full rounded-lg bg-gradient-to-r from-primary via-secondary to-accent px-4 py-3 text-center font-semibold text-white transition hover:opacity-90"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;