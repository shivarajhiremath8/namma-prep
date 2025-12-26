import QuestionItem from "./QuestionItem";

const QuestionList = ({ questions }) => {
    return (
        <section className="max-w-3xl mx-auto px-4 pb-16">
            <div className="space-y-3">
                {questions.map((item) => (
                    <QuestionItem
                        key={item.id}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </section>
    );
};

export default QuestionList;
