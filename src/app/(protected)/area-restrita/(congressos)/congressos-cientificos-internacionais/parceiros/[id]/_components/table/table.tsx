'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { useCongressPartners } from './use-congress-partners.hook'
import { LoadingSkeleton } from './loading-skeleton'
import { partnersTableColumns } from './partners-table-columns'

interface ICongressPartner {
  id: string
  name: string
  logoUrl: string
  congressId: string
}

export function Table() {
  const { data, handleRemovePartner, isLoading, page, limit } =
    useCongressPartners()

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
          data={data.partners}
          handleRemove={handleRemovePartner}
        />
      )}

      {isLoading && <LoadingSkeleton />}

      <PaginatorComponent
        currentPage={Number(page)}
        defaultRowsPerPage={Number(limit)}
        totalPages={1}
      />
    </>
  )
}
