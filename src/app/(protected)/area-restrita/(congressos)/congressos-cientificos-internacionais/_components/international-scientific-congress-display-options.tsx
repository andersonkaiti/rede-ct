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
import { internationalScientificCongressesTableColumns } from './table/international-scientific-congresses-table-columns'

export function InternationalScientificCongressesDisplayOptions() {
  const [columnsVisibility, setColumnsVisibility] = useQueryStates({
    title: parseAsBoolean.withDefault(true),
    edition: parseAsBoolean.withDefault(true),
    startDate: parseAsBoolean.withDefault(true),
    endDate: parseAsBoolean.withDefault(true),
    location: parseAsBoolean.withDefault(true),
    format: parseAsBoolean.withDefault(true),
    status: parseAsBoolean.withDefault(true),
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
        {internationalScientificCongressesTableColumns.map((col) => {
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
