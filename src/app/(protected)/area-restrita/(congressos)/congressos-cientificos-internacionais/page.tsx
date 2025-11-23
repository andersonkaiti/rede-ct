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
import { CreateMeetingButton } from './_components/create-international-scientific-congress-button'

export default function InternationalScientificCongresses() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Congressos Científicos Internacionais</PageTitle>
            <PageDescription>
              Gerencie os congressos científicos internacionais
            </PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>

          <CreateMeetingButton />
        </PageHeader>

        <PageMain>Congressos Científicos Internacionais</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
