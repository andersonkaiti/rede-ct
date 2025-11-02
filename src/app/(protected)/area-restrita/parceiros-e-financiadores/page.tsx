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
import { AuthWrapper } from '../../_components/hoc/auth'
import { FilterInput } from '../_components/filter-input'
import { CreatePartnerButton } from './_components/create-partner-button'
import { LoadingSkeleton } from './_components/table/loading-skeleton'
import { Table } from './_components/table/table'

export default function PartnersAndFunders() {
  return (
    <AuthWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Parceiros e Financiadores</PageTitle>
            <PageDescription>
              Gerencie os parceiros e financiadores
            </PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>

          <CreatePartnerButton />
        </PageHeader>

        <PageMain>
          <Suspense fallback={<LoadingSkeleton />}>
            <Table />
          </Suspense>
        </PageMain>
      </PageContainer>
    </AuthWrapper>
  )
}
