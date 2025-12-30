import { CONCEPTS } from "../data/conceptRegistry";

const ConceptModal = ({ stack, popConcept, pushConcept }) => {
    if (stack.length === 0) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay + Blur */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            {stack.map((concept, index) => {
                const data = CONCEPTS[concept];
                if (!data) return null;

                const isTop = index === stack.length - 1;

                return (
                    <div
                        key={index}
                        className={`
              absolute
              w-[90%] max-w-md
              rounded-xl
              bg-white dark:bg-slate-900
              shadow-xl
              transition-all
              ${isTop ? "scale-100 opacity-100" : "scale-95 opacity-70"}
            `}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                                {data.question}
                            </h3>
                            <button
                                onClick={popConcept}
                                className="text-slate-500 hover:text-slate-800 dark:hover:text-white"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Body */}
                        <div className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            {renderConceptText(data.answer, pushConcept)}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ConceptModal;

/* ---------- Helper ---------- */
const renderConceptText = (text, pushConcept) => {
    const parts = text.split(/\[(.*?)\]/g);

    return parts.map((part, i) => {
        if (i % 2 === 1) {
            return (
                <button
                    key={i}
                    onClick={() => pushConcept(part)}
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                    {part}
                </button>
            );
        }
        return <span key={i}>{part}</span>;
    });
};
