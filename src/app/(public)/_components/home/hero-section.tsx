import { CalendarDaysIcon } from '@components/icons/calendar-days'
import { Button } from '@components/ui/button'
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
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      <div className="relative z-10 mx-auto grid h-full max-w-7xl px-4 py-8 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="col-span-6 place-self-center">
          <h1 className="mb-4 font-bold text-4xl text-white tracking-tight md:text-5xl xl:text-6xl">
            RedeCT
          </h1>
          <p className="mb-6 max-w-2xl font-light text-lg text-white md:text-xl lg:mb-8">
            Contribuindo para a melhoria contínua das produções científicas e
            das relações entre a academia e os povos tradicionais
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <Button
              asChild
              className="group inline-flex items-center justify-center bg-white font-semibold text-black shadow-lg hover:bg-white/90"
              size="lg"
              variant="default"
            >
              <Link href="/quem-somos/apresentacao-e-historia">
                Conheça a RedeCT
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              className="inline-flex items-center justify-center border-white/30 bg-white/10 font-semibold text-white shadow-lg hover:bg-white/20 hover:text-white"
              size="lg"
              variant="outline"
            >
              <Link href="/divisao-cientifica/calendario-de-eventos">
                <CalendarDaysIcon />
                Participe dos Eventos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
