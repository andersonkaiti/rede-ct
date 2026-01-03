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
import { CreateResearcherButton } from './_components/create-researcher-button'
import { ResearchersDisplayOptions } from './_components/researchers-display-options'
import { Table } from './_components/table/table'

function PesquisadoresParticipantes() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Pesquisadores Participantes</PageTitle>
          <PageDescription>Gerencie os pesquisadores da RedeCT</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <ResearchersDisplayOptions />

          <OrderByButton />
        </PageActionsContainer>

        <CreateResearcherButton />
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(PesquisadoresParticipantes)
