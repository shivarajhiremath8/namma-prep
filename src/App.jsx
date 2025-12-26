import Navbar from "./components/Navbar";
import SubjectPage from "./pages/SubjectPage";

const App = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <Navbar />
      <SubjectPage />
    </div>
  );
};

export default App;
