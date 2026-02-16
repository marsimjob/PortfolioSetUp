import ProjectCard from "./ProjectCard";
import { projects } from "../../projects"; 
export default function Projects({ onSelect, activeItem }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
                <ProjectCard
                    key={i}
                    {...project}
                    isActive={activeItem?.title === project.title}
                    onClick={() => onSelect(project)}
                />
            ))}
        </div>
    );
}