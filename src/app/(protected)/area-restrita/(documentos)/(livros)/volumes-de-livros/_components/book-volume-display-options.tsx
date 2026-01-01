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
import { bookVolumeTableColumns } from './table/book-volume-table-columns'

export function BookVolumeDisplayOptions() {
  const [columnsVisibility, setColumnsVisibility] = useQueryStates({
    volumeNumber: parseAsBoolean.withDefault(true),
    year: parseAsBoolean.withDefault(true),
    title: parseAsBoolean.withDefault(true),
    author: parseAsBoolean.withDefault(true),
    description: parseAsBoolean.withDefault(true),
    createdAt: parseAsBoolean.withDefault(true),
    updatedAt: parseAsBoolean.withDefault(true),
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

        {bookVolumeTableColumns.map((col) => {
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
