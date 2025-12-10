"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export const Card = ({
  children,
  className,
  hover = false,
  glass = false,
}: CardProps) => {
  return (
    <motion.div
      className={cn(
        "rounded-xl border border-border bg-surface p-6 transition-all",
        glass && "glass-card",
        hover && "hover-lift cursor-pointer",
        !glass && "shadow-md",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader = ({ children, className }: CardHeaderProps) => {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className }: CardTitleProps) => {
  return (
    <h3 className={cn("text-xl font-bold text-text-primary", className)}>
      {children}
    </h3>
  );
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription = ({ children, className }: CardDescriptionProps) => {
  return (
    <p className={cn("text-sm text-text-secondary", className)}>
      {children}
    </p>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent = ({ children, className }: CardContentProps) => {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter = ({ children, className }: CardFooterProps) => {
  return (
    <div className={cn("mt-4 flex items-center gap-2", className)}>
      {children}
    </div>
  );
};