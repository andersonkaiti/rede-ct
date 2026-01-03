import { AdminHOC } from '../../../_components/hoc/admin'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '../../../_components/page-container'
import { FilterInput } from '../../_components/filter-input'
import { OrderByButton } from '../../_components/order-by-button'
import { CreateInMemoriamButton } from './_components/create-in-memoriam-button'
import { InMemoriamDisplayOptions } from './_components/in-memoriam-display-options'
import { Table } from './_components/table/table'

function InMemoriam() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>In Memoriam</PageTitle>
          <PageDescription>Gerencie os In Memoriam</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <InMemoriamDisplayOptions />

          <OrderByButton />
        </PageActionsContainer>

        <CreateInMemoriamButton />
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(InMemoriam)
