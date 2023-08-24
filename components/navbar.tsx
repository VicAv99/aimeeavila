import Link from "next/link";

import { ModeToggle } from "./mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function Navbar() {
  return (
    <header className="z-30 mb-20 border-b border-zinc-300 px-6 py-4 dark:border-zinc-800 md:mb-24 md:px-16">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/">
          <h3>Aimee</h3>
        </Link>
        <div className="hidden md:flex md:items-center gap-x-8 uppercase">
          <Link href="/about">About</Link>
          <Link href="/posts">Projects</Link>
          <Link href="/posts">Blog</Link>
          <Link href="/posts">Contact</Link>
          <ModeToggle />
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
