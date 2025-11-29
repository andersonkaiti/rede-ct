import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { AdminWrapper } from '../../../../../_components/hoc/admin'
import { FilterInput } from '../../../../_components/filter-input'
import { CreatePartnerButton } from './_components/create-partner-button'
import { PartnersDisplayOptions } from './_components/partners-display-options'
import { Table } from './_components/table/table'

export default function CongressPartners() {
  return (
    <AdminWrapper>
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
