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
import { AuthWrapper } from '../../../_components/hoc/auth'
import { FilterInput } from '../../_components/filter-input'
import { OrderByButton } from '../../_components/order-by-button'
import { CreateManagementTeamButton } from './_components/create-management-team-button'
import { LoadingSkeleton } from './_components/table/loading-skeleton'
import Table from './_components/table/table'
import { TeamDisplayOptions } from './_components/team-display-options'

export default function EquipeDeGestao() {
  return (
    <AuthWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Equipe de Gestão</PageTitle>
            <PageDescription>Gerencie as equipes de gestão</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <TeamDisplayOptions />

            <OrderByButton />
          </PageActionsContainer>

          <CreateManagementTeamButton />
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
