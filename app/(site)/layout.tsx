import "../globals.css";

import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { ThemeProvider } from "~/components/theme-provider";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://aimeeavila.com"),
  title: {
    template: "%s | Aimee Avila",
    default: "Aimee Avila",
  },
  description: "Product/Project Manager. Blog, projects, and more.",
  keywords: "Aimee avila, product engineer, project manager, technical",
  openGraph: {
    title: "Aimee Avila",
    description: "Product/Project Manager. Blog, projects, and more.",
    url: "https://aimeeavila.com",
    siteName: "Aimee Avila's Website",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `/images/main.jpg`,
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
    creator: "@aimee-avila23",
  },
  icons: {
    shortcut: "https://aimeeavila.com/favicons/favicon.ico",
  },
};
