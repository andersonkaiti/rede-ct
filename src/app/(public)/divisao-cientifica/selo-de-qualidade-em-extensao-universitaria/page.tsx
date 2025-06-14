import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Construction } from "lucide-react";

export default function SeloDeQualidadeEmExtensaoUniversitaria() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="text-center">
        <h1 className="title-1">Selo de Qualidade em Extensão Universitária</h1>
      </header>

      <div className="bg-white">
        <p className="text-muted-foreground text-justify text-lg">
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

      <Card className="flex flex-row items-center gap-5 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-8">
        <div className="rounded-full bg-amber-100 p-3">
          <Construction className="!size-6 text-amber-600" />
        </div>
        <div className="flex flex-col">
          <CardHeader className="p-0">
            <CardTitle className="mb-2 text-lg font-semibold text-amber-800">
              Área em Desenvolvimento
            </CardTitle>
          </CardHeader>
          <CardDescription className="text-amber-700">
            A Vice-coordenadoria de Extensão Universitária e Cultura está
            desenvolvendo o sistema de avaliação e certificação. Em breve, você
            poderá submeter seus projetos para análise.
          </CardDescription>
        </div>
      </Card>
    </main>
  );
}
