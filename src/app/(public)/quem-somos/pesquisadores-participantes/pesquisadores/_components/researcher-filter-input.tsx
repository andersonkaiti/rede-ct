'use client'

import { Input } from '@components/ui/input'
import { Search } from 'lucide-react'
import { useQueryState } from 'nuqs'

export function ResearcherFilterInput() {
  const [filter, setFilter] = useQueryState('nome')

  function handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value)
  }

  return (
    <div className="relative w-full sm:w-fit">
      <Input
        autoComplete="off"
        className="w-full ps-9 sm:w-fit"
        name="nome"
        onChange={handleFilterChange}
        placeholder="Filtrar por nome"
        value={filter || ''}
      />
      <div className="absolute inset-0 start-0 flex w-fit items-center ps-3">
        <Search className="size-3" />
      </div>
    </div>
  )
}
