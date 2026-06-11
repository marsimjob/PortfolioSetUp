import { getProjects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const CATEGORIES = ["Fullstack", "Frontend", "Backend"];

const categoryLabel = {
    Backend:   { en: "Backend",   sv: "Backend"   },
    Frontend:  { en: "Frontend",  sv: "Frontend"  },
    Fullstack: { en: "Fullstack", sv: "Fullstack" },
};

export default function Projects({ onSelect, activeItem }) {
    const { language, t } = useLanguage();
    const projects = getProjects(language);

    const grouped = CATEGORIES.reduce((acc, cat) => {
        acc[cat] = projects.filter((p) => p.category === cat);
        return acc;
    }, {});

    return (
        <div className="space-y-10">
            <div className="space-y-2">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                    {t("projects.heading")}
                </h2>
                <p className="text-slate-400">{t("projects.subtitle")}</p>
            </div>

            {CATEGORIES.map((cat) => (
                grouped[cat].length > 0 && (
                    <div key={cat} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                                {categoryLabel[cat][language]}
                            </span>
                            <div className="flex-1 h-px bg-white/6" />
                        </div>

                        <motion.div
                            className="grid gap-4 md:grid-cols-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.1 } },
                            }}
                        >
                            {grouped[cat].map((p) => {
                                const isOpen = activeItem?.repo === p.repo;
                                return (
                                    <motion.div
                                        key={p.repo}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    >
                                        <div id={`project-${p.repo.split("/").pop()}`} className="h-full">
                                            {isOpen ? (
                                                <div className="h-full min-h-[170px] rounded-xl border border-dashed border-sky-500/25 bg-sky-500/5 flex items-center justify-center">
                                                    <span className="text-xs font-mono text-sky-400/50">
                                                        {p.title} ↓
                                                    </span>
                                                </div>
                                            ) : (
                                                <motion.div
                                                    layoutId={`proj-${p.repo}`}
                                                    transition={{ type: "spring", stiffness: 180, damping: 22 }}
                                                    className="h-full"
                                                >
                                                    <ProjectCard
                                                        {...p}
                                                        onClick={() => onSelect(p)}
                                                    />
                                                </motion.div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                )
            ))}
        </div>
    );
}
