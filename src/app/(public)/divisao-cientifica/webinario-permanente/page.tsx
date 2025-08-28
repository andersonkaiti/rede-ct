import { Badge } from '@components/ui/badge'
import { Globe2 } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicWebinars = dynamic(() =>
  import('./_components/webnars').then((mod) => mod.Webinars)
)

export default function WebinarioPermanente() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <Globe2 className="!size-7" />
          </Badge>
          <h1 className="title-2">Webinário Permanente da RedeCT</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          O Webinário Permanente da RedeCT foi criado como espaço midiático de
          diálogo, apresentação e divulgação dos trabalhos (pesquisas, projetos,
          livros) dos Pesquisadores Filiados e outros convidados. O acesso é
          livre e gratuito pelo Canal do Youtube da RedeCT, programe-se,
          participe, prestigie, veja aqui a PROGRAMAÇÃO DOS PRÓXIMOS WEBINARIOS.
        </p>
      </header>

      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicWebinars />
      </Suspense>
    </main>
  )
}
