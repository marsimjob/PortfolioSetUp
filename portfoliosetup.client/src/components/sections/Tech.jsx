import { skills } from "../../data/skills";
import SkillGroup from "../SkillGroup";
import { motion } from "framer-motion";

export default function Tech() {
    const colors = ["purple", "blue", "emerald"];

    return (
        <section id="skills" className="space-y-8 overflow-hidden">
            <div className="space-y-3">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">Tech & Skills</h2>
                <p className="text-zinc-400">Expertise built across the full stack.</p>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
            >
                {skills.map((group, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, x: -55 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <SkillGroup
                            index={i}
                            {...group}
                            side="left"
                            color={colors[i % colors.length]}
                        />
                    </motion.div>

                ))}
            </motion.div>
        </section>
    );
}
