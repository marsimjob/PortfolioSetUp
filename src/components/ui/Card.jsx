export default function Card({
    children,
    className = "",
    color = "purple",
    ...props
}) {
    const colorVariants = {
        purple: "from-purple-500/50 to-purple-900/20 shadow-purple-500/20",
        blue: "from-blue-500/50 to-blue-900/20 shadow-blue-500/20",
        emerald: "from-emerald-500/50 to-emerald-900/20 shadow-emerald-500/20",
    };

    const activeColor = colorVariants[color] || colorVariants.purple;

    return (
        <div
            className={`group relative p-[1px] rounded-xl overflow-visible
        transition-all duration-500 hover:-translate-y-1 ${className}`}
        >
            {/* Glowing border - Added pointer-events-none */}
            <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${activeColor}
        opacity-40 group-hover:opacity-100 blur-[2px]
        transition-opacity duration-500 pointer-events-none`}
            />

            {/* Outer halo - Added pointer-events-none */}
            <div
                className={`absolute -inset-1 rounded-xl bg-gradient-to-br ${activeColor}
        opacity-0 group-hover:opacity-30 blur-xl
        transition-opacity duration-500 pointer-events-none`}
            />

            {/* Card body */}
            <div
                {...props}
                className="relative h-full w-full bg-zinc-950 rounded-[11px] p-6 z-10"
            >
                {children}
            </div>
        </div>
    );
}