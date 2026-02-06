type ButtonLinkProps = {
  label: string;
  url: string;
  className?: string;
};

export function ButtonLink({
  label,
  url,
  className = "",
}: ButtonLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={[
        "inline-flex items-center justify-center",
        "rounded-full border border-white/15",
        "bg-white/5 px-4 py-2 text-sm",
        "text-white/90 hover:bg-white/10",
        "transition-colors",
        className,
      ].join(" ")}
    >
      {label}
    </a>
  );
}