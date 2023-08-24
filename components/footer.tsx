import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button";

import type { LucideIcon } from "lucide-react";

export function Footer() {
  const socialLinks = {
    twitter: "https://twitter.com/aimee_avila23",
    linkedin: "https://www.linkedin.com/in/aimee-avila/",
    github: "https://github.com/aimeeavila",
  };

  const socialIcons: { [key: string]: LucideIcon } = {
    twitter: TwitterIcon,
    linkedin: LinkedinIcon,
    github: GithubIcon,
  };

  return (
    <footer className="mt-24 border-t border-zinc-300 dark:border-zinc-800">
      <div className="mx-auto flex max-w-7xl justify-center gap-y-3 px-6 py-1 md:px-16 sm:justify-end">
        <div className="flex items-center gap-x-4">
          {Object.entries(socialLinks ?? [])
            .sort()
            .map(([key, value]) => {
              const Icon = socialIcons[key];

              return (
                <Button
                  key={key}
                  asChild
                  className="text-zinc-400"
                  variant="ghost"
                  size="sm"
                >
                  <Link href={value} rel="noreferer noopener">
                    <Icon />
                  </Link>
                </Button>
              );
            })}
        </div>
      </div>
    </footer>
  );
}
