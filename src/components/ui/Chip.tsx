type ChipProps = {
  children: React.ReactNode;
  className?: string;
};

export function Chip({ children, className = "" }: ChipProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full",
        "border border-white/15 bg-white/5",
        "px-3 py-1 text-sm text-white/85",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}