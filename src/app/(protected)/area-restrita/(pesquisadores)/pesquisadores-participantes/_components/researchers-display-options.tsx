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
import { researchersTableColumns } from './table/researchers-table-columns'

export function ResearchersDisplayOptions() {
  const [columnsVisibility, setColumnsVisibility] = useQueryStates({
    registrationNumber: parseAsBoolean.withDefault(true),
    name: parseAsBoolean.withDefault(true),
    seniority: parseAsBoolean.withDefault(true),
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

        {researchersTableColumns.map((col) => {
          const columnKey = col.id as keyof typeof columnsVisibility

          if (col.id === 'actions') {
            return null
          }

          return (
            <DropdownMenuCheckboxItem
              checked={columnsVisibility[columnKey]}
              className="capitalize"
              key={col.id}
              onCheckedChange={(value) => {
                setColumnsVisibility((prev) => ({
                  ...prev,
                  [columnKey]: value,
                }))
              }}
              onSelect={(event) => event.preventDefault()}
            >
              <span className="ml-5">{col.header as string}</span>
            </DropdownMenuCheckboxItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
