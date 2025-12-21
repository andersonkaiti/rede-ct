import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '../../_components/page-container'
import { FilterInput } from '../_components/filter-input'
import { OrderByButton } from '../_components/order-by-button'
import { CreateNewsButton } from './_components/create-news-button'
import { NewsDisplayOptions } from './_components/news-display-options'
import { Table } from './_components/table/table'

export default function Noticias() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Notícias</PageTitle>
          <PageDescription>Gerencie as suas notícias</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <NewsDisplayOptions />

          <OrderByButton />
        </PageActionsContainer>

        <CreateNewsButton />
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}
