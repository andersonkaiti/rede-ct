import { Button } from '@components/ui/button'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-b from-primary/20 via-background to-background p-4 py-10 lg:p-25 dark:from-destructive/10">
      <div className="mx-auto max-w-(--breakpoint-sm) space-y-6 text-center">
        <span className="mb-4 inline-flex items-center justify-center rounded-full bg-destructive/10 p-4">
          <AlertTriangle className="h-12 w-12 animate-pulse text-destructive" />
        </span>
        <p className="font-semibold text-base text-primary">404</p>
        <h1 className="font-semibold text-4xl text-destructive drop-shadow sm:text-5xl">
          Página não encontrada
        </h1>
        <p className="font-light text-destructive-foreground text-lg sm:text-xl/8">
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <Button asChild variant="ghost">
            <Link href="/">Voltar para a página inicial</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
