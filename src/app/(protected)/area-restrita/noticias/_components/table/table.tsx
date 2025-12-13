'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { LoadingSkeleton } from './loading-skeleton'
import { newsTableColumns } from './news-table-columns'
import { useUserNews } from './use-user-news.hook'

interface INews {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  content: string
  imageUrl: string | null
}

export function Table() {
  const { data, handleRemoveNews, isLoading, page, limit } = useUserNews()

  const [{ title, createdAt, updatedAt }] = useQueryStates({
    title: parseAsBoolean.withDefault(true),
    createdAt: parseAsBoolean.withDefault(true),
    updatedAt: parseAsBoolean.withDefault(true),
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
    },
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
        currentPage={Number(page)}
        defaultRowsPerPage={Number(limit)}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
