type ChipProps = {
  children: React.ReactNode;
  className?: string;
};

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/80">
      {children}
    </span>
  );
}