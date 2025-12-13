'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { LoadingSkeleton } from './loading-skeleton'
import { regimentsTableColumns } from './regiments-table-columns'
import { useRegiments } from './use-regiments.hook'

interface IRegiment {
  id: string
  title: string
  version: string
  publishedAt: string
  documentUrl: string
  status: 'DRAFT' | 'IN_FORCE' | 'REVOKED'
  createdAt: string
  updatedAt: string
}

export function Table() {
  const { data, handleRemoveRegiment, isLoading, page, limit } = useRegiments()

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
        currentPage={Number(page)}
        defaultRowsPerPage={Number(limit)}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
