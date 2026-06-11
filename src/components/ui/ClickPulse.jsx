import { useState, useEffect } from "react";

export default function ClickPulse() {
    const [pulses, setPulses] = useState([]);

    useEffect(() => {
        const onClick = (e) => {
            const id = Date.now() + Math.random();
            setPulses((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
            setTimeout(() => {
                setPulses((prev) => prev.filter((p) => p.id !== id));
            }, 700);
        };
        window.addEventListener("click", onClick);
        return () => window.removeEventListener("click", onClick);
    }, []);

    return (
        <div className="fixed inset-0 z-[90] pointer-events-none" aria-hidden>
            {pulses.map((p) => (
                <span
                    key={p.id}
                    className="click-pulse absolute rounded-full border-2 border-sky-400/60"
                    style={{ left: p.x, top: p.y }}
                />
            ))}
        </div>
    );
}
