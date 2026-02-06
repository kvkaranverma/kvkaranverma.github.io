import { cv } from "../content/cv";
import { Container } from "../components/layout/Container";
import { Hero } from "../components/cv/Hero";
import { Section } from "../components/layout/Section";
import { SummaryCard } from "../components/cv/SummaryCard";
import { ExperienceList } from "../components/cv/ExperienceList";
import { AchievementsCard } from "../components/cv/AchievementsCard";
import { EducationCard } from "../components/cv/EducationCard";
import { InterestsCard } from "../components/cv/InterestsCard";
import { OpenToCard } from "../components/cv/OpenToCard";
import { SkillsCard } from "../components/cv/SkillsCard";


export default function CvPage() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <Container>
        <Hero cv={cv} />

        <Section title="Professional Summary">
          <SummaryCard summary={cv.summary} />
        </Section>

        <Section title="Core Skills">
            <SkillsCard skills={cv.skills} />
        </Section>

        <Section title="Professional Experience">
            <ExperienceList items={cv.experience} />
        </Section>

        <Section title="Key Achievements">
            <AchievementsCard item={cv.achievements[0]} />
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

      </Container>
    </div>
  );
}