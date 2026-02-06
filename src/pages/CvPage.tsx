import { cv } from "../content/cv";

import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";

import { Hero } from "../components/cv/Hero";
import { SummaryCard } from "../components/cv/SummaryCard";
import { ExperienceList } from "../components/cv/ExperienceList";
import { AchievementsCard } from "../components/cv/AchievementsCard";
import { SkillsCard } from "../components/cv/SkillsCard";
import { EducationCard } from "../components/cv/EducationCard";
import { InterestsCard } from "../components/cv/InterestsCard";
import { OpenToCard } from "../components/cv/OpenToCard";

export default function CvPage() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      {/* Background glow (pure decoration) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute right-[5%] top-[-5%] h-[520px] w-[520px] rounded-full bg-emerald-500/15 blur-3xl" />
      </div>

      <Container>
        {/* HERO */}
        <Hero cv={cv} />

        {/* MAIN GRID */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          {/* LEFT COLUMN */}
          <div>
            <Section title="Professional Summary">
              <SummaryCard summary={cv.summary} />
            </Section>

            <Section title="Professional Experience">
              <ExperienceList items={cv.experience} />
            </Section>

            <Section title="Key Initiatives & Achievements">
              <div className="grid gap-3">
                {cv.achievements.map((a) => (
                  <AchievementsCard key={a.title} item={a} />
                ))}
              </div>
            </Section>
          </div>

          {/* RIGHT COLUMN */}
          <aside>
            <Section title="Core Skills">
              <SkillsCard cv={cv} />
            </Section>

            <Section title="Education">
              <EducationCard education={cv.education} />
            </Section>

            <Section title="Professional Interests">
              <InterestsCard interests={cv.interests} />
            </Section>

            <Section title="Open To">
              <OpenToCard text={cv.closingLine} />
            </Section>
          </aside>
        </div>

        {/* FOOTER */}
        <footer className="mt-7 flex items-center justify-center gap-2 text-sm text-white/60 print:hidden">
          <span className="h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_18px_rgba(124,58,237,0.6)]" />
          <span>Built with React + TypeScript + Tailwind</span>
        </footer>
      </Container>
    </div>
  );
}