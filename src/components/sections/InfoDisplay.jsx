export default function InfoDisplay({ project }) {
    if (!project) return null;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h2 className="text-4xl font-black text-white">{project.title}</h2>
                <div className="flex gap-2 mt-3 flex-wrap">
                    {project.tools?.map((tool) => (
                        <span key={tool} className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20 uppercase tracking-wider">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
            
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                {project.details || project.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images?.map((img, i) => (
                    <div key={i} className="rounded-xl border border-zinc-800 overflow-hidden bg-zinc-900 shadow-2xl">
                        <img src={img} alt="Preview" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
                    </div>
                ))}
            </div>
        </div>
    );
}