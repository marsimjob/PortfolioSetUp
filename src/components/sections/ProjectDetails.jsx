import InfoDisplay from "./InfoDisplay";

export default function ProjectDetails({ project, onClose, innerRef }) {
    return (
        <div ref={innerRef} className="scroll-mt-20 mt-10">
            {project ? (
                <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex justify-end mb-6">
                        <button
                            onClick={onClose}
                            className="text-zinc-500 hover:text-white transition"
                        >
                            ✕ Close
                        </button>
                    </div>

                    <InfoDisplay project={project} />
                </div>
            ) : (
                <div className="text-center py-16 border-2 border-dashed border-zinc-800/30 rounded-2xl">
                    <p className="text-zinc-500">
                        Select a project for further breakdown and details!
                    </p>
                </div>
            )}
        </div>
    );
}
