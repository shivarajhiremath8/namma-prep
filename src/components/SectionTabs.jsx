const SectionTabs = ({ sections, activeSection, onSectionChange }) => {
    return (
        <div className="flex justify-center gap-8">
            {sections.map((section) => {
                const active = section === activeSection;
                return (
                    <button
                        key={section}
                        onClick={() => onSectionChange(section)}
                        className={`
            font-mono text-[15px] pb-1
            border-b-2
            transition-colors
            focus:outline-none
            ${active
                                ? "border-sky-500 text-sky-600 dark:text-sky-400"
                                : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                            }
            `}
                    >
                        {section}
                    </button>
                );
            })}
        </div>
    );
};

export default SectionTabs;
