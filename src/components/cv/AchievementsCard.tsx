import { Card } from "../ui/Card";
import type { CvAchievement } from "../../content/cv";

type AchievementsCardProps = {
  item: CvAchievement;
};

export function AchievementsCard({ item }: AchievementsCardProps) {
  return (
    <Card>
      <h3 className="text-base font-semibold">{item.title}</h3>

      <ul className="mt-3 list-disc list-outside text-left space-y-1 pl-5 text-white/85">
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Card>
  );
}