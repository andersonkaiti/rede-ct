import { MissaoValoresTabs } from "@components/missao-valores-tabs/missao-valores-tabs";
import {
  ArrowRightIcon,
  Handshake,
  Newspaper,
  Users,
  BookOpen,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/images/hero-bg.png"
          alt="RedeCT"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto grid h-full max-w-7xl px-4 py-8 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="col-span-6 place-self-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl xl:text-6xl">
              RedeCT
            </h1>
            <p className="mb-6 max-w-2xl text-lg font-light text-white md:text-xl lg:mb-8">
              Contribuindo para a melhoria contínua das produções científicas e
              das relações entre a academia e os povos tradicionais
            </p>
            <div className="flex gap-4">
              <Link
                href="/quem-somos/apresentacao-e-historia"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-center text-base font-medium text-white hover:bg-indigo-700"
              >
                Conheça a RedeCT
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/divisao-cientifica/congresso-cientifico-internacional"
                className="inline-flex items-center justify-center rounded-lg border border-white px-5 py-3 text-center text-base font-medium text-white hover:bg-white/10"
              >
                Participe dos Eventos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl gap-12.5 space-y-14 p-4 py-10 lg:p-25">
        {/* Apresentação Section */}
        <section className="space-y-8">
          <h1 className="title-1 text-center">
            Rede Internacional de Pesquisadores sobre Povos Originários e
            Comunidades Tradicionais - RedeCT
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl">
              <h3 className="mb-2 text-sm font-semibold text-indigo-600 uppercase">
                English
              </h3>
              <p className="text-gray-700">
                International Network of Researchers on Original Peoples and
                Traditional Communities
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl">
              <h3 className="mb-2 text-sm font-semibold text-indigo-600 uppercase">
                Español
              </h3>
              <p className="text-gray-700">
                Red Internacional de Investigadores sobre Pueblos Originarios y
                Comunidades Tradicionales
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl">
              <h3 className="mb-2 text-sm font-semibold text-indigo-600 uppercase">
                Français
              </h3>
              <p className="text-gray-700">
                Réseau international de chercheurs sur les peuples autochtones
                et les communautés traditionnelles
              </p>
            </div>
          </div>
        </section>

        {/* Breve Apresentação Section */}
        <section className="space-y-14">
          <h2 className="title-2 text-center">
            Uma breve apresentação da RedeCT
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-justify">
                A RedeCT é uma rede independente que reúne pesquisadores
                (professores, estudantes, povos tradicionais e demais
                interessados) que atuam academica e cientificamente em
                colaboração com os Povos Tradicionais (indígenas, quilombolas,
                caiçaras, ribeirinhos, povos de terreiro, faxinalenses,
                geraizeiros, pantaneiros, quebradeiras de coco babaçu, dentre
                outros).
              </p>
              <p className="text-justify">
                A RedeCT é mantida pela OSCIP Instituto de Pesquisas Amazônicas
                e de Povos Tradicionais (criada em 2002) e desenvolve ações como
                o webinário permanente, a publicação anual de seu
                Livro-coletânea de capítulos, o congresso científico
                internacional anual, o selo de qualidade em extensão
                universitária, dentre outras ações de convergência entre a
                Academia e os Povos Tradicionais.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/quem-somos/pesquisadores-participantes">
                <div className="rounded-lg bg-indigo-50 p-6 text-center">
                  <Users className="mx-auto mb-4 h-12 w-12 text-indigo-600" />
                  <h3 className="mb-2 text-lg font-semibold">Pesquisadores</h3>
                  <p className="text-sm text-gray-600">
                    Rede de colaboração internacional
                  </p>
                </div>
              </Link>
              <Link href="/quem-somos/periodico-e-revistas-parceiras">
                <div className="rounded-lg bg-indigo-50 p-6 text-center">
                  <BookOpen className="mx-auto mb-4 h-12 w-12 text-indigo-600" />
                  <h3 className="mb-2 text-lg font-semibold">Publicações</h3>
                  <p className="text-sm text-gray-600">
                    Livros e artigos científicos
                  </p>
                </div>
              </Link>
              <Link href="/quem-somos/congresso-cientifico-internacional">
                <div className="rounded-lg bg-indigo-50 p-6 text-center">
                  <Globe className="mx-auto mb-4 h-12 w-12 text-indigo-600" />
                  <h3 className="mb-2 text-lg font-semibold">Eventos</h3>
                  <p className="text-sm text-gray-600">
                    Congresso internacional anual
                  </p>
                </div>
              </Link>
              <Link href="/noticias">
                <div className="rounded-lg bg-indigo-50 p-6 text-center">
                  <Newspaper className="mx-auto mb-4 h-12 w-12 text-indigo-600" />
                  <h3 className="mb-2 text-lg font-semibold">Notícias</h3>
                  <p className="text-sm text-gray-600">
                    Acompanhe nossas atualizações
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Missão e Valores Section */}
        <section className="space-y-14">
          <h2 className="title-2 text-center">
            Missão, valores, objetivos e grandes desafios da RedeCT 🎯
          </h2>
          <MissaoValoresTabs />
        </section>

        {/* CTA Section */}
        <div className="grid gap-8 md:grid-cols-2">
          <Link href="/quem-somos/parceiros-e-financiadores">
            <section className="flex items-center justify-between rounded-md bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 p-10 text-white md:p-10">
              <h2 className="title-3 flex items-center gap-2">
                <Handshake />
                Parceiros e financiadores
              </h2>
              <div className="ml-auto">
                <ArrowRightIcon className="text-white" />
              </div>
            </section>
          </Link>
          <Link href="/noticias">
            <section className="flex items-center justify-between rounded-md bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 p-10 text-white md:p-10">
              <h2 className="title-3 flex items-center gap-2">
                <Newspaper />
                Últimas notícias
              </h2>
              <div className="ml-auto">
                <ArrowRightIcon className="text-white" />
              </div>
            </section>
          </Link>
        </div>
      </section>
    </main>
  );
}
