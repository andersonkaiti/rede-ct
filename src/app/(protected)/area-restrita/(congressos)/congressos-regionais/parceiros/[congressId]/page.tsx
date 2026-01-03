import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@/app/(protected)/_components/page-container'
import { OrderByButton } from '@/app/(protected)/area-restrita/_components/order-by-button'
import { AdminHOC } from '../../../../../_components/hoc/admin'
import { FilterInput } from '../../../../_components/filter-input'
import { CreatePartnerButton } from './_components/create-partner-button'
import { PartnersDisplayOptions } from './_components/partners-display-options'
import { Table } from './_components/table/table'

function CongressPartners() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Parceiros do Congresso Regional</PageTitle>
          <PageDescription>
            Gerencie os parceiros do congresso regional
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

export default AdminHOC(CongressPartners)
