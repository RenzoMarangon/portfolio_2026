import "./App.css";
import { Navbar } from "./components/Navbar";
import { TooltipProvider } from "./components/ui/tooltip";
import { About } from "./Sections/About";
import { Projects } from "./Sections/Projects";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <TooltipProvider>
        <Navbar />
        <About />
        <Projects />
        <Toaster />
      </TooltipProvider>
    </>
  );
}

export default App;
