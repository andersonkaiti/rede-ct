import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { ArrowRight, Globe, GlobeIcon, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Congressos() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 px-4 py-8 lg:p-25">
      <header className="space-y-7">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <GlobeIcon className="!size-7" />
          </Badge>
          <h1 className="title-2">Congressos da RedeCT</h1>
        </div>
        <p className="text-muted-foreground">
          Explore nossos eventos científicos internacionais e regionais.
          Conecte-se com pesquisadores, compartilhe conhecimento e contribua
          para o avanço da ciência em povos originários e comunidades
          tradicionais.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="relative overflow-hidden rounded-2xl border-2 border-white/20 bg-gradient-to-br from-blue-500 to-purple-600 text-white dark:border-white/30 dark:from-blue-900 dark:to-purple-900 dark:text-white">
          <CardHeader className="relative space-y-2 text-white dark:text-white">
            <Globe className="!size-20 text-white dark:text-white" />
            <CardTitle className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-background/20 px-4 py-2 font-semibold text-sm dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span>Internacional</span>
            </CardTitle>
            <div className="-translate-y-16 absolute top-0 right-0 h-32 w-32 translate-x-16 rounded-full bg-background/10 dark:bg-white/10" />
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base text-white dark:text-white">
              Participe dos nossos congressos científicos internacionais, onde
              pesquisadores de todo o mundo se reúnem para compartilhar
              descobertas, metodologias e experiências sobre povos originários e
              comunidades tradicionais.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link
              className="w-full"
              href="/divisao-cientifica/congressos/cientifico-internacional"
            >
              <Button className="group w-full bg-white font-semibold text-indigo-500 hover:bg-white hover:text-indigo-500 dark:bg-white dark:text-indigo-700 dark:hover:bg-white dark:hover:text-indigo-700">
                Ver mais
                <ArrowRight className="!size-4 transition-all duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-red-800 text-white dark:from-primary dark:to-red-950 dark:text-white">
          <CardHeader className="relative space-y-2 text-white dark:text-white">
            <MapPin className="!size-20 text-white dark:text-white" />
            <CardTitle className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-background/20 px-4 py-2 font-semibold text-sm dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span>Regional</span>
            </CardTitle>
            <div className="-translate-y-16 absolute top-0 right-0 h-32 w-32 translate-x-16 rounded-full bg-background/10 dark:bg-white/10" />
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base text-white dark:text-white">
              Participe dos nossos congressos científicos internacionais, onde
              pesquisadores de todo o mundo se reúnem para compartilhar
              descobertas, metodologias e experiências sobre povos originários e
              comunidades tradicionais.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link
              className="w-full"
              href="/divisao-cientifica/congressos/regional"
            >
              <Button className="group w-full bg-white font-semibold text-primary hover:bg-white hover:text-primary dark:bg-white dark:text-primary dark:hover:bg-white dark:hover:text-primary">
                Ver mais
                <ArrowRight className="!size-4 transition-all duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </section>
    </section>
  )
}
