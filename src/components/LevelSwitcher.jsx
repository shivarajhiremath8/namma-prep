const LevelSwitcher = ({ level, setLevel }) => {
    return (
        <div className="flex items-center justify-center gap-3 mt-8 pb-10 text-sm">
            {/* ↑↑ added pb-10 for bottom padding */}

            <button
                onClick={() => setLevel(Math.max(1, level - 1))}
                className="px-2 py-1 text-slate-500 hover:text-slate-800 dark:hover:text-white"
            >
                ←
            </button>

            {[1, 2, 3].map((l) => (
                <button
                    key={l}
                    onClick={() => setLevel(l)}
                    className={`px-3 py-1 rounded-md border transition
            ${level === l
                            ? "bg-blue-600 text-white border-blue-600"
                            : "border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                >
                    {l}
                </button>
            ))}

            <button
                onClick={() => setLevel(Math.min(3, level + 1))}
                className="px-2 py-1 text-slate-500 hover:text-slate-800 dark:hover:text-white"
            >
                →
            </button>
        </div>
    );
};

export default LevelSwitcher;
