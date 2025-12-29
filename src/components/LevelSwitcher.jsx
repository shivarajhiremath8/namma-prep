import { LEVELS } from "../data/levels";

const LevelSwitcher = ({ level, setLevel }) => {
    const current = LEVELS[level];

    return (
        <div className="mt-8 pb-10">
            {/* Level Name */}
            <div className="text-center mb-3">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {current.label} Level
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                    {current.description}
                </p>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-3 text-sm">
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
        </div>
    );
};

export default LevelSwitcher;
