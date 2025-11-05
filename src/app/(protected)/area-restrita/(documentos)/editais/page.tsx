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
import { CreateButton } from '../../_components/create-button'
import { FilterInput } from '../../_components/filter-input'

export default function Editais() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Editais</PageTitle>
            <PageDescription>Gerencie os editais</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>
          <CreateButton href="/area-restrita/editais/cadastrar">
            Cadastrar edital
          </CreateButton>
        </PageHeader>

        <PageMain>Editais</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
