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

export default function DestaquesRedeCT() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Destaques da RedeCT</PageTitle>
            <PageDescription>Gerencie os Destaques da RedeCT</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>
          <CreateButton href="/area-restrita/destaques-redect/cadastrar">
            Cadastrar destaque
          </CreateButton>
        </PageHeader>

        <PageMain>Destaques da RedeCT</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
