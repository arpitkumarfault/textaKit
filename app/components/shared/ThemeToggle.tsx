"use client";

import { useTheme } from "../../providers/ThemeProvider";
import { HiSun, HiMoon } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-surface hover:bg-surface-hover border border-border transition-colors focus-ring"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 1 : 0,
                    opacity: theme === "dark" ? 1 : 0,
                    rotate: theme === "dark" ? 0 : 180,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <HiMoon className="h-5 w-5 text-accent" />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    scale: theme === "light" ? 1 : 0,
                    opacity: theme === "light" ? 1 : 0,
                    rotate: theme === "light" ? 0 : -180,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <HiSun className="h-5 w-5 text-warning" />
            </motion.div>
        </motion.button>
    );
}
