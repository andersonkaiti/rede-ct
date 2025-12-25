'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { LoadingSkeleton } from './loading-skeleton'
import { regimentsTableColumns } from './regiments-table-columns'
import { DEFAULT_LIMIT, DEFAULT_PAGE, useRegiments } from './use-regiments.hook'

interface IRegiment {
  id: string
  title: string
  version: string
  publishedAt: Date
  documentUrl: string
  status: 'DRAFT' | 'IN_FORCE' | 'REVOKED'
  createdAt: Date
  updatedAt: Date
}

export function Table() {
  const { data, handleRemoveRegiment, isLoading } = useRegiments()

  const [{ title, version, publishedAt, status, documentUrl }] = useQueryStates(
    {
      title: parseAsBoolean.withDefault(true),
      version: parseAsBoolean.withDefault(true),
      publishedAt: parseAsBoolean.withDefault(true),
      status: parseAsBoolean.withDefault(true),
      documentUrl: parseAsBoolean.withDefault(true),
    },
  )

  const filteredTableColumns: ColumnDef<IRegiment>[] =
    regimentsTableColumns.filter((column) => {
      if (column.id === 'title') {
        return title
      }

      if (column.id === 'version') {
        return version
      }

      if (column.id === 'publishedAt') {
        return publishedAt
      }

      if (column.id === 'status') {
        return status
      }

      if (column.id === 'documentUrl') {
        return documentUrl
      }

      return true
    })

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={filteredTableColumns}
          data={data?.regiments}
          handleRemove={handleRemoveRegiment}
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
