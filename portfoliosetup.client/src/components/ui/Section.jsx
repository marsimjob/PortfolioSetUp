export default function Section({ children, id, className = "" }) {
    return (
        <section
            id={id}
            className={`min-h-[50vh] scroll-mt-20 ${className}`}
        >
            <div className="reveal-on-scroll">
                {children}
            </div>
        </section>
    );
}