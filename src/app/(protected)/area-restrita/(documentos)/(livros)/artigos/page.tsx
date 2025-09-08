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
import { CreateButton } from '../../../_components/create-button'
import { FilterInput } from '../../../_components/filter-input'

export default function Artigos() {
  return (
    <AuthWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Artigos</PageTitle>
            <PageDescription>Gerencie os artigos</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>
          <CreateButton href="/area-restrita/artigos/cadastrar">
            Cadastrar Artigo
          </CreateButton>
        </PageHeader>

        <PageMain>Artigos</PageMain>
      </PageContainer>
    </AuthWrapper>
  )
}
