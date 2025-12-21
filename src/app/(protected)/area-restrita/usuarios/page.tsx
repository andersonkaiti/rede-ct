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
import { Table } from './_components/table/table'
import { UsersDisplayOptions } from './_components/users-display-options'

export default function Users() {
  return (
    <AdminWrapper>
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
          </PageActionsContainer>
        </PageHeader>

        <PageMain>
          <Table />
        </PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
