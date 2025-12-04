'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Separator } from '@components/ui/separator'
import { BookVolumeCard } from './book-volume-card'
import { FilterInput } from './filter-input'
import { LoadingSkeleton } from './loading-skeleton'
import { useBookVolumes } from './use-book-volumes'

export function BookVolumeList() {
  const { data, isLoading, page, limit } = useBookVolumes()

  return (
    <>
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
        <FilterInput />
      </div>

      {isLoading && <LoadingSkeleton />}

      {data?.bookVolumes && (
        <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2">
          {data.bookVolumes.map((volume) => (
            <BookVolumeCard key={volume.id} volume={volume} />
          ))}
        </div>
      )}

      {!isLoading && !data?.bookVolumes.length && (
        <div className="col-end-3 flex w-full flex-col items-center justify-center">
          <p className="font-medium text-lg text-muted-foreground">
            Nenhum volume encontrado.
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
