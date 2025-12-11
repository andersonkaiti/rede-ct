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
import { CreateRedeCTHighlightButton } from './_components/create-redect-highlight-button'

export default function DestaquesRedeCT() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Destaques RedeCT</PageTitle>
            <PageDescription>
              Gerencie as pessoas e instituições homenageadas pela RedeCT
            </PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>

          <CreateRedeCTHighlightButton />
        </PageHeader>

        <PageMain>Destaques RedeCT</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
