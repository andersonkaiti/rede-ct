'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Separator } from '@components/ui/separator'
import { FilterInput } from './filter-input'
import { ListLoadingSkeleton } from './loading-skeleton'
import { MeetingCard } from './meeting-card'
import { DEFAULT_LIMIT, DEFAULT_PAGE, useMeetings } from './use-meetings.hook'

export function MeetingsList() {
  const { data, isLoading } = useMeetings()

  return (
    <>
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
        <FilterInput />
      </div>

      {isLoading && <ListLoadingSkeleton />}

      {data?.meetings && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {data.meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      )}

      {!isLoading && !data?.meetings.length && (
        <div className="col-end-3 flex w-full flex-col items-center justify-center">
          <p className="font-medium text-lg text-muted-foreground">
            Nenhuma reunião encontrada.
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
