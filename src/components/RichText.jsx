import { KEYWORDS } from "../data/keywords";

/* Normalize keywords */
const keywordSet = new Set(
    KEYWORDS.map(k => k.toLowerCase())
);

/* Tokenizer: words | spaces | symbols */
const tokenize = (text) =>
    text.match(/[\w]+|\s+|[^\w\s]+/g) || [];

const RichText = ({ text, searchTerm, onConceptClick }) => {
    if (!text) return null;

    const parts = text.split(/\[(.*?)\]/g);
    const search = searchTerm?.toLowerCase();

    return (
        <>
            {parts.map((part, i) => {
                /* Concept handling */
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

                /* Normal text */
                return tokenize(part).map((token, j) => {
                    const lower = token.toLowerCase();

                    /* 🔍 SEARCH HIGHLIGHT (substring) */
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

                    /* 🔵 KEYWORD HIGHLIGHT (exact word) */
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
            })}
        </>
    );
};

export default RichText;
