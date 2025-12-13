'use client'

import { EarthIcon, type EarthIconHandle } from '@components/icons/earth'
import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

export function InternationalCongressCard() {
  const iconRef = useRef<EarthIconHandle>(null)

  return (
    <Card
      className="relative overflow-hidden rounded-2xl border-2 border-white/20 bg-linear-to-br from-blue-500 to-purple-600 text-white dark:border-white/30 dark:from-blue-900 dark:to-purple-900 dark:text-white"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <CardHeader className="relative space-y-2 text-white dark:text-white">
        <EarthIcon
          className="text-white dark:text-white"
          ref={iconRef}
          size={70}
        />
        <CardTitle className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-background/20 px-4 py-2 font-semibold text-sm dark:border-white/30 dark:bg-white/10 dark:text-white">
          <span>Internacional</span>
        </CardTitle>
        <div className="-translate-y-16 absolute top-0 right-0 h-32 w-32 translate-x-16 rounded-full bg-background/10 dark:bg-white/10" />
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-white dark:text-white">
          Participe dos nossos congressos científicos internacionais, onde
          pesquisadores de todo o mundo se reúnem para compartilhar descobertas,
          metodologias e experiências sobre povos originários e comunidades
          tradicionais.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          className="w-full"
          href="/divisao-cientifica/congressos/cientifico-internacional"
        >
          <Button className="group w-full bg-white font-semibold text-indigo-500 hover:bg-white hover:text-indigo-500 dark:bg-white dark:text-indigo-700 dark:hover:bg-white dark:hover:text-indigo-700">
            Ver mais
            <ArrowRight className="size-4 transition-all duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
