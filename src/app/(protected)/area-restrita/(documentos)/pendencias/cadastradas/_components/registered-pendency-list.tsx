'use client'

import PaginatorComponent from '@components/ui/paginator'
import { LoadingSkeleton } from '../../_components/loading-skeleton'
import { Pendency } from '../../_components/pendency'
import { useRegisteredPendencies } from './use-registered-pendencies.hook'

export function RegisteredPendencyList() {
  const { data, isLoading, page, limit } = useRegisteredPendencies()

  return (
    <>
      {data?.pendencies.length && !isLoading && (
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 xlg:grid-cols-3">
          {data?.pendencies.map((pendency) => (
            <Pendency key={pendency.id} pendency={pendency} />
          ))}
        </section>
      )}

      {!(data?.pendencies.length || isLoading) && (
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
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
