type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export function Section({ title, children }: SectionProps) {
  return (
    <section className="mt-6">
      {/* Section heading row */}
      <div className="mb-3 flex items-center gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          {title}
        </h2>

        {/* Divider line */}
        <div className="h-px flex-1 bg-white/15" />
      </div>

      {/* Section content */}
      {children}
    </section>
  );
}