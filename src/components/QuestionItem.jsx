import { useEffect, useRef, useState } from "react";

const QuestionItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
    }, []);

    return (
        <div className="border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 overflow-hidden">

            {/* Question Header */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-4 py-3 text-left"
            >
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                    {question}
                </span>

                <span
                    className={`text-xl text-slate-500 transition-transform duration-300 ${open ? "rotate-45" : ""
                        }`}
                >
                    +
                </span>
            </button>

            {/* Animated Answer */}
            <div
                style={{ maxHeight: open ? `${height}px` : "0px" }}
                className="transition-all duration-300 ease-in-out overflow-hidden"
            >
                <div
                    ref={contentRef}
                    className="px-4 pb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default QuestionItem;
