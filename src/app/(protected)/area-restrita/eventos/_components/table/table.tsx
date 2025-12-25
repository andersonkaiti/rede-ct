'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { eventTableColumns } from './event-table-columns'
import { LoadingSkeleton } from './loading-skeleton'
import { DEFAULT_LIMIT, DEFAULT_PAGE, useEvents } from './use-events.hook'

interface IEvent {
  id: string
  title: string
  description: string | null
  imageUrl: string | null
  startDate: Date
  endDate: Date
  location: string | null
  status: 'PENDING' | 'CANCELLED' | 'FINISHED'
  format: 'ONLINE' | 'IN_PERSON'
  eventLink: string | null
  createdAt: Date
  updatedAt: Date
}

export function Table() {
  const { data, handleRemoveEvent, isLoading } = useEvents()

  const [{ title, status, format, startDate, endDate, createdAt, updatedAt }] =
    useQueryStates({
      title: parseAsBoolean.withDefault(true),
      status: parseAsBoolean.withDefault(true),
      format: parseAsBoolean.withDefault(true),
      startDate: parseAsBoolean.withDefault(true),
      endDate: parseAsBoolean.withDefault(true),
      createdAt: parseAsBoolean.withDefault(true),
      updatedAt: parseAsBoolean.withDefault(true),
    })

  const filteredTableColumns: ColumnDef<IEvent>[] = eventTableColumns.filter(
    (column) => {
      if (column.id === 'title') {
        return title
      }

      if (column.id === 'status') {
        return status
      }

      if (column.id === 'format') {
        return format
      }

      if (column.id === 'startDate') {
        return startDate
      }

      if (column.id === 'endDate') {
        return endDate
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
          data={data?.events}
          handleRemove={handleRemoveEvent}
        />
      )}

      {isLoading && <LoadingSkeleton />}

      <PaginatorComponent
        currentPage={data?.page ?? DEFAULT_PAGE}
        defaultRowsPerPage={data?.limit ?? DEFAULT_LIMIT}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
