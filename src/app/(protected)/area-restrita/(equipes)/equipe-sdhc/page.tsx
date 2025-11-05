import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'

import { AdminWrapper } from '../../../_components/hoc/admin'
import { FilterInput } from '../../_components/filter-input'
import { OrderByButton } from '../../_components/order-by-button'
import { Table } from './_components/_table/table'
import { CreateMemberButton } from './_components/create-member/create-member-button'
import { TeamMemberDisplayOptions } from './_components/team-member-display-options'

export default function EquipeSDHC() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Equipe SDHC</PageTitle>
            <PageDescription>Gerencie a Equipe SDHC</PageDescription>
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
    </AdminWrapper>
  )
}
