'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, parseAsInteger, useQueryState } from 'nuqs'
import type { INews } from 'types/news'
import { useUserNews } from '../../_hooks/use-user-news.hook'
import { LoadingSkeleton } from './loading-skeleton'
import { newsTableColumns } from './news-table-columns'

export function Table() {
  const { data, handleRemoveNews, isLoading } = useUserNews()

  const [hasTitle] = useQueryState('titulo', parseAsBoolean.withDefault(true))
  const [hasDate] = useQueryState('data', parseAsBoolean.withDefault(true))
  const [page] = useQueryState('page', parseAsInteger.withDefault(1))

  const noneOfThem = !(hasTitle || hasDate)

  const filteredTableColumns: ColumnDef<INews>[] = noneOfThem
    ? []
    : newsTableColumns.filter((column) => {
        if (column.id === 'title' && !hasTitle) {
          return false
        }

        if (column.id === 'date' && !hasDate) {
          return false
        }

        return true
      })

  return (
    <>
      {!isLoading && (
        <DataTable<INews, unknown>
          columns={filteredTableColumns}
          data={data?.news}
          handleRemove={handleRemoveNews}
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
