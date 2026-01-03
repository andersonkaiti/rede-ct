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
import { OrderByButton } from '../../_components/order-by-button'
import { CreateAccountButton } from './_components/create-account-button'
import { Table } from './_components/table/table'
import { TypeFilter } from './_components/type-filter'

function CheckingAccounts() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Contas Correntes</PageTitle>
          <PageDescription>
            Gerencie as contas correntes da organização
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <TypeFilter />

          <OrderByButton />
        </PageActionsContainer>

        <CreateAccountButton />
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(CheckingAccounts)
