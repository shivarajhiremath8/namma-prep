import { useState } from "react";
import { KEYWORDS } from "../data/keywords";

/* ---------- Keyword Highlighter ---------- */
const highlightKeywords = (text) => {
    let result = text;

    KEYWORDS.forEach((word) => {
        const regex = new RegExp(`\\b(${word})\\b`, "gi");
        result = result.replace(
            regex,
            `<span class="font-semibold text-blue-600 dark:text-blue-400">$1</span>`
        );
    });

    return result;
};

/* ---------- Answer Formatter ---------- */
const formatAnswer = (text) => {
    // 1️⃣ Numbered points
    if (/\d+\./.test(text)) {
        const parts = text.split(/\d+\.\s*/).filter(Boolean);
        return (
            <ol className="list-decimal pl-5 space-y-1">
                {parts.map((p, i) => (
                    <li
                        key={i}
                        dangerouslySetInnerHTML={{
                            __html: highlightKeywords(p),
                        }}
                    />
                ))}
            </ol>
        );
    }

    // 2️⃣ Colon + comma-separated points
    if (text.includes(":")) {
        const [intro, rest] = text.split(":");
        const points = rest.split(",").map((p) => p.trim());

        if (points.length > 1) {
            return (
                <>
                    <p
                        className="mb-2"
                        dangerouslySetInnerHTML={{
                            __html: highlightKeywords(intro + ":"),
                        }}
                    />
                    <ul className="list-disc pl-5 space-y-1">
                        {points.map((p, i) => (
                            <li
                                key={i}
                                dangerouslySetInnerHTML={{
                                    __html: highlightKeywords(p),
                                }}
                            />
                        ))}
                    </ul>
                </>
            );
        }
    }

    // 3️⃣ Normal paragraph
    return (
        <p
            dangerouslySetInnerHTML={{
                __html: highlightKeywords(text),
            }}
        />
    );
};

/* ---------- Question Item ---------- */
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
                <span className="text-lg text-slate-500">
                    {open ? "−" : "+"}
                </span>
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
