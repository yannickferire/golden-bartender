"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function MenuEmpty() {
  return (
    <article className="flex flex-col gap-4 min-h-52 justify-center items-center border rounded-2xl">
      <p className="text-center">Are you thirsty?<br/>
      Your <strong>drink menu</strong> seems to be <strong>empty</strong>.</p>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add drink</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add drink to your bar</DialogTitle>
            <DialogDescription>
              Fill informations then add your drink to your bar.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name">
              Name
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
        <DialogFooter className="flex sm:justify-between">
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Add to your bar</Button>
        </DialogFooter>
        </DialogContent>
      </Dialog>
    </article>
  )
}
