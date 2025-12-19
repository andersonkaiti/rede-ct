'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Separator } from '@components/ui/separator'
import { CongressCard } from './congress-card'
import { FilterInput } from './filter-input'
import { LoadingSkeleton } from './loading-skeleton'
import { useCongresses } from './use-congresses'

export function CongressList() {
  const { data, isLoading, page, limit } = useCongresses()

  return (
    <>
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
        <FilterInput />
      </div>

      {isLoading && <LoadingSkeleton />}

      {data?.congresses && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {data.congresses.map((congress) => (
            <CongressCard key={congress.id} congress={congress} />
          ))}
        </div>
      )}

      {!isLoading && !data?.congresses.length && (
        <div className="col-end-3 flex w-full flex-col items-center justify-center">
          <p className="font-medium text-lg text-muted-foreground">
            Nenhum congresso encontrado.
          </p>
          <span className="mt-2 text-muted-foreground text-sm">
            Tente ajustar o filtro ou pesquise por outro termo.
          </span>
        </div>
      )}

      <Separator />

      <PaginatorComponent
        currentPage={Number(page)}
        defaultRowsPerPage={Number(limit)}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
