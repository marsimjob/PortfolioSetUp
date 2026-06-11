import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TEXT = "Booting up Portfolio...";

export default function BootScreen({ onDone }) {
    const [shown, setShown] = useState("");

    useEffect(() => {
        let i = 0;
        let deleting = false;
        let timer;

        const tick = () => {
            if (!deleting) {
                i++;
                setShown(TEXT.slice(0, i));
                if (i === TEXT.length) {
                    deleting = true;
                    timer = setTimeout(tick, 350);
                } else {
                    timer = setTimeout(tick, 40);
                }
            } else {
                i--;
                setShown(TEXT.slice(0, i));
                if (i === 0) deleting = false;
                timer = setTimeout(tick, 18);
            }
        };

        timer = setTimeout(tick, 200);
        const done = setTimeout(onDone, 2300);

        return () => {
            clearTimeout(timer);
            clearTimeout(done);
        };
    }, [onDone]);

    return (
        <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onClick={onDone}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080c14] cursor-pointer"
        >
            <div className="font-mono text-sky-400 text-lg md:text-2xl flex items-center">
                <span className="text-slate-600 mr-3">&gt;</span>
                <span>{shown}</span>
                <span className="cursor-blink ml-0.5 inline-block w-[0.6ch] h-[1.2em] bg-sky-400 translate-y-[0.15em]" />
            </div>
        </motion.div>
    );
}
