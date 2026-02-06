import { Card } from "../ui/Card";

type OpenToCardProps = {
  text: string;
};

export function OpenToCard({ text }: OpenToCardProps) {
  return (
    <Card className="text-left break-inside-avoid-page">
      <p className="text-left text-sm leading-relaxed text-white/80">{text}</p>
    </Card>
  );
}