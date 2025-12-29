import { useEffect, useState } from "react";
import LevelSwitcher from "../components/LevelSwitcher";
import QuestionList from "../components/QuestionList";
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

    // 🔁 update level when subject changes (NO effect body logic)
    useEffect(() => {
        setLevel(getInitialLevel(activeSubject));
    }, [activeSubject]);

    // 💾 persist level
    useEffect(() => {
        localStorage.setItem(`level-${activeSubject}`, level);
    }, [level, activeSubject]);

    const subject = SUBJECTS[activeSubject];
    const questions = subject.levels[level];

    return (
        <main>
            <SubjectHeader
                title={subject.title}
                description={subject.description}
            />

            <QuestionList
                key={`${activeSubject}-${level}`}
                questions={questions}
            />

            <LevelSwitcher level={level} setLevel={setLevel} />
        </main>
    );
};

export default SubjectPage;
