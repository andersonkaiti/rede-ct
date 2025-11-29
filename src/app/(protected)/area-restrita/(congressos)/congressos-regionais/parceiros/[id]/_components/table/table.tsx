'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { useParams } from 'next/navigation'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { useCongressPartners } from '../../_hooks/use-congress-partners.hook'
import { LoadingSkeleton } from './loading-skeleton'
import { partnersTableColumns } from './partners-table-columns'

interface ICongressPartner {
  id: string
  name: string
  logoUrl: string | null
  congressId: string
}

export function Table() {
  const { id } = useParams<{ id: string }>()
  const { data, handleRemovePartner, isLoading, page, limit } =
    useCongressPartners(id)

  const [{ name, logoUrl }] = useQueryStates({
    name: parseAsBoolean.withDefault(true),
    logoUrl: parseAsBoolean.withDefault(true),
  })

  const filteredTableColumns: ColumnDef<ICongressPartner>[] =
    partnersTableColumns.filter((column) => {
      if (column.id === 'name') {
        return name
      }

      if (column.id === 'logoUrl') {
        return logoUrl
      }

      return column.id === 'actions'
    })

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={filteredTableColumns}
          data={data?.data || []}
          handleRemove={handleRemovePartner}
        />
      )}

      {isLoading && <LoadingSkeleton />}

      <PaginatorComponent
        currentPage={Number(page)}
        defaultRowsPerPage={Number(limit)}
        totalPages={data?.pagination?.totalPages || 1}
      />
    </>
  )
}
