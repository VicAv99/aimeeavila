interface SkillsSectionProps {
  skills: string[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="space-y-6 text-center mx-auto">
      <h2 className="uppercase lg:leading-tight">My Skills</h2>
      <p className="text-zinc-400">
        I&apos;ve spent few years working on my skills. In no particular order,
        here are a few of them.
      </p>

      <ul className="flex flex-wrap items-center justify-center gap-3">
        {skills?.map((skill, id) => (
          <li
            key={id}
            className="rounded-md border border-transparent bg-muted px-2 py-1 hover:border-zinc-700"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
