import { AdminHOC } from '../../_components/hoc/admin'
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
import { OrderByButton } from '../_components/order-by-button'
import { Table } from './_components/table/table'
import { UsersDisplayOptions } from './_components/users-display-options'

function Users() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Usuários</PageTitle>
          <PageDescription>Gerencie os usuários do sistema</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <UsersDisplayOptions />

          <OrderByButton />
        </PageActionsContainer>
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(Users)
