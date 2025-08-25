import Image from 'next/image'
import Links from './_components/links'
import { SocialMedia } from './_components/social-media'

export function Footer() {
  return (
    <footer className="bg-background text-background-foreground">
      <div className="mx-auto w-full max-w-screen-xl space-y-8 p-4 py-6 sm:space-y-20 lg:py-8">
        <div className="gap-16 space-y-10 md:flex md:justify-between">
          <div className="max-w-xs space-y-8">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <Image
                  alt="Rede CT"
                  className="object-cover invert dark:invert-0"
                  fill
                  src="/images/favicon.png"
                />
              </div>
              <h3 className="text-2xl">RedeCT</h3>
            </div>
            <h1 className="text-muted-foreground text-sm">
              RedeCT - Rede Internacional de Pesquisadores sobre Povos
              Originários e Comunidades Tradicionais
            </h1>
          </div>

          <div>
            <h2 className="mb-6 text-lg">Navegação</h2>
            <Links />
          </div>

          <div>
            <h2 className="mb-6 text-lg">Redes Sociais</h2>
            <SocialMedia />
          </div>
        </div>
        <div className="justify-center sm:flex sm:items-center">
          <span className="text-sm sm:text-center">© 2025 REDE CT</span>
        </div>
      </div>
    </footer>
  )
}
