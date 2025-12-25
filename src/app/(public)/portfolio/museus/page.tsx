import { GalleryHorizontal } from 'lucide-react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { MuseumList } from './_components/museums-list'

export default function Museus() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <GalleryHorizontal className="size-7" />
        </PageHeaderIcon>

        <PageHeaderTitle>Museus</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Conheça os museus e espaços museológicos parceiros da RedeCT. Estes
        espaços são fundamentais para a preservação, pesquisa e difusão do
        patrimônio cultural de povos originários e comunidades tradicionais,
        promovendo o diálogo entre saberes tradicionais e científicos.
      </PageDescription>

      <MuseumList />

      <footer className="text-justify">
        <p>
          Os museus parceiros da RedeCT desenvolvem atividades de preservação,
          pesquisa e educação patrimonial, trabalhando em colaboração com
          comunidades tradicionais. Essas instituições desempenham papel
          essencial na valorização das culturas tradicionais, na salvaguarda de
          acervos materiais e imateriais, e na promoção do acesso público ao
          conhecimento sobre a diversidade cultural brasileira.
        </p>
      </footer>
    </PageContainer>
  )
}
