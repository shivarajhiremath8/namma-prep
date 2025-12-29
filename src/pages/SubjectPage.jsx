import { useState, useEffect } from "react";
import SubjectHeader from "../components/SubjectHeader";
import QuestionList from "../components/QuestionList";
import LevelSwitcher from "../components/LevelSwitcher";
import SearchBar from "../components/SearchBar";
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

  useEffect(() => {
    setLevel(getInitialLevel(activeSubject));
    setSearch(""); // reset search on subject change
  }, [activeSubject]);

  useEffect(() => {
    localStorage.setItem(`level-${activeSubject}`, level);
  }, [level, activeSubject]);

  const subject = SUBJECTS[activeSubject];
  const allQuestions = subject.levels[level];

  // 🔍 filter logic
  const filteredQuestions = allQuestions.filter(
    (q) =>
      q.question.toLowerCase().includes(search.toLowerCase()) ||
      q.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <SubjectHeader
        title={subject.title}
        description={subject.description}
      />

      <SearchBar value={search} onChange={setSearch} />

      <QuestionList
        key={`${activeSubject}-${level}`}
        questions={filteredQuestions}
        searchTerm={search}
      />

      <LevelSwitcher level={level} setLevel={setLevel} />
    </main>
  );
};

export default SubjectPage;
