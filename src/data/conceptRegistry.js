export const CONCEPTS = {
    /* ===================== KEYS ===================== */
    "Primary Key": {
        question: "What is a Primary Key?",
        answer:
            "A Primary Key uniquely identifies each record in a table. It cannot contain NULL values and must be unique for every row.",
    },

    "Foreign Key": {
        question: "What is a Foreign Key?",
        answer:
            "A Foreign Key is an attribute in one table that references the [Primary Key] of another table. It is used to maintain referential integrity between tables.",
    },

    "Super Key": {
        question: "What is a Super Key?",
        answer:
            "A Super Key is a set of one or more attributes that uniquely identify a tuple (row) in a relation.",
    },

    "Candidate Key": {
        question: "What is a Candidate Key?",
        answer:
            "A Candidate Key is a minimal [Super Key], meaning no proper subset of it can uniquely identify a tuple.",
    },

    "Composite Key": {
        question: "What is a Composite Key?",
        answer:
            "A Composite Key is a key formed using two or more attributes together to uniquely identify a record.",
    },

    "Keys": {
        question: "What are Keys in DBMS?",
        answer:
            "Keys are attributes used to identify rows uniquely in a table and establish relationships between tables. Common types include [Primary Key], [Foreign Key], and [Candidate Key].",
    },

    /* ===================== DBMS BASICS ===================== */
    "Database Management System": {
        question: "What is DBMS?",
        answer:
            "DBMS stands for Database Management System. It is software that allows users to store, retrieve, update, and manage data efficiently with security and integrity.",
    },

    "DBMS": {
        question: "What is DBMS?",
        answer:
            "DBMS stands for Database Management System. It is software used to manage [Database] operations.",
    },

    "Database": {
        question: "What is a Database?",
        answer:
            "A Database is an organized collection of related data stored electronically, allowing easy access, management, and updating.",
    },

    "RDBMS": {
        question: "What is RDBMS?",
        answer:
            "RDBMS stands for Relational Database Management System. It stores data in tables (relations) consisting of rows and columns and follows relational principles.",
    },

    "Data Abstraction": {
        question: "What is Data Abstraction?",
        answer:
            "Data Abstraction is the process of hiding unwanted or complex details from the end user to provide a simplified view of the data.",
    },

    /* ===================== DATA MODELS ===================== */
    "Entity-Relationship": {
        question: "What is the E-R Model?",
        answer:
            "The [ER] model describes data as entities, attributes, and relationships. It is used to create a conceptual design of a database.",
    },

    "ER": {
        question: "What is ER?",
        answer: "Stands for Entity-Relationship. See [Entity-Relationship].",
    },

    "Entity": {
        question: "What is an Entity?",
        answer:
            "An Entity is a real-world object or concept that can be uniquely identified and has attributes, such as Student or Employee.",
    },

    "Entity Type": {
        question: "What is an Entity Type?",
        answer:
            "An Entity Type is a collection of similar entities that share the same attributes.",
    },

    "Entity Set": {
        question: "What is an Entity Set?",
        answer:
            "An Entity Set is a collection of all entities of a particular [Entity Type] at a given time.",
    },

    "Weak Entity": {
        question: "What is a Weak Entity?",
        answer:
            "A Weak Entity is an entity that does not have a [Primary Key] of its own and depends on a strong entity for identification.",
    },

    /* ===================== NORMALIZATION ===================== */
    "Normalization": {
        question: "What is Normalization?",
        answer:
            "Normalization is the process of organizing data in a database to reduce redundancy and avoid anomalies during insert, update, and delete operations.",
    },

    "Denormalization": {
        question: "What is Denormalization?",
        answer:
            "Denormalization is the process of adding redundant data to one or more tables to improve query performance by reducing the need for [Joins].",
    },

    "1NF": {
        question: "What is First Normal Form (1NF)?",
        answer:
            "A table is in 1NF if all attributes contain atomic (indivisible) values and there are no repeating groups.",
    },

    "2NF": {
        question: "What is Second Normal Form (2NF)?",
        answer:
            "A table is in 2NF if it is in [1NF] and has no partial dependency, meaning non-prime attributes depend on the whole primary key.",
    },

    "3NF": {
        question: "What is Third Normal Form (3NF)?",
        answer:
            "A table is in 3NF if it is in [2NF] and has no transitive dependency.",
    },

    "BCNF": {
        question: "What is BCNF?",
        answer:
            "Boyce-Codd Normal Form (BCNF) is a stronger version of [3NF]. A table is in BCNF if for every functional dependency X → Y, X is a super key.",
    },

    /* ===================== DEPENDENCIES & SCALING ===================== */
    "Functional Dependency": {
        question: "What is Functional Dependency?",
        answer:
            "A Functional Dependency (X → Y) means that the value of attribute X uniquely determines the value of attribute Y.",
    },

    "Horizontal Scaling": {
        question: "What is Horizontal Scaling?",
        answer: "Adding more machines to your network to share the processing load (Scaling Out).",
    },

    "Vertical Scaling": {
        question: "What is Vertical Scaling?",
        answer: "Increasing the power (CPU, RAM) of an existing machine (Scaling Up).",
    },

    "Sharding": {
        question: "What is Sharding?",
        answer: "A database architecture pattern that stores data across multiple machines by horizontal partitioning.",
    },

    /* ===================== TRANSACTIONS ===================== */
    "Transaction": {
        question: "What is a Transaction?",
        answer:
            "A Transaction is a sequence of database operations performed as a single logical unit of work.",
    },

    "ACID": {
        question: "What are ACID properties?",
        answer:
            "ACID stands for [Atomicity], [Consistency], [Isolation], and [Durability]. These properties ensure reliable processing of transactions.",
    },

    "Atomicity": {
        question: "What is Atomicity?",
        answer:
            "Atomicity ensures that a transaction is either completely executed or not executed at all ('all or nothing').",
    },

    "Consistency": {
        question: "What is Consistency?",
        answer:
            "Consistency ensures that a transaction brings the database from one valid state to another valid state.",
    },

    "Isolation": {
        question: "What is Isolation?",
        answer:
            "Isolation ensures that concurrent transactions do not interfere with each other’s execution.",
    },

    "Durability": {
        question: "What is Durability?",
        answer:
            "Durability ensures that once a transaction is committed, its changes persist even after system failure.",
    },

    /* ===================== SQL & OPERATIONS ===================== */
    "SQL": {
        question: "What is SQL?",
        answer:
            "SQL (Structured Query Language) is used to interact with relational databases to define, manipulate, and control data.",
    },

    "Joins": {
        question: "What are Joins?",
        answer: "Joins are used to combine rows from two or more tables based on a related column between them.",
    },

    "DDL": {
        question: "What is DDL?",
        answer:
            "DDL (Data Definition Language) is used to define database schema objects (CREATE, ALTER, DROP).",
    },

    "DML": {
        question: "What is DML?",
        answer:
            "DML (Data Manipulation Language) is used to manage data within schema objects (SELECT, INSERT, UPDATE, DELETE).",
    },

    "DCL": {
        question: "What is DCL?",
        answer:
            "DCL (Data Control Language) is used to control access (GRANT, REVOKE).",
    },

    "TCL": {
        question: "What is TCL?",
        answer:
            "TCL (Transaction Control Language) manages [Transaction] changes (COMMIT, ROLLBACK).",
    },

    "Transaction Control Language": {
        question: "What is TCL?",
        answer: "See [TCL].",
    },

    "Indexing": {
        question: "What is Indexing?",
        answer: "A data structure technique used to quickly locate and access the data in a database without scanning every row.",
    },

    "3-Tier Architecture": {
        question: "What is 3-Tier Architecture?",
        answer: "A client-server architecture in which the user interface, functional process logic, and data storage are developed and maintained as independent modules.",
    },

    /* ===================== ADVANCED OPERATIONS ===================== */
    "DELETE": {
        question: "What is the DELETE command?",
        answer:
            "DELETE is a [DML] command used to remove specific rows from a table based on a condition. It is slower than TRUNCATE because it logs each row deletion, allowing it to be rolled back."
    },

    "TRUNCATE": {
        question: "What is the TRUNCATE command?",
        answer:
            "TRUNCATE is a [DDL] command that removes all rows from a table. It is faster than [DELETE] because it does not log individual row deletions and resets the table, but it cannot be rolled back easily."
    },

    "Nested Query": {
        question: "What is a Nested Query?",
        answer:
            "A Nested Query (or Subquery) is a query embedded within the WHERE or FROM clause of another SQL query. It is used to return data that will be used in the main query as a condition."
    },

    "Nested Queries": {
        question: "What are Nested Queries?",
        answer: "See [Nested Query]."
    },

    /* ===================== CONCURRENCY & SERIALIZABILITY ===================== */
    "Conflict Serializable": {
        question: "What is Conflict Serializability?",
        answer:
            "A schedule is Conflict Serializable if it can be transformed into a serial schedule by swapping non-conflicting operations. This ensures that concurrent execution results in a consistent database state."
    },

    "Concurrency Control": {
        question: "What is Concurrency Control?",
        answer:
            "Concurrency Control is the procedure in a [DBMS] that manages simultaneous operations so they don't conflict with each other, ensuring the [ACID] properties are maintained."
    },

    "Shared Lock": {
        question: "What is a Shared Lock (S)?",
        answer:
            "A Shared Lock allows multiple transactions to read a data item simultaneously but prevents any of them from updating or writing to it."
    },

    "Exclusive Lock": {
        question: "What is an Exclusive Lock (X)?",
        answer:
            "An Exclusive Lock grants a transaction the sole right to both read and write to a data item. No other transaction can even read the data while an Exclusive Lock is held."
    },

    /* ===================== ARCHITECTURE ===================== */
    "Data Independence": {
        question: "What is Data Independence?",
        answer:
            "Data Independence is the ability to modify the schema at one level (like the Physical Level) without having to change the schema at the next higher level (like the Logical Level)."
    }
};