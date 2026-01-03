import { AdminHOC } from '../../_components/hoc/admin'
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
import { OrderByButton } from '../_components/order-by-button'
import { CreatePartnerButton } from './_components/create-partner-button'
import { PartnersDisplayOptions } from './_components/partners-display-options'
import { Table } from './_components/table/table'

function PartnersAndFunders() {
  return (
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

          <PartnersDisplayOptions />

          <OrderByButton />
        </PageActionsContainer>

        <CreatePartnerButton />
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(PartnersAndFunders)
