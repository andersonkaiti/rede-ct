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
import Table from './_components/table/table'
import { TeamDisplayOptions } from './_components/team-display-options'

export default function EquipeDeGestao() {
  return (
    <AuthWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Equipe de Gestão</PageTitle>
            <PageDescription>Gerencie as equipes de gestão</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <TeamDisplayOptions />
          </PageActionsContainer>
          <CreateButton href="/area-restrita/equipe-de-gestao/cadastrar">
            Criar Equipe de Gestão
          </CreateButton>
        </PageHeader>

        <PageMain>
          <Table />
        </PageMain>
      </PageContainer>
    </AuthWrapper>
  )
}
