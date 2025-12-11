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
import { CreateMuseumButton } from './_components/create-museum-button'

export default function Museus() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Museus</PageTitle>
            <PageDescription>Gerencie os museus parceiros</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>

          <CreateMuseumButton />
        </PageHeader>

        <PageMain>Museus</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
