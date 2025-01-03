import type { Metadata } from "next";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  preload: true
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} h-dvh bg-orange-100/10`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
