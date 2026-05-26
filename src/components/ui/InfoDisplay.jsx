import { useLanguage } from "../../context/LanguageContext";

export default function InfoDisplay({ project }) {
    const { t } = useLanguage();

    if (!project) return null;

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-black text-white">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mt-3">
                    {project.highlights.map((h) => (
                        <span key={h} className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-1 rounded border border-sky-500/20">
                            {h}
                        </span>
                    ))}
                </div>
            </div>

            <p className="text-slate-400 text-base leading-relaxed max-w-3xl">
                {project.details}
            </p>

            <div className="flex flex-wrap gap-3">
                {project.repo && (
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-white
                            bg-gradient-to-r from-sky-500 to-indigo-500
                            rounded-full px-5 py-2.5 shadow-md hover:opacity-90 transition-opacity"
                    >
                        {t("info.viewGithub")} →
                    </a>
                )}
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold
                            border border-emerald-500/30 text-emerald-400
                            rounded-full px-5 py-2.5 hover:bg-emerald-500/10 transition"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        {t("info.liveDemo")}
                    </a>
                )}
            </div>

            {project.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="rounded-lg border border-white/8 object-cover"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
