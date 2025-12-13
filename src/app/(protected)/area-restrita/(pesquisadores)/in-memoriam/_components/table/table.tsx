'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import {
  parseAsBoolean,
  parseAsInteger,
  useQueryState,
  useQueryStates,
} from 'nuqs'
import { inMemoriamTableColumns } from './in-memoriam-table-columns'
import { LoadingSkeleton } from './loading-skeleton'
import { useInMemoriam } from './use-in-memoriam.hook'

interface IInMemoriam {
  id: string
  name: string
  birthDate: string
  deathDate: string
  biography: string | null
  photoUrl: string | null
  role: 'RESEARCHER' | 'LEADER'
  createdAt: string
  updatedAt: string
}

export function Table() {
  const { data, handleRemoveInMemorian, isLoading } = useInMemoriam()

  const [{ name, biography, role, birthDate, deathDate }] = useQueryStates({
    name: parseAsBoolean.withDefault(true),
    biography: parseAsBoolean.withDefault(true),
    role: parseAsBoolean.withDefault(true),
    birthDate: parseAsBoolean.withDefault(true),
    deathDate: parseAsBoolean.withDefault(true),
  })

  const [page] = useQueryState('page', parseAsInteger.withDefault(1))

  const filteredTableColumns: ColumnDef<IInMemoriam>[] =
    inMemoriamTableColumns.filter((column) => {
      if (column.id === 'name') {
        return name
      }

      if (column.id === 'biography') {
        return biography
      }

      if (column.id === 'role') {
        return role
      }

      if (column.id === 'birthDate') {
        return birthDate
      }

      if (column.id === 'deathDate') {
        return deathDate
      }

      return true
    })

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={filteredTableColumns}
          data={data?.inMemoriam}
          handleRemove={handleRemoveInMemorian}
        />
      )}

      {isLoading && <LoadingSkeleton />}

      <PaginatorComponent
        currentPage={page}
        defaultRowsPerPage={7}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
