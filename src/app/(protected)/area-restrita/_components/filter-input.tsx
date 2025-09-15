'use client'

import { Input } from '@components/ui/input'
import { Search } from 'lucide-react'
import { useQueryState } from 'nuqs'

export function FilterInput() {
  const [filter, setFilter] = useQueryState('filtro')

  return (
    <div className="relative w-full xlg:w-fit">
      <Input
        className="w-full ps-9 xlg:w-fit"
        onChange={(event) => setFilter(event.currentTarget.value)}
        placeholder="Filtrar"
        value={filter || ''}
      />
      <div className="absolute inset-0 start-0 flex w-fit items-center ps-3">
        <Search className="size-3" />
      </div>
    </div>
  )
}
