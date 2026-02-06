import { Card } from "../ui/Card";

type SummaryCardProps = {
  summary: string;
};

export function SummaryCard({ summary }: SummaryCardProps) {
  return (
    <Card>
      <p className="leading-relaxed text-left text-white/85">{summary}</p>
    </Card>
  );
}