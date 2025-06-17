import { Badge } from "@components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { RedNavigationCard } from "@components/ui/red-navigation-card";
import { getTimelineRedeCT } from "@services/timeline-rede-ct";
import {
  BookOpen,
  Clock,
  Globe,
  Heart,
  History,
  Landmark,
  MapPin,
  Users,
} from "lucide-react";

import { Timeline } from "./_components/timeline";

const countries = [
  "Argentina",
  "Bolívia",
  "Colômbia",
  "Venezuela",
  "Moçambique",
  "Angola",
  "Cabo Verde",
  "Portugal",
  "Itália",
  "México",
];

export default async function ApresentacaoEHistoria() {
  const timelineData = await getTimelineRedeCT();

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <section className="bg-primary flex flex-col items-center justify-center gap-8 rounded-md p-10 text-white">
        <Badge className="rounded-full bg-white/20 p-1">
          <Clock className="!size-10" />
        </Badge>
        <h1 className="title-2 text-center">História da RedeCT</h1>
        <Badge className="w-full rounded-full border border-white/20 bg-white/20 px-4 py-1">
          <p className="w-fit font-semibold">desde 02/09/2002</p>
        </Badge>
      </section>

      <section className="space-y-14">
        <h2 className="text-center text-3xl font-semibold">Sobre a RedeCT</h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <Card className="shadow-xl">
            <CardHeader className="flex items-center gap-2">
              <Badge className="bg-primary/10 text-primary rounded-md p-1">
                <Heart className="!size-7" />
              </Badge>
              <CardTitle className="text-2xl font-semibold">RedeCT</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                A Rede Internacional de Pesquisadores sobre Povos Originários e
                Comunidades Tradicionais – RedeCT é uma articulação independente
                e voluntária, caracterizada como REDE DE PESQUISADORES, que se
                volta exclusivamente à cooperação para a promoção e o
                fortalecimento do ensino, da pesquisa e da extensão
                universitária sobre todos os temas que se relacionam às demandas
                de povos originários e de comunidades tradicionais no Brasil
                (país sede da RedeCT) e em outros países onde a Rede está
                presente por meio de seus afiliados.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl">
            <CardHeader className="flex items-center gap-2">
              <Badge className="bg-primary/10 text-primary rounded-md p-1">
                <Users className="!size-7" />
              </Badge>
              <CardTitle className="text-2xl font-semibold">
                Quem são os Povos Tradicionais?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                Reconhecemos como Povos Originários aqueles povos e comunidades
                que habitavam as terras com modus vivendi comunitário antes do
                processo de colonização. No Brasil, incluem todos os indígenas e
                seus descendentes, independentemente de morarem nas aldeias ou
                terras indígenas.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Badge className="bg-primary/10 text-primary rounded-md p-1">
            <Globe className="!size-7" />
          </Badge>
          <h2 className="text-3xl font-semibold">Presença internacional</h2>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm md:grid-cols-4 lg:grid-cols-5">
          {countries.map((country) => (
            <Badge
              key={country}
              className="text-primary bg-primary/10 border-primary/20 flex w-full flex-col items-center gap-0.5 rounded-md border p-2 font-semibold"
            >
              <MapPin className="!size-4" />
              {country}
            </Badge>
          ))}
        </div>
      </section>

      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Badge className="bg-primary/10 text-primary rounded-md p-1">
            <Landmark className="!size-7" />
          </Badge>
          <h2 className="text-3xl font-semibold">História</h2>
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
          <Badge className="bg-primary/10 text-primary rounded-md p-1">
            <BookOpen className="!size-7" />
          </Badge>
          <h2 className="text-3xl font-semibold">Publicações</h2>
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
        <div className="flex items-center justify-center gap-4">
          <Badge className="bg-primary/10 text-primary rounded-full p-1">
            <History className="!size-7" />
          </Badge>
          <h2 className="title-2">Linha do tempo da RedeCT</h2>
        </div>
        <div className="relative w-full space-y-7 sm:space-y-14">
          {timelineData.map((item, index: number) => (
            <Timeline key={index} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-14">
        <RedNavigationCard href="/quem-somos/apresentacao-e-historia/filiacao">
          <h2 className="title-3 flex items-center gap-2">
            <Users />
            Como se filiar à RedeCT?
          </h2>
        </RedNavigationCard>
      </section>
    </main>
  );
}
