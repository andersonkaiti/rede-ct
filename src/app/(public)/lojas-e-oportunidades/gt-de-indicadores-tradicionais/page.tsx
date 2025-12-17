import { UserCardRedLine } from '@components/ui/user-card'
import { Award } from 'lucide-react'
import dynamicImport from 'next/dynamic'
import { Suspense } from 'react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicWorkGroupTeam = dynamicImport(() =>
  import('./_components/work-group-team').then((m) => m.WorkGroupTeam),
)

export default function GTDeIndicadoresTradicionais() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <Award />
        </PageHeaderIcon>

        <PageHeaderTitle>
          Selo de Identificação de Origem Tradicional da RedeCT
        </PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Sob coordenação da Vice-coordenadoria de Extensão Universitária e
        Cultura, a proposta é de criar e gerir um selo de qualidade e
        procedência que possa auxiliar os Povos Tradicionais na superação do
        desafio de autogestão e sustentação financeira a partir de suas
        potencialidades.
      </PageDescription>

      <section className="space-y-8">
        <h2 className="whitespace-normal font-bold text-2xl lg:text-4xl">
          Apresentação da proposta
        </h2>

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
          <h2 className="whitespace-normal text-center font-bold text-2xl lg:text-4xl">
            Membros do Grupo de Trabalho de Indicadores Tradicionais
          </h2>
          <UserCardRedLine />
        </div>

        <Suspense fallback={<LoadingSkeleton />}>
          <DynamicWorkGroupTeam />
        </Suspense>
      </section>
    </PageContainer>
  )
}
