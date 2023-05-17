import Image from "next/image";
import React from "react";
import { Icon } from "~/components/icon";

export default function Page() {
  return (
    <>
      <div className="absolute w-72 h-96 -top-20 -right-16 lg:right-5 lg:top-10 animate-blob">
        <Image
          fill
          src="/images/xera.svg"
          alt="Themeptation"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute w-full h-full md:h-3/4 bottom-24 animate-blob2">
        <Image
          fill
          src="/images/shapes.svg"
          alt="hero"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="relative z-10 py-6 space-y-16 text-gray-900 lg:space-y-32">
        <div className="space-y-10 text-center">
          <h3 className="text-xl font-light tracking-wider uppercase">
            Coming soon
          </h3>
          <h1 className="font-extrabold text-7xl lg:text-9xl">
            Cooking up the best content!
          </h1>
          <p className="mx-10 text-xl tracking-wide lg:text-2xl lg:max-w-xl lg:mx-auto">
            Site is under construction. Check back for an update soon
          </p>
        </div>
      </div>
      <div className="absolute bottom-5">
        <ul className="flex space-x-3">
          <li>
            <Icon name="Instagram" />
          </li>
          <li>
            <Icon name="Twitter" />
          </li>
          <li>
            <Icon name="Facebook" />
          </li>
        </ul>
      </div>
    </>
  );
}
