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
import { CreateEventButton } from './_components/create-event-button'
import { EventDisplayOptions } from './_components/event-display-options'
import { Table } from './_components/table/table'

function Events() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Eventos</PageTitle>
          <PageDescription>Gerencie os eventos</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <EventDisplayOptions />

          <OrderByButton />
        </PageActionsContainer>

        <CreateEventButton />
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(Events)
