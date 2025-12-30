export const CONCEPTS = {
    "Primary Key": {
        question: "What is a Primary Key?",
        answer:
            "A Primary Key uniquely identifies each record in a table and cannot contain NULL values.",
    },

    "Foreign Key": {
        question: "What is a Foreign Key?",
        answer:
            "A Foreign Key is an attribute in one table that references the Primary Key of another table to maintain referential integrity.",
    },

    "Super Key": {
        question: "What is a Super Key?",
        answer:
            "A Super Key is a set of one or more attributes that uniquely identify a tuple in a relation.",
    },

    "Candidate Key": {
        question: "What is a Candidate Key?",
        answer:
            "A Candidate Key is a minimal Super Key, meaning no proper subset can uniquely identify a tuple.",
    },

    "Composite Key": {
        question: "What is a Composite Key?",
        answer:
            "A Composite Key is a primary key composed of two or more attributes.",
    },
};
