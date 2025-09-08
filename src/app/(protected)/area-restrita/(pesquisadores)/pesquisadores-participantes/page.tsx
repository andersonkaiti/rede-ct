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
import { CreateResearcherButton } from './create-researcher/create-researcher-button'

export default function PesquisadoresParticipantes() {
  return (
    <AuthWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Pesquisadores Participantes</PageTitle>
            <PageDescription>
              Gerencie os pesquisadores da RedeCT
            </PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>
          <CreateResearcherButton />
        </PageHeader>

        <PageMain>Pesquisadores Participantes</PageMain>
      </PageContainer>
    </AuthWrapper>
  )
}
