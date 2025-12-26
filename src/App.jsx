import { useState } from "react";
import Navbar from "./components/Navbar";
import SubjectPage from "./pages/SubjectPage";

const App = () => {
  const [activeSubject, setActiveSubject] = useState("DBMS");

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
      <Navbar
        activeSubject={activeSubject}
        setActiveSubject={setActiveSubject}
      />
      <SubjectPage activeSubject={activeSubject} />
    </div>
  );
};

export default App;
