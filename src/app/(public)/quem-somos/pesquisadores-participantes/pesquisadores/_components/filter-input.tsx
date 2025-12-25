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
import { ArrowDownUp, ListFilter, Search } from 'lucide-react'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { SENIORITY_OPTIONS, type SeniorityValue } from './constants'

export function ResearcherFilterInput() {
  const [{ filtro: filter, orderBy, seniority }, setQuery] = useQueryStates({
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault('desc'),
    seniority: parseAsStringEnum([
      'ALL',
      'SENIOR',
      'RESEARCHER',
      'JUNIOR',
      'HONOR',
    ]).withDefault('ALL'),
  })

  const setFilter = (value: string) => setQuery({ filtro: value })
  const setOrderBy = (value: 'asc' | 'desc') => setQuery({ orderBy: value })
  const setSeniority = (value: SeniorityValue) => setQuery({ seniority: value })

  function handleOrderBy() {
    setOrderBy(orderBy === 'asc' ? 'desc' : 'asc')
  }

  const currentStatusLabel =
    SENIORITY_OPTIONS.find((opt) => opt.value === seniority)?.label ||
    'Senioridade'

  return (
    <div className="flex w-full gap-2 sm:w-fit">
      <InputGroup className="w-full sm:w-fit">
        <InputGroupAddon>
          <Search className="size-3" />
        </InputGroupAddon>
        <InputGroupInput
          name="filtro"
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

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="flex-1">
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-muted-foreground"
          >
            <ListFilter className="size-4" />
            {currentStatusLabel}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {SENIORITY_OPTIONS.map((opt) => (
            <DropdownMenuItem
              key={opt.value}
              onSelect={() => setSeniority(opt.value)}
              className={cn(
                seniority === opt.value && 'bg-muted font-semibold',
              )}
            >
              {opt.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
