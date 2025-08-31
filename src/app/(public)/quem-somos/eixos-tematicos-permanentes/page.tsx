import { Badge } from '@components/ui/badge'
import { NavigationCard } from '@components/ui/navigation-card'
import { Axis3DIcon, BookOpen } from 'lucide-react'
import { ETPCard } from './_components/cards/etp-card'
import { GTCCard } from './_components/cards/gtc-card'
import { Composition } from './_components/cards/composition'
import { Duties } from './_components/cards/duties'

export default function EixosTematicosPermanentes() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <BookOpen className="!size-7" />
          </Badge>
          <h1 className="title-2">ETPs e GTCs</h1>
        </div>
        <p className="text-justify">
          Nesta seção você encontra informações sobre o que são os ETPs e as
          suas identidades (áreas de pesquisa e de ação) e os GTCs e sua
          composição (Pesquisadores Filiados que compõem cada um dos grupos).
        </p>
      </section>

      <section className="flex flex-col gap-10 lg:flex-row">
        <ETPCard />

        <GTCCard />
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
              <div className="rounded-full bg-primary/20 p-2">
                <Axis3DIcon className="text-primary" />
              </div>
              <h2 className="title-3 font-bold">ETPs</h2>
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
  )
}
