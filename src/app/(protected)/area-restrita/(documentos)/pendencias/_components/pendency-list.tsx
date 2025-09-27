'use client'

import PaginatorComponent from '@components/ui/paginator'
import { LoadingSkeleton } from './loading-skeleton'
import { Pendency } from './pendency'
import { usePendencies } from './use-pendencies.hook'

export function PendencyList() {
  const { paginatedResults, isLoading, page, limit } = usePendencies()

  const pendencies =
    paginatedResults?.pendencies.filter(
      (pendency) => pendency.status === 'PENDING'
    ) ?? []

  const hasPendencies = pendencies.length > 0

  return (
    <>
      {hasPendencies && !isLoading && (
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 xlg:grid-cols-3">
          {pendencies.map((pendency) => (
            <Pendency key={pendency.id} {...pendency} />
          ))}
        </section>
      )}

      {!(hasPendencies || isLoading) && (
        <section className="flex flex-col items-center justify-center py-12">
          <div className="text-center text-muted-foreground">
            <p className="font-medium">Nenhuma pendência encontrada.</p>
          </div>
        </section>
      )}

      {isLoading && <LoadingSkeleton />}

      <PaginatorComponent
        currentPage={Number(page)}
        defaultRowsPerPage={Number(limit)}
        totalPages={paginatedResults?.totalPages ?? 1}
      />
    </>
  )
}
