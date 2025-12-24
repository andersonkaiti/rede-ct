'use client'

import { Button } from '@components/ui/button'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@components/ui/input-group'
import { cn } from '@utils/cn'
import { ArrowDownUp, Search } from 'lucide-react'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

export function FilterInput() {
  const [{ filtro: filter, orderBy }, setQuery] = useQueryStates({
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault('desc'),
  })

  const setFilter = (value: string) => setQuery({ filtro: value })
  const setOrderBy = (value: 'asc' | 'desc') => setQuery({ orderBy: value })

  function handleOrderBy() {
    setOrderBy(orderBy === 'asc' ? 'desc' : 'asc')
  }

  return (
    <div className="flex w-full gap-2 sm:w-fit">
      <InputGroup className="w-full sm:w-fit">
        <InputGroupAddon>
          <Search className="size-3" />
        </InputGroupAddon>

        <InputGroupInput
          onChange={(event) => setFilter(event.currentTarget.value)}
          placeholder="Filtrar eventos"
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
  )
}
