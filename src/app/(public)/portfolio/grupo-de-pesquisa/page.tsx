import { Users } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicResearchGroupList = dynamic(() =>
  import('./_components/research-group-list').then(
    (mod) => mod.ResearchGroupList,
  ),
)

export default function GruposDePesquisa() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <Users className="size-7" />
        </PageHeaderIcon>

        <PageHeaderTitle>Grupos de Pesquisa</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Conheça os grupos de pesquisa vinculados à RedeCT. Nossos grupos reúnem
        pesquisadores de diversas instituições e áreas do conhecimento,
        dedicados ao estudo de povos originários e comunidades tradicionais.
      </PageDescription>

      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicResearchGroupList />
      </Suspense>

      <footer className="text-justify text-lg text-muted-foreground">
        <p>
          Os grupos de pesquisa da RedeCT promovem a produção de conhecimento
          científico de qualidade, respeitando os saberes tradicionais e
          contribuindo para o desenvolvimento sustentável das comunidades. Cada
          grupo possui uma liderança acadêmica reconhecida e desenvolve projetos
          de ensino, pesquisa e extensão em parceria com comunidades
          tradicionais.
        </p>
      </footer>
    </PageContainer>
  )
}
