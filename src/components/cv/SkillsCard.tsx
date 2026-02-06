import { Card } from "../ui/Card";
import { Chip } from "../ui/Chip";

type SkillGroupProps = {
  label: string;
  items: string[];
};

function SkillGroup({ label, items }: SkillGroupProps) {
  return (
    <div className="space-y-2">
      <h4 className="text-xs font-semibold tracking-widest text-white/60 uppercase">
        {label}
      </h4>

      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <Chip key={skill}>{skill}</Chip>
        ))}
      </div>
    </div>
  );
}

type SkillsCardProps = {
  skills: {
    frontend: string[];
    styling: string[];
    architecture: string[];
    tools: string[];
  };
};

export function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <Card className="text-left space-y-6 break-inside-avoid-page">
      <SkillGroup label="Frontend" items={skills.frontend} />
      <SkillGroup label="Styling & Design Systems" items={skills.styling} />
      <SkillGroup label="Architecture" items={skills.architecture} />
      <SkillGroup label="Tools & Platform" items={skills.tools} />
    </Card>
  );
}