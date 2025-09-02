'use client'

import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'
import { cn } from '@utils/cn'
import { ArrowDownUp, Search } from 'lucide-react'
import { parseAsString, useQueryState } from 'nuqs'

export function FilterInput() {
  const [filter, setFilter] = useQueryState(
    'filtro',
    parseAsString.withDefault('')
  )
  const [orderBy = 'desc', setOrderBy] = useQueryState('order_by')

  function handleOrderBy() {
    setOrderBy(orderBy === 'asc' ? 'desc' : 'asc')
  }

  return (
    <div className="flex gap-2">
      <div className="relative w-full sm:w-fit">
        <Input
          className="w-full ps-9 sm:w-fit"
          onChange={(event) => setFilter(event.currentTarget.value)}
          placeholder="Filtrar"
          value={filter}
        />
        <div className="pointer-events-none absolute inset-0 start-0 flex w-fit items-center ps-3">
          <Search className="size-3" />
        </div>
      </div>

      <Button
        aria-label={`Ordenar por data ${orderBy === 'asc' ? 'crescente' : 'decrescente'}`}
        onClick={handleOrderBy}
        variant="ghost"
      >
        <ArrowDownUp
          className={cn(
            'text-muted-foreground transition-transform',
            orderBy === 'asc' && 'rotate-180'
          )}
        />
      </Button>
    </div>
  )
}
