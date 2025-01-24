import type { Metadata } from "next";
import { Source_Code_Pro as FontSans, Spline_Sans_Mono as FontMono } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
const fontMono = FontMono({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-mono",
})

import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Golden Bartender",
  description: "Your drink collection to your guests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
            "bg-background font-sans antialiased",
            fontSans.variable,
            fontMono.variable
          )}>
        {children}
      </body>
    </html>
  );
}
