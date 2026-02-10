import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects({ onSelect, activeItem }) {
    return (
        <div className="space-y-8">
            <div className="space-y-3">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">Projects</h2>
                <p className="text-zinc-400">A selection of what I've been building.</p>
            </div>

            <motion.div
                className="grid gap-6 md:grid-cols-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } },
                }}
            >
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <ProjectCard
                            {...p}
                            onClick={() => onSelect(p)}
                            isActive={activeItem?.title === p.title}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
