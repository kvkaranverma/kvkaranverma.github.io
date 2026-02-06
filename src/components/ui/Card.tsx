type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/15 bg-white/5 p-4",
        "shadow-[0_10px_36px_rgba(0,0,0,0.35)]",
        "print:border-gray-200 print:bg-white print:shadow-none",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}