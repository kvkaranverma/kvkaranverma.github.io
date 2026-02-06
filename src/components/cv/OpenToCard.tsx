import { Card } from "../ui/Card";

type OpenToCardProps = {
  text: string;
};

export function OpenToCard({ text }: OpenToCardProps) {
  return (
    <Card>
      <p className="leading-relaxed text-white/85">{text}</p>
    </Card>
  );
}