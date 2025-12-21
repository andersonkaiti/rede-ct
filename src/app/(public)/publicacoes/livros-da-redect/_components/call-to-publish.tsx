import { Button } from '@components/ui/button'
import Link from 'next/link'

export function CallToPublish() {
  return (
    <section className="space-y-6 rounded-md bg-primary/20 p-6 text-center text-foreground md:p-10 dark:text-white">
      <h2 className="font-semibold text-3xl">
        Chamada para publicação do volume 14 (2025)
      </h2>
      <p className="leading-relaxed">
        O período de submissão para propostas de capítulos do volume 14 foi
        prorrogado até 31 de maio de 2025. O envio deve incluir o arquivo
        completo do capítulo (Word e PDF), conforme edital oficial. Dúvidas
        podem ser esclarecidas pelo e-mail{' '}
        <Link
          className="text-primary underline"
          href="mailto:livroredect@gmail.com"
        >
          livroredect@gmail.com
        </Link>
        .
      </p>
      <Button variant="outline">
        <Link
          href="https://onedrive.live.com/embed?cid=6afd3e4c750a5cf9&id=6AFD3E4C750A5CF9!s6451fa92e2c3450f879aa5dbc391cdda&resid=6AFD3E4C750A5CF9!s6451fa92e2c3450f879aa5dbc391cdda&ithint=file,pdf&embed=1&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy82YWZkM2U0Yzc1MGE1Y2Y5L0lRU0MtbEZrdy1JUFJZZWFwZHZEa2MzYUFlS2h1Tld4c0ZGRURJbjdKTnlrOHVj"
          rel="noopener noreferrer"
          target="_blank"
        >
          Acessar Edital do Volume 14 (2025)
        </Link>
      </Button>
    </section>
  )
}
