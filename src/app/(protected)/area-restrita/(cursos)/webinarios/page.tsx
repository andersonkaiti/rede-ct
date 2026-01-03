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
import { CreateWebinarButton } from './_components/create-webinar-button'
import { Table } from './_components/table/table'
import { WebinarDisplayOptions } from './_components/webinar-display-options'

function Webinars() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Webinários</PageTitle>
          <PageDescription>Gerencie os seus webinários</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <WebinarDisplayOptions />

          <OrderByButton />
        </PageActionsContainer>

        <CreateWebinarButton />
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(Webinars)
