import { AboutMeSection } from "~/components/sections/about-me-section";
import { ContactSection } from "~/components/sections/contact-section";
import { MainSection } from "~/components/sections/main-section";
import { ProjectsSection } from "~/components/sections/projects-section";
import { SkillsSection } from "~/components/sections/skills-section";
import { Profile } from "~/lib/models/profile";
import { client } from "~/sanity/lib/client";
import { profileQuery } from "~/sanity/lib/queries";

export default async function Home() {
  const profile = await client.fetch<Profile>(profileQuery);

  return (
    <main className="mx-auto max-w-4xl px-6 lg:px-16 space-y-40">
      <MainSection profile={profile} />
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-40 md:space-y-0">
        <AboutMeSection shortBio={profile.shortBio} />
        <SkillsSection skills={profile.skills} />
      </div>
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
