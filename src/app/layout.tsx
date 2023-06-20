import "./globals.css";

import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { Socials } from "~/components/socials";
import { Toolbar } from "~/components/toolbar";
import { cn } from "~/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aimee Avila | Project Manager",
  description:
    "Experienced project manager sharing insights and strategies for success. Join me on this journey to turn project visions into reality.",
};

type RootLayoutProps = PropsWithChildren<unknown>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "flex flex-col h-screen justify-between"
        )}
      >
        <Toolbar />
        <main className="mb-auto">{children}</main>
        <footer>
          <Socials />
        </footer>
      </body>
    </html>
  );
}
