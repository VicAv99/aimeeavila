import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
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
    href: "/",
    title: "home",
  },
  {
    href: "#about",
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
          <Avatar>
            <AvatarImage src="/images/logo-4.png" alt="@aimee_avila23" />
            <AvatarFallback className="bg-primary">AA</AvatarFallback>
          </Avatar>
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
          key={`Menu-${route.title}`}
          variant="link"
          size="sm"
          className="px-1 md:px-2"
        >
          <Link href={route.href} scroll={false}>
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
              <DropdownMenuItem key={`Dropdown-${route.title}`} asChild>
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
