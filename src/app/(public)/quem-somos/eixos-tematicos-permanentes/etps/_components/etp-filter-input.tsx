'use client'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@components/ui/input-group'
import { Search } from 'lucide-react'
import { useQueryState } from 'nuqs'

export function ETPFilterInput() {
  const [filter, setFilter] = useQueryState('filter')

  function handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value)
  }

  return (
    <InputGroup className="w-full sm:w-fit">
      <InputGroupAddon>
        <Search className="size-4" />
      </InputGroupAddon>
      <InputGroupInput
        className="w-full sm:w-fit"
        name="nome"
        onChange={handleFilterChange}
        placeholder="Filtrar por título, descrição..."
        value={filter || ''}
      />
    </InputGroup>
  )
}
