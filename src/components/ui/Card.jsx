export default function Card({
    children,
    className = "",
    ...props
}) {
    return (
        <div
            className={`group relative rounded-xl overflow-hidden
                border border-white/6 hover:border-white/12
                bg-[#0d1422]
                transition-all duration-300 hover:-translate-y-0.5
                ${className}`}
        >
            {/* Very subtle inner top highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent pointer-events-none" />

            <div {...props} className="relative h-full w-full p-6 z-10">
                {children}
            </div>
        </div>
    );
}
