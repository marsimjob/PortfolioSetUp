// src/components/ProjectCard.jsx
import Card from "./ui/Card";
import Tag from "./ui/Tag";

export default function ProjectCard({
  title,
  description,
  highlights = [],
  onClick,
  isActive,
}) {
  return (
    <Card
      onClick={onClick}
      className={`flex flex-col space-y-4 cursor-pointer transition
        ${isActive ? "ring-1 ring-purple-500/40" : ""}
        group`}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
          {title}
        </h3>

        <span className="bg-zinc-800 text-zinc-500 px-2 py-1 rounded text-[10px] uppercase font-bold border border-zinc-700">
          {isActive ? "OPEN" : "CHECK IT OUT"}
        </span>
      </div>

      <p className="text-zinc-400">{description}</p>

      <div className="flex gap-2 flex-wrap">
        {highlights.map((h, i) => (
          <Tag key={i}>{h}</Tag>
        ))}
      </div>
    </Card>
  );
}
