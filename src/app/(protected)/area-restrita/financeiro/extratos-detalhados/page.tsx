import { AdminWrapper } from '../../../_components/hoc/admin'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '../../../_components/page-container'
import { CreateStatementButton } from './_components/create-statement-button'

export default function FinancialTransactionStatements() {
  return (
    <AdminWrapper>
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
          <CreateStatementButton />
        </PageHeader>

        <PageMain>Extratos Detalhados</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
