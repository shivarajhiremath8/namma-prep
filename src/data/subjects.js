import cn from "./cn";
import dbms from "./dbms";
import os from "./os";

export const SUBJECTS = {
    DBMS: {
        title: "DBMS Interview Questions",
        description:
            "Carefully curated DBMS questions to help you revise concepts and crack interviews.",
        data: dbms,
    },
    OS: {
        title: "Operating Systems Interview Questions",
        description:
            "Core OS questions covering processes, memory, and scheduling concepts.",
        data: os,
    },
    CN: {
        title: "Computer Networks Interview Questions",
        description:
            "Important networking questions explained in a simple and interview-focused way.",
        data: cn,
    },
};
