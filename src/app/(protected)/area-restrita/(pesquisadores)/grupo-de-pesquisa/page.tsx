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
import { CreateButton } from '../../_components/create-button'
import { FilterInput } from '../../_components/filter-input'
import { GrupoDePesquisaTable } from './_components/table/table'

export default function GrupoDePesquisa() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Grupo de Pesquisa</PageTitle>
            <PageDescription>Gerencie o grupo de pesquisa</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>
          <CreateButton href="/area-restrita/grupo-de-pesquisa/cadastrar">
            Criar Grupo de Pesquisa
          </CreateButton>
        </PageHeader>

        <PageMain>
          <GrupoDePesquisaTable />
        </PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
