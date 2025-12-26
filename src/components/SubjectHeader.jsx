const SubjectHeader = ({ title, description }) => {
    return (
        <section className="max-w-3xl mx-auto px-4 py-10 text-center">
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-100">
                {title}
            </h2>

            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                {description}
            </p>
        </section>
    );
};

export default SubjectHeader;
