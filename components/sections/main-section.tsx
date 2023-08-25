import Link from "next/link";
import { Profile } from "~/lib/models/profile";

import { HeroImage } from "../hero-image";
import { Button } from "../ui/button";

interface MainSectionProps {
  profile: Profile;
}

export function MainSection({ profile }: MainSectionProps) {
  return (
    <section className="space-y-2 mx-auto grid text-center md:text-left grid-cols-1 md:grid-cols-2 md:space-x-3">
      <HeroImage
        className="order-1 md:order-2"
        primaryImage={profile.primaryImage}
        leftImage={profile.leftImage}
        rightImage={profile.rightImage}
      />
      <div className="order-2 space-y-5 md:order-1">
        <h1 className="leading-tight">{profile.title}</h1>
        <p className="text-zinc-400">{profile.headline}</p>
        <Button asChild>
          <Link href="#contact">Contact me</Link>
        </Button>
      </div>
    </section>
  );
}
