import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="w-full max-w-screen-xl flex justify-between">
      <h1 className="font-bold text-md">Golden Bartender</h1>
      <div className="flex space-x-2">
        <Button variant="linkHover2">Login</Button>
        <Button variant="shine">Sign up</Button>
        <ModeToggle />
      </div>
    </header>
  );
}
