import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Tech from "./components/sections/Tech";
import Contact from "./components/sections/Contact";
import Section from "./components/ui/Section"; // Our new wrapper
import Navibar from "./components/sections/Navibar";
import Toolbar from "./components/sections/ToolboxBar";


export default function App() {
  return (
    <main className="max-w-6xl mx-auto px-6 mb-20">
      <Navibar /> 
      <Section id="hero">
      <Hero />
      </Section>
           <Toolbar />
      <Section id="projects" className="border-t border-zinc-800/50">
        <Projects />
      </Section>

      <Section id="tech" className="border-t border-zinc-800/50">
        <Tech />
      </Section>

      <Section id="contact">
        <Contact />
      </Section>
    </main>
  );
}