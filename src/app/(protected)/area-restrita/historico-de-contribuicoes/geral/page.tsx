import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@/app/(protected)/_components/page-container'
import { AdminHOC } from '../../../_components/hoc/admin'
import { FilterInput } from '../../_components/filter-input'
import { FilterSelectUser } from '../../_components/filter-select-user'
import { OrderByButton } from '../../_components/order-by-button'
import { ContributionsList } from './_components/contributions-list'

function AllContributions() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Todas as Contribuições</PageTitle>
          <PageDescription>
            Visualize todas as contribuições cadastradas
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <OrderByButton />
        </PageActionsContainer>

        <FilterSelectUser />
      </PageHeader>

      <PageMain>
        <ContributionsList />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(AllContributions)
