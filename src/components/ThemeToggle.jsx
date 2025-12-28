import darkIcon from "../assets/icons/dark.svg";
import lightIcon from "../assets/icons/light.svg";

const ThemeToggle = ({ isDark, setIsDark }) => {
    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="
        inline-flex items-center justify-center
        gap-2
        px-3 py-2
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
