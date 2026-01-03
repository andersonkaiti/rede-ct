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
import { CreateManagementTeamButton } from './_components/create-management-team-button'
import Table from './_components/table/table'
import { TeamDisplayOptions } from './_components/team-display-options'

function ManagementTeam() {
  return (
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
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(ManagementTeam)
