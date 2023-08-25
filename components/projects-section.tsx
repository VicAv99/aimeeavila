import { ImageWithFallback } from "./image-with-fallback";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";

const PROJECTS: { image?: string; title: string }[] = [];

export function ProjectsSection() {
  return (
    <section className="space-y-6 mx-auto text-center">
      <h2 className="uppercase lg:leading-tight">Projects</h2>
      <p className="text-zinc-400">
        Check back soon to learn about project I&apos;ve been a part of!
      </p>
      <div className="grid grid-cols-3 gap-3">
        {PROJECTS.length ? (
          PROJECTS.map((project) => (
            <div
              key={project.title}
              className="flex flex-col items-center space-y-3"
            >
              <AspectRatio ratio={1 / 1}>
                <ImageWithFallback
                  fill
                  priority
                  src={project.image ?? ""}
                  alt=""
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <Button>Case Study</Button>
            </div>
          ))
        ) : (
          <>
            {[1, 2, 3].map((i) => (
              <AspectRatio key={`empty-proj-${i}`} ratio={1 / 1}>
                <ImageWithFallback
                  fill
                  priority
                  src={""}
                  alt={`empty-fallback-image-${i}`}
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
