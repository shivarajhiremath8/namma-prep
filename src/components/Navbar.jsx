const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                    Namma Prep
                </h1>

                {/* Subject Selector */}
                <button className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                    DBMS ▾
                </button>

            </div>
        </header>
    );
};

export default Navbar;
