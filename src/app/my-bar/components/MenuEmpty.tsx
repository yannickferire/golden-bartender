"use client"

import { useState, FormEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza"

interface MenuEmptyProps {
  userId: string;
}

const MenuEmpty: React.FC<MenuEmptyProps> = ({ userId }) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/add-drink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, userId }),
    });

    if (response.ok) {
      const newDrink = await response.json();
      console.log('Boisson ajoutée:', newDrink);
    } else {
      console.error('Erreur lors de l\'ajout de la boisson');
    }
  };
  return (
    <article className="flex flex-col gap-4 min-h-52 justify-center items-center border rounded-xl">
      <p className="text-center">Are you thirsty?<br/>
      Your <strong>drink menu</strong> seems to be <strong>empty</strong>.</p>
      <Credenza>
        <CredenzaTrigger asChild>
          <Button>Add drink</Button>
        </CredenzaTrigger>
        <CredenzaContent>
        <form onSubmit={handleSubmit}>
          <CredenzaHeader>
            <CredenzaTitle>Add a new drink</CredenzaTitle>
            <CredenzaDescription>
              Fill informations then add your drink to your bar.
            </CredenzaDescription>
          </CredenzaHeader>
          <CredenzaBody>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name">
                  Name <span className="text-secondary text-lg">*</span>
                </Label>
                <Input 
                  id="name" 
                  placeholder="Espresso Martini" 
                  className="col-span-3" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description">
                  Description
                </Label>
                <Input 
                  id="description"
                  placeholder="Martini + 1 shot of espresso"
                  className="col-span-3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </CredenzaBody>
          <CredenzaFooter className="flex sm:justify-between">
            <CredenzaClose asChild>
              <Button variant="outline">Cancel</Button>
            </CredenzaClose>
              <Button type="submit">Add to your bar</Button>
          </CredenzaFooter>
        </form>
        </CredenzaContent>
      </Credenza>
    </article>
  )
}

export default MenuEmpty;