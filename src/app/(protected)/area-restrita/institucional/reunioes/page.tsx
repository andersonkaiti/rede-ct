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
import { CreateMeetingButton } from './_components/create-meeting-button'
import { MeetingDisplayOptions } from './_components/meeting-display-options'
import { Table } from './_components/table/table'

function Meetings() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Reuniões</PageTitle>
          <PageDescription>Gerencie as reuniões</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <MeetingDisplayOptions />

          <OrderByButton />
        </PageActionsContainer>

        <CreateMeetingButton />
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(Meetings)
