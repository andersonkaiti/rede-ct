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
import { CreateRedeCTHighlightButton } from './_components/create-redect-highlight-button'
import { RedeCTHighlightDisplayOptions } from './_components/redect-highlight-display-options'
import { Table } from './_components/table/table'

export default function DestaquesRedeCT() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Destaques RedeCT</PageTitle>
            <PageDescription>
              Gerencie as pessoas e instituições homenageadas pela RedeCT
            </PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <RedeCTHighlightDisplayOptions />

            <OrderByButton />
          </PageActionsContainer>

          <CreateRedeCTHighlightButton />
        </PageHeader>

        <PageMain>
          <Table />
        </PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
