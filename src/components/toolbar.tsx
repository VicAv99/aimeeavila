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
];

export function Toolbar() {
  return (
    <div className="fixed w-full px-10 py-3 shadow-md md:shadow-lg md:py-5 bg-background">
      <div className="container flex justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-14 h-14">
            <Image
              fill
              src="https://media.licdn.com/dms/image/D5635AQEP8bcyA5hOGA/profile-framedphoto-shrink_400_400/0/1677284821411?e=1684926000&v=beta&t=-qD9kxTXyHwGfvwgY1-Yl0P6BD5IUqsKOPdhtS8A9G8"
              alt=""
              style={{ objectFit: "cover" }}
              className="rounded-full"
            />
          </div>
          <h3 className="hidden text-lg font-bold uppercase whitespace-nowrap md:block">
            Aimee Avila
          </h3>
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
                <span className="font-bold uppercase text-slate-700 hover:text-teal-600">
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
