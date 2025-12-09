import { Badge } from '@components/ui/badge'
import { UserCardRedLine } from '@components/ui/user-card'
import { Award } from 'lucide-react'
import dynamicImport from 'next/dynamic'
import { Suspense } from 'react'
import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicWorkGroupTeam = dynamicImport(() =>
  import('./_components/work-group-team').then((m) => m.WorkGroupTeam),
)

export default function GTDeIndicadoresTradicionais() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <Award />
          </Badge>
          <h1 className="title-2">
            Selo de Identificação de Origem Tradicional da RedeCT
          </h1>
        </div>
        <p className="text-justify text-lg text-muted-foreground">
          Sob coordenação da Vice-coordenadoria de Extensão Universitária e
          Cultura, a proposta é de criar e gerir um selo de qualidade e
          procedência que possa auxiliar os Povos Tradicionais na superação do
          desafio de autogestão e sustentação financeira a partir de suas
          potencialidades.
        </p>
      </header>

      <section className="space-y-8">
        <h2 className="title-2">Apresentação da proposta</h2>

        <p className="text-justify text-muted-foreground leading-relaxed">
          Considerando o desafio de geração de renda e de sustentação econômica
          comum aos Povos Tradicionais e observando que a certificação e a
          comunicação de origem tradicional de seus produtos (especialmente
          artesanato) se constituem em um importante diferencial de mercado e,
          por fim, considerando as dificuldades para o ingresso nos ambientes de
          e-commerce, centrais às relações mercantis contemporâneas, a RedeCT
          criou, em março/2024, um grupo de estudos sobre esta temática.
        </p>

        <p className="text-justify text-muted-foreground leading-relaxed">
          Em parceria com o Centro de Inovação Tecnológica de Bauru - CITeB (por
          sua vez mantido pela UNESP), a Saruê Incubadora de Empresas e
          Empreendimentos Sociais e a Whadhwani Foundation, a partir de
          abril/2024 foi iniciado processo de pré-incubação da ideia, focando na
          estruturação final de um Plano de Negócio Sustentável para a criação
          do Selo de Identificação de Origem Tradicional da RedeCT.
        </p>

        <p className="text-justify text-muted-foreground leading-relaxed">
          O Grupo de Trabalho - GT é composto por 5 Pesquisadores que participam
          do processo de pré-incubação e por um grupo de professores com
          aderência ao tema.
        </p>
      </section>

      <section className="space-y-8">
        <div className="space-y-8">
          <h2 className="title-2 text-center">
            Membros do Grupo de Trabalho de Indicadores Tradicionais
          </h2>
          <UserCardRedLine />
        </div>

        <Suspense fallback={<LoadingSkeleton />}>
          <DynamicWorkGroupTeam />
        </Suspense>
      </section>
    </main>
  )
}
