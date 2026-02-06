type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto max-w-5xl px-3 py-4 sm:px-4 sm:py-10">
      <div className="p-0 sm:p-6
      sm:rounded-3xl sm:border sm:border-white/10 sm:bg-white/[0.02]
      sm:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
      print:rounded-none print:border-none print:bg-transparent print:shadow-none">
        {children}
      </div>
    </div>
  );
}