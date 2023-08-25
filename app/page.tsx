import { AboutMeSection } from "~/components/about-me-section";
import { MainSection } from "~/components/main-section";
import { ProjectsSection } from "~/components/projects-section";
import { SkillsSection } from "~/components/skills-section";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 lg:px-16 space-y-40">
      <MainSection />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <AboutMeSection />
        <SkillsSection />
      </div>
      <ProjectsSection />
    </main>
  );
}
