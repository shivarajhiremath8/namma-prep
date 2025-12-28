import ThemeToggle from "./ThemeToggle";

const Navbar = ({ activeSubject, setActiveSubject }) => {
    const subjects = ["DBMS", "OS", "CN"];

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">

                {/* LEFT: Subject Selector */}
                <select
                    value={activeSubject}
                    onChange={(e) => setActiveSubject(e.target.value)}
                    className="
            text-sm
            bg-white dark:bg-slate-900
            border border-slate-300 dark:border-slate-700
            rounded-md px-2 py-1
            text-slate-700 dark:text-slate-200
            focus:outline-none focus:ring-2 focus:ring-blue-500
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

                {/* RIGHT: Theme Toggle (unchanged) */}
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Navbar;
