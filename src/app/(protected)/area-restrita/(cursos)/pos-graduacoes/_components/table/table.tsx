'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { LoadingSkeleton } from './loading-skeleton'
import { postGraduateProgramTableColumns } from './program-table-columns'
import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  usePostGraduatePrograms,
} from './use-post-graduate-programs.hook'

interface IPostGraduateProgram {
  id: string
  title: string
  imageUrl: string | null
  description: string | null
  startDate: Date
  endDate: Date
  contact: string
  registrationLink: string | null
  createdAt: Date
  updatedAt: Date
}

export function Table() {
  const { data, handleRemoveProgram, isLoading } = usePostGraduatePrograms()

  const [{ title, contact, startDate, endDate, createdAt, updatedAt }] =
    useQueryStates({
      title: parseAsBoolean.withDefault(true),
      contact: parseAsBoolean.withDefault(true),
      startDate: parseAsBoolean.withDefault(true),
      endDate: parseAsBoolean.withDefault(true),
      createdAt: parseAsBoolean.withDefault(true),
      updatedAt: parseAsBoolean.withDefault(true),
    })

  const filteredTableColumns: ColumnDef<IPostGraduateProgram>[] =
    postGraduateProgramTableColumns.filter((column) => {
      if (column.id === 'title') {
        return title
      }

      if (column.id === 'contact') {
        return contact
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
    })

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={filteredTableColumns}
          data={data?.postGraduatePrograms}
          handleRemove={handleRemoveProgram}
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
