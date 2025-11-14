'use client'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@components/ui/input-group'
import { Search } from 'lucide-react'
import { parseAsString, useQueryState } from 'nuqs'

export function ResearcherFilterInput() {
  const [filter, setFilter] = useQueryState(
    'filtro',
    parseAsString.withDefault('')
  )

  return (
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
  )
}
