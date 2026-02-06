import type { CvExperience } from "../../content/cv";
import { ExperienceCard } from "./ExperienceCard";

type ExperienceListProps = {
  items: CvExperience[];
};

export function ExperienceList({ items }: ExperienceListProps) {
  return (
    <div className="grid gap-3">
      {items.map((exp) => (
        <ExperienceCard
          key={`${exp.company}-${exp.role}-${exp.start}`}
          exp={exp}
        />
      ))}
    </div>
  );
}