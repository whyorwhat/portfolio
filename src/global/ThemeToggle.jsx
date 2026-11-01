import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const STORAGE_KEY = "theme";
// Project pages ship their own look and ignore the site theme
const EXCLUDED = /^\/(ti-seguo|replyia)(\/|$)/;

export const isThemeExcluded = (pathname) => EXCLUDED.test(pathname);

const prefersLight = () => window.matchMedia("(prefers-color-scheme: light)").matches;

// Saved choice wins; otherwise follow the browser/OS preference
function readTheme() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return saved === "light" ? "light" : "dark";
    } catch { /* storage unavailable */ }
    return prefersLight() ? "light" : "dark";
}

// Applies the stored theme to <html>, except on excluded pages
export function useThemeSync() {
    const { pathname } = useLocation();
    useEffect(() => {
        const root = document.documentElement;
        const apply = () => root.classList.toggle("light", readTheme() === "light" && !isThemeExcluded(pathname));
        apply();
        const media = window.matchMedia("(prefers-color-scheme: light)");
        window.addEventListener("themechange", apply);
        media.addEventListener("change", apply);
        return () => {
            window.removeEventListener("themechange", apply);
            media.removeEventListener("change", apply);
        };
    }, [pathname]);
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState(readTheme);
    const isLight = theme === "light";

    useEffect(() => {
        const sync = () => setTheme(readTheme());
        window.addEventListener("themechange", sync);
        window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", sync);
        return () => {
            window.removeEventListener("themechange", sync);
            window.matchMedia("(prefers-color-scheme: light)").removeEventListener("change", sync);
        };
    }, []);

    const toggle = () => {
        const next = isLight ? "dark" : "light";
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch { /* storage unavailable */ }
        setTheme(next);
        window.dispatchEvent(new Event("themechange"));
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-slate-200 shadow-lg transition hover:bg-[var(--color-surface-raised)] focus:outline-none focus:ring-2 focus:ring-blue-500 light:text-gray-700"
        >
            {isLight ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
        </button>
    );
}
