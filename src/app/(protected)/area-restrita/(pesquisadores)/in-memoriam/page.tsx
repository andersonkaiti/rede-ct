import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'

import { AuthWrapper } from '@/app/(protected)/_components/hoc/auth'
import { FilterInput } from '../../_components/filter-input'
import { CreateInMemoriamButton } from './create-in-memoriam/create-in-memoriam-button'

export default function InMemoriam() {
  return (
    <AuthWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>In Memoriam</PageTitle>
            <PageDescription>Gerencie os In Memoriam</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>
          <CreateInMemoriamButton />
        </PageHeader>

        <PageMain>In Memoriam</PageMain>
      </PageContainer>
    </AuthWrapper>
  )
}
