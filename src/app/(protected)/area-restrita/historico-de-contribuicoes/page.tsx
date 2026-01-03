import { checkIsAdmin } from '@auth/auth'
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
import { AllContributionsButton } from './_components/all-contributions-button'
import { UserContributionsList } from './_components/user-contributions-list'

export default async function HistoricoDeContribuicoes() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Histórico de Contribuições</PageTitle>
          <PageDescription>
            Visualize o seu histórico de contribuições pagas
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <OrderByButton />
        </PageActionsContainer>

        {(await checkIsAdmin()) && <AllContributionsButton />}
      </PageHeader>

      <PageMain>
        <UserContributionsList />
      </PageMain>
    </PageContainer>
  )
}
