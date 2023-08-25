import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
