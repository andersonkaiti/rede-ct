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
import { FilterInput } from '../../_components/filter-input'
import { CreateMemberButton } from './_components/create-member/create-member-button'
import { Table } from './_components/table/table'
import { TeamMemberDisplayOptions } from './_components/team-member-display-options'

export default function EquipeSDHC() {
  return (
    <AuthWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Equipe SDHC</PageTitle>
            <PageDescription>Gerencie a Equipe SDHC</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <TeamMemberDisplayOptions />
          </PageActionsContainer>
          <CreateMemberButton>Adicionar membro</CreateMemberButton>
        </PageHeader>

        <PageMain>
          <Table />
        </PageMain>
      </PageContainer>
    </AuthWrapper>
  )
}
