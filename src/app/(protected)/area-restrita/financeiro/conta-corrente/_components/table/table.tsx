'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import { accountsTableColumns } from './accounts-table-columns'
import { LoadingSkeleton } from './loading-skeleton'
import { DEFAULT_LIMIT, DEFAULT_PAGE, useAccounts } from './use-accounts.hook'

export function Table() {
  const { data, handleRemoveAccount, isLoading } = useAccounts()

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={accountsTableColumns}
          data={data?.checkingAccounts}
          handleRemove={handleRemoveAccount}
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
