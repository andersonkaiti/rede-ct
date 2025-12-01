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
import { CreateProgramButton } from './_components/create-program-button'

export default function PosGraduacoes() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Programas de Pós-Graduação</PageTitle>
            <PageDescription>
              Gerencie os programas de pós-graduação
            </PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>

          <CreateProgramButton />
        </PageHeader>

        <PageMain>Programas de Pós-Graduação</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
