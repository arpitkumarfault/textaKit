"use client";

import { useEffect } from "react";
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
    if (isOpen) {
      onClose();
    }
  }, [pathname]);

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
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm md:hidden"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Menu Panel - Fixed positioning from top */}
          <motion.div
            className="fixed left-0 right-0 top-0 z-[100] h-auto max-h-[90vh] overflow-hidden rounded-b-3xl bg-surface shadow-2xl md:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              mass: 0.8,
            }}
          >
            <div className="flex h-full max-h-[90vh] flex-col">
              {/* Header */}
              <div className="flex items-center justify-between gap-3 border-b border-border bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 px-5 py-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
                    Menu
                  </p>
                  <p className="text-xl font-bold text-text-primary">
                    Navigation
                  </p>
                </div>
                <motion.button
                  onClick={onClose}
                  className="rounded-full bg-surface-hover p-2.5 text-text-secondary shadow-md transition-colors hover:bg-primary/10 hover:text-primary"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
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
                      strokeWidth={2.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Navigation Links - Scrollable */}
              <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
                <ul className="space-y-2.5">
                  {mainNavigation.map((item, index) => {
                    const isActive =
                      pathname === item.href ||
                      pathname.startsWith(item.href + "/");

                    return (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={cn(
                            "block rounded-2xl border px-5 py-4 text-base font-semibold transition-all duration-200",
                            isActive
                              ? "border-primary/40 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary shadow-md"
                              : "border-border bg-surface hover:border-primary/30 hover:bg-surface-hover hover:shadow-sm"
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.name}</span>
                            <svg
                              className={cn(
                                "h-5 w-5 transition-transform",
                                isActive ? "text-primary" : "text-text-tertiary"
                              )}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                          {item.description && (
                            <p className="mt-1.5 text-sm font-normal text-text-tertiary">
                              {item.description}
                            </p>
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer CTA */}
              <div className="border-t border-border bg-surface/80 px-4 py-4 backdrop-blur-sm">
                <div className="flex flex-col gap-2.5">
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="block w-full rounded-xl bg-gradient-to-r from-primary via-secondary to-accent px-5 py-3.5 text-center font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/tools"
                    onClick={onClose}
                    className="block w-full rounded-xl border border-border bg-surface px-5 py-3.5 text-center font-semibold text-text-primary transition-all hover:border-primary/40 hover:bg-surface-hover hover:shadow-md active:scale-[0.98]"
                  >
                    Explore Tools
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
