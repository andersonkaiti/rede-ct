import { EarthIcon } from '@components/icons/earth'
import { Badge } from '@components/ui/badge'
import { InternationalCongressCard } from './_components/international-congress'
import { RegionalCongressCard } from './_components/regional-congress'

export default function Congressos() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 px-4 py-8 lg:p-25">
      <header className="space-y-7">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <EarthIcon className="size-7" />
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
        <InternationalCongressCard />

        <RegionalCongressCard />
      </section>
    </section>
  )
}
