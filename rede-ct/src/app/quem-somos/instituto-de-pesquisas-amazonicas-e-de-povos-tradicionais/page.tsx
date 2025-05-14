import { Copy } from "@components/copy";
import { NavigationCard } from "@components/navigation-card";
import { FileText } from "lucide-react";

export default async function InstitutoDePesquisasAmazonicas() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <section className="space-y-14">
        <h1 className="title-1">
          Instituto de Pesquisas Amazônicas e de Povos Tradicionais
        </h1>
        <p>
          Aqui você tem acesso às informações básicas e à equipe de gestão, além
          de conhecer a história, as gestões anteriores e os projetos já
          desenvolvidos pelo Instituto, desde a sua criação em 02 de setembro de
          2002.
        </p>
      </section>

      {/* Dados principais do Instituto (OSCIP RedeCT) */}
      <section className="space-y-14">
        <h2 className="title-2">
          Dados principais do Instituto (OSCIP RedeCT)
        </h2>
        <div className="grid grid-cols-1 gap-8 rounded-xl bg-white p-7 text-center shadow-lg lg:grid-cols-3 lg:p-14">
          <div className="space-y-2">
            <h3 className="text-gray-500">Razão Social</h3>
            <h3 className="title-3">
              Social Desenvolvimento Humano e Comunitário
            </h3>
          </div>
          <div className="space-y-2">
            <h3 className="text-gray-500">Nome Fantasia</h3>
            <h3 className="title-3">
              Instituto de Pesquisas Amazônicas e de Povos Tradicionais
            </h3>
          </div>
          <div className="space-y-2">
            <h3 className="text-gray-500">Identificações Alternativas</h3>
            <h3 className="title-3">
              SocialDHC, OSCIP SocialDHC, OSCIP Instituto, OSCIP RedeCT
            </h3>
          </div>
          <div className="space-y-2">
            <h3 className="text-gray-500">CNPJ</h3>
            <Copy className="title-3">05.375.958/0001-80</Copy>
          </div>
          <div className="space-y-2">
            <h3 className="text-gray-500">Data de Criação</h3>
            <h3 className="title-3">02 de setembro de 2002</h3>
          </div>
          <div className="space-y-2">
            <h3 className="text-gray-500">Data de Qualificação como OSCIP</h3>
            <h3 className="title-3">14/04/2003</h3>
          </div>
          <div className="space-y-2">
            <h3 className="text-gray-500">
              Data de Apresentação Pública da RedeCT
            </h3>
            <h3 className="title-3">22/05/2018</h3>
          </div>
          <div className="space-y-2">
            <h3 className="text-gray-500">Sede</h3>
            <h3 className="title-3">
              Porto Nacional (estado do Tocantins - Amazônia legal brasileira)
            </h3>
          </div>
          <div className="space-y-2">
            <h3 className="text-gray-500">Escritório Regional</h3>
            <h3 className="title-3">Bauru (estado de São Paulo - Brasil)</h3>
          </div>
        </div>
      </section>

      <section>
        <NavigationCard.Root href="/quem-somos/instituto-de-pesquisas-amazonicas-e-de-povos-tradicionais/equipe-sdhc">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-indigo-500/20 p-2">
                <FileText className="text-indigo-500" />
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
        </NavigationCard.Root>
      </section>

      <section className="space-y-7">
        <h2 className="title-2">
          HISTÓRIA DA SUA FUNDAÇÃO (em 2002) ATÉ OS TEMPOS ATUAIS
        </h2>
        <p className="text-justify">
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
        <p className="text-justify">
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
        <p className="text-justify">
          Logo após a criação da SocialDHC, os seus membros passaram a concorrer
          e ingressar como parte integrante de comitês de desenvolvimento
          sustentável no estado do Tocantins (Amazônia do Brasil). Os anos se
          seguiram, diretorias e conselhos se sucederam (quadro dos dirigentes e
          conselheiros na última seção desta página) e diversos projetos
          socioambientais foram sendo desenvolvidos (descritos abaixo deste
          texto).
        </p>
        <p className="text-justify">
          Hoje a SocialDHC, com nome fantasia Instituto de Pesquisas Amazônicas
          e de Povos Tradicionais, é a mantenedora da RedeCT e mantém sede
          administrativa em Porto Nacional (estado do Tocantins – Brasil) e
          escritório de representação em Bauru (estado de São Paulo – Brasil).
        </p>
        <p className="text-justify">
          Hoje a SocialDHC, com nome fantasia Instituto de Pesquisas Amazônicas
          e de Povos Tradicionais, é a mantenedora da RedeCT e mantém sede
          administrativa em Porto Nacional (estado do Tocantins – Brasil) e
          escritório de representação em Bauru (estado de São Paulo – Brasil).
        </p>
      </section>
    </main>
  );
}
