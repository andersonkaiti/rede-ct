import { Badge } from '@components/ui/badge'
import { Users } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicResearchGroupList = dynamic(() =>
  import('./_components/research-group-list').then(
    (mod) => mod.ResearchGroupList,
  ),
)

export default function GruposDePesquisa() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <Users className="size-7" />
          </Badge>
          <h1 className="title-2">Grupos de Pesquisa</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Conheça os grupos de pesquisa vinculados à RedeCT. Nossos grupos
          reúnem pesquisadores de diversas instituições e áreas do conhecimento,
          dedicados ao estudo de povos originários e comunidades tradicionais.
        </p>
      </header>

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
    </main>
  )
}
