import Link from "next/link";
import React from "react";

import { Button } from "./ui/button";
import { Icon } from "./ui/icon";

export function Socials() {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="bottom-0 float-right mb-5 mr-8">
        <Button variant="outline" className="mr-1.5 bg-white">
          <Link target="_blank" href="https://www.instagram.com/aimee_avila/">
            <Icon name="Instagram" />
          </Link>
        </Button>
        <Button variant="outline" className="mx-1.5 bg-white">
          <Link target="_blank" href="https://twitter.com/aimee_avila23">
            <Icon name="Twitter" />
          </Link>
        </Button>
        <Button variant="outline" className="ml-1.5 bg-white">
          <Link target="_blank" href="https://www.facebook.com/aimee.avila.73">
            <Icon name="Facebook" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
