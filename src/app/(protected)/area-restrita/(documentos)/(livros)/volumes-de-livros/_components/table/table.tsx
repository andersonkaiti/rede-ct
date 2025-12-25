'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { bookVolumeTableColumns } from './book-volume-table-columns'
import { LoadingSkeleton } from './loading-skeleton'
import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  useBookVolumes,
} from './use-book-volumes.hook'

interface IBookVolume {
  id: string
  volumeNumber: number
  year: number
  title: string
  author: {
    id: string
    name: string
    emailAddress: string
    avatarUrl: string | null
    orcid: string | null
    lattesUrl: string | null
    role: string
  }
  accessUrl: string | null
  coverImageUrl: string | null
  catalogSheetUrl: string | null
  description: string | null
  createdAt: Date
  updatedAt: Date
}

export function Table() {
  const { data, handleRemoveBookVolume, isLoading } = useBookVolumes()

  const [
    { volumeNumber, year, title, author, description, createdAt, updatedAt },
  ] = useQueryStates({
    volumeNumber: parseAsBoolean.withDefault(true),
    year: parseAsBoolean.withDefault(true),
    title: parseAsBoolean.withDefault(true),
    author: parseAsBoolean.withDefault(true),
    description: parseAsBoolean.withDefault(true),
    createdAt: parseAsBoolean.withDefault(true),
    updatedAt: parseAsBoolean.withDefault(true),
  })

  const filteredTableColumns: ColumnDef<IBookVolume>[] =
    bookVolumeTableColumns.filter((column) => {
      if (column.id === 'volumeNumber') {
        return volumeNumber
      }

      if (column.id === 'year') {
        return year
      }

      if (column.id === 'title') {
        return title
      }

      if (column.id === 'author') {
        return author
      }

      if (column.id === 'description') {
        return description
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
          data={data?.bookVolumes}
          handleRemove={handleRemoveBookVolume}
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
