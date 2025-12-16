import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import SectionTabs from "./SectionTabs";
import ThemeToggle from "./ThemeToggle";

const InterviewPrepSection = () => {
    const [activeSection, setActiveSection] = useState("DBMS");
    const [activeQuestionId, setActiveQuestionId] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    const interviewData = {
        DBMS: [
            {
                id: "dbms-1",
                question: "What is DBMS?",
                answer: "DBMS stands for Database Management System. It is software that allows users to create, manage, and manipulate databases. It provides an interface between the database and end users or application programs, ensuring data integrity, security, and efficient access.",
                hint: "Concept • DBMS • Theory"
            },
            {
                id: "dbms-2",
                question: "What are the different types of DBMS?",
                answer: "The main types of DBMS are: Hierarchical DBMS, Network DBMS, Relational DBMS (RDBMS), Object-oriented DBMS, and NoSQL DBMS. Each type has its own advantages and use cases, with RDBMS being the most widely used for structured data applications.",
                hint: "Types • DBMS • Classification"
            },
            {
                id: "dbms-3",
                question: "What is normalization in DBMS?",
                answer: "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing large tables into smaller, related tables and defining relationships between them using normalization forms (1NF, 2NF, 3NF, BCNF).",
                hint: "Process • DBMS • Design"
            },
            {
                id: "dbms-4",
                question: "Explain ACID properties in DBMS.",
                answer: "ACID stands for Atomicity, Consistency, Isolation, and Durability. These are properties that guarantee reliable processing of database transactions: Atomicity ensures all operations complete or none do, Consistency maintains database integrity, Isolation prevents interference between transactions, and Durability ensures committed changes persist even after system failures.",
                hint: "Properties • DBMS • Transactions"
            },
            {
                id: "dbms-5",
                question: "What is the difference between SQL and NoSQL?",
                answer: "SQL databases are relational, use structured query language, and have predefined schemas. NoSQL databases are non-relational, can handle unstructured data, and are more flexible with schema design. SQL is better for complex queries and transactions, while NoSQL excels at scalability and handling large volumes of data.",
                hint: "Comparison • DBMS • Types"
            },
            {
                id: "dbms-6",
                question: "What are indexes in DBMS?",
                answer: "Indexes are data structures that improve the speed of data retrieval operations on a database table. They work similar to book indexes, allowing quick lookup of rows based on column values. However, they can slow down write operations and take up additional storage space.",
                hint: "Performance • DBMS • Optimization"
            }
        ],
        OS: [
            {
                id: "os-1",
                question: "What is an Operating System?",
                answer: "An Operating System (OS) is system software that manages computer hardware and software resources, and provides common services for computer programs. It acts as an intermediary between users and computer hardware, managing processes, memory, files, and input/output operations.",
                hint: "Definition • OS • Core"
            },
            {
                id: "os-2",
                question: "Explain the concept of processes and threads.",
                answer: "A process is an instance of a program in execution, with its own memory space and resources. A thread is a lightweight process that shares the same memory space with other threads within the same process. Threads are more efficient for concurrent execution within a single process.",
                hint: "Concurrency • OS • Execution"
            },
            {
                id: "os-3",
                question: "What is virtual memory?",
                answer: "Virtual memory is a memory management technique that provides an idealized abstraction of the storage resources that are actually available on a given machine. It allows processes to use more memory than is physically available by using disk space as an extension of RAM.",
                hint: "Memory • OS • Management"
            },
            {
                id: "os-4",
                question: "Explain deadlock and its prevention.",
                answer: "A deadlock is a situation where two or more processes are unable to proceed because each is waiting for the other to release a resource. Deadlock prevention involves ensuring that at least one of the four necessary conditions doesn't hold: mutual exclusion, hold and wait, no preemption, and circular wait.",
                hint: "Problem • OS • Synchronization"
            },
            {
                id: "os-5",
                question: "What is paging in OS?",
                answer: "Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. It allows the physical address space of a process to be non-contiguous. The physical memory is divided into fixed-size blocks called frames, and logical memory is divided into blocks of the same size called pages.",
                hint: "Memory • OS • Allocation"
            },
            {
                id: "os-6",
                question: "Explain CPU scheduling algorithms.",
                answer: "CPU scheduling algorithms determine which process runs on the CPU when multiple processes are ready. Common algorithms include: First-Come-First-Served (FCFS), Shortest Job First (SJF), Priority Scheduling, Round Robin, and Multi-level Queue Scheduling. Each has different characteristics in terms of fairness, efficiency, and response time.",
                hint: "Scheduling • OS • CPU"
            }
        ],
        CN: [
            {
                id: "cn-1",
                question: "What is Computer Networking?",
                answer: "Computer Networking is the practice of connecting computers and other devices together to share resources and exchange information. It involves the design, implementation, and management of computer networks, including hardware, software, and protocols that enable communication between devices.",
                hint: "Definition • CN • Basics"
            },
            {
                id: "cn-2",
                question: "Explain the OSI model.",
                answer: "The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes the functions of a telecommunication or computing system into seven distinct layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. Each layer has specific responsibilities and interfaces with adjacent layers.",
                hint: "Model • CN • Architecture"
            },
            {
                id: "cn-3",
                question: "What is TCP/IP protocol suite?",
                answer: "TCP/IP is a suite of communication protocols used to interconnect network devices on the internet. TCP (Transmission Control Protocol) provides reliable, ordered delivery of data, while IP (Internet Protocol) handles addressing and routing. The suite includes protocols like HTTP, FTP, SMTP, and DNS.",
                hint: "Protocols • CN • Suite"
            },
            {
                id: "cn-4",
                question: "Explain the difference between TCP and UDP.",
                answer: "TCP (Transmission Control Protocol) is connection-oriented, reliable, and ensures data delivery with error checking and retransmission. UDP (User Datagram Protocol) is connectionless, unreliable, and faster but doesn't guarantee delivery. TCP is used for applications requiring reliability (HTTP, FTP), while UDP is used for real-time applications (video streaming, gaming).",
                hint: "Comparison • CN • Transport"
            },
            {
                id: "cn-5",
                question: "What is subnetting?",
                answer: "Subnetting is the process of dividing a larger network into smaller, more manageable sub-networks (subnets). It improves network performance, security, and organization by reducing network congestion and allowing for better traffic management. Subnetting involves borrowing bits from the host portion of an IP address to create subnet addresses.",
                hint: "Network • CN • Division"
            },
            {
                id: "cn-6",
                question: "Explain DNS and its working.",
                answer: "DNS (Domain Name System) is a hierarchical naming system that translates human-readable domain names into IP addresses. When a user enters a domain name, DNS servers recursively resolve it: first checking local cache, then root servers, TLD servers, and authoritative servers until the IP address is found.",
                hint: "Resolution • CN • Naming"
            }
        ],
        'System Design': [
            {
                id: "sd-1",
                question: "What is System Design?",
                answer: "System Design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. It involves making high-level decisions about the system's structure, behavior, and implementation, considering factors like scalability, reliability, performance, and maintainability.",
                hint: "Definition • SD • Process"
            },
            {
                id: "sd-2",
                question: "Explain scalability in system design.",
                answer: "Scalability is the ability of a system to handle increased load by adding resources. There are two types: Vertical scaling (adding more power to existing machines) and Horizontal scaling (adding more machines). Horizontal scaling is generally preferred for large systems as it provides better fault tolerance and cost-effectiveness.",
                hint: "Capacity • SD • Growth"
            },
            {
                id: "sd-3",
                question: "What is load balancing?",
                answer: "Load balancing is the process of distributing network traffic across multiple servers to ensure no single server becomes overwhelmed. It improves responsiveness, increases availability, and provides fault tolerance. Common algorithms include Round Robin, Least Connections, and IP Hash.",
                hint: "Distribution • SD • Traffic"
            },
            {
                id: "sd-4",
                question: "Explain database sharding.",
                answer: "Database sharding is a horizontal partitioning technique that splits large databases into smaller, more manageable pieces called shards. Each shard is stored on a separate database server instance to spread load and improve performance. Sharding can be based on ranges, hashes, or directories.",
                hint: "Partitioning • SD • Database"
            },
            {
                id: "sd-5",
                question: "What is caching and its types?",
                answer: "Caching is the process of storing frequently accessed data in a temporary storage area for faster retrieval. Types include: In-memory caching (Redis, Memcached), CDN caching for static content, Database query caching, and Browser caching. Caching improves performance but requires careful cache invalidation strategies.",
                hint: "Performance • SD • Storage"
            },
            {
                id: "sd-6",
                question: "Explain CAP theorem.",
                answer: "The CAP theorem states that in a distributed system, you can only guarantee two out of three properties: Consistency (all nodes see the same data simultaneously), Availability (system remains operational despite failures), and Partition Tolerance (system continues to operate despite network partitions). Most systems prioritize AP or CP depending on requirements.",
                hint: "Theorem • SD • Distributed"
            }
        ]
    };

    const handleToggle = (id) => {
        setActiveQuestionId((prev) => (prev === id ? null : id));
    };

    const handleSectionChange = (section) => {
        setActiveSection(section);
        setActiveQuestionId(null);
    };

    const currentQuestions = interviewData[activeSection];

    return (
        <div className={isDarkMode ? "bg-slate-950 min-h-screen" : "bg-sky-50 min-h-screen"}>
            <div className="max-w-6xl mx-auto px-4 py-10">

                {/* Top Bar */}
                <div className="flex justify-between items-center mb-10">
                    <span className="text-sm font-mono text-slate-500">
                        Reading mode
                    </span>
                    <ThemeToggle isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(v => !v)} />
                </div>

                {/* Tabs */}
                <SectionTabs
                    sections={Object.keys(interviewData)}
                    activeSection={activeSection}
                    onSectionChange={handleSectionChange}
                />

                {/* Header */}
                <div className="text-center mt-10 mb-12">
                    <h1 className="font-mono text-[24px] sm:text-[28px] font-semibold text-slate-900 dark:text-slate-100">
                        Lets get started
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto font-mono text-[15px] leading-[1.65] text-slate-600 dark:text-slate-400">
                        Master your technical interviews with comprehensive questions and
                        detailed explanations across key computer science domains.
                    </p>
                </div>

                {/* Questions */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-start">
                    {currentQuestions.map((q) => (
                        <QuestionCard
                            key={q.id}
                            id={q.id}
                            question={q.question}
                            answer={q.answer}
                            isOpen={activeQuestionId === q.id}
                            onToggle={handleToggle}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InterviewPrepSection;