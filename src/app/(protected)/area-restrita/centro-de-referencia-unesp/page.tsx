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

export default function CentroDeReferenciaUnesp() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Centro de Referência UNESP</PageTitle>
            <PageDescription>
              Gerencie os editais do centro de referência UNESP
            </PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>
          <CreateButton href="/area-restrita/centro-de-referencia-unesp/cadastrar">
            Cadastrar edital
          </CreateButton>
        </PageHeader>

        <PageMain>Centro de Referência UNEP</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
