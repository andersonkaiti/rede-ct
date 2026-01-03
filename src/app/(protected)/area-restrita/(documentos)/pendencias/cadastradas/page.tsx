import { checkIsAdmin } from '@auth/auth'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@/app/(protected)/_components/page-container'
import { AdminHOC } from '../../../../_components/hoc/admin'
import { FilterInput } from '../../../_components/filter-input'
import { FilterSelectUser } from '../../../_components/filter-select-user'
import { OrderByButton } from '../../../_components/order-by-button'
import { CreatePendencyButton } from './_components/create-pendency/create-pendency-button'
import { RegisteredPendencyList } from './_components/registered-pendency-list'

async function RegisteredPendencies() {
  return (
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

          {(await checkIsAdmin()) && <CreatePendencyButton />}
        </div>
      </PageHeader>

      <PageMain>
        <RegisteredPendencyList />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(RegisteredPendencies)
