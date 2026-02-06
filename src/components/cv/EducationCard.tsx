import { Card } from "../ui/Card";
import type { CvEducation } from "../../content/cv";

type EducationCardProps = {
  education: CvEducation;
};

export function EducationCard({ education }: EducationCardProps) {
  return (
    <Card className="text-left break-inside-avoid-page">
      <h3 className="text-lg font-semibold tracking-tight leading-snug">
        {education.degree}
      </h3>

      <p className="mt-1 text-sm text-white/70">{education.field}</p>

      {education.institute && education.institute !== "—" ? (
        <p className="mt-1 text-sm text-white/70">{education.institute}</p>
      ) : null}
    </Card>
  );
}