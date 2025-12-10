"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-text-primary">
            {label}
          </label>
        )}
        <motion.textarea
          ref={ref}
          className={cn(
            "w-full rounded-lg border border-border bg-surface px-4 py-3 text-text-primary placeholder:text-text-tertiary",
            "transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
            "hover:border-border/80",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "resize-none font-mono text-sm",
            error && "border-error focus:ring-error",
            className
          )}
          whileFocus={{ scale: 1.005 }}
          {...(props as any)}
        />
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

Textarea.displayName = "Textarea";