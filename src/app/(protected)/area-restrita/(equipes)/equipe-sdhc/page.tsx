import { AdminHOC } from '../../../_components/hoc/admin'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '../../../_components/page-container'
import { FilterInput } from '../../_components/filter-input'
import { OrderByButton } from '../../_components/order-by-button'
import { CreateMemberButton } from './_components/create-member/create-member-button'
import { Table } from './_components/table/table'
import { TeamMemberDisplayOptions } from './_components/team-member-display-options'

function SDHCTeam() {
  return (
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
  )
}

export default AdminHOC(SDHCTeam)
