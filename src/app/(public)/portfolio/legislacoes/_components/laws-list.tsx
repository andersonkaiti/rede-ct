'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Separator } from '@components/ui/separator'
import { Scale } from 'lucide-react'
import Link from 'next/link'
import { FilterInput } from './filter-input'
import { LoadingSkeleton } from './loading-skeleton'
import { DEFAULT_LIMIT, DEFAULT_PAGE, useLaws } from './use-laws.hook'

export function LawsList() {
  const { data, isLoading } = useLaws()

  return (
    <>
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
        <FilterInput />
      </div>

      {isLoading && <LoadingSkeleton />}

      {data?.laws && (
        <div className="flex flex-col gap-6">
          {data.laws.map((law) => (
            <Link
              className="inline-flex w-full items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-6 py-3 font-semibold text-primary shadow-sm transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              href={law.link}
              key={law.id}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Scale className="size-5" />
              <span>{law.country}</span>
              <span>{law.title}</span>
            </Link>
          ))}
        </div>
      )}

      {!isLoading && !data?.laws.length && (
        <div className="col-end-3 flex w-full flex-col items-center justify-center py-12">
          <p className="font-medium text-lg text-muted-foreground">
            Nenhuma legislação encontrada.
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
