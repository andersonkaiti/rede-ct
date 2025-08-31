'use client'

import { MapPinIcon, type MapPinIconHandle } from '@components/icons/map-pin'
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

export function RegionalCongressCard() {
  const iconRef = useRef<MapPinIconHandle>(null)

  return (
    <Card
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-red-800 text-white dark:from-primary dark:to-red-950 dark:text-white"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <CardHeader className="relative space-y-2 text-white dark:text-white">
        <MapPinIcon
          className="!size-20 text-white dark:text-white"
          ref={iconRef}
          size={70}
        />
        <CardTitle className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-background/20 px-4 py-2 font-semibold text-sm dark:border-white/30 dark:bg-white/10 dark:text-white">
          <span>Regional</span>
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
        <Link className="w-full" href="/divisao-cientifica/congressos/regional">
          <Button className="group w-full bg-white font-semibold text-primary hover:bg-white hover:text-primary dark:bg-white dark:text-primary dark:hover:bg-white dark:hover:text-primary">
            Ver mais
            <ArrowRight className="!size-4 transition-all duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
