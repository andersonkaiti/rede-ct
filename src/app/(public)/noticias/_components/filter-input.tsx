'use client'

import { Button } from '@components/ui/button'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@components/ui/input-group'
import { cn } from '@utils/cn'
import { ArrowDownUp, Search } from 'lucide-react'
import { parseAsString, useQueryStates } from 'nuqs'

export function FilterInput() {
  const [{ filtro: filter, orderBy }, setQuery] = useQueryStates({
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsString.withDefault('desc'),
  })

  const setFilter = (value: string) => setQuery({ filtro: value })
  const setOrderBy = (value: string) => setQuery({ orderBy: value })

  function handleOrderBy() {
    setOrderBy(orderBy === 'asc' ? 'desc' : 'asc')
  }

  return (
    <>
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
    </>
  )
}
