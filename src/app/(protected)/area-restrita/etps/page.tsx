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

export default function ETPS() {
  return (
    <AuthWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>ETPs</PageTitle>
            <PageDescription>Gerencie os ETPs cadastrados</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>
          <CreateButton href="/area-restrita/etps/cadastrar">
            Cadastrar ETP
          </CreateButton>
        </PageHeader>

        <PageMain>ETPs</PageMain>
      </PageContainer>
    </AuthWrapper>
  )
}
