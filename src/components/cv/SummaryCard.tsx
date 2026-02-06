import { Card } from "../ui/Card";

type SummaryCardProps = {
  summary: string;
};

export function SummaryCard({ summary }: SummaryCardProps) {
  return (
    <Card>
      <p className="max-w-3xl text-left leading-relaxed text-white/85">{summary}</p>
    </Card>
  );
}