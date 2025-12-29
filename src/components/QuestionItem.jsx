import { useState } from "react";
import { KEYWORDS } from "../data/keywords";

/* ---------- Highlighter ---------- */
const highlightText = (text, searchTerm) => {
  let result = text;

  // Highlight important keywords (blue)
  KEYWORDS.forEach((word) => {
    const regex = new RegExp(`\\b(${word})\\b`, "gi");
    result = result.replace(
      regex,
      `<span class="font-semibold text-blue-600 dark:text-blue-400">$1</span>`
    );
  });

  // Highlight search term (yellow)
  if (searchTerm) {
    const regex = new RegExp(`(${searchTerm})`, "gi");
    result = result.replace(
      regex,
      `<span class="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">$1</span>`
    );
  }

  return result;
};

/* ---------- Formatter ---------- */
const formatAnswer = (text, searchTerm) => {
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
