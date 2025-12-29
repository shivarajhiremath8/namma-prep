import { useState } from "react";
import { KEYWORDS } from "../data/keywords";

/* ---------- Utils ---------- */
const escapeRegExp = (text) =>
    text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/* ---------- Safe Search Highlighter ---------- */
const highlightSearchSafely = (html, searchTerm) => {
    if (!searchTerm) return html;

    const escaped = escapeRegExp(searchTerm);
    const regex = new RegExp(`(${escaped})`, "gi");

    // split by HTML tags
    const parts = html.split(/(<[^>]+>)/g);

    return parts
        .map((part) => {
            // if it's an HTML tag, return as-is
            if (part.startsWith("<")) return part;

            // only highlight in text nodes
            return part.replace(
                regex,
                `<span class="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">$1</span>`
            );
        })
        .join("");
};

/* ---------- Keyword Highlighter ---------- */
const highlightKeywords = (text) => {
    let result = text;

    KEYWORDS.forEach((word) => {
        const escapedWord = escapeRegExp(word);
        const regex = new RegExp(`\\b(${escapedWord})\\b`, "gi");

        result = result.replace(
            regex,
            `<span class="font-semibold text-blue-600 dark:text-blue-400">$1</span>`
        );
    });

    return result;
};

/* ---------- Combined Highlighter ---------- */
const highlightText = (text, searchTerm) => {
    // 1️⃣ keyword highlight
    const withKeywords = highlightKeywords(text);

    // 2️⃣ safe search highlight (even for 1 letter)
    return highlightSearchSafely(withKeywords, searchTerm);
};

/* ---------- Formatter ---------- */
const formatAnswer = (text, searchTerm) => {
    // Numbered list
    if (/\d+\./.test(text)) {
        const parts = text.split(/\d+\.\s*/).filter(Boolean);
        return (
            <ol className="list-decimal pl-5 space-y-1">
                {parts.map((p, i) => (
                    <li
                        key={i}
                        dangerouslySetInnerHTML={{
                            __html: highlightText(p, searchTerm),
                        }}
                    />
                ))}
            </ol>
        );
    }

    // Colon + bullet list
    if (text.includes(":")) {
        const [intro, rest] = text.split(":");
        const points = rest.split(",").map((p) => p.trim());

        if (points.length > 1) {
            return (
                <>
                    <p
                        className="mb-2"
                        dangerouslySetInnerHTML={{
                            __html: highlightText(intro + ":", searchTerm),
                        }}
                    />
                    <ul className="list-disc pl-5 space-y-1">
                        {points.map((p, i) => (
                            <li
                                key={i}
                                dangerouslySetInnerHTML={{
                                    __html: highlightText(p, searchTerm),
                                }}
                            />
                        ))}
                    </ul>
                </>
            );
        }
    }

    // Paragraph
    return (
        <p
            dangerouslySetInnerHTML={{
                __html: highlightText(text, searchTerm),
            }}
        />
    );
};

/* ---------- Question Item ---------- */
const QuestionItem = ({ question, answer, searchTerm }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-4 py-3 text-left"
            >
                <span
                    className="text-sm font-medium text-slate-800 dark:text-slate-100"
                    dangerouslySetInnerHTML={{
                        __html: highlightText(question, searchTerm),
                    }}
                />
                <span className="text-lg text-slate-500">
                    {open ? "−" : "+"}
                </span>
            </button>

            {open && (
                <div className="px-4 pb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {formatAnswer(answer, searchTerm)}
                </div>
            )}
        </div>
    );
};

export default QuestionItem;
