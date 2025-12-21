import { AdminWrapper } from '../../_components/hoc/admin'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '../../_components/page-container'
import { FilterInput } from '../_components/filter-input'
import { CreatePartnerButton } from './_components/create-partner-button'
import { Table } from './_components/table/table'

export default function PartnersAndFunders() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Parceiros e Financiadores</PageTitle>
            <PageDescription>
              Gerencie os parceiros e financiadores
            </PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>

          <CreatePartnerButton />
        </PageHeader>

        <PageMain>
          <Table />
        </PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
