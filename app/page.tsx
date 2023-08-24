import { AboutMeSection } from "~/components/about-me-section";
import { MainSection } from "~/components/main-section";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 lg:px-16 space-y-24">
      <MainSection />
      <AboutMeSection />
    </main>
  );
}
