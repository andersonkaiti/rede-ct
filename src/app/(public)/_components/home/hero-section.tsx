import { CalendarDaysIcon } from '@components/icons/calendar-days'
import { Button } from '@components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <div className="relative mx-auto grid h-full gap-8 overflow-hidden px-4 py-8 pt-16 lg:pt-48 lg:pb-16">
      <div
        aria-hidden
        className="-translate-x-1/2 pointer-events-none absolute top-0 left-1/2 z-0 hidden h-48 w-full dark:flex"
        style={{
          background:
            'radial-gradient(ellipse 60% 100% at 50% 0%, oklch(0.637 0.237 25.331 / 0.25) 0%, transparent 80%)',
        }}
      />

      <h1 className="text-center font-bold text-4xl text-foreground tracking-wide md:text-5xl xl:text-6xl">
        RedeCT
      </h1>

      <p className="text-balance text-center font-light text-foreground text-lg md:text-xl">
        Contribuindo para a melhoria contínua das produções científicas e das
        relações entre a academia e os povos tradicionais.
      </p>

      <div className="flex flex-col justify-center gap-4 md:flex-row">
        <Button
          asChild
          className="group inline-flex items-center justify-center bg-black font-semibold text-white shadow-lg hover:bg-black dark:bg-white dark:text-black"
          size="lg"
        >
          <Link href="/quem-somos/apresentacao-e-historia">
            Conheça a RedeCT
            <ArrowRightIcon className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="ghost">
          <Link href="/divisao-cientifica/calendario-de-eventos">
            <CalendarDaysIcon />
            Participe dos Eventos
          </Link>
        </Button>
      </div>
    </div>
  )
}
