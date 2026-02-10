import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function HeroTestimonials() {
    const { t } = useLanguage();

    const quotes = [
        { text: t("testimonial.0.text"), name: t("testimonial.0.name") },
        { text: t("testimonial.1.text"), name: t("testimonial.1.name") },
        { text: t("testimonial.2.text"), name: t("testimonial.2.name") },
    ];

    const [currentQuote, setCurrentQuote] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            let nextIndex;
            do {
                nextIndex = Math.floor(Math.random() * quotes.length);
            } while (nextIndex === currentQuote);

            setCurrentQuote(nextIndex);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentQuote, quotes.length]);

    return (
        <div className="flex flex-col max-w-3xl w-full">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuote}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="bg-zinc-950 rounded-xl p-6 shadow-lg text-center border border-zinc-800"
                >
                    <p className="text-zinc-200 italic">"{quotes[currentQuote].text}"</p>
                    <p className="mt-4 font-semibold text-white">{quotes[currentQuote].name}</p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
