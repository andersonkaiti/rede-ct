import { BackArrow } from '@components/ui/back-arrow'
import { Badge } from '@components/ui/badge'
import { GraduationCap } from 'lucide-react'
import { CongressList } from './_components/congress-list'

export default function CongressoCientificoInternacional() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <BackArrow href="/divisao-cientifica/congressos" />

      <header className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <GraduationCap className="size-7" />
          </Badge>
          <h1 className="whitespace-normal font-bold text-2xl lg:text-4xl">
            Congresso Científico Internacional
          </h1>
        </div>
        <p className="text-muted-foreground text-sm">
          Participe do nosso Congresso Científico Internacional, um evento
          dedicado à troca de conhecimentos e experiências entre pesquisadores e
          profissionais de diversas áreas.
        </p>
      </header>

      <CongressList />
    </main>
  )
}
