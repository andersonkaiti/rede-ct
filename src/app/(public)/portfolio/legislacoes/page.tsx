import { Scale } from 'lucide-react'
import { Suspense } from 'react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { LawsList } from './_components/laws-list'
import { LoadingSkeleton } from './_components/loading-skeleton'

export default async function Legislacoes() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <Scale className="size-7" />
        </PageHeaderIcon>

        <PageHeaderTitle>
          Legislações de interesse dos pesquisadores da RedeCT
        </PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Compilação de legislações relevantes para povos e comunidades
        tradicionais de diversos países, com foco em direitos, proteção
        territorial e reconhecimento cultural.
      </PageDescription>

      <Suspense fallback={<LoadingSkeleton />}>
        <LawsList />
      </Suspense>
    </PageContainer>
  )
}
