import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Logo from "./Logo";

import { SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="w-full max-w-screen-xl flex justify-between items-center">
      <Link href="/" className="flex space-x-2 items-center">
        <Logo size={60} />
        <h1 className="font-bold text-xl leading-5">Golden<br/>Bartender</h1>
      </Link>
      <Link href="/my-bar">My Bar</Link>
      <div className="flex items-center space-x-2">
        <SignedOut>
          <SignInButton>
            <Button variant="linkHover2">Login</Button>
          </SignInButton>
          <Button variant="shine"><SignUpButton /></Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <ModeToggle />
      </div>
    </header>
  );
}
