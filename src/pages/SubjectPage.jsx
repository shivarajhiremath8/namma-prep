import { useEffect, useState } from "react";
import LevelSwitcher from "../components/LevelSwitcher";
import QuestionList from "../components/QuestionList";
import SearchBar from "../components/SearchBar";
import SubjectHeader from "../components/SubjectHeader";
import { SUBJECTS } from "../data/subjects";

const getInitialLevel = (subject) => {
    const saved = localStorage.getItem(`level-${subject}`);
    return saved ? Number(saved) : 1;
};

const SubjectPage = ({ activeSubject }) => {
    const [level, setLevel] = useState(() =>
        getInitialLevel(activeSubject)
    );
    const [search, setSearch] = useState("");

    // persist level
    useEffect(() => {
        localStorage.setItem(`level-${activeSubject}`, level);
    }, [level, activeSubject]);

    const subject = SUBJECTS[activeSubject];

    // 🔹 collect questions
    const levelQuestions = subject.levels[level];

    const allQuestions = Object.values(subject.levels).flat();

    // 🔍 apply search
    const questionsToShow = search
        ? allQuestions.filter(
            (q) =>
                q.question.toLowerCase().includes(search.toLowerCase()) ||
                q.answer.toLowerCase().includes(search.toLowerCase())
        )
        : levelQuestions;

    const noResults = search && questionsToShow.length === 0;

    return (
        <main key={activeSubject}>
            <SubjectHeader
                title={subject.title}
                description={subject.description}
            />

            <SearchBar value={search} onChange={setSearch} />

            {/* No Results UI */}
            {noResults ? (
                <div className="max-w-3xl mx-auto px-4 mt-8 text-center">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        No results found
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Try a different keyword or check spelling
                    </p>
                </div>
            ) : (
                <QuestionList
                    key={search ? "search-results" : `${activeSubject}-${level}`}
                    questions={questionsToShow}
                    searchTerm={search}
                />
            )}

            {/* Pagination only when NOT searching and results exist */}
            {!search && !noResults && (
                <LevelSwitcher level={level} setLevel={setLevel} />
            )}
        </main>
    );
};

export default SubjectPage;
