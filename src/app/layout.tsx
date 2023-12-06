import type { Metadata } from "next";

import "./fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juanse y Cami",
  description: "Te invitamos a nuestro casamiento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
