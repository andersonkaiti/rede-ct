import { MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#171717]">
      <div className="mx-auto w-full max-w-screen-xl space-y-8 p-4 py-6 sm:space-y-20 lg:py-8">
        <div className="gap-16 space-y-10 md:flex md:justify-between">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/favicon.png"
                  fill
                  className="object-cover"
                  alt="Rede CT"
                />
              </div>
              <h3 className="text-2xl text-white">RedeCT</h3>
            </div>
            <h1 className="text-sm text-[#9CA3AF]">
              RedeCT - Rede Internacional de Pesquisadores sobre Povos
              Originários e Comunidades Tradicionais
            </h1>
            <div className="space-y-2 text-white">
              <div className="flex gap-2">
                <Link
                  href="https://www.facebook.com/redect01/"
                  target="_blank"
                  className="flex items-center justify-center rounded-md p-1 transition-all duration-300 hover:bg-white/20"
                >
                  <div className="relative size-5">
                    <Image
                      src="/images/icons/facebook-brands.svg"
                      alt="Facebook"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="flex items-center justify-center rounded-md p-1 transition-all duration-300 hover:bg-white/20"
                >
                  <div className="relative size-5">
                    <Image
                      src="/images/icons/youtube-brands.svg"
                      alt="Youtube"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/redecomunidadestradicionais/"
                  target="_blank"
                  className="rounded-md p-1 transition-all duration-300 hover:bg-white/20"
                >
                  <div className="relative size-5">
                    <Image
                      src="/images/icons/instagram-brands.svg"
                      alt="Instagram"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <MailIcon className="h-4 w-4" />
                contato@redect.org
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              MAPA
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
              <ul className="space-y-4 text-gray-400">
                <li>
                  <Link
                    href="/"
                    target="_blank"
                    className="text-sm transition-all duration-300 hover:text-gray-200"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    target="_blank"
                    className="text-sm transition-all duration-300 hover:text-gray-200"
                  >
                    Apresentação, história e logomarca da RedeCT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    target="_blank"
                    className="text-sm transition-all duration-300 hover:text-gray-200"
                  >
                    Missão, valores e objetivos da RedeCT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    target="_blank"
                    className="text-sm transition-all duration-300 hover:text-gray-200"
                  >
                    Equipe voluntária de gestão
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    target="_blank"
                    className="text-sm transition-all duration-300 hover:text-gray-200"
                  >
                    Pesquisadores participantes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    target="_blank"
                    className="text-sm transition-all duration-300 hover:text-gray-200"
                  >
                    Eixos Temáticos Permanente (ETPs)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    target="_blank"
                    className="text-sm transition-all duration-300 hover:text-gray-200"
                  >
                    Regimento e atas
                  </Link>
                </li>
              </ul>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <Link
                    href="/"
                    target="_blank"
                    className="text-sm transition-all duration-300 hover:text-gray-200"
                  >
                    Parceiros e financiadores
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    target="_blank"
                    className="text-sm transition-all duration-300 hover:text-gray-200"
                  >
                    Controle Social e Transparência
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    target="_blank"
                    className="text-sm transition-all duration-300 hover:text-gray-200"
                  >
                    Instituto de Pesquisas Amazônicas e de Povos Tradicionais
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    target="_blank"
                    className="text-sm transition-all duration-300 hover:text-gray-200"
                  >
                    NOTÍCIAS
                  </Link>
                </li>
              </ul>
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
