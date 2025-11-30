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
import { CreateWebinarButton } from './_components/create-webinar-button'

export default function Webinarios() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Webinários</PageTitle>
            <PageDescription>Gerencie os seus webinários</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>

          <CreateWebinarButton />
        </PageHeader>

        <PageMain>Webinários</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
