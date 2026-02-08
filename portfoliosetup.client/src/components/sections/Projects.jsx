import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects({ onSelect, activeItem }) {
    return (
        <>
            <h2 className="text-4xl font-bold text-accent">Projects</h2>

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
        </>
    );
}
