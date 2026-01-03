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
import { CreateStatementButton } from './_components/create-statement-button'
import { Table } from './_components/table/table'

function FinancialTransactionStatements() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Extratos Detalhados</PageTitle>
          <PageDescription>
            Gerencie os extratos de transações financeiras
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <OrderByButton />
        </PageActionsContainer>

        <CreateStatementButton />
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(FinancialTransactionStatements)
