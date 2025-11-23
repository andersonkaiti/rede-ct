'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { useInternationalScientificCongresses } from '../../_hooks/use-international-scientific-congresses.hook'
import { internationalScientificCongressesTableColumns } from './international-scientific-congresses-table-columns'
import { LoadingSkeleton } from './loading-skeleton'

interface IInternationalScientificCongress {
  id: string
  title: string
  edition: number
  startDate: string
  endDate: string
  description: string | null
  location: string | null
  congressLink: string | null
  noticeUrl: string | null
  scheduleUrl: string | null
  programUrl: string | null
  adminReportUrl: string | null
  proceedingsUrl: string | null
  createdAt: string
  updatedAt: string
  partners: object[]
  galleries: object[]
  format?: 'ONLINE' | 'IN_PERSON'
  status?: 'PENDING' | 'CANCELLED' | 'FINISHED'
}

export function Table() {
  const {
    data,
    handleRemoveInternationalScientificCongress,
    isLoading,
    page,
    limit,
  } = useInternationalScientificCongresses()

  const [{ title, edition, startDate, endDate, location, format, status }] =
    useQueryStates({
      title: parseAsBoolean.withDefault(true),
      edition: parseAsBoolean.withDefault(true),
      startDate: parseAsBoolean.withDefault(true),
      endDate: parseAsBoolean.withDefault(true),
      location: parseAsBoolean.withDefault(true),
      format: parseAsBoolean.withDefault(true),
      status: parseAsBoolean.withDefault(true),
    })

  const filteredTableColumns: ColumnDef<IInternationalScientificCongress>[] =
    internationalScientificCongressesTableColumns.filter((column) => {
      if (column.id === 'title') {
        return title
      }

      if (column.id === 'edition') {
        return edition
      }

      if (column.id === 'startDate') {
        return startDate
      }

      if (column.id === 'endDate') {
        return endDate
      }

      if (column.id === 'location') {
        return location
      }

      if (column.id === 'format') {
        return format
      }

      if (column.id === 'status') {
        return status
      }

      return column.id === 'actions'
    })

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={filteredTableColumns}
          data={data?.congresses}
          handleRemove={handleRemoveInternationalScientificCongress}
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
