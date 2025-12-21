import { AlertTriangle } from 'lucide-react'

export function NotFound() {
  return (
    <main className="bg-linear-to-b from-primary/20 via-background to-background p-4 py-10 lg:p-25 dark:from-destructive/10">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-(--breakpoint-sm) space-y-4 text-center">
          <span className="mb-4 inline-flex items-center justify-center rounded-full bg-destructive/10 p-4">
            <AlertTriangle className="h-12 w-12 animate-pulse text-destructive" />
          </span>
          <h2 className="font-semibold text-2xl text-destructive drop-shadow">
            Curso não encontrado
          </h2>
          <p className="font-light text-destructive-foreground text-lg">
            O curso que você procura não existe ou foi removido.
          </p>
        </div>
      </div>
    </main>
  )
}
