'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Separator } from '@components/ui/separator'
import { EventCard } from './event-card'
import { FilterInput } from './filter-input'
import { LoadingSkeleton } from './loading-skeleton'
import { DEFAULT_LIMIT, DEFAULT_PAGE, useEvents } from './use-events.hook'

export function EventsList() {
  const { data, isLoading } = useEvents()

  return (
    <>
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
        <FilterInput />
      </div>

      {isLoading && <LoadingSkeleton />}

      {data?.events && (
        <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2">
          {data.events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}

      {!isLoading && !data?.events.length && (
        <div className="col-end-3 flex w-full flex-col items-center justify-center">
          <p className="font-medium text-lg text-muted-foreground">
            Nenhum evento encontrado.
          </p>
          <span className="mt-2 text-muted-foreground text-sm">
            Tente ajustar o filtro ou pesquise por outro termo.
          </span>
        </div>
      )}

      <Separator />

      <PaginatorComponent
        currentPage={data?.page ?? DEFAULT_PAGE}
        defaultRowsPerPage={data?.limit ?? DEFAULT_LIMIT}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
