import "./globals.css";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { Socials } from "~/components/socials";
import { Toolbar } from "~/components/toolbar";
import { cn } from "~/lib/utils/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aimeeavila.com"),
  title: {
    template: "%s | Aimee Avila",
    default: "Aimee Avila",
  },
  description:
    "Experienced project manager sharing insights and strategies for success. Join me on this journey to turn project visions into reality.",
  keywords:
    "aimee avila, project manager, product owner, software, angular, react, agile",
  openGraph: {
    title: "Aimee Avila",
    description:
      "Experienced project manager sharing insights and strategies for success. Join me on this journey to turn project visions into reality.",
    url: "https://aimeeavila.com",
    siteName: "Aimee Avila's Website",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `/images/logo-4.png`,
        width: 1200,
        height: 630,
        alt: "Aimee Avila's site",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: "Aimee Avila",
    card: "summary_large_image",
    creator: "@aimee_avila23",
  },
  icons: {
    shortcut: "https://aimeeavila.com/favicons/favicon.ico",
  },
  alternates: {
    types: {
      "application/rss+xml": "https://aimeeavila.com/feed.xml",
    },
  },
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
