import { SparklesIcon } from '@components/icons/sparkles'
import { Building } from '@components/ui/building'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'

export default function UniversityExtensionQualitySeal() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <SparklesIcon />
        </PageHeaderIcon>

        <PageHeaderTitle>
          Selo de Qualidade em Extensão Universitária
        </PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Nesta seção (AINDA EM PRODUÇÃO) a Vice-coordenadoria de Extensão
        Universitária e Cultura manterá um fluxo contínuo para a acolhida de
        relatórios de projetos de extensão, para que estes possam (seguindo o
        fluxo de análise da RedeCT composto por análise de parecerista e parecer
        do Comitê Legitimador) emitir o referido selo. A partir da emissão do
        referido selo, o projeto constará em listagem de &quot;Projetos de
        Extensão Universitária de Qualidade&quot; no website da RedeCT. ESTA
        ÁREA ESTÁ EM CONSTRUÇÃO.
      </PageDescription>

      <Building>
        A Vice-coordenadoria de Extensão Universitária e Cultura está
        desenvolvendo o sistema de avaliação e certificação. Em breve, você
        poderá submeter seus projetos para análise.
      </Building>
    </PageContainer>
  )
}
