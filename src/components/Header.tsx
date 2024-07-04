import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Logo from "./Logo";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Sign } from "crypto";

export default function Header() {
  return (
    <header className="w-full max-w-screen-xl flex justify-between items-center">
      <div className="flex space-x-2 items-center">
        <Logo size={60} />
        <h1 className="font-bold text-xl leading-5">Golden<br/>Bartender</h1>
      </div>
      <div className="flex space-x-2">
        <SignedOut>
          <Button variant="linkHover2">Login</Button>
          <Button variant="shine">Sign up</Button>
          <SignInButton />
        </SignedOut>
        <ModeToggle />
      </div>
    </header>
  );
}
