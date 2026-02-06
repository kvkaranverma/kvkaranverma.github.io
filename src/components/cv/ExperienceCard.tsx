import { Card } from "../ui/Card";
import type { CvExperience } from "../../content/cv";

type ExperienceCardProps = {
  exp: CvExperience;
};

export function ExperienceCard({ exp }: ExperienceCardProps) {
  return (
    <Card>
      {/* Header row */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold">{exp.role}</h3>
          <p className="mt-1 text-sm text-white/70">{exp.company}</p>
        </div>

        {/* Date pill */}
        <div className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
          {exp.start} – {exp.end}
        </div>
      </div>

      {/* Bullet highlights */}
      <ul className="mt-3 list-disc list-outside text-left space-y-1 pl-5 text-white/85">
        {exp.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Card>
  );
}