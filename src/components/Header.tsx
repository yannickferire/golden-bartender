"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Logo from "./Logo";

import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isSignUpPage = pathname === "/sign-up";
  const isLogInPage = pathname === "/log-in";
  const isMyBarPage = pathname === "/my-bar";

  return (
    <header className="w-full max-w-screen-xl flex justify-between items-center">
      <div className="flex items-center space-x-16">
      <Link href="/" className="flex space-x-3 items-center">
        <Logo size={60} />
        <h1 className="font-mono font-bold tracking-wide text-lg leading-5">Golden<br/>Bartender</h1>
      </Link>
      <ul className="flex">
        <li><Link href="/"><Button className="font-bold" variant="linkHover2" disabled={isHomePage}>Home</Button></Link></li>
        <li><Link href="/my-bar"><Button className="font-bold" variant="linkHover2" disabled={isMyBarPage}>My Bar</Button></Link></li>
      </ul>
      </div>
      <div className="flex items-center space-x-2">
        <SignedOut>
          <SignInButton>
            <Button variant="linkHover2" disabled={isLogInPage}>Login</Button>
          </SignInButton>
          <Button variant="shine" disabled={isSignUpPage}><SignUpButton /></Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <ModeToggle />
      </div>
    </header>
  );
}
