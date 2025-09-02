'use client'

import { Button } from '@components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { Funnel } from 'lucide-react'
import { parseAsBoolean, useQueryState } from 'nuqs'
import { useState } from 'react'

export function NewsDisplayOptions() {
  const [title, setTitle] = useQueryState(
    'titulo',
    parseAsBoolean.withDefault(true)
  )
  const [date, setDate] = useQueryState(
    'data',
    parseAsBoolean.withDefault(true)
  )

  const [open, setOpen] = useState<boolean>()

  return (
    <DropdownMenu onOpenChange={setOpen} open={open}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Funnel />
          Exibir
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel className="text-muted-foreground">
          Exibir
        </DropdownMenuLabel>

        <DropdownMenuCheckboxItem
          checked={title}
          onCheckedChange={(checked) => setTitle(checked)}
          onSelect={(event) => event.preventDefault()}
        >
          <span className="ml-5">Título</span>
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={date}
          onCheckedChange={(checked) => setDate(checked)}
          onSelect={(event) => event.preventDefault()}
        >
          <span className="ml-5">Data</span>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
