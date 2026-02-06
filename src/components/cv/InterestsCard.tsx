import { Card } from "../ui/Card";

type InterestsCardProps = {
  interests: string[];
};

export function InterestsCard({ interests }: InterestsCardProps) {
  return (
    <Card>
      <ul className="list-disc space-y-1 list-outside text-left pl-5 text-white/85">
        {interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </Card>
  );
}