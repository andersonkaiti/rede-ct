import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { Suspense } from 'react'
import { AdminWrapper } from '../../_components/hoc/admin'
import { FilterInput } from '../_components/filter-input'
import { LoadingSkeleton } from './_components/table/loading-skeleton'
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
          <Suspense fallback={<LoadingSkeleton />}>
            <Table />
          </Suspense>
        </PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
