'use client'

import { Button } from '@components/ui/button'
import { cn } from '@utils/cn'
import { ArrowDownUp } from 'lucide-react'
import { parseAsString, useQueryState } from 'nuqs'

export function OrderByButton() {
  const [orderBy, setOrderBy] = useQueryState(
    'orderBy',
    parseAsString.withDefault('desc')
  )

  function handleOrderBy() {
    setOrderBy(orderBy === 'asc' ? 'desc' : 'asc')
  }

  return (
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
  )
}
