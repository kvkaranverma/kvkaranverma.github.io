type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
        className={[
            "rounded-2xl border border-white/10 bg-white/5",
            "p-3 sm:p-4",
            "shadow-[0_10px_36px_rgba(0,0,0,0.35)]",
            "print:border-gray-200 print:bg-white print:shadow-none",
            "break-inside-avoid print:break-inside-avoid",
            className,
        ].join(" ")}
    >
      {children}
    </div>
  );
}