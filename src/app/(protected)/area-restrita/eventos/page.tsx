import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { AdminWrapper } from '../../_components/hoc/admin'
import { FilterInput } from '../_components/filter-input'
import { CreateEventButton } from './_components/create-event-button'

export default function Eventos() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Eventos</PageTitle>
            <PageDescription>Gerencie os eventos</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>

          <CreateEventButton />
        </PageHeader>

        <PageMain>Eventos</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
