import { AdminHOC } from '../../../../_components/hoc/admin'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '../../../../_components/page-container'
import { FilterInput } from '../../../_components/filter-input'
import { OrderByButton } from '../../../_components/order-by-button'
import { ArticleDisplayOptions } from './_components/article-display-options'
import { CreateArticleButton } from './_components/create-article-button'
import { Table } from './_components/table/table'

function Articles() {
  return (
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

          <ArticleDisplayOptions />

          <OrderByButton />
        </PageActionsContainer>

        <CreateArticleButton />
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(Articles)
