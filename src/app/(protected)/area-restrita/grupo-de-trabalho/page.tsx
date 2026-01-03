import { AdminHOC } from '../../_components/hoc/admin'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '../../_components/page-container'
import { FilterInput } from '../_components/filter-input'
import { OrderByButton } from '../_components/order-by-button'
import { CreateMemberButton } from './_components/create-member/create-member-button'
import { Table } from './_components/table/table'
import { TeamMemberDisplayOptions } from './_components/team-member-display-options'

function GrupoDeTrabalho() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Grupo de Trabalho</PageTitle>
          <PageDescription>Gerencie o Grupo de Trabalho</PageDescription>
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

export default AdminHOC(GrupoDeTrabalho)
