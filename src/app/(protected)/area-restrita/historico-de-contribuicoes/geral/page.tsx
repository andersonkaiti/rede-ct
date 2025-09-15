import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { AuthWrapper } from '../../../_components/hoc/auth'
import { FilterInput } from '../../_components/filter-input'
import { FilterSelectUser } from '../../_components/filter-select-user'
import { OrderByButton } from '../../_components/order-by-button'
import { AllContributionList } from './_components/all-contribution-list'

export default function AllContributions() {
  return (
    <AuthWrapper>
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
          <AllContributionList />
        </PageMain>
      </PageContainer>
    </AuthWrapper>
  )
}
