import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Inter as FontSans } from "next/font/google";
import "../styles/globals.css";

import { ClerkProvider } from '@clerk/nextjs'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Golden Bartender",
  description: "A list of all your drinks for your guests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head />
        <body 
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
