const os = {
    1: [
        {
            id: 1,
            question: "What is an Operating System and its main purpose?",
            answer: "An OS is system software that manages computer hardware and software resources. Its main purpose is to manage memory, processes, devices, files, and security, acting as an intermediary between the user and the computer hardware."
        },
        {
            id: 2,
            question: "What are the different types of Operating Systems?",
            answer: "Major types include: Batch OS, Distributed OS, Multitasking OS, Network OS, Real-Time OS (RTOS), and Mobile OS."
        },
        {
            id: 3,
            question: "What is a Kernel and a Monolithic Kernel?",
            answer: "The Kernel is the central core of an OS that manages hardware communications. A Monolithic Kernel runs all OS services in the kernel space, offering high performance but with complex, large codebases (e.g., Linux, Unix)."
        },
        {
            id: 4,
            question: "Difference between a Process and a Program?",
            answer: "A Program is a static set of instructions stored on a disk (e.g., notepad.exe). A Process is a dynamic instance of a program in execution, occupying memory and CPU time."
        },
        {
            id: 5,
            question: "What is a Thread?",
            answer: "A thread is a path of execution within a process, often called a 'lightweight process.' It allows for parallelism within a single process (e.g., one thread for text formatting, another for user input in Word)."
        },
        {
            id: 6,
            question: "What is a Socket?",
            answer: "A socket is an endpoint for communication, identified by an IP address concatenated with a port number. A pair of processes communicating over a network uses a pair of sockets."
        },
        {
            id: 7,
            question: "What is Spooling?",
            answer: "SPOOL (Simultaneous Peripheral Operations Online) is a process where data is held temporarily in a buffer (like a printer queue) so the CPU can move on to other tasks without waiting for slow I/O devices."
        },
        {
            id: 8,
            question: "Difference between Main Memory and Secondary Memory?",
            answer: "Main Memory (RAM) is volatile, faster, and directly accessed by the CPU. Secondary Memory (HDD/SSD) is non-volatile, slower, and used for permanent storage of data."
        },
        {
            id: 9,
            question: "What is a Real-Time Operating System (RTOS)?",
            answer: "An RTOS is intended for applications with strict time constraints. It processes data as it comes in without buffer delays. Types include: Hard RTOS, Firm RTOS, and Soft RTOS."
        },
        {
            id: 10,
            question: "What is the difference between Multitasking and Multiprocessing?",
            answer: "Multitasking allows one CPU to switch between multiple tasks rapidly to give the illusion of simultaneous execution. Multiprocessing involves two or more CPUs working together to execute multiple processes at once."
        }
    ],
    2: [
        {
            id: 11,
            question: "What is Virtual Memory?",
            answer: "Virtual memory is a technique that allows a computer to address more memory than is physically installed by using a section of the hard disk to emulate RAM. It enables larger programs to run and provides memory protection."
        },
        {
            id: 12,
            question: "What is Fragmentation and its types?",
            answer: "Fragmentation is an unwanted problem where memory space is wasted. Internal: Memory block is larger than the process. External: Total free space exists but is not contiguous, so a process cannot be loaded."
        },
        {
            id: 13,
            question: "What is Paging and why is it used?",
            answer: "Paging is a memory management scheme that stores processes in non-contiguous physical memory (divided into fixed-size blocks called frames). It eliminates the need for contiguous allocation and reduces external fragmentation."
        },
        {
            id: 14,
            question: "Explain Demand Paging and Segmentation.",
            answer: "Demand Paging loads pages into memory only when they are needed (lazy evaluation). Segmentation divides memory into variable-sized parts (segments) based on the logical structure of a program (e.g., functions, stacks)."
        },
        {
            id: 15,
            question: "What are RAID and its benefits?",
            answer: "RAID (Redundant Array of Independent Disks) combines multiple disks for increased performance or data redundancy. This improves reliability; if one disk fails, data can be retrieved from another."
        },
        {
            id: 16,
            question: "What is a Semaphore? Mention Binary Semaphore.",
            answer: "A semaphore is a synchronization tool used to manage concurrent processes. A Binary Semaphore (similar to a Mutex) can only have values 0 or 1, primarily used for mutual exclusion."
        },
        {
            id: 17,
            question: "Difference between Mutex and Semaphore?",
            answer: "A Mutex is a locking mechanism (only the process that locks can unlock). A Semaphore is a signaling mechanism (any process can signal to release a resource)."
        },
        {
            id: 18,
            question: "What is the Producer-Consumer Problem?",
            answer: "A classic synchronization problem where the Producer adds data to a buffer and the Consumer removes it. The challenge is to ensure they don't access the buffer at the same time and handle full/empty states correctly."
        },
        {
            id: 19,
            question: "Define Static vs Dynamic Binding.",
            answer: "Static binding happens at compile time (faster, less flexible). Dynamic binding happens at run time (slower but more flexible, used in polymorphism/inheritance)."
        },
        {
            id: 20,
            question: "What is Cache Memory?",
            answer: "Cache is an extremely fast memory type acting as a buffer between RAM and CPU. It stores frequently requested data for immediate CPU access."
        }
    ],
    3: [
        {
            id: 21,
            question: "What is a Deadlock and what are its four necessary conditions?",
            answer: "A deadlock is a situation where processes wait indefinitely for resources held by each other. Four conditions: 1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption, 4. Circular Wait."
        },
        {
            id: 22,
            question: "What is Thrashing and why does it occur?",
            answer: "Thrashing is when the system spends more time swapping pages in/out than actually executing processes. It occurs due to a high degree of multiprogramming or a lack of available memory frames."
        },
        {
            id: 23,
            question: "Explain Belady’s Anomaly and its solution.",
            answer: "Belady’s Anomaly is when increasing the number of page frames results in an increase in page faults (seen in FIFO). Solution: Use stack-based algorithms like Optimal Page Replacement or LRU (Least Recently Used)."
        },
        {
            id: 24,
            question: "What are Starvation and Aging?",
            answer: "Starvation occurs when low-priority processes wait indefinitely because high-priority processes keep running. Aging is the solution: gradually increasing the priority of a process as it waits longer in the system."
        },
        {
            id: 25,
            question: "Explain Banker’s Algorithm.",
            answer: "A deadlock avoidance algorithm that simulates resource allocation to check for a 'Safe State' before granting a resource request, ensuring the system never enters a deadlock."
        },
        {
            id: 26,
            question: "What is Round Robin Scheduling?",
            answer: "A preemptive algorithm where each task is given a fixed time slice (quantum) in a cyclic queue. It ensures fairness and prevents starvation but depends heavily on the choice of time quantum."
        },
        {
            id: 27,
            question: "Explain SJF vs SRTF Scheduling.",
            answer: "SJF (Shortest Job First) is non-preemptive. SRTF (Shortest Remaining Time First) is the preemptive version, which switches to a new process if its remaining time is less than the current process."
        },
        {
            id: 28,
            question: "What is Priority Scheduling?",
            answer: "A method where tasks are executed based on assigned priority (higher priority first). It can lead to starvation of low-priority tasks, which is solved by Aging."
        },
        {
            id: 29,
            question: "What are FCFS and LRTF Scheduling?",
            answer: "FCFS (First Come First Serve) is simple but can cause the 'Convoy Effect.' LRTF (Longest Remaining Time First) is a preemptive version of Longest Job First, focusing on processes with the maximum remaining burst time."
        },
        {
            id: 30,
            question: "What is the difference between Direct and Associative Mapping in Cache?",
            answer: "Direct Mapping maps each block of main memory to only one specific possible cache line. Associative Mapping allows a block of main memory to be stored in any cache line, which is more flexible but requires complex searching hardware."
        }
    ]
};

export default os;