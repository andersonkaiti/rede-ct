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
import { CreateResearcherButton } from './_components/create-researcher-button'
import { ResearchersDisplayOptions } from './_components/researchers-display-options'
import { Table } from './_components/table/table'

export default function PesquisadoresParticipantes() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Pesquisadores Participantes</PageTitle>
            <PageDescription>
              Gerencie os pesquisadores da RedeCT
            </PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <ResearchersDisplayOptions />
          </PageActionsContainer>

          <CreateResearcherButton />
        </PageHeader>

        <PageMain>
          <Table />
        </PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
