'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Contribution } from '../../_components/contribution'
import { LoadingSkeleton } from '../../_components/loading-skeleton'
import { useAllContributions } from './use-contributions.hook'

export function AllContributionList() {
  const { data, isLoading, page, limit } = useAllContributions()

  return (
    <>
      {data?.pendencies.length && !isLoading && (
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 xlg:grid-cols-3">
          {data.pendencies.map((contribution) => (
            <Contribution contribution={contribution} key={contribution.id} />
          ))}
        </section>
      )}

      {!(data?.pendencies.length || isLoading) && (
        <section className="flex flex-col items-center justify-center py-12">
          <div className="text-center text-muted-foreground">
            <p className="font-medium">Nenhuma contribuição encontrada.</p>
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
