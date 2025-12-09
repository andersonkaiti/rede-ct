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
import { FilterInput } from '../../_components/filter-input'
import { CreateMemberButton } from './_components/create-member/create-member-button'

export default function CentroDeReferencia() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Centro de Referência</PageTitle>
            <PageDescription>Gerencie o Centro de Referência</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>

          <CreateMemberButton>Adicionar membro</CreateMemberButton>
        </PageHeader>

        <PageMain>Centro de Referência</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
