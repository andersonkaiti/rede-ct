import { BookTextIcon } from '@components/icons/book-text'
import { ClockIcon } from '@components/icons/clock'
import { EarthIcon } from '@components/icons/earth'
import { Badge } from '@components/ui/badge'
import { NavigationCard } from '@components/ui/navigation-card'
import { Spotlight } from '@components/ui/spotlight'
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from '@components/ui/timeline'
import { getTimelineRedeCT } from '@mocks/timeline-rede-ct'
import { Users } from 'lucide-react'
import Image from 'next/image'
import { Countries } from './_components/countries'
import { WhatAreRedeCTCard } from './_components/whats-are-cards/rede-ct'
import { WhatAreTraditionalPeopleCard } from './_components/whats-are-cards/traditional-people'

export default async function ApresentacaoEHistoria() {
  const timelineData = await getTimelineRedeCT()

  return (
    <>
      <Spotlight intensity="LOW" />

      <main className="relative mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
        <section className="space-y-8 px-4 py-16 text-white">
          <Image
            alt="Rede CT"
            className="mx-auto invert-100 dark:invert-0"
            height={75}
            priority
            src="/images/favicon.png"
            width={75}
          />

          <h1 className="title-2 text-center text-foreground">RedeCT</h1>
        </section>

        <section className="space-y-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <WhatAreRedeCTCard />

            <WhatAreTraditionalPeopleCard />
          </div>
        </section>

        <section className="space-y-14">
          <div className="flex items-center justify-center gap-4">
            <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
              <EarthIcon className="!size-7" />
            </Badge>
            <h2 className="font-semibold text-3xl">Presença internacional</h2>
          </div>

          <Countries />
        </section>

        <section className="space-y-14">
          <div className="flex items-center gap-4">
            <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
              <ClockIcon className="!size-7" />
            </Badge>
            <h2 className="font-semibold text-3xl">História</h2>
          </div>
          <div className="space-y-7">
            <p className="text-justify">
              A história da RedeCT tem raízes nos trabalhos de seus
              idealizadores, remontando ao ano de 2002, quando professores,
              estudantes e moradores de comunidades tradicionais amazônicas
              realizaram uma associação que objetivava a promoção do
              desenvolvimento sustentável de comunidades, especialmente povos
              tradicionais.
            </p>
            <p className="text-justify">
              Em 2014, já na Universidade Estadual Paulista - UNESP (Tupã/SP), o
              professor Nelson Russo de Moraes convidou diversos pesquisadores,
              professores e estudantes à criação do grupo de pesquisa GEDGS
              (Grupo de Estudos em Democracia e Gestão Social).
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
            <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
              <BookTextIcon className="!size-7" />
            </Badge>
            <h2 className="font-semibold text-3xl">Publicações</h2>
          </div>
          <div className="space-y-7">
            <p className="text-justify">
              Um dos primeiros passos da RedeCT foi o lançamento, em julho de
              2018 de um edital de chamamento de capítulos de livros para a
              composição de uma primeira coletânea de trabalhos científicos
              acerca dos Povos Tradicionais (povos originários e comunidades
              tradicionais) e suas demandas. A publicação seguiu fluxo anual e
              em 2023 a RedeCT publicou o 12º volume, chegando a mais de 150
              trabalhos publicados.
            </p>
          </div>
        </section>

        <section className="space-y-14">
          <div className="flex items-center justify-center gap-4">
            <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
              <ClockIcon />
            </Badge>
            <h2 className="title-3">Linha do tempo da RedeCT</h2>
          </div>
          <div className="relative w-full space-y-7 sm:space-y-14">
            <Timeline defaultValue={timelineData.length}>
              {timelineData.map((item, index: number) => (
                <TimelineItem key={index} step={index + 1}>
                  <TimelineIndicator />
                  <TimelineHeader>
                    <TimelineDate>{item.date}</TimelineDate>
                    <TimelineTitle>{item.title}</TimelineTitle>
                  </TimelineHeader>
                  <TimelineContent>
                    <p className="text-justify text-muted-foreground">
                      {item.text}
                    </p>
                  </TimelineContent>
                  <TimelineSeparator />
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </section>

        <NavigationCard
          href="/quem-somos/apresentacao-e-historia/filiacao"
          variant="red"
        >
          <h2 className="title-3 flex items-center gap-2">
            <Users />
            Como se filiar à RedeCT?
          </h2>
        </NavigationCard>
      </main>
    </>
  )
}
