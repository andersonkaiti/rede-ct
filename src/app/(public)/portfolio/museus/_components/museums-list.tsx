'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Separator } from '@components/ui/separator'
import { FilterInput } from './filter-input'
import { LoadingSkeleton } from './loading-skeleton'
import { MuseumCard } from './museum-card'
import { DEFAULT_LIMIT, DEFAULT_PAGE, useMuseums } from './use-museums.hook'

export function MuseumList() {
  const { data, isLoading } = useMuseums()

  return (
    <>
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
        <FilterInput />
      </div>

      {isLoading && <LoadingSkeleton />}

      {data?.museums && (
        <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2">
          {data.museums.map((museum) => (
            <MuseumCard key={museum.id} museum={museum} />
          ))}
        </div>
      )}

      {!isLoading && !data?.museums.length && (
        <div className="col-end-3 flex w-full flex-col items-center justify-center">
          <p className="font-medium text-lg text-muted-foreground">
            Nenhum museu encontrado.
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
