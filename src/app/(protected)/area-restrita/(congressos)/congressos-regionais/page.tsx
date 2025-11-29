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
import { CreateRegionalCongressButton } from './_components/create-regional-congress-button'

export default function CongressosRegionais() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Congressos Regionais</PageTitle>
            <PageDescription>Gerencie os Congressos Regionais</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>

          <CreateRegionalCongressButton />
        </PageHeader>

        <PageMain>Congressos Regionais</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
