'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Separator } from '@components/ui/separator'
import { ETPCard } from './etp-card'
import { ETPFilterInput } from './etp-filter-input'
import { LoadingSkeleton } from './loading-skeleton'
import { DEFAULT_LIMIT, DEFAULT_PAGE, useETPs } from './use-etps.hook'

export function ETPsList() {
  const { data, isLoading } = useETPs()

  return (
    <div className="space-y-8">
      <ETPFilterInput />

      {isLoading && <LoadingSkeleton />}

      {!isLoading && !data?.etps?.length && (
        <span className="mt-4 flex py-4 text-muted-foreground text-sm">
          Nenhum ETP foi cadastrado ainda.
        </span>
      )}

      <div className="flex flex-col gap-4">
        {data?.etps?.map((etp) => (
          <ETPCard etp={etp} key={etp.id} />
        ))}
      </div>

      <Separator />

      <PaginatorComponent
        currentPage={data?.page ?? DEFAULT_PAGE}
        defaultRowsPerPage={data?.limit ?? DEFAULT_LIMIT}
        totalPages={data?.totalPages ?? 1}
      />
    </div>
  )
}
