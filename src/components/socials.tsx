"use client";

import Link from "next/link";
import React from "react";

import { Button } from "./ui/button";
import { Icon } from "./ui/icon";

export function Socials() {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="bottom-0 float-right mb-5 mr-8">
        <Button asChild variant="outline" className="mx-1.5 bg-white">
          <Link target="_blank" href="https://twitter.com/aimee_avila23">
            <Icon name="Twitter" />
          </Link>
        </Button>
        <Button asChild variant="outline" className="ml-1.5 bg-white">
          <Link target="_blank" href="https://www.linkedin.com/in/aimee-avila/">
            <Icon name="Linkedin" />
          </Link>
        </Button>
        <Button asChild variant="outline" className="ml-1.5 bg-white">
          <Link target="_blank" href="https://github.com/aimeeavila">
            <Icon name="Github" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
