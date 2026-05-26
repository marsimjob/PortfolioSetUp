import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const CATEGORY_COUNT = 7;

export default function HeroTestimonials() {
    const { t } = useLanguage();

    const categories = Array.from({ length: CATEGORY_COUNT }, (_, i) => ({
        category: t(`techstack.${i}.category`),
        skills: t(`techstack.${i}.skills`).split(","),
    }));

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => {
                let next;
                do {
                    next = Math.floor(Math.random() * categories.length);
                } while (next === prev);
                return next;
            });
        }, 4000);
        return () => clearInterval(interval);
    }, [categories.length]);

    const { category, skills } = categories[current];

    return (
        <div className="w-full">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="bg-zinc-950 rounded-xl p-5 border border-zinc-800 shadow-lg"
                >
                    <p className="text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400 mb-3">
                        {category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700"
                            >
                                {skill.trim()}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-1.5 mt-4">
                        {categories.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-1 rounded-full transition-all duration-300 ${
                                    i === current
                                        ? "w-6 bg-purple-400"
                                        : "w-2 bg-zinc-700 hover:bg-zinc-500"
                                }`}
                            />
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
