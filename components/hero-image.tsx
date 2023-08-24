import Image from "next/image";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { cn } from "~/lib/cn";

const IMAGES = [
  {
    ratio: 14 / 5,
    src: "/images/main.jpg",
    class: "col-span-2",
    alt: "Aimee posing for picture with back towards camera",
  },
  {
    ratio: 3 / 2,
    src: "/images/close-up.jpg",
    alt: "Aimee close up picture of face",
  },
  {
    ratio: 3 / 2,
    src: "/images/standing.jpg",
    alt: "Aimee posing for picture",
  },
];

interface HeroImageProps {
  className?: string;
}

export function HeroImage({ className }: HeroImageProps) {
  return (
    <div className={cn(className)}>
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        {IMAGES.map((image) => (
          <div key={image.src} className={cn(image.class)}>
            <AspectRatio ratio={image.ratio}>
              <Image
                fill
                priority
                src={image.src}
                alt={image.alt}
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  );
}
