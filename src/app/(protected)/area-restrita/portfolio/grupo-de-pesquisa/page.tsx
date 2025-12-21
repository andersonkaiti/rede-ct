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
import { CreateResearchGroupButton } from './_components/create-research-group-button'
import { ResearchGroupDisplayOptions } from './_components/research-group-display-options'
import { Table } from './_components/table/table'

export default function GruposDePesquisa() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Grupos de Pesquisa</PageTitle>
            <PageDescription>Gerencie os grupos de pesquisa</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <ResearchGroupDisplayOptions />

            <OrderByButton />
          </PageActionsContainer>

          <CreateResearchGroupButton />
        </PageHeader>

        <PageMain>
          <Table />
        </PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
