import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export function HomeSection() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-140px)]">
      <div className="flex flex-col w-full text-center space-y-7 md:flex-row md:text-left">
        <div className="flex justify-center md:order-2 md:basis-2/5">
          <div className="relative w-16 h-16">
            <Image
              fill
              src="/images/bg_01.png"
              alt=""
              style={{ objectFit: "fill" }}
            />
          </div>
        </div>
        <div className="space-y-3 md:order-1 md:basis-3/5">
          <h3 className="text-3xl font-bold md:text-5xl">
            Hey! <br /> I&apos;m Aimee.
          </h3>
          <p className="text-lg font-light md:text-xl">
            Welcome to the exciting world of product management.
          </p>
          <Button className="text-white" size="sm">
            <Link href="#">Contact me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
