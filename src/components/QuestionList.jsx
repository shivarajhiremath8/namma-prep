import QuestionItem from "./QuestionItem";

const QuestionList = ({ questions, searchTerm }) => {
    return (
        <section className="max-w-3xl mx-auto px-4">
            <div className="space-y-3">
                {questions.map((q) => (
                    <QuestionItem
                        key={q.id}
                        question={q.question}
                        answer={q.answer}
                        searchTerm={searchTerm}
                    />
                ))}
            </div>
        </section>
    );
};

export default QuestionList;
