import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { AdminWrapper } from '../../_components/hoc/admin'
import { CreateButton } from '../_components/create-button'
import { FilterInput } from '../_components/filter-input'

export default function Legislacoes() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Legislações</PageTitle>
            <PageDescription>Gerencie as legislações</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>
          <CreateButton href="/area-restrita/legislacoes/cadastrar">
            Cadastrar legislação
          </CreateButton>
        </PageHeader>

        <PageMain>Legislações</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
