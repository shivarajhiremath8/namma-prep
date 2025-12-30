import { useState } from "react";
import ConceptModal from "./ConceptModal";
import RichText from "./RichText";
import YouTubePlayer from "./YouTubePlayer";

const QuestionItem = ({ question, answer, searchTerm }) => {
    const [open, setOpen] = useState(false);
    const [conceptStack, setConceptStack] = useState([]);

    const pushConcept = (concept) => {
        setConceptStack((prev) => [...prev, concept]);
    };

    const popConcept = () => {
        setConceptStack((prev) => prev.slice(0, -1));
    };

    // Normalize answer shape
    const answerText =
        typeof answer === "string" ? answer : answer?.answer || "";

    const videoUrl =
        typeof answer === "object" ? answer?.video : null;

    return (
        <>
            {/* Question Card */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900">
                {/* Header */}
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left"
                >
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-100 leading-snug">
                        <RichText
                            text={question}
                            searchTerm={searchTerm}
                            onConceptClick={() => { }}
                        />
                    </span>

                    {/* + → × animation */}
                    <span
                        className={`
                            text-lg text-slate-500
                            transition-transform duration-300 ease-in-out
                            ${open ? "rotate-45" : "rotate-0"}
                        `}
                    >
                        +
                    </span>
                </button>

                {/* Smooth Accordion */}
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
                        <div className="px-4 pb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed space-y-5">
                            {/* Answer Text */}
                            <RichText
                                text={answerText}
                                searchTerm={searchTerm}
                                onConceptClick={pushConcept}
                            />

                            {/* Optional YouTube Video */}
                            {videoUrl && (
                                <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                                    <YouTubePlayer url={videoUrl} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Concept Modal Stack */}
            <ConceptModal
                stack={conceptStack}
                pushConcept={pushConcept}
                popConcept={popConcept}
            />
        </>
    );
};

export default QuestionItem;
