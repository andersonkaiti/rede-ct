import Image from "next/image";

import Links from "./_components/links";
import { SocialMedia } from "./_components/social-media";

export function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="mx-auto w-full max-w-screen-xl space-y-8 p-4 py-6 sm:space-y-20 lg:py-8">
        <div className="gap-16 space-y-10 md:flex md:justify-between">
          <div className="max-w-xs space-y-8">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/favicon.png"
                  fill
                  className="object-cover"
                  alt="Rede CT"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">RedeCT</h3>
            </div>
            <h1 className="text-sm text-white">
              RedeCT - Rede Internacional de Pesquisadores sobre Povos
              Originários e Comunidades Tradicionais
            </h1>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-semibold uppercase">Navegação</h2>
            <Links />
          </div>
          <div>
            <h2 className="mb-6 text-lg font-semibold uppercase">
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
  );
}
