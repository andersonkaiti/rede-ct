'use client'

import PaginatorComponent from '@components/ui/paginator'
import { LoadingSkeleton } from '../../_components/loading-skeleton'
import { Pendency } from '../../_components/pendency'
import { useRegisteredPendencies } from './use-registered-pendencies.hook'

export function RegisteredPendencyList() {
  const { isLoading, paginatedResults, page } = useRegisteredPendencies()

  const pendencies = paginatedResults?.pendencies ?? []

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
        defaultRowsPerPage={9}
        totalPages={paginatedResults?.totalPages ?? 1}
      />
    </>
  )
}
