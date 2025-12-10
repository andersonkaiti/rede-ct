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
import { CreateLawButton } from './_components/create-law/create-law-button'

export default function Legislacoes() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Legislações</PageTitle>
            <PageDescription>Gerencie as legislações</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>

          <CreateLawButton>Adicionar lei</CreateLawButton>
        </PageHeader>

        <PageMain>Legislações</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
