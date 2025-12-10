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
import { CreateResearchGroupButton } from './_components/create-research-group-button'

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
          </PageActionsContainer>

          <CreateResearchGroupButton />
        </PageHeader>

        <PageMain>Grupos de Pesquisa</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
