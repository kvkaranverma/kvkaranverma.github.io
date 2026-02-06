import { Card } from "../ui/Card";
import type { CvExperience } from "../../content/cv";

type ExperienceCardProps = {
  exp: CvExperience;
};

export function ExperienceCard({ exp }: ExperienceCardProps) {
  return (
    <Card className="text-left break-inside-avoid-page">
      <div className="flex flex-wrap items-start justify-between gap-3 text-left">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-lg font-semibold tracking-tight leading-snug">
            {exp.role}
          </h3>
          <p className="text-sm font-normal text-white/60 leading-snug">
            {exp.company}
          </p>
        </div>

        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/60">
          {exp.start} – {exp.end}
        </div>
      </div>

      <ul className="mt-3 list-disc list-outside space-y-1.5 pl-4 text-left text-sm leading-relaxed text-white/80">
        {exp.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Card>
  );
}