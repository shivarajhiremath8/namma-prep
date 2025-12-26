const SubjectHeader = () => {
    return (
        <section className="max-w-3xl mx-auto px-4 py-10 text-center">

            {/* Subject Title */}
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-100">
                DBMS Interview Questions
            </h2>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Carefully curated database management system questions to help you
                revise concepts, prepare confidently, and perform better in interviews.
            </p>

        </section>
    );
};

export default SubjectHeader;
