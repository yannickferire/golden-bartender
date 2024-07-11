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
import { CheckCircledIcon, UpdateIcon } from '@radix-ui/react-icons';
import { toast } from "sonner"


interface AddDrinkProps {
  userId: string;
}

const AddDrink: React.FC<AddDrinkProps> = ({ userId }) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    setLoading(true);
    
    try {
      const response = await fetch('/api/add-drink', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, userId }),
      });

      if (response.ok) {
        const newDrink = await response.json();
        setName('');
        setDescription('');
        console.log('Boisson ajoutée:', newDrink);
        toast(newDrink.name + " added to your bar", {
          description: newDrink.description,
          icon: <CheckCircledIcon className="w-5 h-5 text-secondary" />,
        })
      } else {
        console.error('Erreur lors de l\'ajout de la boisson');
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la boisson', error);
    } finally {
      setLoading(false);
    }
  };
  return (
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
            {loading ? 
            <Button disabled>
              <UpdateIcon className="mr-2 w-3 h-3 animate-spin" />
              Saving
            </Button> : 
            <Button type="submit">
              Add to your bar
            </Button>
            }  
        </CredenzaFooter>
      </form>
      </CredenzaContent>
    </Credenza>
  )
}

export default AddDrink;
