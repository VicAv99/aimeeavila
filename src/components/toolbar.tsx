import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

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
    <div className="fixed w-full py-1 shadow-md px-7 md:shadow-lg bg-primary">
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
          <h3 className="hidden text-lg whitespace-nowrap md:block">Aimee</h3>
        </div>
        <div className="flex items-center justify-end w-full gap-0.5">
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
      </div>
    </div>
  );
}
