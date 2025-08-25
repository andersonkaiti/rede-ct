import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { ArrowRight, Globe, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Congressos() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-25">
      <header className="space-y-7">
        <h1 className="title-2">Congressos da RedeCT</h1>
        <p className="text-muted-foreground">
          Explore nossos eventos científicos internacionais e regionais.
          Conecte-se com pesquisadores, compartilhe conhecimento e contribua
          para o avanço da ciência em povos originários e comunidades
          tradicionais.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <CardHeader className="relative space-y-2 text-white">
            <Globe className="!size-20 text-white" />
            <CardTitle className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-background/20 px-4 py-2 font-semibold text-sm">
              <span>Internacional</span>
            </CardTitle>
            <div className="-translate-y-16 absolute top-0 right-0 h-32 w-32 translate-x-16 rounded-full bg-background/10" />
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base text-white">
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
              <Button className="group w-full bg-white font-semibold text-indigo-500 hover:bg-white hover:text-indigo-500">
                Ver mais
                <ArrowRight className="!size-4 transition-all duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-red-600 text-white">
          <CardHeader className="relative space-y-2 text-white">
            <MapPin className="!size-20 text-white" />
            <CardTitle className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-background/20 px-4 py-2 font-semibold text-sm">
              <span>Regional</span>
            </CardTitle>
            <div className="-translate-y-16 absolute top-0 right-0 h-32 w-32 translate-x-16 rounded-full bg-background/10" />
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base text-white">
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
              <Button className="group w-full bg-white font-semibold text-primary hover:bg-white hover:text-primary">
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
