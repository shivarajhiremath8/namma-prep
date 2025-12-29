import { useState } from "react";

const formatAnswer = (text) => {
    // Case 1: Numbered points (1. 2. 3.)
    if (/\d+\./.test(text)) {
        const parts = text.split(/\d+\.\s*/).filter(Boolean);
        return (
            <ol className="list-decimal pl-5 space-y-1">
                {parts.map((p, i) => (
                    <li key={i}>{p}</li>
                ))}
            </ol>
        );
    }

    // Case 2: Colon with comma-separated points
    if (text.includes(":")) {
        const [intro, rest] = text.split(":");
        const points = rest.split(",").map((p) => p.trim());

        if (points.length > 1) {
            return (
                <>
                    <p className="mb-2">{intro}:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        {points.map((p, i) => (
                            <li key={i}>{p}</li>
                        ))}
                    </ul>
                </>
            );
        }
    }

    // Case 3: Normal paragraph
    return <p>{text}</p>;
};

const QuestionItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-4 py-3 text-left"
            >
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                    {question}
                </span>
                <span className="text-lg text-slate-500">{open ? "−" : "+"}</span>
            </button>

            {open && (
                <div className="px-4 pb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {formatAnswer(answer)}
                </div>
            )}
        </div>
    );
};

export default QuestionItem;
