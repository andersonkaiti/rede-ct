'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { LoadingSkeleton } from './loading-skeleton'
import { redectHighlightTableColumns } from './redect-highlight-table-columns'
import { useRedeCTHighlights } from './use-redect-highlights.hook'

interface IRedeCTHighlight {
  id: string
  type: 'PERSON' | 'INSTITUTION'
  name: string
  description: string | null
  honorableMention: string | null
  imageUrl: string | null
  honoredAt: string
  meritUrl: string | null
  createdAt: string
  updatedAt: string
}

export function Table() {
  const { data, handleRemoveRedeCTHighlight, isLoading, page, limit } =
    useRedeCTHighlights()

  const [{ name, type, honoredAt, createdAt, updatedAt }] = useQueryStates({
    name: parseAsBoolean.withDefault(true),
    type: parseAsBoolean.withDefault(true),
    honoredAt: parseAsBoolean.withDefault(true),
    createdAt: parseAsBoolean.withDefault(true),
    updatedAt: parseAsBoolean.withDefault(true),
  })

  const filteredTableColumns: ColumnDef<IRedeCTHighlight>[] =
    redectHighlightTableColumns.filter((column) => {
      if (column.id === 'name') {
        return name
      }

      if (column.id === 'type') {
        return type
      }

      if (column.id === 'honoredAt') {
        return honoredAt
      }

      if (column.id === 'createdAt') {
        return createdAt
      }

      if (column.id === 'updatedAt') {
        return updatedAt
      }

      return true
    })

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={filteredTableColumns}
          data={data?.highlights}
          handleRemove={handleRemoveRedeCTHighlight}
        />
      )}

      {isLoading && <LoadingSkeleton />}

      <PaginatorComponent
        currentPage={Number(page)}
        defaultRowsPerPage={Number(limit)}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
