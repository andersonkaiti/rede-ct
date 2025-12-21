import { AdminWrapper } from '../../_components/hoc/admin'
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
import { CreateEtpButton } from './_components/create-etp-button'
import { EtpsDisplayOptions } from './_components/etps-display-options'
import { Table } from './_components/table/table'

export default function ETPS() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>ETPs</PageTitle>
            <PageDescription>Gerencie os ETPs cadastrados</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <EtpsDisplayOptions />
          </PageActionsContainer>

          <CreateEtpButton />
        </PageHeader>

        <PageMain>
          <Table />
        </PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
