import { Building } from '@components/building'

export default function SeloDeQualidadeEmExtensaoUniversitaria() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <h1 className="title-2">Selo de Qualidade em Extensão Universitária</h1>
      </header>

      <div className="bg-white">
        <p className="text-justify text-lg text-muted-foreground">
          Nesta seção (AINDA EM PRODUÇÃO) a Vice-coordenadoria de Extensão
          Universitária e Cultura manterá um fluxo contínuo para a acolhida de
          relatórios de projetos de extensão, para que estes possam (seguindo o
          fluxo de análise da RedeCT composto por análise de parecerista e
          parecer do Comitê Legitimador) emitir o referido selo. A partir da
          emissão do referido selo, o projeto constará em listagem de
          &quot;Projetos de Extensão Universitária de Qualidade&quot; no website
          da RedeCT. ESTA ÁREA ESTÁ EM CONSTRUÇÃO.
        </p>
      </div>

      <Building>
        A Vice-coordenadoria de Extensão Universitária e Cultura está
        desenvolvendo o sistema de avaliação e certificação. Em breve, você
        poderá submeter seus projetos para análise.
      </Building>
    </main>
  )
}
