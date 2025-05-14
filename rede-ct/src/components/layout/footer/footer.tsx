import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#171717]">
      <div className="mx-auto w-full max-w-screen-xl space-y-8 p-4 py-6 sm:space-y-20 lg:py-8">
        <div className="gap-8 space-y-10 md:flex md:justify-between">
          <div className="space-y-8">
            <div className="relative h-10 w-10">
              <Image
                src="/images/favicon.png"
                fill
                className="object-cover"
                alt="Rede CT"
              />
            </div>
            <h1 className="text-[#9CA3AF]">
              RedeCT - Rede Internacional de Pesquisadores sobre Povos
              Originários e Comunidades Tradicionais
            </h1>
            <div className="flex gap-2">
              <Facebook className="text-[#9CA3AF]" size={25} height={25} />
              <Youtube className="text-[#9CA3AF]" size={25} height={25} />
              <Instagram className="text-[#9CA3AF]" size={25} height={25} />
            </div>
          </div>
          <div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                MAPA
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <Link href="/" target="_blank" className="hover:underline">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank" className="hover:underline">
                      Apresentação, história e logomarca da RedeCT
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank" className="hover:underline">
                      Missão, valores e objetivos da RedeCT
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank" className="hover:underline">
                      Equipe voluntária de gestão
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank" className="hover:underline">
                      Pesquisadores participantes
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank" className="hover:underline">
                      Eixos Temáticos Permanente (ETPs)
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank" className="hover:underline">
                      Regimento e atas
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <Link href="/" target="_blank" className="hover:underline">
                      Parceiros e financiadores
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank" className="hover:underline">
                      Controle Social e Transparência
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank" className="hover:underline">
                      Instituto de Pesquisas Amazônicas e de Povos Tradicionais
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank" className="hover:underline">
                      NOTÍCIAS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center sm:flex sm:items-center">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2025 REDE CT
          </span>
        </div>
      </div>
    </footer>
  );
}
