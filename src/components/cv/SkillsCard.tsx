import type { Cv } from "../../content/cv";
import { Card } from "../ui/Card";
import { Chip } from "../ui/Chip";

type SkillsCardProps = {
  cv: Cv;
};

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="mt-4 first:mt-0">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/70">
        {label}
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <Chip key={s}>{s}</Chip>
        ))}
      </div>
    </div>
  );
}

export function SkillsCard({ cv }: SkillsCardProps) {
  const { skills } = cv;

  return (
    <Card>
      <SkillGroup label="Frontend" items={skills.frontend} />
      <SkillGroup label="Backend" items={skills.backend} />
      <SkillGroup label="Styling & UI Architecture" items={skills.styling} />
      <SkillGroup label="Architecture" items={skills.architecture} />
      <SkillGroup label="Cloud & Platform" items={skills.cloud} />
      <SkillGroup label="Quality & Security" items={skills.qualitySecurity} />
      <SkillGroup label="Product Analytics" items={skills.analytics} />
      <SkillGroup label="Collaboration" items={skills.collaboration} />
      <SkillGroup label="UI / Frontend Tools" items={skills.uiTooling} />
      <SkillGroup label="Build & Dev Experience" items={skills.buildTooling} />
    </Card>
  );
}