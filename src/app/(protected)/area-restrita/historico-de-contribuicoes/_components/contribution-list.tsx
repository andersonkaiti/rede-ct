'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Contribution } from './contribution'
import { LoadingSkeleton } from './loading-skeleton'
import { useContributions } from './use-contributions.hook'

export function ContributionList() {
  const { paginatedResults, isLoading, page } = useContributions()

  const contributions = paginatedResults?.pendencies ?? []

  const hasContributions = contributions.length > 0

  return (
    <>
      {hasContributions && !isLoading && (
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contributions.map((contribution) => (
            <Contribution key={contribution.id} {...contribution} />
          ))}
        </section>
      )}

      {!(hasContributions || isLoading) && (
        <section className="flex flex-col items-center justify-center py-12">
          <div className="text-center text-muted-foreground">
            <p className="font-medium">Nenhuma contribuição encontrada.</p>
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
