import { AdminWrapper } from '../../../_components/hoc/admin'
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

export default function CentroDeReferencia() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Centro de Referência</PageTitle>
            <PageDescription>Gerencie o Centro de Referência</PageDescription>
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
