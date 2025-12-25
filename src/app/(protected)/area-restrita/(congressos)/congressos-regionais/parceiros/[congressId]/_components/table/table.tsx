'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { LoadingSkeleton } from './loading-skeleton'
import { partnersTableColumns } from './partners-table-columns'
import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  useCongressPartners,
} from './use-congress-partners.hook'

interface ICongressPartner {
  id: string
  name: string
  logoUrl: string | null
  congressId: string
}

export function Table() {
  const { data, handleRemovePartner, isLoading } = useCongressPartners()

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
          data={data?.partners}
          handleRemove={handleRemovePartner}
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
