import { HomeSection } from "~/components/home-section";
import { Socials } from "~/components/socials";
import { Toolbar } from "~/components/toolbar";

export default function Home() {
  return (
    <main>
      <Toolbar />
      <HomeSection />
      <Socials />
    </main>
  );
}
