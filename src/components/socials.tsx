import Link from "next/link";
import React from "react";

import { Button } from "./ui/button";
import { Icon } from "./ui/icon";

export function Socials() {
  return (
    <div className="flex justify-center mb-5 space-x-3">
      <Button asChild variant="outline" className="bg-stone-300">
        <Link target="_blank" href="https://www.linkedin.com/in/aimee-avila/">
          <Icon name="Linkedin" />
        </Link>
      </Button>
      <Button asChild variant="outline" className="bg-stone-300">
        <Link target="_blank" href="https://twitter.com/aimee_avila23">
          <Icon name="Twitter" />
        </Link>
      </Button>
      <Button asChild variant="outline" className="bg-stone-300">
        <Link target="_blank" href="https://github.com/aimeeavila">
          <Icon name="Github" />
        </Link>
      </Button>
    </div>
  );
}
