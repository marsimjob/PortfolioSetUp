export default function Section({ children, id, className = "" }) {
    return (
        <section
            id={id}
            className={`scroll-mt-20 py-12 ${className}`}
        >
            <div className="reveal-on-scroll space-y-8">
                {children}
            </div>
        </section>
    );
}