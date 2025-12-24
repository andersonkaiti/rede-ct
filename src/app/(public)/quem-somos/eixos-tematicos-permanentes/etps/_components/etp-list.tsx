'use client'

import { ETPCard } from './etp-card'
import { ETPFilterInput } from './etp-filter-input'
import { LoadingSkeleton } from './loading-skeleton'
import { useETPs } from './use-etp.hook'

export function EPTList() {
  const { etps, isLoading } = useETPs()

  return (
    <div className="space-y-8">
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <div className="w-full flex-1">
          <ETPFilterInput />
        </div>
        <span className="mt-1 text-right font-medium text-muted-foreground text-xs sm:mt-0 sm:text-left">
          {etps?.length} resultado
          {etps?.length === 1 ? '' : 's'}
        </span>
      </div>

      {isLoading && <LoadingSkeleton />}

      {!isLoading && etps?.length === 0 && (
        <span className="mt-4 flex py-4 text-muted-foreground text-sm">
          Nenhum ETP foi cadastrado ainda.
        </span>
      )}

      <div className="flex flex-col gap-4">
        {etps?.map((etp) => (
          <ETPCard etp={etp} key={etp.id} />
        ))}
      </div>
    </div>
  )
}
