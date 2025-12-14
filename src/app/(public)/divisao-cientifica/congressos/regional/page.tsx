import { BackArrow } from '@components/ui/back-arrow'
import { Badge } from '@components/ui/badge'
import { MapIcon } from 'lucide-react'
import { CongressList } from './_components/congress-list'

export default function CongressoRegional() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <BackArrow href="/divisao-cientifica/congressos" />

      <header className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <MapIcon className="size-7" />
          </Badge>
          <h1 className="title-2">Congresso Regional</h1>
        </div>
        <p className="text-muted-foreground text-sm">
          Participe do nosso Congresso Regional, um evento dedicado à troca de
          conhecimentos e experiências entre pesquisadores e profissionais
          regionais.
        </p>
      </header>

      <CongressList />
    </main>
  )
}
