import { skills } from "../../data/skills";
import SkillGroup from "../SkillGroup";
export default function Tech() {
  const colors = ["purple", "blue", "emerald"];

  return (
    <section id ="skills" className="space-y-10 overflow-hidden"> 
      <div className="space-y-2">
        <h2 className="text-4xl font-bold text-white">Tech & Skills</h2>
        <p className="text-zinc-400">Expertise built across the full stack.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((group, i) => (
          <SkillGroup 
            key={i} 
            index={i} 
            {...group} 
            side={"left"} 
            color={colors[i % colors.length]}
          />
        ))}
      </div>
    </section>
  );
}