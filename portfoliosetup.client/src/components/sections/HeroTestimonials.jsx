import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroTestimonials() {
    const quotes = [
        {
            text: "Mario has an attention to detail and ability to solve complex problems that is unmatched.",
            name: "Locker-room Pal, Kviberg",
        },
        {
            text: "Working with Mario elevated our teams productivity and code quality immensely.",
            name: "Some Guy on the Street, Gothenburg",
        },
        {
            text: "His clean architecture and modern React skills are top-notch!",
            name: "Some Online Friend, America(?)",
        },
    ];

    const [currentQuote, setCurrentQuote] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            let nextIndex;
            do {
                nextIndex = Math.floor(Math.random() * quotes.length);
            } while (nextIndex === currentQuote); // avoid showing same quote twice

            setCurrentQuote(nextIndex);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentQuote, quotes.length]);

    return (
        <div className="flex flex-col max-w-3xl w-full mt-13">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuote}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="bg-zinc-800 rounded-xl p-6 shadow-lg text-center"
                >
                    <p className="text-zinc-200 italic">"{quotes[currentQuote].text}"</p>
                    <p className="mt-4 font-semibold text-white">{quotes[currentQuote].name}</p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
