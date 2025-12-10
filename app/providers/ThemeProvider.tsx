"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        setMounted(true);

        if (typeof window === 'undefined') return;

        const savedTheme = localStorage.getItem("theme") as Theme | null;

        if (savedTheme) {
            setThemeState(savedTheme);
        } else {
            // Check system preference
            if (window.matchMedia) {
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                setThemeState(prefersDark ? "dark" : "light");
            }
        }
    }, []);

    // Apply theme to document
    useEffect(() => {
        if (!mounted || typeof window === 'undefined') return;

        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);

        try {
            localStorage.setItem("theme", theme);
        } catch (e) {
            console.warn('Failed to save theme:', e);
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        setThemeState((prev) => (prev === "light" ? "dark" : "light"));
    };

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
    };

    // Always provide context, even before mounting
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
