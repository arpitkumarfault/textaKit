"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  loading?: boolean;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  loading = false,
  disabled,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "relative inline-flex items-center justify-center font-semibold transition-all focus-ring disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-2.5 text-base rounded-lg",
    lg: "px-8 py-3 text-lg rounded-xl",
  };

  const variantClasses = {
    primary:
      "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg active:scale-95",
    secondary:
      "bg-secondary text-white hover:bg-secondary/90 shadow-md hover:shadow-lg active:scale-95",
    outline:
      "border-2 border-border bg-transparent text-text-primary dark:text-gray-100 hover:bg-surface active:scale-95",
    ghost:
      "bg-transparent text-text-primary dark:text-gray-100 hover:bg-surface active:scale-95",
    gradient:
      "bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
  };

  return (
    <motion.button
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      disabled={disabled || loading}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      {...(props as any)}
    >
      {/* Ripple effect */}
      <span className="absolute inset-0 overflow-hidden">
        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </span>

      {/* Content */}
      <span className="relative flex items-center gap-2">
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </span>
    </motion.button>
  );
};