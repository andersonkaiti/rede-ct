import { Copy } from '@components/copy'
import { Badge } from '@components/ui/badge'
import { Card } from '@components/ui/card'
import { NavigationCard } from '@components/ui/navigation-card'
import { FileText, Landmark } from 'lucide-react'

export default function InstitutoDePesquisasAmazonicas() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <Landmark className="!size-7" />
          </Badge>
          <h1 className="font-semibold text-3xl">
            Instituto de Pesquisas Amazônicas e de Povos Tradicionais
          </h1>
        </div>
        <p className="text-muted-foreground">
          Aqui você tem acesso às informações básicas e à equipe de gestão, além
          de conhecer a história, as gestões anteriores e os projetos já
          desenvolvidos pelo Instituto, desde a sua criação em 02 de setembro de
          2002.
        </p>
      </section>

      <section className="space-y-14">
        <h2 className="title-3">
          Dados principais do Instituto (OSCIP RedeCT)
        </h2>
        <Card className="grid grid-cols-1 gap-8 rounded-xl p-7 text-center shadow-lg lg:grid-cols-3 lg:p-14">
          <div className="space-y-2">
            <h3 className="text-foreground">Razão Social</h3>
            <h3 className="title-3">
              Social Desenvolvimento Humano e Comunitário
            </h3>
          </div>
          <div className="space-y-2">
            <h3 className="text-foreground">Nome Fantasia</h3>
            <h3 className="title-3">
              Instituto de Pesquisas Amazônicas e de Povos Tradicionais
            </h3>
          </div>
          <div className="space-y-2">
            <h3 className="text-foreground">Identificações Alternativas</h3>
            <h3 className="title-3">
              SocialDHC, OSCIP SocialDHC, OSCIP Instituto, OSCIP RedeCT
            </h3>
          </div>
          <div className="space-y-2">
            <h3 className="text-foreground">CNPJ</h3>
            <Copy className="title-3">05.375.958/0001-80</Copy>
          </div>
          <div className="space-y-2">
            <h3 className="text-foreground">Data de Criação</h3>
            <h3 className="title-3">02 de setembro de 2002</h3>
          </div>
          <div className="space-y-2">
            <h3 className="text-foreground">Data de Qualificação como OSCIP</h3>
            <h3 className="title-3">14/04/2003</h3>
          </div>
          <div className="space-y-2">
            <h3 className="text-foreground">
              Data de Apresentação Pública da RedeCT
            </h3>
            <h3 className="title-3">22/05/2018</h3>
          </div>
          <div className="space-y-2">
            <h3 className="text-foreground">Sede</h3>
            <h3 className="title-3">
              Porto Nacional (estado do Tocantins - Amazônia legal brasileira)
            </h3>
          </div>
          <div className="space-y-2">
            <h3 className="text-foreground">Escritório Regional</h3>
            <h3 className="title-3">Bauru (estado de São Paulo - Brasil)</h3>
          </div>
        </Card>
      </section>

      <section>
        <NavigationCard href="/quem-somos/instituto-de-pesquisas-amazonicas-e-de-povos-tradicionais/equipe-sdhc">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/20 p-2">
                <FileText className="text-primary" />
              </div>
              <h2 className="title-3 font-bold">
                Conheça nossa equipe de gestão
              </h2>
            </div>
            <p>
              Descubra os membros da atual equipe de gestão da associação Social
              Desenvolvimento Humano e Comunitário.
            </p>
          </div>
        </NavigationCard>
      </section>

      <section className="space-y-7">
        <h2 className="font-semibold text-2xl">
          HISTÓRIA DA SUA FUNDAÇÃO (em 2002) ATÉ OS TEMPOS ATUAIS
        </h2>
        <p className="text-justify text-muted-foreground">
          Em 2002, um grupo de professores e alguns alunos de graduação de
          Bauru/SP, articulados com alguns moradores de pequenos municípios e de
          comunidades tradicionais da Amazônia brasileira, idealizaram uma
          associação que tivesse como objetivo principal a promoção do
          desenvolvimento sustentável de povos tradicionais (especialmente
          amazônicos). Depois de muitos estudos teóricos e planejamento de
          ações, em 02/09/2002 houve a Assembleia Geral de interessados, sendo
          aprovada sua criação e seu estatuto social; eleita e empossada sua
          primeira diretoria executiva e conselho fiscal, além definir sua sede
          no estado do Tocantins – Brasil – Amazônia Legal Brasileira.Em 2002,
          um grupo de professores e alguns alunos de graduação de Bauru/SP,
          articulados com alguns moradores de pequenos municípios e de
          comunidades tradicionais da Amazônia brasileira, idealizaram uma
          associação que tivesse como objetivo principal a promoção do
          desenvolvimento sustentável de povos tradicionais (especialmente
          amazônicos). Depois de muitos estudos teóricos e planejamento de
          ações, em 02/09/2002 houve a Assembleia Geral de interessados, sendo
          aprovada sua criação e seu estatuto social; eleita e empossada sua
          primeira diretoria executiva e conselho fiscal, além definir sua sede
          no estado do Tocantins – Brasil – Amazônia Legal Brasileira.
        </p>
        <p className="text-justify text-muted-foreground">
          Seu idealizador, Prof. Nelson Russo de Moraes (na ocasião mestrando)
          foi o primeiro presidente, tendo ainda como membros fundadores da
          associação Alexandre de Castro Campos (na ocasião graduando), Helerson
          de Almeida Balderramas (na ocasião mestrando), Priscilla Caparroz de
          Moraes, Ellen Copedê, Luis Pasquali, Océlio Nobre, dentre outros. A
          Assembleia Geral de Criação foi em 02/09/2002 e após todos os trâmites
          de registro o CNPJ foi expedido pela Receita Federal do Brasil em
          …./…./…… Na ocasião a razão social e o nome de fantasia era o mesmo:
          Social Desenvolvimento Humano e Comunitário – SocialDHC.
        </p>
        <p className="text-justify text-muted-foreground">
          Logo após a criação da SocialDHC, os seus membros passaram a concorrer
          e ingressar como parte integrante de comitês de desenvolvimento
          sustentável no estado do Tocantins (Amazônia do Brasil). Os anos se
          seguiram, diretorias e conselhos se sucederam (quadro dos dirigentes e
          conselheiros na última seção desta página) e diversos projetos
          socioambientais foram sendo desenvolvidos (descritos abaixo deste
          texto).
        </p>
        <p className="text-justify text-muted-foreground">
          Hoje a SocialDHC, com nome fantasia Instituto de Pesquisas Amazônicas
          e de Povos Tradicionais, é a mantenedora da RedeCT e mantém sede
          administrativa em Porto Nacional (estado do Tocantins – Brasil) e
          escritório de representação em Bauru (estado de São Paulo – Brasil).
        </p>
        <p className="text-justify text-muted-foreground">
          Hoje a SocialDHC, com nome fantasia Instituto de Pesquisas Amazônicas
          e de Povos Tradicionais, é a mantenedora da RedeCT e mantém sede
          administrativa em Porto Nacional (estado do Tocantins – Brasil) e
          escritório de representação em Bauru (estado de São Paulo – Brasil).
        </p>
      </section>
    </main>
  )
}
