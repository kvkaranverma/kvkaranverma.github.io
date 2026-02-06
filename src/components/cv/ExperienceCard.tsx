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
          <h3 className="text-lg font-semibold tracking-tight">{exp.role}</h3>
          <p className="mt-1 text-sm font-medium text-white/60">{exp.company}</p>
        </div>

        {/* Date pill */}
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/60">
          {exp.start} – {exp.end}
        </div>
      </div>

      {/* Bullet highlights */}
      <ul className="mt-3 list-disc list-outside space-y-2 pl-4 text-left text-sm leading-relaxed text-white/80">
        {exp.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Card>
  );
}