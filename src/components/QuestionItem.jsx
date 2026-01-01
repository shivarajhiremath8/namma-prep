import { useState } from "react";
import { KEYWORDS } from "../data/keywords";
import ConceptModal from "./ConceptModal";

/* ---------- Utils ---------- */
const escapeRegExp = (text) =>
    text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/* ---------- Safe Search Highlighter ---------- */
const highlightSearchSafely = (text, searchTerm) => {
    if (!searchTerm) return text;

    const escaped = escapeRegExp(searchTerm);
    const regex = new RegExp(`(${escaped})`, "gi");

    return text.replace(
        regex,
        `<span class="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">$1</span>`
    );
};

/* ---------- Keyword Highlighter (visual only) ---------- */
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

/* ---------- Concept Renderer (semantic) ---------- */
const renderTextWithConcepts = (text, openConcept) => {
    const parts = text.split(/\[(.*?)\]/g);

    return parts.map((part, i) =>
        i % 2 === 1 ? (
            <button
                key={i}
                onClick={() => openConcept(part)}
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
                {part}
            </button>
        ) : (
            <span key={i}>{part}</span>
        )
    );
};

/* ---------- Answer Formatter ---------- */
const formatAnswer = (text, searchTerm, openConcept) => {
    const withSearch = highlightSearchSafely(text, searchTerm);
    return <p>{renderTextWithConcepts(withSearch, openConcept)}</p>;
};

/* ---------- Question Item ---------- */
const QuestionItem = ({ question, answer, searchTerm }) => {
    const [open, setOpen] = useState(false);
    const [conceptStack, setConceptStack] = useState([]);

    const pushConcept = (concept) =>
        setConceptStack((s) => [...s, concept]);

    const popConcept = () =>
        setConceptStack((s) => s.slice(0, -1));

    return (
        <>
            <div className="border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900">
                {/* Header */}
                <button
                    onClick={() => setOpen((o) => !o)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left"
                >
                    <span
                        className="text-sm font-medium text-slate-800 dark:text-slate-100"
                        dangerouslySetInnerHTML={{
                            __html: highlightSearchSafely(
                                highlightKeywords(question),
                                searchTerm
                            ),
                        }}
                    />

                    {/* + → × */}
                    <span
                        className={`
                            text-lg text-slate-500
                            transition-transform duration-300
                            ${open ? "rotate-45" : ""}
                        `}
                    >
                        +
                    </span>
                </button>

                {/* Accordion */}
                <div
                    className={`
                        grid transition-[grid-template-rows,opacity]
                        duration-300 ease-in-out
                        ${open
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"}
                    `}
                    style={{ visibility: open ? "visible" : "hidden" }}
                >
                    <div className="overflow-hidden">
                        <div className="px-4 pb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            {formatAnswer(answer, searchTerm, pushConcept)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Concept Stack Modal */}
            <ConceptModal
                stack={conceptStack}
                pushConcept={pushConcept}
                popConcept={popConcept}
            />
        </>
    );
};

export default QuestionItem;
