import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Icon } from "./ui/icon";

const ROUTES = [
  {
    href: "#",
    title: "home",
  },
  {
    href: "#",
    title: "about",
  },
  {
    href: "#",
    title: "projects",
  },
  {
    href: "#",
    title: "blog",
  },
  {
    href: "#",
    title: "contact",
  },
];

export function Toolbar() {
  return (
    <header className="w-full py-1 shadow-md px-7 md:shadow-lg bg-primary">
      <div className="container flex justify-between">
        <div className="flex items-center">
          <div className="relative w-12 h-16">
            <Image
              fill
              src="/images/logo-4.png"
              alt=""
              style={{ objectFit: "fill" }}
            />
          </div>
          <h3 className="text-lg whitespace-nowrap">Aimee</h3>
        </div>
        <div className="flex items-center justify-end w-full gap-0.5">
          <MobileDropdown />
          <NavMenu />
        </div>
      </div>
    </header>
  );
}

function NavMenu() {
  return (
    <div className="hidden md:block">
      {ROUTES.map((route) => (
        <Button
          key={route.title}
          variant="link"
          size="sm"
          className="px-1 md:px-2"
        >
          <Link href={route.href}>
            <span className="text-base font-light text-black lowercase hover:underline">
              {route.title}
            </span>
          </Link>
        </Button>
      ))}
    </div>
  );
}

function MobileDropdown() {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-[#ac8764] text-foreground" size="sm">
            <Icon name="Menu" size={18} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#ac8764]">
          {ROUTES.map((route) => (
            <>
              <DropdownMenuItem key={`Dropdown-${route.href}`} asChild>
                <Link href="#" className="font-bold text-white uppercase">
                  {route.title}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-[#996c41]" />
            </>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
