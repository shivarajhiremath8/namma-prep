import { useEffect, useState } from "react";
import darkIcon from "../assets/icons/dark.svg";
import lightIcon from "../assets/icons/light.svg";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        if (localStorage.theme) {
            return localStorage.theme === "dark";
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        const root = document.documentElement;

        if (isDark) {
            root.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            root.classList.remove("dark");
            localStorage.theme = "light";
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="
    inline-flex items-center justify-center
    gap-2
    px-3 py-1.5
    rounded-md
    border border-slate-300 dark:border-slate-700
    text-sm
    text-slate-700 dark:text-slate-200
    hover:bg-slate-100 dark:hover:bg-slate-800
    transition
  "
        >
            <span className="flex items-center justify-center h-4 w-4">
                <img
                    src={isDark ? lightIcon : darkIcon}
                    alt=""
                    className="h-4 w-4 block"
                />
            </span>

            <span className="leading-none hidden sm:inline">
                {isDark ? "Light" : "Dark"}
            </span>
        </button>

    );
};

export default ThemeToggle;
