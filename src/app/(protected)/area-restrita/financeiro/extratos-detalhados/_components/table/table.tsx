'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import { LoadingSkeleton } from './loading-skeleton'
import { statementsTableColumns } from './statements-table-columns'
import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  useStatements,
} from './use-statements.hook'

export function Table() {
  const { data, handleRemoveStatement, isLoading } = useStatements()

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={statementsTableColumns}
          data={data?.financialTransactionStatements}
          handleRemove={handleRemoveStatement}
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
