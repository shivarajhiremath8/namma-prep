import { KEYWORDS } from "../data/keywords";

/* ---------- Helpers ---------- */
const keywordSet = new Set(
    KEYWORDS.map((k) => k.toLowerCase())
);

const tokenize = (text) =>
    text.match(/[\w]+|\s+|[^\w\s]+/g) || [];

/* ---------- Inline renderer (handles highlight + concepts) ---------- */
const renderInline = (text, searchTerm, onConceptClick) => {
    const parts = text.split(/\[(.*?)\]/g);
    const search = searchTerm?.toLowerCase();

    return parts.map((part, i) => {
        // Concept
        if (i % 2 === 1) {
            return (
                <button
                    key={i}
                    onClick={() => onConceptClick(part)}
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                    {part}
                </button>
            );
        }

        // Normal text
        return tokenize(part).map((token, j) => {
            const lower = token.toLowerCase();

            // Search highlight (substring)
            if (
                search &&
                search.length > 0 &&
                lower.includes(search) &&
                /\w/.test(token)
            ) {
                return (
                    <span
                        key={`${i}-${j}`}
                        className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded"
                    >
                        {token}
                    </span>
                );
            }

            // Keyword highlight (exact)
            if (keywordSet.has(lower)) {
                return (
                    <span
                        key={`${i}-${j}`}
                        className="font-semibold text-blue-600 dark:text-blue-400"
                    >
                        {token}
                    </span>
                );
            }

            return <span key={`${i}-${j}`}>{token}</span>;
        });
    });
};

/* ---------- Main RichText ---------- */
const RichText = ({ text, searchTerm, onConceptClick }) => {
    if (!text) return null;

    /* 🔢 Numbered list: 1. 2. 3. */
    if (/^\s*\d+\./.test(text)) {
        const items = text
            .split(/\d+\.\s*/)
            .filter(Boolean);

        return (
            <ol className="list-decimal pl-5 space-y-1">
                {items.map((item, i) => (
                    <li key={i}>
                        {renderInline(item, searchTerm, onConceptClick)}
                    </li>
                ))}
            </ol>
        );
    }

    /* 🔹 Colon-based bullet list */
    if (text.includes(":")) {
        const [intro, rest] = text.split(":");
        const points = rest
            .split(",")
            .map((p) => p.trim())
            .filter(Boolean);

        if (points.length > 1) {
            return (
                <>
                    <p className="mb-2">
                        {renderInline(
                            intro + ":",
                            searchTerm,
                            onConceptClick
                        )}
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        {points.map((p, i) => (
                            <li key={i}>
                                {renderInline(
                                    p,
                                    searchTerm,
                                    onConceptClick
                                )}
                            </li>
                        ))}
                    </ul>
                </>
            );
        }
    }

    /* 📝 Normal paragraph */
    return (
        <p>
            {renderInline(text, searchTerm, onConceptClick)}
        </p>
    );
};

export default RichText;
