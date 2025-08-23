import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      <Image
        alt="RedeCT"
        className="object-cover"
        fill
        priority
        src="/images/hero-bg.png"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto grid h-full max-w-7xl px-4 py-8 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="col-span-6 place-self-center">
          <h1 className="mb-4 font-extrabold text-4xl text-white tracking-tight md:text-5xl xl:text-6xl">
            RedeCT
          </h1>
          <p className="mb-6 max-w-2xl font-light text-lg text-white md:text-xl lg:mb-8">
            Contribuindo para a melhoria contínua das produções científicas e
            das relações entre a academia e os povos tradicionais
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <Link
              className="group inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-center font-medium text-base text-white hover:bg-indigo-700"
              href="/quem-somos/apresentacao-e-historia"
            >
              Conheça a RedeCT
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-lg border border-white px-5 py-3 text-center font-medium text-base text-white hover:bg-white/10"
              href="/divisao-cientifica/congresso-cientifico-internacional"
            >
              Participe dos Eventos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
