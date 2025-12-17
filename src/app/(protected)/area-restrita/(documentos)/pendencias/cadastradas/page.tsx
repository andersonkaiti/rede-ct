import { isAdmin } from '@auth/auth'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@/app/(protected)/_components/page-container'
import { AdminWrapper } from '../../../../_components/hoc/admin'
import { FilterInput } from '../../../_components/filter-input'
import { FilterSelectUser } from '../../../_components/filter-select-user'
import { OrderByButton } from '../../../_components/order-by-button'
import { CreatePendencyButton } from './_components/create-pendency/create-pendency-button'
import { RegisteredPendencyList } from './_components/registered-pendency-list'

export default async function RegisteredPendencies() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Pendências cadastradas</PageTitle>
            <PageDescription>
              Visualize todas as pendências cadastradas
            </PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <OrderByButton />
          </PageActionsContainer>

          <div className="flex w-full flex-col gap-2 lg:w-fit lg:flex-row">
            <FilterSelectUser />

            {(await isAdmin()) && <CreatePendencyButton />}
          </div>
        </PageHeader>

        <PageMain>
          <RegisteredPendencyList />
        </PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
