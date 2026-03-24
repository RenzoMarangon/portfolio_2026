import "./App.css";
import { Navbar } from "./components/Navbar";
import { TooltipProvider } from "./components/ui/tooltip";
import { Projects } from "./Sections/Projects";

function App() {
  return (
    <>
      <TooltipProvider>
        <Navbar />
        <Projects />
      </TooltipProvider>
    </>
  );
}

export default App;
