'use client'

import { Button } from '@components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { Filter } from 'lucide-react'
import { parseAsStringEnum, useQueryState } from 'nuqs'
import { ACCOUNT_TYPE_LABELS, ACCOUNT_TYPE_VALUES } from './constants'

export function TypeFilter() {
  const [type, setType] = useQueryState(
    'type',
    parseAsStringEnum(ACCOUNT_TYPE_VALUES).withDefault('ALL'),
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2" variant="outline">
          <Filter className="size-4" />
          Tipo
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Filtrar por tipo</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={type === 'ALL'}
          onCheckedChange={() => setType('ALL')}
        >
          Todos
        </DropdownMenuCheckboxItem>
        {Object.entries(ACCOUNT_TYPE_LABELS).map(([value, label]) => (
          <DropdownMenuCheckboxItem
            checked={type === value}
            key={value}
            onCheckedChange={() =>
              setType(value as keyof typeof ACCOUNT_TYPE_LABELS)
            }
          >
            {label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
