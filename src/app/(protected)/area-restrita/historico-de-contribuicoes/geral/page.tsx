import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { AdminWrapper } from '../../../_components/hoc/admin'
import { FilterInput } from '../../_components/filter-input'
import { FilterSelectUser } from '../../_components/filter-select-user'
import { OrderByButton } from '../../_components/order-by-button'
import { ContributionsList } from './_components/contributions-list'

export default function AllContributions() {
  return (
    <AdminWrapper>
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
    </AdminWrapper>
  )
}
