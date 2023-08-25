interface AboutMeSectionProps {
  shortBio: string;
}

export function AboutMeSection({ shortBio }: AboutMeSectionProps) {
  return (
    <section id="about" className="space-y-6 mx-auto text-center">
      <h2 className="uppercase lg:leading-tight">About me</h2>
      <div className="leading-relaxed text-zinc-400">{shortBio}</div>
    </section>
  );
}
