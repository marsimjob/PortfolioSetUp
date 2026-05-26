import Card from "./ui/Card";
import Tag from "./ui/Tag";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectCard({
  title,
  description,
  highlights = [],
  languages = [],
  liveUrl,
  onClick,
  isActive,
}) {
  const { t } = useLanguage();

  return (
    <Card
      onClick={onClick}
      className={`flex flex-col space-y-4 cursor-pointer transition
        ${isActive ? "ring-1 ring-sky-500/40" : ""}
        group`}
    >
      <div className="flex justify-between items-start gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
            {title}
          </h3>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full
                text-[10px] font-bold uppercase tracking-wide
                bg-emerald-500/15 text-emerald-400 border border-emerald-500/25
                hover:bg-emerald-500/25 transition"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </a>
          )}
        </div>
        <div className="flex gap-2 flex-wrap justify-end shrink-0">
          {languages.map((lang) => (
            <span
              key={lang}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1
                text-xs font-mono text-slate-400
                hover:border-white/20 hover:text-slate-200 transition"
            >
              {lang}
            </span>
          ))}
        </div>
        <span className="bg-white/5 text-slate-500 px-2 py-1 rounded text-[10px] uppercase font-bold border border-white/10 shrink-0">
          {isActive ? t("projects.badge.open") : t("projects.badge.check")}
        </span>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>

      <div className="flex gap-2 flex-wrap">
        {highlights.map((h, i) => (
          <Tag key={i}>{h}</Tag>
        ))}
      </div>
    </Card>
  );
}
