import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ui/ProjectDetails";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: "Clean Architecture API",
      description: "Production-ready .NET backend",
      highlights: ["CQRS", "JWT", "EF Core"],
      details:
        "A scalable backend built with Clean Architecture, CQRS and MediatR. Focus on maintainability, testability and security.",
      images: [
        "/projects/api-1.png",
        "/projects/api-2.png",
        "/projects/api-3.png",
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {projects.map((project, i) => (
        <div key={i}>
         <ProjectCard
  {...project}
  isActive={activeIndex === i}
  onClick={() => {
    console.log("CLICKED", i);
    setActiveIndex(activeIndex === i ? null : i);
  }}
/>

          {activeIndex === i && (
            <ProjectDetails
              details={project.details}
              images={project.images}
            />
          )}
        </div>
      ))}
    </div>
  );
}
