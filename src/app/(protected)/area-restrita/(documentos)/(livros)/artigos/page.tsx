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
import { CreateArticleButton } from './_components/create-article-button'

export default function Artigos() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Artigos</PageTitle>
            <PageDescription>Gerencie os artigos científicos</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>

          <CreateArticleButton />
        </PageHeader>

        <PageMain>Artigos</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
