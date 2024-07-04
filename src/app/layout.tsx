import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Inter as FontSans } from "next/font/google";
import "../styles/globals.css";

import { ClerkProvider } from '@clerk/nextjs';
import Header from "@/components/Header";

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
            <main className="flex flex-col min-h-screen items-center justify-between p-8">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,189,122,0.4),rgba(255,255,255,0))] dark:bg-zinc-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,189,122,0.2),rgba(255,255,255,0))]"></div>
              <Header />
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
