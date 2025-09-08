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
import { CreateButton } from '../../_components/create-button'
import { FilterInput } from '../../_components/filter-input'

export default function CongressosRegionais() {
  return (
    <AuthWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Congressos Regionais</PageTitle>
            <PageDescription>Gerencie os Congressos Regionais</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>
          <CreateButton href="/area-restrita/congressos-regionais/cadastrar">
            Cadastrar Congresso
          </CreateButton>
        </PageHeader>

        <PageMain>Congressos Regionais</PageMain>
      </PageContainer>
    </AuthWrapper>
  )
}
