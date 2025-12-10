'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import type { ILaw } from './law-table-columns'
import { lawTableColumns } from './law-table-columns'
import { LoadingSkeleton } from './loading-skeleton'
import { useLaws } from './use-laws.hook'

export function Table() {
  const { data, isLoading, handleRemoveLaw, page, limit } = useLaws()

  const [{ title, link, country, createdAt, updatedAt }] = useQueryStates({
    title: parseAsBoolean.withDefault(true),
    link: parseAsBoolean.withDefault(true),
    country: parseAsBoolean.withDefault(true),
    createdAt: parseAsBoolean.withDefault(true),
    updatedAt: parseAsBoolean.withDefault(true),
  })

  const filteredLawTableColumns: ColumnDef<ILaw>[] = lawTableColumns.filter(
    (column) => {
      if (column.id === 'title') {
        return title
      }

      if (column.id === 'link') {
        return link
      }

      if (column.id === 'country') {
        return country
      }

      if (column.id === 'createdAt') {
        return createdAt
      }

      if (column.id === 'updatedAt') {
        return updatedAt
      }

      return true
    },
  )

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={filteredLawTableColumns}
          data={data?.laws}
          handleRemove={handleRemoveLaw}
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
