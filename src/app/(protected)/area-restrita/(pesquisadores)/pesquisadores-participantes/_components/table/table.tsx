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
import type { IResearcher } from 'types/researcher'
import { useResearchers } from '../../_hooks/use-researchers.hook'
import { LoadingSkeleton } from './loading-skeleton'
import { researchersTableColumns } from './researchers-table-columns'

export function Table() {
  const { data, handleRemoveResearcher, isLoading } = useResearchers()

  const [{ registrationNumber, name, seniority }] = useQueryStates({
    registrationNumber: parseAsBoolean.withDefault(true),
    name: parseAsBoolean.withDefault(true),
    seniority: parseAsBoolean.withDefault(true),
  })

  const [page] = useQueryState('page', parseAsInteger.withDefault(1))

  const filteredTableColumns: ColumnDef<IResearcher>[] =
    researchersTableColumns.filter((column) => {
      if (column.id === 'registrationNumber') {
        return registrationNumber
      }

      if (column.id === 'name') {
        return name
      }

      if (column.id === 'seniority') {
        return seniority
      }

      return true
    })

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={filteredTableColumns}
          data={data?.researchers}
          handleRemove={handleRemoveResearcher}
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
