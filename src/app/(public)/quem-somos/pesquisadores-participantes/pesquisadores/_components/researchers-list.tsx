'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Separator } from '@components/ui/separator'
import { ResearcherFilterInput } from './filter-input'
import { LoadingSkeleton } from './loading-skeleton'
import { ResearcherListCard } from './researcher-card'
import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  useResearchers,
} from './use-researchers.hook'

export function ResearchersList() {
  const { data, isLoading } = useResearchers()

  return (
    <>
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
        <ResearcherFilterInput />
      </div>

      {isLoading && <LoadingSkeleton />}

      {data?.researchers && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {data.researchers.map((researcher) => (
            <ResearcherListCard key={researcher.id} researcher={researcher} />
          ))}
        </div>
      )}

      {!isLoading && !data?.researchers.length && (
        <div className="col-end-3 flex w-full flex-col items-center justify-center">
          <p className="font-medium text-lg text-muted-foreground">
            Nenhum pesquisador encontrado.
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
