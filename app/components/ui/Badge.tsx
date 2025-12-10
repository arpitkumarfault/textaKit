"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "primary" | "secondary" | "success" | "warning" | "error";
    className?: string;
}

export const Badge = ({
    children,
    variant = "default",
    className,
}: BadgeProps) => {
    const variantClasses = {
        default: "bg-surface border-border text-text-primary",
        primary: "bg-primary/10 text-primary border-primary/20",
        secondary: "bg-secondary/10 text-secondary border-secondary/20",
        success: "bg-success/10 text-success border-success/20",
        warning: "bg-warning/10 text-warning border-warning/20",
        error: "bg-error/10 text-error border-error/20",
    };

    return (
        <motion.span
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all",
                variantClasses[variant],
                className
            )}
            whileHover={{ scale: 1.05 }}
        >
            {children}
        </motion.span>
    );
};
