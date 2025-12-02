import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { AdminWrapper } from '../../../../_components/hoc/admin'
import { FilterInput } from '../../../_components/filter-input'
import { CreateJournalButton } from './_components/create-journal-button'

export default function Revistas() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Revistas</PageTitle>
            <PageDescription>Gerencie as revistas</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>

          <CreateJournalButton />
        </PageHeader>

        <PageMain>Revistas</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
