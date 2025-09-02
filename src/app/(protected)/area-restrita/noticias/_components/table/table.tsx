'use client'

import { DataTable } from '@components/ui/data-table'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryState } from 'nuqs'
import type { INews } from 'types/news'
import { useUserNews } from '../../_hooks/use-user-news.hook'
import { LoadingSkeleton } from './loading-skeleton'
import { newsTableColumns } from './news-table-columns'

export function Table() {
  const { data: news, handleRemoveNews, isLoading } = useUserNews()

  const [hasTitle] = useQueryState('titulo', parseAsBoolean.withDefault(true))
  const [hasDate] = useQueryState('data', parseAsBoolean.withDefault(true))

  if (isLoading) {
    return <LoadingSkeleton />
  }

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
    <DataTable<INews, unknown>
      columns={filteredTableColumns}
      data={news}
      handleRemove={handleRemoveNews}
    />
  )
}
