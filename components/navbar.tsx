import { Menu } from "lucide-react";
import Link from "next/link";

import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTrigger,
} from "./ui/sheet";

const LINKS = [
  {
    href: "/#about",
    label: "About",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/#contact",
    label: "Contact",
  },
];

export function Navbar() {
  return (
    <header className="z-30 mb-10 border-b border-zinc-300 px-6 py-4 dark:border-zinc-800 md:mb-20 md:px-16">
      <nav className="mx-auto flex max-w-6xl items-baseline justify-between">
        <Link href="/">
          <h3>Aimee</h3>
        </Link>

        <div className="hidden md:flex md:items-center gap-x-8 lowercase">
          {LINKS.map((link) => (
            <Link
              key={`desktop-${link.href}`}
              href={link.href}
              className="hover:animate-wiggle"
            >
              <span>{link.label}</span>
            </Link>
          ))}
          <ModeToggle />
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-[1.2rem] w-[1.2rem]" />
            </SheetTrigger>
            <SheetContent>
              <SheetDescription className="space-y-3 h-[calc(100%-2.75rem)]">
                {LINKS.map((link) => (
                  <Button
                    key={`mobile-${link.href}`}
                    asChild
                    className="w-full"
                    variant="secondary"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </SheetDescription>
              <SheetFooter>
                <ModeToggle />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
