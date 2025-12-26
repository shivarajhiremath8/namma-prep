import QuestionList from "../components/QuestionList";
import SubjectHeader from "../components/SubjectHeader";
import { SUBJECTS } from "../data/subjects";

const SubjectPage = ({ activeSubject }) => {
    const subject = SUBJECTS[activeSubject];

    return (
        <main>
            <SubjectHeader
                title={subject.title}
                description={subject.description}
            />
            <QuestionList questions={subject.data} />
        </main>
    );
};

export default SubjectPage;
