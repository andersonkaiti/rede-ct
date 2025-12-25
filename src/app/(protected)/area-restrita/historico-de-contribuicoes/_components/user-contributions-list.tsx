'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Contribution } from './contribution'
import { LoadingSkeleton } from './loading-skeleton'
import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  useContributions,
} from './use-user-contributions.hook'

export function UserContributionsList() {
  const { data, isLoading } = useContributions()

  return (
    <>
      {!!data && !isLoading && (
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
        currentPage={data?.page ?? DEFAULT_PAGE}
        defaultRowsPerPage={data?.limit ?? DEFAULT_LIMIT}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
