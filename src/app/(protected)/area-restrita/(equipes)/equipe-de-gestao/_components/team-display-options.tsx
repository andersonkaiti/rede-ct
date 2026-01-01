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
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { managementTeamTableColumns } from './table/management-team-table-columns'

export function TeamDisplayOptions() {
  const [columnsVisibility, setColumnsVisibility] = useQueryStates({
    name: parseAsBoolean.withDefault(true),
    quantity: parseAsBoolean.withDefault(true),
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Funnel aria-hidden="true" className="-ms-1 opacity-60" size={16} />
          Exibir
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Exibir colunas</DropdownMenuLabel>
        {managementTeamTableColumns.map((col) => {
          const columnKey = col.id as keyof typeof columnsVisibility

          if (col.id === 'actions') {
            return null
          }

          return (
            <DropdownMenuCheckboxItem
              checked={columnsVisibility[columnKey]}
              key={col.id}
              onCheckedChange={(value) => {
                setColumnsVisibility((prev) => ({
                  ...prev,
                  [columnKey]: value,
                }))
              }}
              onSelect={(event) => event.preventDefault()}
            >
              {col.header as string}
            </DropdownMenuCheckboxItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
