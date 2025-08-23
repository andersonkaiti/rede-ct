import Image from 'next/image'

import Links from './_components/links'
import { SocialMedia } from './_components/social-media'

export function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="mx-auto w-full max-w-screen-xl space-y-8 p-4 py-6 sm:space-y-20 lg:py-8">
        <div className="gap-16 space-y-10 md:flex md:justify-between">
          <div className="max-w-xs space-y-8">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <Image
                  alt="Rede CT"
                  className="object-cover"
                  fill
                  src="/images/favicon.png"
                />
              </div>
              <h3 className="font-semibold text-2xl text-white">RedeCT</h3>
            </div>
            <h1 className="text-sm text-white">
              RedeCT - Rede Internacional de Pesquisadores sobre Povos
              Originários e Comunidades Tradicionais
            </h1>
          </div>
          <div>
            <h2 className="mb-6 font-semibold text-lg uppercase">Navegação</h2>
            <Links />
          </div>
          <div>
            <h2 className="mb-6 font-semibold text-lg uppercase">
              Redes Sociais
            </h2>
            <SocialMedia />
          </div>
        </div>
        <div className="justify-center sm:flex sm:items-center">
          <span className="text-sm text-white sm:text-center">
            © 2025 REDE CT
          </span>
        </div>
      </div>
    </footer>
  )
}
