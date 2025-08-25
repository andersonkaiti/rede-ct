import { Badge } from '@components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card'
import { RedNavigationCard } from '@components/ui/red-navigation-card'
import { getTimelineRedeCT } from '@mocks/timeline-rede-ct'
import {
  BookOpen,
  Globe,
  Heart,
  History,
  Landmark,
  MapPin,
  Users,
} from 'lucide-react'
import { Timeline } from './_components/timeline'

const countries = [
  'Argentina',
  'Bolívia',
  'Colômbia',
  'Venezuela',
  'Moçambique',
  'Angola',
  'Cabo Verde',
  'Portugal',
  'Itália',
  'México',
]

export default async function ApresentacaoEHistoria() {
  const timelineData = await getTimelineRedeCT()

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <section className="flex flex-col items-center justify-center text-white">
        <h1 className="text-center text-3xl text-foreground">
          História da RedeCT
        </h1>
        <p className="w-fit font-light text-muted-foreground">
          desde 02/09/2002
        </p>
      </section>

      <section className="space-y-14">
        <h2 className="text-center font-semibold text-3xl">Sobre a RedeCT</h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <Card className="shadow-xl">
            <CardHeader className="flex items-center gap-2">
              <Badge className="rounded-md bg-primary/10 p-1 text-primary">
                <Heart className="!size-7" />
              </Badge>
              <CardTitle className="font-semibold text-2xl">RedeCT</CardTitle>
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
              <Badge className="rounded-md bg-primary/10 p-1 text-primary">
                <Users className="!size-7" />
              </Badge>
              <CardTitle className="font-semibold text-2xl">
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
          <Badge className="rounded-md bg-primary/10 p-1 text-primary">
            <Globe className="!size-7" />
          </Badge>
          <h2 className="font-semibold text-3xl">Presença internacional</h2>
        </div>
        <div className="grid grid-cols-5 gap-2 text-sm md:grid-cols-4 lg:grid-cols-5">
          {countries.map((country) => (
            <Badge
              className="flex w-full flex-col items-center gap-0.5 rounded-md border border-primary/20 bg-primary/10 p-2 font-semibold text-primary"
              key={country}
            >
              <MapPin className="!size-4" />
              {country}
            </Badge>
          ))}
        </div>
      </section>

      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Badge className="rounded-md bg-primary/10 p-1 text-primary">
            <Landmark className="!size-7" />
          </Badge>
          <h2 className="font-semibold text-3xl">História</h2>
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
          <Badge className="rounded-md bg-primary/10 p-1 text-primary">
            <BookOpen className="!size-7" />
          </Badge>
          <h2 className="font-semibold text-3xl">Publicações</h2>
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
          <Badge className="rounded-full bg-primary/10 p-1 text-primary">
            <History className="!size-7" />
          </Badge>
          <h2 className="title-2">Linha do tempo da RedeCT</h2>
        </div>
        <div className="relative w-full space-y-7 sm:space-y-14">
          {timelineData.map((item, index: number) => (
            <Timeline item={item} key={index} />
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
  )
}
