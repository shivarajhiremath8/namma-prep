import QuestionItem from "./QuestionItem";

const QuestionList = ({ questions, searchTerm }) => {
    return (
        <div className="max-w-3xl mx-auto px-4 space-y-3">
            {questions.map((q) => (
                <QuestionItem
                    key={q.id}
                    question={q.question}
                    answer={q.answer}
                    searchTerm={searchTerm}
                />
            ))}
        </div>
    );
};

export default QuestionList;
