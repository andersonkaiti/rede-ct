'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import {
  parseAsBoolean,
  parseAsInteger,
  useQueryState,
  useQueryStates,
} from 'nuqs'
import type { IPartner } from 'types/partner'
import { usePartners } from '../../_hooks/use-partners.hook'
import { LoadingSkeleton } from './loading-skeleton'
import { partnersTableColumns } from './partners-table-columns'

export function Table() {
  const { data, handleRemovePartner, isLoading } = usePartners()

  const [{ name, isActive, createdAt, updatedAt }] = useQueryStates({
    name: parseAsBoolean.withDefault(true),
    isActive: parseAsBoolean.withDefault(true),
    createdAt: parseAsBoolean.withDefault(true),
    updatedAt: parseAsBoolean.withDefault(true),
  })

  const [page] = useQueryState('page', parseAsInteger.withDefault(1))

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
