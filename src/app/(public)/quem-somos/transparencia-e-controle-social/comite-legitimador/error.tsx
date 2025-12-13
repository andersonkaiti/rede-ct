'use client'

import { AlertTriangle } from 'lucide-react'

interface IError {
  error: Error
}

export default function ErrorMessage({ error }: IError) {
  return (
    <main className="bg-linear-to-b from-primary/20 via-background to-background p-4 py-10 lg:p-25 dark:from-destructive/10">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-(--breakpoint-sm) space-y-4 text-center">
          <span className="mb-4 inline-flex items-center justify-center rounded-full bg-destructive/10 p-4">
            <AlertTriangle className="h-12 w-12 animate-pulse text-destructive" />
          </span>
          <h2 className="font-semibold text-2xl text-destructive drop-shadow">
            Ocorreu um erro ao buscar as informações do Comitê Legitimador
          </h2>
          <p className="font-light text-destructive-foreground text-lg">
            Não foi possível carregar as informações do Comitê Legitimador no
            momento. Por favor, tente novamente mais tarde.
          </p>

          <details className="mx-auto w-full max-w-md rounded border border-destructive/30 bg-destructive/5 p-3 text-left text-destructive-foreground text-sm">
            <summary className="cursor-pointer font-medium text-destructive">
              Detalhes do erro técnico
            </summary>
            <pre className="wrap-break-word mt-2 whitespace-pre-wrap text-destructive-foreground text-xs">
              {error.message}
            </pre>
          </details>
        </div>
      </div>
    </main>
  )
}
