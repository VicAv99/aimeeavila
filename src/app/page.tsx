import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/button";

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

export default function Home() {
  return (
    <main>
      <div className="px-10 py-5 shadow-lg">
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
            <h2 className="text-lg font-bold uppercase">Aimee Avila</h2>
          </div>
          <div className="flex items-center gap-3">
            {ROUTES.map((route) => (
              <Button key={route.title} variant="link">
                <Link href={route.href}>
                  <span className="text-lg font-bold uppercase text-slate-700">
                    {route.title}
                  </span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
