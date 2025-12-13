'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { LoadingSkeleton } from './loading-skeleton'
import { postGraduateProgramTableColumns } from './program-table-columns'
import { usePostGraduatePrograms } from './use-post-graduate-programs.hook'

interface IPostGraduateProgram {
  id: string
  title: string
  imageUrl: string | null
  description: string | null
  startDate: string
  endDate: string
  contact: string
  registrationLink: string | null
  createdAt: string
  updatedAt: string
}

export function Table() {
  const { data, handleRemoveProgram, isLoading, page, limit } =
    usePostGraduatePrograms()

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
        currentPage={Number(page)}
        defaultRowsPerPage={Number(limit)}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
