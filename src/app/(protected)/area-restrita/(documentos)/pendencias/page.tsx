import { isAdmin } from '@auth/auth'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '../../../_components/page-container'
import { FilterInput } from '../../_components/filter-input'
import { OrderByButton } from '../../_components/order-by-button'
import { PendencyList } from './_components/pendency-list'
import { RegisteredPendenciesButton } from './_components/registered-pendencies-button'

export default async function Pendencias() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Suas pendências</PageTitle>
          <PageDescription>Visualize as suas pendências</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <OrderByButton />
        </PageActionsContainer>

        {(await isAdmin()) && <RegisteredPendenciesButton />}
      </PageHeader>

      <PageMain>
        <PendencyList />
      </PageMain>
    </PageContainer>
  )
}
