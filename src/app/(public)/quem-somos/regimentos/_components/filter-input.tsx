'use client'

import { Button } from '@components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@components/ui/input-group'
import { cn } from '@utils/cn'
import { ArrowDownUp, Filter, Search } from 'lucide-react'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

const STATUS_OPTIONS = [
  { label: 'Todos', value: 'ALL' },
  { label: 'Rascunho', value: 'DRAFT' },
  { label: 'Em vigor', value: 'IN_FORCE' },
  { label: 'Revogado', value: 'REVOKED' },
] as const

type StatusValue = (typeof STATUS_OPTIONS)[number]['value']

export function FilterInput() {
  const [{ filtro: filter, orderBy, status }, setQuery] = useQueryStates({
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsString.withDefault('desc'),
    status: parseAsStringEnum([
      'DRAFT',
      'IN_FORCE',
      'REVOKED',
      'ALL',
    ]).withDefault('ALL'),
  })

  const setFilter = (value: string) => setQuery({ filtro: value })
  const setOrderBy = (value: string) => setQuery({ orderBy: value })
  const setStatus = (value: StatusValue) => setQuery({ status: value })

  function handleOrderBy() {
    setOrderBy(orderBy === 'asc' ? 'desc' : 'asc')
  }

  const currentStatusLabel =
    STATUS_OPTIONS.find((opt) => opt.value === status)?.label || 'Status'

  return (
    <>
      <div className="flex w-full gap-2 sm:w-fit">
        <InputGroup className="w-full sm:w-fit">
          <InputGroupAddon>
            <Search className="size-3" />
          </InputGroupAddon>

          <InputGroupInput
            onChange={(event) => setFilter(event.currentTarget.value)}
            placeholder="Filtrar"
            value={filter}
          />
        </InputGroup>

        <Button
          aria-label={`Ordenar por data ${orderBy === 'asc' ? 'crescente' : 'decrescente'}`}
          onClick={handleOrderBy}
          variant="ghost"
        >
          <ArrowDownUp
            className={cn(
              'text-muted-foreground transition-transform',
              orderBy === 'asc' && 'rotate-180',
            )}
          />
        </Button>
      </div>

      <div className="flex w-full gap-2 sm:w-fit">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="flex-1">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-muted-foreground"
            >
              <Filter className="size-4" />
              {currentStatusLabel}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {STATUS_OPTIONS.map((opt) => (
              <DropdownMenuItem
                key={opt.value}
                onSelect={() => setStatus(opt.value)}
                className={cn(status === opt.value && 'bg-muted font-semibold')}
              >
                {opt.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}
