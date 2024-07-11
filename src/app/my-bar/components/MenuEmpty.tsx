"use client"

import AddDrink from "./AddDrink";

interface MenuEmptyProps {
  userId: string;
}

const MenuEmpty: React.FC<MenuEmptyProps> = ({ userId }) => {
  return (
    <article className="flex flex-col gap-4 min-h-52 justify-center items-center border rounded-xl">
      <p className="text-center">Are you thirsty?<br/>
      Your <strong>drink menu</strong> seems to be <strong>empty</strong>.</p>
      <AddDrink userId={userId} />
    </article>
  )
}

export default MenuEmpty;