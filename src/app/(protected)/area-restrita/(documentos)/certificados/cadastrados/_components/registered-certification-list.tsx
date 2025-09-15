'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Certification } from '../../_components/certification'
import { LoadingSkeleton } from '../../_components/loading-skeleton'
import { useRegisteredCertifications } from './use-registered-certifications.hook'

export function RegisteredCertificationList() {
  const { isLoading, paginatedResults, page } = useRegisteredCertifications()

  const certifications = paginatedResults?.certifications ?? []

  const hasCertifications = certifications.length > 0

  return (
    <>
      {hasCertifications && !isLoading && (
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        defaultRowsPerPage={9}
        totalPages={paginatedResults?.totalPages ?? 1}
      />
    </>
  )
}
