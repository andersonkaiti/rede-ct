'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Certification } from '../../_components/certification'
import { LoadingSkeleton } from '../../_components/loading-skeleton'
import { useRegisteredCertifications } from './use-registered-certifications.hook'

export function RegisteredCertificationList() {
  const { data, isLoading, page, limit } = useRegisteredCertifications()

  return (
    <>
      {!!data?.certifications.length && !isLoading && (
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 xlg:grid-cols-3">
          {data?.certifications.map((certification) => (
            <Certification key={certification.id} {...certification} />
          ))}
        </section>
      )}

      {!(data?.certifications.length || isLoading) && (
        <section className="flex flex-col items-center justify-center py-12">
          <div className="text-center text-muted-foreground">
            <p className="font-medium">Nenhuma certificação encontrada.</p>
          </div>
        </section>
      )}

      {isLoading && <LoadingSkeleton />}

      <PaginatorComponent
        currentPage={Number(page)}
        defaultRowsPerPage={Number(limit)}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
