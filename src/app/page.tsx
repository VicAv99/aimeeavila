import { Socials } from "~/components/socials";
import { HomeSection } from "~/components/templates";
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
