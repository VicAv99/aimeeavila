import { HomeSection } from "~/components/views";
import { AboutMeSection } from "~/components/views/home/about-me-section";

export default function Home() {
  return (
    <div className="container max-w-[85ch]">
      <HomeSection />
      <AboutMeSection />
    </div>
  );
}
