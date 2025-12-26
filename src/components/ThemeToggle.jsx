import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    // On first load: system preference OR saved preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        } else if (savedTheme === "light") {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        } else {
            // system preference
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;

            document.documentElement.classList.toggle("dark", prefersDark);
            setIsDark(prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        const nextTheme = !isDark;

        setIsDark(nextTheme);
        document.documentElement.classList.toggle("dark", nextTheme);
        localStorage.setItem("theme", nextTheme ? "dark" : "light");
    };

    return (
        <button
            onClick={toggleTheme}
            className="text-sm px-3 py-1.5 rounded-md border
                 border-slate-200 dark:border-slate-700
                 text-slate-700 dark:text-slate-300
                 hover:bg-slate-100 dark:hover:bg-slate-800
                 transition"
        >
            {isDark ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
};

export default ThemeToggle;
