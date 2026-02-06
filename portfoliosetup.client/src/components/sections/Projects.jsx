import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <section className="space-y-8">
      <h2 className="text-4xl font-bold text-accent">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
