import { HeroSection } from "@components/home/hero-section";
import { MissaoValoresTabs } from "@components/home/missao-valores-tabs";
import { NavigationCard } from "@components/navigation-card";
import {
  ArrowRightIcon,
  Handshake,
  Newspaper,
  Users,
  BookOpen,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      <main className="mx-auto flex max-w-7xl flex-col justify-center gap-2 space-y-14 p-4 py-10 sm:gap-12.5 lg:p-25">
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
                <div className="h-full rounded-lg bg-indigo-50 p-6 text-center transition-all hover:shadow-xl">
                  <Users className="mx-auto mb-4 h-12 w-12 text-indigo-600" />
                  <h3 className="mb-2 text-lg font-semibold">Pesquisadores</h3>
                  <p className="text-sm text-gray-600">
                    Rede de colaboração internacional
                  </p>
                </div>
              </Link>
              <Link href="/quem-somos/periodico-e-revistas-parceiras">
                <div className="h-full rounded-lg bg-indigo-50 p-6 text-center transition-all hover:shadow-xl">
                  <BookOpen className="mx-auto mb-4 h-12 w-12 text-indigo-600" />
                  <h3 className="mb-2 text-lg font-semibold">Publicações</h3>
                  <p className="text-sm text-gray-600">
                    Livros e artigos científicos
                  </p>
                </div>
              </Link>
              <Link href="/quem-somos/congresso-cientifico-internacional">
                <div className="rounded-lg bg-indigo-50 p-6 text-center transition-all hover:shadow-xl">
                  <Globe className="mx-auto mb-4 h-12 w-12 text-indigo-600" />
                  <h3 className="mb-2 text-lg font-semibold">Eventos</h3>
                  <p className="text-sm text-gray-600">
                    Congresso internacional anual
                  </p>
                </div>
              </Link>
              <Link href="/noticias">
                <div className="h-full rounded-lg bg-indigo-50 p-6 text-center transition-all hover:shadow-xl">
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
          <NavigationCard.BlueRoot href="/quem-somos/parceiros-e-financiadores">
            <h2 className="title-3 flex items-center gap-2">
              <Handshake />
              Parceiros e financiadores
            </h2>
            <div className="ml-auto">
              <ArrowRightIcon className="text-white" />
            </div>
          </NavigationCard.BlueRoot>
          <NavigationCard.BlueRoot href="/noticias">
            <h2 className="title-3 flex items-center gap-2">
              <Newspaper />
              Últimas notícias
            </h2>
            <div className="ml-auto">
              <ArrowRightIcon className="text-white" />
            </div>
          </NavigationCard.BlueRoot>
        </div>
      </main>
    </>
  );
}
