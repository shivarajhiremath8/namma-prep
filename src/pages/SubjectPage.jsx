import { useEffect, useState } from "react";
import LevelSwitcher from "../components/LevelSwitcher";
import QuestionList from "../components/QuestionList";
import SubjectHeader from "../components/SubjectHeader";
import { SUBJECTS } from "../data/subjects";

const SubjectPage = ({ activeSubject }) => {
    const [level, setLevel] = useState(1);

    useEffect(() => {
        setLevel(1); // reset level on subject change
    }, [activeSubject]);

    const subject = SUBJECTS[activeSubject];
    const questions = subject.levels[level];

    return (
        <main>
            <SubjectHeader title={subject.title} description={subject.description} />

            <QuestionList key={`${activeSubject}-${level}`} questions={questions} />

            <LevelSwitcher level={level} setLevel={setLevel} />
        </main>
    );
};

export default SubjectPage;
