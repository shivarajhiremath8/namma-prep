import { memo } from "react";

const QuestionCard = memo(function QuestionCard({
    id,
    question,
    answer,
    isOpen,
    onToggle,
}) {
    return (
        <div
            className="
        rounded-xl border
        bg-white border-sky-100
        dark:bg-slate-900 dark:border-slate-800
        transition-colors
      "
        >
            {/* Header (clickable only here) */}
            <button
                type="button"
                onClick={() => onToggle(id)}
                aria-expanded={isOpen}
                className="
          w-full flex items-start justify-between gap-3
          px-4 py-4 sm:px-5
          text-left
          hover:bg-sky-50/60
          dark:hover:bg-slate-800
          focus:outline-none
        "
            >
                <div className="flex items-start gap-3">
                    <span className="mt-1 text-xs font-mono text-sky-500 dark:text-sky-400">
                        Q
                    </span>

                    <h3 className="font-mono text-[15px] sm:text-[16px] font-medium text-slate-800 dark:text-slate-100">
                        {question}
                    </h3>
                </div>

                <span
                    className={`mt-1 text-lg ${isOpen ? "text-sky-500" : "text-slate-400"
                        }`}
                >
                    {isOpen ? "−" : "+"}
                </span>
            </button>

            {/* Answer */}
            <div
                className={`
          overflow-hidden
          transition-[max-height,opacity] duration-200 ease-out
          ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}
            >
                <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                    <p className="font-mono text-[14px] sm:text-[15px] leading-[1.7] text-slate-600 dark:text-slate-300">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
});

export default QuestionCard;
