import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'

import { FilterInput } from '../../_components/filter-input'
import { CreateMemberButton } from './_components/create-member/create-member-button'
import { Table } from './_components/table/table'
import { TeamMemberDisplayOptions } from './_components/team-member-display-options'

export default function ComiteLegitimador() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Comitê Legitimador</PageTitle>
          <PageDescription>Gerencie o Comitê Legitimador</PageDescription>
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
  )
}
