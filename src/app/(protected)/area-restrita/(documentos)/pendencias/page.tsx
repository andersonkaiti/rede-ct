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
import { OrderByButton } from '../../_components/order-by-button'
import { LoadingSkeleton } from './_components/loading-skeleton'
import { PendencyList } from './_components/pendency-list'
import { RegisteredPendenciesButton } from './_components/registered-pendencies-button'

export default async function Pendencias() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Suas pendências</PageTitle>
          <PageDescription>Visualize as suas pendências</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <OrderByButton />
        </PageActionsContainer>

        {(await isAdmin()) && <RegisteredPendenciesButton />}
      </PageHeader>

      <PageMain>
        <Suspense fallback={<LoadingSkeleton />}>
          <PendencyList />
        </Suspense>
      </PageMain>
    </PageContainer>
  )
}
