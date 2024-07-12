// MenuEmpty.tsx

import AddDrink from "./AddDrink";
import { DrinkData } from "../page";

interface MenuEmptyProps {
  userId: string;
  onAddDrink: (newDrink: DrinkData) => void;
}

const MenuEmpty: React.FC<MenuEmptyProps> = ({ userId, onAddDrink }) => {
  return (
    <article className="flex flex-col gap-4 min-h-52 justify-center items-center border rounded-xl">
      <p className="text-center">Are you thirsty?<br/>
      Your <strong>drink menu</strong> seems to be <strong>empty</strong>.</p>
      <AddDrink userId={userId} onAddDrink={onAddDrink} />
    </article>
  )
}

export default MenuEmpty;
