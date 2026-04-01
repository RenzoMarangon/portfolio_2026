import "./App.css";
import { Navbar } from "./components/Navbar";
import { TooltipProvider } from "./components/ui/tooltip";
import { About } from "./Sections/About";
import { Projects } from "./Sections/Projects";
import { Toaster } from "sonner";
import { Skills } from "./Sections/Skills";
import { Contact } from "./Sections/Contact";

function App() {
  return (
    <>
      <TooltipProvider>
        <header className="fixed top-0 z-50 w-full ">
          <Navbar />
        </header>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Toaster />
      </TooltipProvider>
    </>
  );
}

export default App;
