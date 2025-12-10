"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-text-primary">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">
              {icon}
            </div>
          )}
          <motion.input
            ref={ref}
            className={cn(
              "w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text-primary placeholder:text-text-tertiary",
              "transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
              "hover:border-border/80",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-error focus:ring-error",
              icon && "pl-10",
              className
            )}
            whileFocus={{ scale: 1.01 }}
            {...(props as any)}
          />
        </div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-error"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";