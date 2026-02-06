import { ButtonLink } from "../ui/ButtonLink";
import type { Cv } from "../../content/cv";

type HeroProps = {
  cv: Cv;
};

export function Hero({ cv }: HeroProps) {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        {/* Left: Identity */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {cv.basics.name}
          </h1>

          <p className="mt-1 text-base text-white/90">
            {cv.basics.title}
          </p>

          <p className="mt-1 text-sm text-white/70">
            {cv.basics.subtitle}
          </p>

          {/* Contact */}
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/70">
            <span>📍 {cv.basics.location}</span>
            <span>📞 {cv.basics.phone}</span>
            <span>✉ {cv.basics.email}</span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-wrap gap-2">
          {cv.basics.links.map((link) => (
            <ButtonLink
              key={link.url}
              label={link.label}
              url={link.url}
            />
          ))}

          <button
            onClick={() => window.print()}
            className="inline-flex items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/15 px-4 py-2 text-sm text-white/90 hover:bg-violet-500/25 print:hidden"
          >
            Print / Save PDF
          </button>
        </div>
      </div>
    </header>
  );
}