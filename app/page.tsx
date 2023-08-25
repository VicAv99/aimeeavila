import { AboutMeSection } from "~/components/sections/about-me-section";
import { ContactSection } from "~/components/sections/contact-section";
import { MainSection } from "~/components/sections/main-section";
import { ProjectsSection } from "~/components/sections/projects-section";
import { SkillsSection } from "~/components/sections/skills-section";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 lg:px-16 space-y-40">
      <MainSection />
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-40 md:space-y-0">
        <AboutMeSection />
        <SkillsSection />
      </div>
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
