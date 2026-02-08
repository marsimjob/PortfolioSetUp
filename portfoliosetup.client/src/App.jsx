import { useState, useRef, useEffect } from "react";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Tech from "./components/sections/Tech";
import Contact from "./components/sections/Contact";
import Section from "./components/ui/Section";
import Navibar from "./components/sections/Navibar";
import Toolbar from "./components/sections/ToolboxBar";
import InfoDisplay from "./components/ui/InfoDisplay";
import { motion } from "framer-motion";
export default function App() {
    const [activeData, setActiveData] = useState(null);
    const detailsRef = useRef(null);

    const handleSelect = (data) => {
        if (!data) return;
        console.log("State Updating with:", data.title);
        setActiveData(data);
    };

    useEffect(() => {
        // Only scroll if activeData is truthy and the element exists
        if (activeData && detailsRef.current) {
            detailsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }, [activeData]);

    return (
        <main className="max-w-6xl mx-auto px-6 mb-20">
            <Navibar />
            <Section id="hero">
            <Hero/>
            <Toolbar />
            </Section>
            <Section id="projects" className="border-t border-zinc-800/50">
            <Projects onSelect={handleSelect} activeItem={activeData} />
             <div ref={detailsRef} className="scroll-mt-20">
             {activeData ? (
             <div className="mt-10 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50">
             <div className="flex justify-end mb-6">
             <button
             onClick={() => setActiveData(null)}
             className="text-zinc-500 hover:text-white transition"
             >
                 ✕ Close
             </button>
             </div>
             <InfoDisplay project={activeData} />
             </div>
             ) : (
                 <div className="mt-10 text-center py-16 border-2 border-dashed border-zinc-800/30 rounded-2xl">
                     <p className="text-zinc-500">Select a project for further breakdown and details!</p>
                 </div>
             )}
             </div>
             <div className="flex justify-center gap-4 mt-6">
             <motion.a
                 href="https://github.com/marsimjob"
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-6 py-3 rounded-full bg-zinc-800 text-white font-bold shadow-lg hover:bg-zinc-700 transition"
             >
                        Visit my GitHub Repositories
             </motion.a>
             </div>
            </Section>
            <Section id="tech" className="border-t border-zinc-800/50"><Tech /></Section>
            <Section id="contact"><Contact /></Section>
        </main>
    );
}