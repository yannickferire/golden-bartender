"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

import { Checkbox } from "@/components/ui/checkbox"

export type Drinks = {
  id: string
  name: string
  description?: string
}

export type Actions = {
  onDelete: (id: string) => void
}

export const columns = (actions: Actions): ColumnDef<Drinks>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    )
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const drink = row.original
      return (
        <div className="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Button
            className="opacity-70 hover:opacity-100 mr-2 translate-x-12 group-hover:translate-x-0 transition-all duration-500"
            variant="outline"
            size="icon"
            onClick={() => {
              console.log("Edit drink")
            }}
          ><Pencil1Icon className="w-5 h-5" /></Button>
          <Button
          className="opacity-70 hover:opacity-100 translate-x-8 group-hover:translate-x-0 transition-all duration-500"
            variant="outline"
            size="icon"
            onClick={() => {
              actions.onDelete(drink.id)
            }}
          ><TrashIcon className="w-5 h-5 text-destructive" /></Button>
        </div>
      )
    }
  }
]
