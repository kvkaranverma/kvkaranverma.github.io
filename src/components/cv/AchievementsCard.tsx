import { Card } from "../ui/Card";
import type { CvAchievement } from "../../content/cv";

type AchievementsCardProps = {
  item: CvAchievement;
};

export function AchievementsCard({ item }: AchievementsCardProps) {
  return (
    <Card>
      <div className="flex flex-col gap-0.5 text-left">
        <h3 className="text-lg font-semibold tracking-tight leading-snug">
            {item.title}
        </h3>
      </div>

      <ul className="mt-3 list-disc space-y-1 pl-4 text-left text-sm text-white/75">
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Card>
  );
}