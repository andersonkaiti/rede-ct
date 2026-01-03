import { AdminHOC } from '../../../../_components/hoc/admin'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '../../../../_components/page-container'
import { FilterInput } from '../../../_components/filter-input'
import { OrderByButton } from '../../../_components/order-by-button'
import { CreateJournalButton } from './_components/create-journal-button'
import { JournalDisplayOptions } from './_components/journal-display-options'
import { Table } from './_components/table/table'

function Journals() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Revistas</PageTitle>
          <PageDescription>Gerencie as revistas</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <JournalDisplayOptions />

          <OrderByButton />
        </PageActionsContainer>

        <CreateJournalButton />
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(Journals)
