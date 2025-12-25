'use client'

import PaginatorComponent from '@components/ui/paginator'
import { LoadingSkeleton } from './loading-skeleton'
import { Pendency } from './pendency'
import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  usePendencies,
} from './use-pendencies.hook'

export function PendencyList() {
  const { data, isLoading } = usePendencies()

  const pendencies =
    data?.pendencies.filter((pendency) => pendency.status === 'PENDING') ?? []

  return (
    <>
      {!!data && !isLoading && (
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 xlg:grid-cols-3">
          {pendencies.map((pendency) => (
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
        currentPage={data?.page ?? DEFAULT_PAGE}
        defaultRowsPerPage={data?.limit ?? DEFAULT_LIMIT}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
