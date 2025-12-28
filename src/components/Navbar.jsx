import arrowDark from "../assets/icons/arrowd.svg";
import arrowLight from "../assets/icons/arrowl.svg";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({
    activeSubject,
    setActiveSubject,
    isDark,
    setIsDark,
}) => {
    const subjects = ["DBMS", "OS", "CN"];

    const handleSubjectChange = (e) => {
        setActiveSubject(e.target.value);

        e.target.blur();
    };

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">

                {/* LEFT: Subject Selector */}
                <div className="relative group">
                    <select
                        value={activeSubject}
                        onChange={handleSubjectChange}
                        className="
              appearance-none
              text-sm
              bg-white dark:bg-slate-900
              border border-slate-300 dark:border-slate-700
              rounded-md
              pl-3 pr-9 py-1.5
              text-slate-700 dark:text-slate-200
              hover:bg-slate-100 dark:hover:bg-slate-800
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
              transition
            "
                    >
                        {subjects.map((s) => (
                            <option
                                key={s}
                                value={s}
                                className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100"
                            >
                                {s}
                            </option>
                        ))}
                    </select>

                    {/* Custom Arrow */}
                    <img
                        src={isDark ? arrowLight : arrowDark}
                        alt=""
                        className="
              pointer-events-none
              absolute
              right-2
              top-1/2
              -translate-y-1/2
              w-4 h-4
              opacity-80
              group-hover:opacity-100
              transition
            "
                    />
                </div>

                {/* RIGHT: Theme Toggle */}
                <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
            </div>
        </header>
    );
};

export default Navbar;
