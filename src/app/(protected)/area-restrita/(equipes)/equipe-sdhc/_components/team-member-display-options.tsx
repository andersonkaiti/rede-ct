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

export function TeamMemberDisplayOptions() {
  const [name, setName] = useQueryState(
    'nome',
    parseAsBoolean.withDefault(true)
  )
  const [email, setEmail] = useQueryState(
    'email',
    parseAsBoolean.withDefault(true)
  )
  const [role, setRole] = useQueryState(
    'cargo',
    parseAsBoolean.withDefault(true)
  )
  const [description, setDescription] = useQueryState(
    'descricao',
    parseAsBoolean.withDefault(true)
  )
  const [createdAt, setCreatedAt] = useQueryState(
    'created_at',
    parseAsBoolean.withDefault(true)
  )
  const [updatedAt, setUpdatedAt] = useQueryState(
    'updated_at',
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
          checked={name}
          onCheckedChange={(checked) => setName(checked)}
          onSelect={(event) => event.preventDefault()}
        >
          <span className="ml-5">Nome</span>
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={email}
          onCheckedChange={(checked) => setEmail(checked)}
          onSelect={(event) => event.preventDefault()}
        >
          <span className="ml-5">E-mail</span>
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={role}
          onCheckedChange={(checked) => setRole(checked)}
          onSelect={(event) => event.preventDefault()}
        >
          <span className="ml-5">Cargo</span>
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={description}
          onCheckedChange={(checked) => setDescription(checked)}
          onSelect={(event) => event.preventDefault()}
        >
          <span className="ml-5">Descrição</span>
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={createdAt}
          onCheckedChange={(checked) => setCreatedAt(checked)}
          onSelect={(event) => event.preventDefault()}
        >
          <span className="ml-5">Criado em</span>
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={updatedAt}
          onCheckedChange={(checked) => setUpdatedAt(checked)}
          onSelect={(event) => event.preventDefault()}
        >
          <span className="ml-5">Atualizado em</span>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
