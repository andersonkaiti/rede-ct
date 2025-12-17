import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderTitle,
} from '../_components/page-container'
import { NewsList } from './_components/news-list'

export default function NewsListPage() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderTitle>Notícias</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Fique por dentro das últimas novidades, comunicados e atualizações da
        Rede CT.
      </PageDescription>

      <NewsList />
    </PageContainer>
  )
}
