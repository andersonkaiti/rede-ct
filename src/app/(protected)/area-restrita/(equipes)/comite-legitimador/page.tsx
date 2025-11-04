import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'

import { AuthWrapper } from '../../../_components/hoc/auth'
import { FilterInput } from '../../_components/filter-input'
import { OrderByButton } from '../../_components/order-by-button'
import { Table } from './_components/_table/table'
import { CreateMemberButton } from './_components/create-member/create-member-button'
import { TeamMemberDisplayOptions } from './_components/team-member-display-options'

export default function LegitimatorCommittee() {
  return (
    <AuthWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Comitê Legitimador</PageTitle>
            <PageDescription>Gerencie o Comitê Legitimador</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <TeamMemberDisplayOptions />

            <OrderByButton />
          </PageActionsContainer>

          <CreateMemberButton>Adicionar membro</CreateMemberButton>
        </PageHeader>

        <PageMain>
          <Table />
        </PageMain>
      </PageContainer>
    </AuthWrapper>
  )
}
