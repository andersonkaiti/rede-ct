import { AdminWrapper } from '../../../_components/hoc/admin'
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
import { CreateRegionalCongressButton } from './_components/create-regional-congress-button'
import { RegionalCongressesDisplayOptions } from './_components/regional-congress-display-options'
import { Table } from './_components/table/table'

export default function CongressosRegionais() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Congressos Regionais</PageTitle>
            <PageDescription>Gerencie os Congressos Regionais</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <RegionalCongressesDisplayOptions />

            <OrderByButton />
          </PageActionsContainer>

          <CreateRegionalCongressButton />
        </PageHeader>

        <PageMain>
          <Table />
        </PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
