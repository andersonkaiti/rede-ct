'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { LoadingSkeleton } from './loading-skeleton'
import { useWebinars } from './use-webinars.hook'
import { webinarTableColumns } from './webinar-table-columns'

interface IWebinar {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  description: string | null
  scheduledAt: Date
  webinarLink: string | null
}

export function Table() {
  const { data, handleRemoveWebinar, isLoading, page, limit } = useWebinars()

  const [{ title, scheduledAt, createdAt, updatedAt }] = useQueryStates({
    title: parseAsBoolean.withDefault(true),
    scheduledAt: parseAsBoolean.withDefault(true),
    createdAt: parseAsBoolean.withDefault(true),
    updatedAt: parseAsBoolean.withDefault(true),
  })

  const filteredTableColumns: ColumnDef<IWebinar>[] =
    webinarTableColumns.filter((column) => {
      if (column.id === 'title') {
        return title
      }

      if (column.id === 'scheduledAt') {
        return scheduledAt
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
          data={data?.webinars}
          handleRemove={handleRemoveWebinar}
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
