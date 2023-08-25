import { AspectRatio } from "~/components/ui/aspect-ratio";
import { cn } from "~/lib/cn";
import { SanityImage } from "~/lib/models/profile";

import { ImageWithFallback } from "./ui/image-with-fallback";

interface HeroImageProps {
  className?: string;
  primaryImage: SanityImage;
  leftImage: SanityImage;
  rightImage: SanityImage;
}

export function HeroImage({
  className,
  primaryImage,
  leftImage,
  rightImage,
}: HeroImageProps) {
  return (
    <div className={cn(className)}>
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <div className="col-span-2">
          <AspectRatio ratio={14 / 5}>
            <ImageWithFallback
              fill
              priority
              src={primaryImage.image}
              alt={primaryImage.alt ?? ""}
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
        <div className="col-span-1">
          <AspectRatio ratio={3 / 2}>
            <ImageWithFallback
              fill
              priority
              src={leftImage.image}
              alt={leftImage.alt ?? ""}
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
        <div className="col-span-1">
          <AspectRatio ratio={3 / 2}>
            <ImageWithFallback
              fill
              priority
              src={rightImage.image}
              alt={rightImage.alt ?? ""}
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
}
