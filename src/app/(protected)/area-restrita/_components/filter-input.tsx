'use client'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@components/ui/input-group'
import { Search } from 'lucide-react'
import { parseAsString, useQueryState } from 'nuqs'

export function FilterInput() {
  const [filter, setFilter] = useQueryState(
    'filtro',
    parseAsString.withDefault(''),
  )

  return (
    <InputGroup>
      <InputGroupAddon>
        <Search className="size-3" />
      </InputGroupAddon>

      <InputGroupInput
        className="w-full ps-9 xlg:w-fit"
        onChange={(event) => setFilter(event.currentTarget.value)}
        placeholder="Filtrar"
        value={filter}
      />
    </InputGroup>
  )
}
