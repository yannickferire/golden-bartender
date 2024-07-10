"use client"

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


export default function MenuEmpty() {
  return (
    <article className="flex flex-col gap-4 min-h-52 justify-center items-center border rounded-xl">
      <p className="text-center">Are you thirsty?<br/>
      Your <strong>drink menu</strong> seems to be <strong>empty</strong>.</p>
      <Credenza>
        <CredenzaTrigger asChild>
          <Button>Add drink</Button>
        </CredenzaTrigger>
        <CredenzaContent>
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
                <Input id="name" placeholder="Espresso Martini" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description">
                  Description
                </Label>
                <Input id="description" placeholder="Martini + 1 shot of espresso" className="col-span-3" />
              </div>
            </div>
          </CredenzaBody>
          <CredenzaFooter className="flex sm:justify-between">
            <CredenzaClose asChild>
              <Button variant="outline">Cancel</Button>
            </CredenzaClose>
              <Button type="submit">Add to your bar</Button>
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
    </article>
  )
}
