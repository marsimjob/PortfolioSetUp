const skills = [
  ".NET",
  "ASP.NET Core",
  "React",
  "TypeScript",
  "Clean Architecture",
  "CQRS",
  "SQL Server",
  "Azure",
  "Tailwind",
  "AI",
];

export default function ToolboxBar() {
  return (
    <div className="border-y border-zinc-800/60 py-10">
      <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
        <span className="uppercase tracking-widest text-xs text-zinc-500">
          In The Toolbox:
        </span>

        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1
                       hover:border-zinc-600 hover:text-zinc-200 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
