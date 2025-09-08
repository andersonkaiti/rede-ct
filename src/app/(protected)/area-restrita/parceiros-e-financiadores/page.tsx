import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'

import { AuthWrapper } from '@/app/(protected)/_components/hoc/auth'
import { CreateButton } from '../_components/create-button'
import { FilterInput } from '../_components/filter-input'

export default function ParceirosEFinanciadores() {
  return (
    <AuthWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Parceiros e Financiadores</PageTitle>
            <PageDescription>
              Gerencie os parceiros e financiadores
            </PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>
          <CreateButton href="/area-restrita/parceiros-e-financiadores/cadastrar">
            Cadastrar Parceiro
          </CreateButton>
        </PageHeader>

        <PageMain>Parceiros e Financiadores</PageMain>
      </PageContainer>
    </AuthWrapper>
  )
}
