import { Badge } from "@components/ui/badge";
import { Card, CardContent, CardHeader } from "@components/ui/card";
import { NavigationCard } from "@components/ui/navigation-card";
import { Axis3DIcon, BookOpen, Users } from "lucide-react";

import { Composition } from "./_components/composition";
import { Duties } from "./_components/duties";

export default function EixosTematicosPermanentes() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Badge className="bg-primary/10 text-primary rounded-full p-1.5">
            <BookOpen className="!size-7" />
          </Badge>
          <h1 className="title-2">
            Eixos Temáticos Permanentes (ETPs) e Grupos de Trabalho Científico
            (GTCs)
          </h1>
        </div>
        <p className="text-justify">
          Nesta seção você encontra informações sobre o que são os ETPs e as
          suas identidades (áreas de pesquisa e de ação) e os GTCs e sua
          composição (Pesquisadores Filiados que compõem cada um dos grupos).
        </p>
      </section>

      <section className="flex flex-col gap-10 lg:flex-row">
        <Card className="flex-1">
          <CardHeader>
            <h2 className="title-3 flex items-center gap-4">
              <Badge className="bg-primary/20 text-primary rounded-full p-1">
                <BookOpen className="!size-7" />
              </Badge>
              ETP - EIXO TEMÁTICO PERMANENTE
            </h2>
          </CardHeader>
          <CardContent className="space-y-7">
            <h3 className="title-3">O que são os ETPs?</h3>
            <p className="text-justify">
              O EIXO TEMÁTICO PERMANENTE - ETP assemelha-se e funciona como um
              &quot;grupo de pesquisa&quot;, se constituindo em um espaço
              imaterial que, orientando-se a uma determinada temática, se
              destina a planejar, articular, organizar e desenvolver a produção
              do conhecimento.
            </p>
            <p className="text-justify">
              Por exemplo, o ETP-04 Produção do conhecimento e educação escolar
              indígena, liderado pelo Dr. Alceu Zoia organiza e conduz este tema
              dentro da RedeCT, produzindo a seção temática específica no
              Congresso Científico Internacional da RedeCT (CCI da RedeCT), pode
              organizar congresso específico em âmbito regional, nacional ou
              internacional conduzindo a chancela da RedeCT, pode organizar um
              livro a partir dos trabalhos de sua seção no CCI da RedeCT, pode
              propor e desenvolver um projeto de extensão universitária e mesmo
              um processo de captação de recursos de modo vinculado à RedeCT e
              ao seu CNPJ.
            </p>
            <h3 className="title-3">Quantos ETPs a RedeCT possui?</h3>
            <p className="text-justify">
              Em 10/11/2023, dentro do IV CCI (Belém/PA), em Reunião Técnica da
              RedeCT (aberta aos interessados), foram propostos 22 ETPs, que
              estão disponibilizados logo abaixo (você encontrará mais adiante,
              ainda nesta seção, o detalhamento de cada ETP, inclusive com a
              composição de seu GTC).
            </p>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <h2 className="title-3 flex items-center gap-4">
              <Badge className="bg-primary/20 text-primary rounded-full p-1">
                <Users className="!size-7" />
              </Badge>
              GTC - GRUPO DE TRABALHO CIENTÍFICO
            </h2>
          </CardHeader>
          <CardContent className="space-y-7">
            <h3 className="title-3">O que são os GTCs?</h3>
            <p className="text-justify">
              O Grupo de Trabalho Científico - GTC é um grupo de Pesquisadores
              Filiados à RedeCT, que por sua vez, se organizam a partir de um
              líder e um vice-líder, assumindo a organização e gestão continuada
              de um ETP.
            </p>
            <p className="text-justify">
              Assim, não existe um ETP sem que haja um GTC para a sua
              sustentação. Cada ETP é planejado e conduzido por um GTC.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-14">
        <h2 className="title-2">Listagem dos 22 ETPs da RedeCT:</h2>
        <p className="text-justify">
          A partir de um estudo detalhado sobre as temáticas tratadas (nos 12
          volumes já publicados do Livro RedeCT, nos webinários conduzidos e nas
          4 edições do Congresso Científico Internacional da RedeCT) e ainda
          sobre a recorrência de pesquisadores à frentes destes temas, a RedeCT
          propõe os seguintes ETPs e líderes de GTs (inclusive a RedeCT agradece
          à FAPESP pelo financiamento de uma bolsa de pesquisa para que um
          doutorando se dedicasse a este trabalho, via Edital Mídia
          Ciência/FAPESP):
        </p>
      </section>

      <section>
        <NavigationCard href="/quem-somos/eixos-tematicos-permanentes/etps">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="bg-primary/20 rounded-full p-2">
                <Axis3DIcon className="text-primary" />
              </div>
              <h2 className="title-3 font-bold">ETPS</h2>
            </div>
            <p>Confira os Eixos Temáticos Permanentes (ETPs) da RedeCT.</p>
          </div>
        </NavigationCard>
      </section>

      <Composition />

      <section className="space-y-7">
        <h2 className="title-3">
          Qual a autonomia, a linha de comando e o controle externo sobre o ETP
          e o GTC ?
        </h2>
        <p className="text-justify">
          O GTC e, por decorrência, o ETP possuem autonomia interna na condução
          dos trabalhos, observando-se as especificidades e limites impostos
          pelo Regimento Interno da RedeCT, as orientações dadas pelos valores
          centrais e operacionais da Rede e ainda as diretrizes dialogadas junto
          aos dirigentes da RedeCT.
        </p>
        <p className="text-justify">
          Dentro do GTC e, por decorrência, no âmbito do ETP, o líder e o
          vice-líder respondem pelo planejamento, organização, execução e
          controle dos trabalhos, assim são hierarquicamente os gestores destas
          instâncias.
        </p>
        <p className="text-justify">
          O controle externo do GTC (e por decorrência do ETP), ainda dentro do
          âmbito da RedeCT é realizado pela Vice-coordenadoria Científica,
          Comitê de Legitimação, Coordenadoria Geral e pela Assembleia Geral dos
          Pesquisadores Filiados. No âmbito da OSCIP SocialDHC, pela sua
          Diretoria Executiva, Conselho Fiscal e Assembleia Geral de Associados.
        </p>
      </section>

      <Duties />
    </main>
  );
}
