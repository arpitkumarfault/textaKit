"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "../../config/site";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "../shared/ThemeToggle";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl shadow-sm transition-colors"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-secondary to-accent shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiSparkles className="h-6 w-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold gradient-text hidden sm:block">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Navigation />
            <ThemeToggle />
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              className="rounded-lg p-2 text-text-secondary hover:bg-surface-hover transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle menu"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </motion.header>
  );
};

export default Header;