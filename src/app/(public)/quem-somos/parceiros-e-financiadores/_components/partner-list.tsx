'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Separator } from '@components/ui/separator'
import { FilterInput } from './filter-input'
import { LoadingSkeleton } from './loading-skeleton'
import { PartnerCard } from './partner-card'
import { usePartners } from './use-partners.hook'

export function PartnerList() {
  const { data, isLoading, page, limit } = usePartners()

  return (
    <>
      <div className="flex w-full gap-2 sm:flex-row sm:items-center sm:gap-4">
        <FilterInput />
      </div>

      {isLoading && <LoadingSkeleton />}

      {data?.partners && (
        <section className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.partners.map((partner: any) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </section>
      )}

      {!isLoading && data?.partners?.length === 0 && (
        <div className="col-end-3 flex w-full flex-col items-center justify-center">
          <p className="font-medium text-lg text-muted-foreground">
            Nenhum parceiro encontrado.
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
