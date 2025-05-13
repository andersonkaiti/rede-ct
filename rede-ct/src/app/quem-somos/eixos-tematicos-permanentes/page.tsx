import { OrderedList } from "@components/ordered-list";
import {
  ArrowRightIcon,
  Axis3DIcon,
  BookOpen,
  Check,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function EixosTematicosPermanentes() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-10 lg:p-25">
      <section className="space-y-14">
        <h1 className="title-1">
          Eixos Temáticos Permanentes (ETPs) e Grupos de Trabalho Científico
          (GTCs)
        </h1>
        <p className="text-justify">
          Nesta seção você encontra informações sobre o que são os ETPs e as
          suas identidades (áreas de pesquisa e de ação) e os GTCs e sua
          composição (Pesquisadores Filiados que compõem cada um dos grupos).
        </p>
      </section>

      <section className="flex flex-col gap-10 lg:flex-row">
        {/* ETP - EIXO TEMÁTICO PERMANENTE */}
        <section className="flex-1 space-y-4 rounded-md p-8 text-justify shadow-[0_0_10px_rgba(0,0,0,0.1)]">
          <h2 className="title-2 flex items-center gap-2">
            <div className="mr-2 rounded-full bg-indigo-500/20 p-2">
              <BookOpen className="text-indigo-500" />
            </div>
            ETP - EIXO TEMÁTICO PERMANENTE
          </h2>
          <h3 className="title-3">O que são os ETPs?</h3>
          <p className="text-justify">
            O EIXO TEMÁTICO PERMANENTE - ETP assemelha-se e funciona como um
            &quot;grupo de pesquisa&quot;, se constituindo em um espaço
            imaterial que, orientando-se a uma determinada temática, se destina
            a planejar, articular, organizar e desenvolver a produção do
            conhecimento.
          </p>
          <p className="text-justify">
            Por exemplo, o ETP-04 Produção do conhecimento e educação escolar
            indígena, liderado pelo Dr. Alceu Zoia organiza e conduz este tema
            dentro da RedeCT, produzindo a seção temática específica no
            Congresso Científico Internacional da RedeCT (CCI da RedeCT), pode
            organizar congresso específico em âmbito regional, nacional ou
            internacional conduzindo a chancela da RedeCT, pode organizar um
            livro a partir dos trabalhos de sua seção no CCI da RedeCT, pode
            propor e desenvolver um projeto de extensão universitária e mesmo um
            processo de captação de recursos de modo vinculado à RedeCT e ao seu
            CNPJ.
          </p>
          <h3 className="title-3">Quantos ETPs a RedeCT possui?</h3>
          <p className="text-justify">
            Em 10/11/2023, dentro do IV CCI (Belém/PA), em Reunião Técnica da
            RedeCT (aberta aos interessados), foram propostos 22 ETPs, que estão
            disponibilizados logo abaixo (você encontrará mais adiante, ainda
            nesta seção, o detalhamento de cada ETP, inclusive com a composição
            de seu GTC).
          </p>
        </section>

        {/* GTC - GRUPO DE TRABALHO CIENTÍFICO */}
        <section className="flex-1 space-y-4 rounded-md p-8 text-justify shadow-[0_0_10px_rgba(0,0,0,0.1)]">
          <h2 className="title-2 flex items-center gap-2">
            <div className="mr-2 rounded-full bg-indigo-500/20 p-2">
              <Users className="text-indigo-500" />
            </div>
            GTC - GRUPO DE TRABALHO CIENTÍFICO
          </h2>
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
        </section>
      </section>

      {/* LISTAGEM DOS 22 ETPs DA REDECT */}
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
        <Link href="/quem-somos/eixos-tematicos-permanentes/etps">
          <div className="flex items-center gap-4 rounded-md p-6 text-justify shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-xl">
            <div className="rounded-full bg-indigo-500/20 p-2">
              <Axis3DIcon className="text-indigo-500" />
            </div>
            <div>
              <h2 className="title-3 font-bold">ETPS</h2>
              <p>Confira os Eixos Temáticos Permanentes (ETPs) da RedeCT.</p>
            </div>
            <div className="ml-auto">
              <ArrowRightIcon className="text-indigo-500" />
            </div>
          </div>
        </Link>
      </section>

      <section className="space-y-4 rounded-md p-8 text-justify shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <h2 className="title-2 flex items-center gap-2">
          <div className="mr-2 rounded-full bg-indigo-500/20 p-2">
            <Check className="text-indigo-500" />
          </div>
          Como é a composição de um GTC?
        </h2>
        <OrderedList.Root>
          <OrderedList.Item>um Líder (Pesquisador Sênior);</OrderedList.Item>
          <OrderedList.Item>
            um Vice-líder (Pesquisador Sênior);
          </OrderedList.Item>
          <OrderedList.Item>
            um Secretário Geral (Pesquisador ou Pesquisador Sênior);
          </OrderedList.Item>
          <OrderedList.Item>
            Além destes, o GTC deverá ter (obrigatoriamente) mais 10 integrantes
            (Pesquisadores Sêniors);
          </OrderedList.Item>
          <OrderedList.Item>
            Obrigatoriamente um dos membros do GTC deverá ser membro de Povo
            Originário ou Comunidade Tradicional (observando-se a ligação de sua
            matriz com a temática do ETP conduzido pelo GTC);
          </OrderedList.Item>
          <OrderedList.Item>
            Obrigatoriamente um dos membros do GTC deverá ser pesquisador
            internacional (que não seja do Brasil);
          </OrderedList.Item>
          <OrderedList.Item>
            A liderança do GTC poderá admitir, além de todo o quadro acima, até
            3 Pesquisadores Filiados (não doutores, que tenhm o título de Mestre
            ou Certificado de Graduação).
          </OrderedList.Item>
        </OrderedList.Root>
      </section>

      <section className="space-y-7">
        <h2 className="title-2">
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

      <section className="space-y-4 rounded-md p-8 text-justify shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <section className="space-y-7">
          <h2 className="title-2 flex items-center gap-2">
            <div className="mr-2 rounded-full bg-indigo-500/20 p-2">
              <Check className="text-indigo-500" />
            </div>
            POSSIBILIDADES E DEVERES DO GTC
          </h2>
          <h3 className="title-3">DEVERES DO GTC JUNTO À REDECT:</h3>

          <OrderedList.Root>
            <OrderedList.Item>
              Respeitar o Regimento Interno da RedeCT todas as suas cláusulas;
            </OrderedList.Item>
            <OrderedList.Item>
              Alinhar-se e defender os valores centrais e operacionais da
              RedeCT;
            </OrderedList.Item>
            <OrderedList.Item>
              Atender às demandas administrativas e editoriais da RedeCT (de
              modo especial a apreciação, avaliação e emissão de parecer para os
              seus diversos projetos);
            </OrderedList.Item>
            <OrderedList.Item>
              Manter os seus integrantes devidamente regulares junto à RedeCT;
            </OrderedList.Item>
            <OrderedList.Item>
              Zelar pelo controle de endogenia editorial, mantendo (no mínimo)
              70% dos trabalhos de autores externos ao grupo de integrantes do
              GT;
            </OrderedList.Item>
            <OrderedList.Item>
              Manter o limite máximo de 20% de trabalhos que versem sobre a
              temática do GT, mas não dialoguem diretamente com o tema
              &quot;Povos Tradicionais&quot; (nas seções dos congressos da
              RedeCT, no conjunto de capítulos de livros organizados e ainda em
              dossiês produzidos para revistas científicas);
            </OrderedList.Item>
            <OrderedList.Item>
              Orientar os diferentes públicos e vetar trabalhos que não atendam
              às legislações de ética em pesquisas com pessoas, de propriedade
              intelectual (plágio) e ainda quanto à Lei Geral de Proteção de
              Dados das Pessoas (LGPD);
            </OrderedList.Item>
            <OrderedList.Item>
              Orientar os diferentes públicos e revisar os trabalhos finais que
              seguirão para a publicação em Anais de Congressos ou em Livros
              Organizados (especialmente quanto à língua portuguesa e normas da
              ABNT);
            </OrderedList.Item>
            <OrderedList.Item>
              Ao final dos congressos da RedeCT (dos quais o ETP participar), em
              especial o Congresso Científico Internacional da RedeCT, o
              Secretário Geral deverá – em no máximo dez dias – enviar à
              Vice-coordenadoria de Eventos Científicos a sua parte do documento
              Anais para publicação, seguindo as normas e padrões editoriais
              orientados por esta vice-coordenadoria;
            </OrderedList.Item>
            <OrderedList.Item>
              Manter atualizadas as informações das suas áreas no website da
              RedeCT;
            </OrderedList.Item>
            <OrderedList.Item>
              Manter atualizado o documento ATA onde constem as decisões
              administrativas, encaminhamentos e resumos de reuniões constando a
              presença dos membros. A Ata deve estar disponível em sua área no
              website da RedeCT. Orienta-se suprimir menções de nomes e trechos
              que necessitem de reserva quanto à publicação.
            </OrderedList.Item>
          </OrderedList.Root>
        </section>

        <section className="space-y-7">
          <h3 className="title-3">POSSIBILIDADES DO GT:</h3>

          <OrderedList.Root>
            <OrderedList.Item>
              Utilizar a marca RedeCT no sentido de que o referido pesquisador
              integra a Rede e nesta faz parte do seu Comitê Científico;
            </OrderedList.Item>
            <OrderedList.Item>
              Organizar e reorganizar, sempre que necessário o fluxo de trabalho
              do GTC, inclusive ajustes amistosos quanto à sua composição e
              mesmo liderança;
            </OrderedList.Item>
            <OrderedList.Item>
              Planejar, organizar, conduzir, avaliar e controlar o ETP ao qual
              está relacionado o GTC;
            </OrderedList.Item>
            <OrderedList.Item>
              Definir (dentre seus integrantes/doutores e mesmo convidados
              externos) quem comporá comissões de trabalho em congressos
              internos e externos à RedeCT;
            </OrderedList.Item>
            <OrderedList.Item>
              Dentro dos congressos da RedeCT, articular, propor e conduzir
              mesas-redondas e conferências;
            </OrderedList.Item>
            <OrderedList.Item>
              Organizar livros articulando saberes e produções (inclusive
              oriundas das seções dos congressos da RedeCT;
            </OrderedList.Item>
            <OrderedList.Item>
              Articular a publicação dos melhores artigos (no âmbito do seu ETP
              dentro do Congresso Científico Internacional da RedeCT) em
              revistas científicas;
            </OrderedList.Item>
            <OrderedList.Item>
              Publicar, com maior facilidade, suas obras pelo ecossistema RedeCT
              e suas conexões acadêmicas;
            </OrderedList.Item>
            <OrderedList.Item>
              Conduzir, sob chancela e cooperação com a RedeCT, congresso
              regional ou temático do ETP sob responsabilidade do GTC.
            </OrderedList.Item>
          </OrderedList.Root>
        </section>
      </section>
    </main>
  );
}
