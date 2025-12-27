import { AdminWrapper } from '../../../_components/hoc/admin'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '../../../_components/page-container'
import { CreateAccountButton } from './_components/create-account-button'

export default function CheckingAccounts() {
  return (
    <AdminWrapper>
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
          <CreateAccountButton />
        </PageHeader>

        <PageMain>Contas Correntes</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
