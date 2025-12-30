const dbms = {
    1: [
        {
            id: 1,
            question: "What is DBMS and its advantages?",
            answer: "A Database Management System (DBMS) is software for storing and retrieving users' data with security measures. Advantages include: Improved data sharing, better data integration, minimized data inconsistency, improved data access, and better decision-making."
        },
        {
            id: 2,
            question: "What is a Database and a Database System?",
            answer: {
                answer:
                    "A database is an organized collection of structured information stored electronically. A database system refers to the combination of the data, the DBMS, and the associated applications.",
                video: "https://youtu.be/lvCZk3k4-34",
            },
        },
        {
            id: 3,
            question: "What are the levels of Data Abstraction?",
            answer: "Data Abstraction hides complex details from users. The three levels are: 1. Physical Level (how data is stored), 2. Logical Level (what data is stored and relationships), and 3. View Level (what the end-user sees)."
        },
        {
            id: 4,
            question: "What is RDBMS and its properties?",
            answer: "RDBMS is based on the relational model (tables). Properties: Values are atomic, columns have same data type, each row is unique, sequence of rows/columns is insignificant, and integrity constraints are maintained."
        },
        {
            id: 5,
            question: "What is an E-R Model?",
            answer: "The Entity-Relationship (ER) model is a high-level conceptual data model used to define data elements and their relationships, visually represented as an ER Diagram."
        },
        {
            id: 6,
            question: "Define Entity, Entity Type, and Entity Set.",
            answer: "An Entity is a real-world object (e.g., Student). Entity Type is a collection of entities with similar attributes. Entity Set is a collection of all entities of a specific entity type at a given time."
        },
        {
            id: 7,
            question: "What is a Weak Entity Set?",
            answer: "A weak entity type doesn't have a key attribute of its own and depends on a 'strong' entity for its identity (e.g., Dependents of an Employee)."
        },
        {
            id: 8,
            question: "What is SQL and what are its types?",
            answer: "SQL is used to communicate with databases. Types include: DDL (Define structure), DML (Manipulate data), DCL (Control access), and TCL (Manage transactions)."
        },
        {
            id: 9,
            question: "Difference between DDL and DML?",
            answer: "DDL (Data Definition Language) like CREATE/ALTER defines the skeleton or schema. DML (Data Manipulation Language) like SELECT/INSERT/UPDATE handles the actual data records."
        },
        {
            id: 10,
            question: "What are the types of relationships in DBMS?",
            answer: "Relationships define associations between entities: Unary (1 entity), Binary (2 entities), Ternary (3 entities), and N-ary (N entities)."
        }
    ],
    2: [
        {
            id: 11,
            question: "Explain the various Keys in DBMS.",
            answer: "Super Key (uniquely identifies tuples), Candidate Key (minimal super key), Primary Key (selected unique identifier, NOT NULL), Foreign Key (links to another table's primary key), and Composite Key (multi-attribute primary key)."
        },
        {
            id: 12,
            question: "What is a Foreign Key and its purpose?",
            answer: {
                answer:
                    "A [Foreign Key] is an attribute in one table that references the [Primary Key] of another. It maintains referential integrity and establishes links between tables.",
                video: "https://youtu.be/lvCZk3k4-34",
            },
        },

        {
            id: 13,
            question: "What is Normalization and why is it used?",
            answer: "Normalization organizes data by splitting large tables into smaller ones to reduce redundancy and prevent anomalies (Insert, Update, Delete)."
        },
        {
            id: 14,
            question: "What are 1NF, 2NF, and 3NF?",
            answer: "1NF: Atomic values; 2NF: 1NF + no partial functional dependency; 3NF: 2NF + no transitive dependency."
        },
        {
            id: 15,
            question: "What is Denormalization?",
            answer: "An optimization technique where redundant data is added back to a normalized database to reduce expensive JOIN operations and improve read performance."
        },
        {
            id: 16,
            question: "What is Functional Dependency?",
            answer: "A constraint (X -> Y) where the value of attribute X uniquely determines the value of attribute Y."
        },
        {
            id: 17,
            question: "What is a JOIN and mention its types?",
            answer: "Joins combine rows from two or more tables. Types: Inner Join (matches in both), Left Join (all from left + matches), Right Join (all from right + matches), and Full Join (all records from both)."
        },
        {
            id: 18,
            question: "Difference between DELETE and TRUNCATE?",
            answer: "DELETE is a DML command (removes rows one by one, can be rolled back). TRUNCATE is a DDL command (removes all rows, faster, cannot be easily rolled back)."
        },
        {
            id: 19,
            question: "What are Nested Queries?",
            answer: "A Nested Query (Subquery) is a query within another SQL query, usually embedded in the WHERE or FROM clause to filter data based on the inner query's result."
        },
        {
            id: 20,
            question: "2-Tier vs 3-Tier Architecture?",
            answer: "2-Tier: Client communicates directly with Server. 3-Tier: An application server sits between the Client and the Database (adding a layer of security and scalability)."
        }
    ],
    3: [
        {
            id: 21,
            question: "What are ACID properties? (VVV IMP)",
            answer: "Atomicity (All or nothing), Consistency (Valid state), Isolation (Independent execution), and Durability (Permanent changes)."
        },
        {
            id: 22,
            question: "What is Indexing and how does it work?",
            answer: "Indexing is a data structure technique used to quickly locate data without scanning every row. It minimizes disk access and optimizes query performance."
        },
        {
            id: 23,
            question: "Explain Horizontal vs Vertical Scaling.",
            answer: "Vertical: Adding more power (CPU/RAM) to an existing machine. Horizontal: Adding more machines/instances to share the load (Load Balancing)."
        },
        {
            id: 24,
            question: "What is Sharding?",
            answer: "Sharding is splitting a single large dataset across multiple databases/machines so a cluster can handle more traffic and store more data than a single node."
        },
        {
            id: 25,
            question: "What is Conflict Serializability?",
            answer: "A schedule is conflict serializable if it can be transformed into a serial schedule by swapping non-conflicting operations, ensuring database consistency."
        },
        {
            id: 26,
            question: "What is Concurrency Control? (CCP)",
            answer: "Management procedures to control simultaneous execution of transactions. Types: Lock-based, Timestamp-based, and Validation-based protocols."
        },
        {
            id: 27,
            question: "Difference between Shared Lock and Exclusive Lock?",
            answer: "Shared Lock (S): Allows multiple transactions to read data but not write. Exclusive Lock (X): Only one transaction can access the data for both reading and writing."
        },
        {
            id: 28,
            question: "What is BCNF?",
            answer: "Boyce-Codd Normal Form is an advanced, stricter version of 3NF. A table is in BCNF if for every functional dependency X -> Y, X is a superkey."
        },
        {
            id: 29,
            question: "What is Transaction Control Language (TCL)?",
            answer: "TCL commands manage changes made by DML. Key commands: COMMIT (save changes), ROLLBACK (undo changes), and SAVEPOINT (set a point to roll back to)."
        },
        {
            id: 30,
            question: "What is Data Independence?",
            answer: "The ability to modify the schema at one level (e.g., Physical) without affecting the schema at a higher level (e.g., Logical), achieved through data abstraction."
        }
    ]
};

export default dbms;