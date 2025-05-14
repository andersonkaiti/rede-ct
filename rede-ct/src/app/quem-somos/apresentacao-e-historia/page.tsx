import { getTimelineRedeCT } from "@actions/timeline-rede-ct";
import { Timeline } from "@components/ui/timeline";
import Image from "next/image";
import {
  History,
  Users,
  BookOpen,
  Globe,
  Landmark,
  Image as ImageIcon,
  ArrowRightIcon,
} from "lucide-react";
import Link from "next/link";
import { NavigationCard } from "@components/navigation-card";

export default async function ApresentacaoEHistoria() {
  const timelineData = await getTimelineRedeCT();

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <section className="space-y-7">
        <div className="flex items-center justify-center gap-4">
          <History className="h-8 w-8 text-indigo-500" />
          <h1 className="title-1 text-center">História da RedeCT</h1>
        </div>
        <h3 className="title-3 text-center text-gray-500">
          (desde 02/09/2002)
        </h3>
      </section>

      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Globe className="h-6 w-6 text-indigo-500" />
          <h2 className="title-2">Sobre a RedeCT</h2>
        </div>
        <p className="text-justify">
          A Rede Internacional de Pesquisadores sobre Povos Originários e
          Comunidades Tradicionais – RedeCT é uma articulação independente e
          voluntária, caracterizada como REDE DE PESQUISADORES, que se volta
          exclusivamente à cooperação para a promoção e o fortalecimento do
          ensino, da pesquisa e da extensão universitária sobre todos os temas
          que se relacionam às demandas de povos originários e de comunidades
          tradicionais no Brasil (país sede da RedeCT) e em outros países onde a
          Rede está presente por meio de seus afiliados (entre eles Argentina,
          Bolívia, Colômbia, Venezuela, Moçambique, Angola, Cabo Verde,
          Portugal, Itália e México).
        </p>
      </section>

      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Landmark className="h-6 w-6 text-indigo-500" />
          <h2 className="title-2">História</h2>
        </div>
        <div className="space-y-7">
          <p className="text-justify">
            A história da RedeCT tem raízes nos trabalhos de seus idealizadores,
            remontando ao ano de 2002, quando professores, estudantes e
            moradores de comunidades tradicionais amazônicas realizaram uma
            associação que objetivava a promoção do desenvolvimento sustentável
            de comunidades, especialmente povos tradicionais.
          </p>
          <p className="text-justify">
            Em 2014, já na Universidade Estadual Paulista - UNESP (Tupã/SP), o
            professor Nelson Russo de Moraes convidou diversos pesquisadores,
            professores e estudantes à criação do grupo de pesquisa GEDGS (Grupo
            de Estudos em Democracia e Gestão Social).
          </p>
          <p className="text-justify">
            Em 22/05/2018, no X ENAPEGS (Encontro Nacional de Pesquisadores em
            Gestão Social), realizado na Universidade Federal do Cariri – UFCA
            (Juazeiro do Norte – CE/Brasil) foi oficialmente apresentada, de
            modo público, a Rede Internacional de Pesquisadores sobre Povos
            Originários e Comunidades Tradicionais – RedeCT.
          </p>
        </div>
      </section>

      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Users className="h-6 w-6 text-indigo-500" />
          <h2 className="title-2">Quem são os Povos Tradicionais?</h2>
        </div>
        <div className="space-y-7">
          <p className="text-justify">
            De modo geral, os pesquisadores filiados da RedeCT, reconhecendo que
            o processo de identificação de raízes ancestrais, culturais e de
            conhecimentos tradicionais dos Povos Tradicionais ainda está em
            curso, tomam (de maneira geral) os POVOS ORIGINÁRIOS como aqueles
            povos e comunidades (inclusive seus descendentes) que habitavam, com
            modus vivendi comunitário, as terras e territórios dos mais diversos
            continentes do planeta antes do processo de colonização imposto por
            sociedades orientadas pelo modo de produção capitalista.
          </p>
          <p className="text-justify">
            Assim, de modo geral a RedeCT e seus pesquisadores filiados admitem
            que no CASO BRASILEIRO, os Povos Originários são compostos por todos
            os indígenas e seus descendentes, independentemente de morarem ou
            não nas aldeias ou terras indígenas (demarcadas ou não pelo Estado).
          </p>
        </div>
      </section>

      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <BookOpen className="h-6 w-6 text-indigo-500" />
          <h2 className="title-2">Publicações</h2>
        </div>
        <div className="space-y-7">
          <p className="text-justify">
            Um dos primeiros passos da RedeCT foi o lançamento, em julho de 2018
            de um edital de chamamento de capítulos de livros para a composição
            de uma primeira coletânea de trabalhos científicos acerca dos Povos
            Tradicionais (povos originários e comunidades tradicionais) e suas
            demandas. A publicação seguiu fluxo anual e em 2023 a RedeCT
            publicou o 12º volume, chegando a mais de 150 trabalhos publicados.
          </p>
        </div>
      </section>

      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <ImageIcon className="h-6 w-6 text-indigo-500" />
          <h2 className="title-2">Imagem, identidade e logomarca da RedeCT</h2>
        </div>
        <div className="space-y-7">
          <p className="text-justify">
            A história e toda a trajetória da RedeCT fundamenta-se sobre a vida,
            a natureza e as lutas dos povos tradicionais. Neste sentido a
            produção gradativa de uma imagem produzida pelas pessoas envolvidas
            nos diversos projetos da RedeCT e que se consolidasse em uma
            identidade forte e robusta da Rede não poderia deixar de passar pela
            pelos elementos terra, natureza e ser humano.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
            <div className="relative w-1/2 items-center justify-center lg:flex-1">
              <Image
                src="/rede-ct-1.png"
                alt="Logomarca antiga da RedeCT"
                width={1000}
                height={1000}
              />
            </div>
            <div className="relative w-1/2 items-center justify-center lg:flex-1">
              <Image
                src="/rede-ct-2.png"
                alt="Logomarca antiga da RedeCT"
                width={1000}
                height={1000}
              />
            </div>
            <div className="relative w-1/2 items-center justify-center lg:flex-1">
              <Image
                src="/rede-ct-3.png"
                alt="Logomarca antiga da RedeCT"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <History className="h-6 w-6 text-indigo-500" />
          <h2 className="title-2">Linha do tempo da RedeCT</h2>
        </div>
        <div className="relative w-full overflow-clip">
          <Timeline data={timelineData} />
        </div>
      </section>

      <section className="space-y-14">
        <NavigationCard.BlueRoot href="/quem-somos/apresentacao-e-historia/filiacao">
          <h2 className="title-3 flex items-center gap-2">
            <Users />
            Como se filiar à RedeCT?
          </h2>
          <div className="ml-auto">
            <ArrowRightIcon className="text-white" />
          </div>
        </NavigationCard.BlueRoot>
      </section>
    </main>
  );
}
