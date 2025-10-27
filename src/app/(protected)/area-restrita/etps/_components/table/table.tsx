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
import type { IETP } from 'types/etp'
import { useEtps } from '../../_hooks/use-etps.hook'
import { etpsTableColumns } from './etps-table-columns'
import { LoadingSkeleton } from './loading-skeleton'

export function Table() {
  const { data, handleRemoveEtp, isLoading } = useEtps()

  const [{ code, title, createdAt, updatedAt }] = useQueryStates({
    code: parseAsBoolean.withDefault(true),
    title: parseAsBoolean.withDefault(true),
    createdAt: parseAsBoolean.withDefault(true),
    updatedAt: parseAsBoolean.withDefault(true),
  })

  const [page] = useQueryState('page', parseAsInteger.withDefault(1))

  const filteredTableColumns: ColumnDef<IETP>[] = etpsTableColumns.filter(
    (column) => {
      if (column.id === 'code') {
        return code
      }

      if (column.id === 'title') {
        return title
      }

      if (column.id === 'createdAt') {
        return createdAt
      }

      if (column.id === 'updatedAt') {
        return updatedAt
      }

      return true
    }
  )

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={filteredTableColumns}
          data={data?.etps}
          handleRemove={handleRemoveEtp}
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
