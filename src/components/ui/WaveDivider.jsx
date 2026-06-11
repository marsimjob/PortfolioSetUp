import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Each path holds two identical wave periods so the drift animation
// can loop seamlessly by translating exactly -50%.
const WAVE_A =
    "M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 C1680,80 1920,0 2160,40 C2400,80 2640,0 2880,40 L2880,80 L0,80 Z";
const WAVE_B =
    "M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 C1680,0 1920,80 2160,40 C2400,0 2640,80 2880,40 L2880,80 L0,80 Z";

export default function WaveDivider({ flip = false }) {
    const mouseX = useMotionValue(0.5);

    const x1 = useSpring(useTransform(mouseX, [0, 1], [-40, 40]), { stiffness: 50, damping: 20 });
    const x2 = useSpring(useTransform(mouseX, [0, 1], [35, -35]), { stiffness: 35, damping: 18 });

    useEffect(() => {
        const onMove = (e) => mouseX.set(e.clientX / window.innerWidth);
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, [mouseX]);

    return (
        <div
            aria-hidden
            className={`relative h-14 md:h-20 -mx-6 overflow-hidden ${flip ? "rotate-180" : ""}`}
        >
            <motion.div style={{ x: x1 }} className="absolute -left-20 -right-20 top-0 bottom-0">
                <div className="wave-drift absolute top-0 bottom-0 left-0 w-[200%]">
                    <svg className="w-full h-full" viewBox="0 0 2880 80" preserveAspectRatio="none">
                        <path d={WAVE_A} fill="rgba(14, 165, 233, 0.05)" />
                    </svg>
                </div>
            </motion.div>
            <motion.div style={{ x: x2 }} className="absolute -left-20 -right-20 top-0 bottom-0">
                <div className="wave-drift-reverse absolute top-0 bottom-0 left-0 w-[200%]">
                    <svg className="w-full h-full" viewBox="0 0 2880 80" preserveAspectRatio="none">
                        <path d={WAVE_B} fill="rgba(99, 102, 241, 0.07)" />
                    </svg>
                </div>
            </motion.div>
        </div>
    );
}
