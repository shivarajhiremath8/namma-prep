const SearchBar = ({ value, onChange }) => {
    return (
        <div className="max-w-3xl mx-auto px-4 mt-4 mb-6">
            <div className="relative">
                {/* Search Icon */}
                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-slate-400 dark:text-slate-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35m1.6-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </span>

                {/* Clear Button */}
                {value && (
                    <button
                        onClick={() => onChange("")}
                        className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                        aria-label="Clear search"
                    >
                        ✕
                    </button>
                )}

                {/* Input */}
                <input
                    type="text"
                    placeholder="Search questions or answers..."
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="
            w-full
            pl-10 pr-10
            py-2
            text-sm
            rounded-md
            border border-slate-300 dark:border-slate-700
            bg-white dark:bg-slate-900
            text-slate-700 dark:text-slate-200
            placeholder-slate-400
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
                />
            </div>
        </div>
    );
};

export default SearchBar;
