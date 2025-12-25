'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Separator } from '@components/ui/separator'
import { FilterInput } from './filter-input'
import { LoadingSkeleton } from './loading-skeleton'
import { DEFAULT_LIMIT, DEFAULT_PAGE, useWebinars } from './use-webinars.hook'
import { WebinarCard } from './webinar-card'

export function WebinarsList() {
  const { data, isLoading } = useWebinars()

  return (
    <>
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
        <FilterInput />
      </div>

      {isLoading && <LoadingSkeleton />}

      {data?.webinars && (
        <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2">
          {data.webinars.map((webinar) => (
            <WebinarCard key={webinar.id} webinar={webinar} />
          ))}
        </div>
      )}

      {!isLoading && !data?.webinars.length && (
        <div className="col-end-3 flex w-full flex-col items-center justify-center">
          <p className="font-medium text-lg text-muted-foreground">
            Nenhum webinário encontrado.
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
