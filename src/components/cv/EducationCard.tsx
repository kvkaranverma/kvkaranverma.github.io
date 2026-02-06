import { Card } from "../ui/Card";
import type { CvEducation } from "../../content/cv";

type EducationCardProps = {
  education: CvEducation;
};

export function EducationCard({ education }: EducationCardProps) {
  return (
    <Card>
      <p className="font-semibold">{education.degree}</p>

      <p className="mt-1 text-sm text-white/70">
        {education.field}
      </p>

      <p className="mt-1 text-sm text-white/70">
        {education.institute}
      </p>
    </Card>
  );
}