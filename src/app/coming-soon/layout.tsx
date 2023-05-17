import React, { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<unknown>;

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-hero">
      {children}
    </div>
  );
}
