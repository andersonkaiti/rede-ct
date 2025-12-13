'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import { LoadingSkeleton } from './loading-skeleton'
import { regionalCongressesTableColumns } from './regional-congresses-table-columns'
import { useRegionalCongresses } from './use-regional-congresses.hook'

export function Table() {
  const { data, handleRemoveRegionalCongress, isLoading, page, limit } =
    useRegionalCongresses()

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={regionalCongressesTableColumns}
          data={data?.data}
          handleRemove={handleRemoveRegionalCongress}
        />
      )}

      {isLoading && <LoadingSkeleton />}

      <PaginatorComponent
        currentPage={Number(page)}
        defaultRowsPerPage={Number(limit)}
        totalPages={data?.pagination?.totalPages ?? 1}
      />
    </>
  )
}
