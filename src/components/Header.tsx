import Image from "next/image";

import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="w-full max-w-screen-xl flex justify-between items-center">
      <div className="flex space-x-2 items-center">
        <Logo size={60} />
        <h1 className="font-bold text-xl leading-5">Golden<br/>Bartender</h1>
      </div>
      <div className="flex space-x-2">
        <Button variant="linkHover2">Login</Button>
        <Button variant="shine">Sign up</Button>
        <ModeToggle />
      </div>
    </header>
  );
}
