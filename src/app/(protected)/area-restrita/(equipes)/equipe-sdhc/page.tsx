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

export default function EquipeSDHC() {
  return (
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
        </PageActionsContainer>
        <CreateMemberButton>Adicionar membro</CreateMemberButton>
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}
