import { isAdmin } from '@auth/auth'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { Suspense } from 'react'
import { FilterInput } from '../../_components/filter-input'
import { CertificationList } from './_components/certification-list'
import { LoadingSkeleton } from './_components/loading-skeleton'
import { RegisteredCertificationsButton } from './_components/registered-certifications-button'

export default async function Certificados() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Seus certificados</PageTitle>
          <PageDescription>Visualize os seus certificados</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />
        </PageActionsContainer>

        {(await isAdmin()) && <RegisteredCertificationsButton />}
      </PageHeader>

      <PageMain>
        <Suspense fallback={<LoadingSkeleton />}>
          <CertificationList />
        </Suspense>
      </PageMain>
    </PageContainer>
  )
}
