import { useState, useRef, useEffect } from "react";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Tech from "./components/sections/Tech";
import Contact from "./components/sections/Contact";
import Section from "./components/ui/Section";
import Navibar from "./components/sections/Navibar";
import Toolbar from "./components/sections/ToolboxBar";
import InfoDisplay from "./components/ui/InfoDisplay";
import BootScreen from "./components/ui/BootScreen";
import WaveDivider from "./components/ui/WaveDivider";
import ClickPulse from "./components/ui/ClickPulse";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./context/LanguageContext";

export default function App() {
    const [activeData, setActiveData] = useState(null);
    const [booting, setBooting] = useState(true);
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
            <AnimatePresence>
                {booting && <BootScreen onDone={() => setBooting(false)} />}
            </AnimatePresence>
            <ClickPulse />
            <Navibar />
            <Section id="hero">
                <Hero />
                <Toolbar />
            </Section>
            <WaveDivider />
            <Section id="projects">
                <Projects onSelect={handleSelect} activeItem={activeData} />
                <div ref={detailsRef} className="scroll-mt-20">
                    {activeData ? (
                        <motion.div
                            key={activeData.repo}
                            layoutId={`proj-${activeData.repo}`}
                            transition={{ type: "spring", stiffness: 180, damping: 22 }}
                            className="p-6 bg-[#0d1422] rounded-2xl border border-white/8"
                        >
                            <div className="flex justify-end mb-6">
                                <button
                                    onClick={handleClose}
                                    className="text-zinc-500 hover:text-white transition"
                                >
                                    {t("app.close")}
                                </button>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 0.22, type: "spring", stiffness: 300, damping: 15 }}
                            >
                                <InfoDisplay project={activeData} />
                            </motion.div>
                        </motion.div>
                    ) : (
                        <div className="text-center py-16 border border-dashed border-white/8 rounded-2xl bg-[#0d1422]/50">
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
            <WaveDivider flip />
            <Section id="tech">
                <Tech />
            </Section>
            <WaveDivider />
            <Section id="contact">
                <Contact />
            </Section>
        </main>
    );
}
