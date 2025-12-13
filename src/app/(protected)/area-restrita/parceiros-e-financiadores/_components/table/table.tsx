'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, parseAsInteger, useQueryStates } from 'nuqs'
import { LoadingSkeleton } from './loading-skeleton'
import { partnersTableColumns } from './partners-table-columns'
import { usePartners } from './use-partners.hook'

interface IPartner {
  name: string
  id: string
  logoUrl: string | null
  websiteUrl: string | null
  description: string | null
  category: string | null
  since: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export function Table() {
  const { data, handleRemovePartner, isLoading } = usePartners()

  const [{ name, isActive, createdAt, updatedAt, page }] = useQueryStates({
    name: parseAsBoolean.withDefault(true),
    isActive: parseAsBoolean.withDefault(true),
    createdAt: parseAsBoolean.withDefault(true),
    updatedAt: parseAsBoolean.withDefault(true),
    page: parseAsInteger.withDefault(1),
  })

  const filteredTableColumns: ColumnDef<IPartner>[] =
    partnersTableColumns.filter((column) => {
      if (column.id === 'name') {
        return name
      }

      if (column.id === 'isActive') {
        return isActive
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
          data={data?.partners}
          handleRemove={handleRemovePartner}
        />
      )}

      {isLoading && <LoadingSkeleton />}

      <PaginatorComponent
        currentPage={page}
        defaultRowsPerPage={7}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
