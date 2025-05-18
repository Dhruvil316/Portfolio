import "./App.css";
import Navbar from "./Deep/Navbar";
import Hero from "./Deep/Hero";
import About from "./Deep/About";
import Projects from "./Deep/Projects";
import Contact from "./Deep/Contact";
import TechnicalSkills from "./Deep/TechnicalSkills";
import Experience from "./Deep/Experience";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="bg-gray-900 min-h-screen text-gray-100 overflow-x-hidden"
      >
        <Navbar scrollToSection={scrollToSection} />
        <Hero />
        <About />
        <TechnicalSkills/>
        <Projects />
        <Experience/>
        <Contact />
      </div>
    </>
  );
}

export default App;
