'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { LoadingSkeleton } from './loading-skeleton'
import { meetingsTableColumns } from './meetings-table-columns'
import { useMeetings } from './use-meetings.hook'

interface IMeeting {
  id: string
  title: string
  scheduledAt: string
  format: 'ONLINE' | 'IN_PERSON'
  agenda: string
  meetingLink?: string | null
  location?: string | null
  status: 'PENDING' | 'CANCELLED' | 'FINISHED'
  createdAt: string
  updatedAt: string
  minutes: {
    id: string
    title: string
    publishedAt: string
    documentUrl: string
    meetingId: string
    createdAt: string
    updatedAt: string
  } | null
}

export function Table() {
  const { data, handleRemoveMeeting, isLoading, page, limit } = useMeetings()

  const [{ title, scheduledAt, format, status }] = useQueryStates({
    title: parseAsBoolean.withDefault(true),
    scheduledAt: parseAsBoolean.withDefault(true),
    format: parseAsBoolean.withDefault(true),
    status: parseAsBoolean.withDefault(true),
  })

  const filteredTableColumns: ColumnDef<IMeeting>[] =
    meetingsTableColumns.filter((column) => {
      if (column.id === 'title') {
        return title
      }

      if (column.id === 'scheduledAt') {
        return scheduledAt
      }

      if (column.id === 'format') {
        return format
      }

      if (column.id === 'status') {
        return status
      }
      return true
    })

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={filteredTableColumns}
          data={data?.meetings}
          handleRemove={handleRemoveMeeting}
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
