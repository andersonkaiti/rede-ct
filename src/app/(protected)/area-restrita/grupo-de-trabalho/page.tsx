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
import { FilterInput } from '../_components/filter-input'
import { CreateMemberButton } from './_components/create-member/create-member-button'

export default function GrupoDeTrabalho() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Grupo de Trabalho</PageTitle>
            <PageDescription>Gerencie o Grupo de Trabalho</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>

          <CreateMemberButton>Adicionar membro</CreateMemberButton>
        </PageHeader>

        <PageMain>Grupo de Trabalho</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
