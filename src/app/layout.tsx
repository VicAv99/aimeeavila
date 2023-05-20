import "./globals.css";

import { Nunito } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Aimee Avila | Project Manager",
  description:
    "Experienced project manager sharing insights and strategies for success. Join me on this journey to turn project visions into reality.",
};

type RootLayoutProps = PropsWithChildren<unknown>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
