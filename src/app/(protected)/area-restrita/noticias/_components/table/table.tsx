'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, parseAsInteger, useQueryStates } from 'nuqs'

import type { INews } from 'types/news'
import { useUserNews } from '../../_hooks/use-user-news.hook'
import { LoadingSkeleton } from './loading-skeleton'
import { newsTableColumns } from './news-table-columns'

export function Table() {
  const { data, handleRemoveNews, isLoading } = useUserNews()

  const [{ title, createdAt, updatedAt, page }] = useQueryStates({
    title: parseAsBoolean.withDefault(true),
    createdAt: parseAsBoolean.withDefault(true),
    updatedAt: parseAsBoolean.withDefault(true),
    page: parseAsInteger.withDefault(1),
  })

  const filteredTableColumns: ColumnDef<INews>[] = newsTableColumns.filter(
    (column) => {
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
