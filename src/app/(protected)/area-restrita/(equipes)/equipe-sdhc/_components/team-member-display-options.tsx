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
import { sdhcTeamTableColumns } from './_table/sdhc-team-table-columns'

export function TeamMemberDisplayOptions() {
  const [columnsVisibility, setColumnsVisibility] = useQueryStates({
    name: parseAsBoolean.withDefault(true),
    email: parseAsBoolean.withDefault(true),
    role: parseAsBoolean.withDefault(true),
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
        <DropdownMenuLabel className="text-muted-foreground">
          Exibir colunas
        </DropdownMenuLabel>
        {sdhcTeamTableColumns.map((col) => {
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
              <span className="ml-5">{col.header as string}</span>
            </DropdownMenuCheckboxItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
