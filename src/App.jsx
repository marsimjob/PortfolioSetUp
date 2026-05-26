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
import { useLanguage } from "./context/LanguageContext";

export default function App() {
    const [activeData, setActiveData] = useState(null);
    const detailsRef = useRef(null);
    const { t } = useLanguage();

    const handleSelect = (data) => {
        if (!data) return;
        setActiveData(data);
    };

    const handleClose = () => {
        const slug = activeData?.repo?.split("/").pop();
        setActiveData(null);
        if (slug) {
            setTimeout(() => {
                document.getElementById(`project-${slug}`)?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }, 50);
        }
    };

    useEffect(() => {
        if (activeData && detailsRef.current) {
            detailsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }, [activeData]);

    return (
        <main className="max-w-6xl mx-auto px-6 pb-12">
            <Navibar />
            <Section id="hero">
                <Hero />
                <Toolbar />
            </Section>
            <Section id="projects">
                <Projects onSelect={handleSelect} activeItem={activeData} />
                <div ref={detailsRef} className="scroll-mt-20">
                    {activeData ? (
                        <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                            <div className="flex justify-end mb-6">
                                <button
                                    onClick={handleClose}
                                    className="text-zinc-500 hover:text-white transition"
                                >
                                    {t("app.close")}
                                </button>
                            </div>
                            <InfoDisplay project={activeData} />
                        </div>
                    ) : (
                        <div className="text-center py-16 border border-dashed border-zinc-800 rounded-2xl bg-zinc-950/50">
                            <p className="text-zinc-500">{t("app.emptyState")}</p>
                        </div>
                    )}
                </div>
                <div className="flex justify-center">
                    <motion.a
                        href="https://github.com/marsimjob"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-full bg-zinc-800 text-white font-bold shadow-lg hover:bg-zinc-700 transition"
                    >
                        {t("app.visitGithub")}
                    </motion.a>
                </div>
            </Section>
            <Section id="tech">
                <Tech />
            </Section>
            <Section id="contact">
                <Contact />
            </Section>
        </main>
    );
}
