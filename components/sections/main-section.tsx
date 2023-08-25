import { HeroImage } from "../hero-image";
import { Button } from "../ui/button";

export function MainSection() {
  return (
    <section className="space-y-2 mx-auto grid text-center md:text-left grid-cols-1 md:grid-cols-2 md:space-x-3">
      <HeroImage className="order-1 md:order-2" />
      <div className="order-2 space-y-5 md:order-1">
        <h1 className="leading-tight">
          Hey! <br /> I&apos;m Aimee.
        </h1>
        <p className="text-zinc-400">
          Welcome to my exciting world of product management
        </p>
        <Button>Contact me</Button>
      </div>
    </section>
  );
}
