'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Certification } from './certification'
import { LoadingSkeleton } from './loading-skeleton'
import { useCertifications } from './use-certifications.hook'

export function CertificationList() {
  const { paginatedResults, isLoading, page, limit } = useCertifications()

  const certifications = paginatedResults?.certifications ?? []

  const hasCertifications = certifications.length > 0

  return (
    <>
      {hasCertifications && !isLoading && (
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 xlg:grid-cols-3">
          {certifications.map((certification) => (
            <Certification key={certification.id} {...certification} />
          ))}
        </section>
      )}

      {!(hasCertifications || isLoading) && (
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
        totalPages={paginatedResults?.totalPages ?? 1}
      />
    </>
  )
}
