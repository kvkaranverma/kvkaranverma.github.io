import { Card } from "../ui/Card";

type InterestsCardProps = {
  interests: string[];
};

export function InterestsCard({ interests }: InterestsCardProps) {
  return (
    <Card className="text-left break-inside-avoid-page">
      <ul className="list-disc list-outside space-y-1.5 pl-4 text-left text-sm leading-relaxed text-white/80">
        {interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </Card>
  );
}