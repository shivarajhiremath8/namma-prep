import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SubjectPage from "./pages/SubjectPage";

const App = () => {
  const [activeSubject, setActiveSubject] = useState("DBMS");

  const [isDark, setIsDark] = useState(() => {
    if (localStorage.theme) {
      return localStorage.theme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
      <Navbar
        activeSubject={activeSubject}
        setActiveSubject={setActiveSubject}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <SubjectPage activeSubject={activeSubject} />
    </div>
  );
};

export default App;
