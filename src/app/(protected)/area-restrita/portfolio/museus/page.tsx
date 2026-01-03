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
import { CreateMuseumButton } from './_components/create-museum-button'
import { MuseumDisplayOptions } from './_components/museum-display-options'
import { Table } from './_components/table/table'

function Museums() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Museus</PageTitle>
          <PageDescription>Gerencie os museus parceiros</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <MuseumDisplayOptions />

          <OrderByButton />
        </PageActionsContainer>

        <CreateMuseumButton />
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(Museums)
