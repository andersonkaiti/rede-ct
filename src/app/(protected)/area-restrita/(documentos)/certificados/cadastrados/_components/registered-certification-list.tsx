'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Certification } from '../../_components/certification'
import { LoadingSkeleton } from '../../_components/loading-skeleton'
import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  useRegisteredCertifications,
} from './use-registered-certifications.hook'

export function RegisteredCertificationList() {
  const { data, isLoading } = useRegisteredCertifications()

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
        currentPage={data?.page ?? DEFAULT_PAGE}
        defaultRowsPerPage={data?.limit ?? DEFAULT_LIMIT}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
