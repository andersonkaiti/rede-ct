import { FileTextIcon } from '@components/icons/file-text'
import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import Link from 'next/link'

const REGIMENTO_URL = '/docs/Regimento-Interno-RedeCT-2024.pdf'

export function InternalRegulations() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <FileTextIcon className="text-primary" />
        <h2 className="title-3 font-bold">Regimento Interno da RedeCT</h2>
      </div>
      <p>
        Esta é a <strong className="text-primary">1ª versão</strong> (já válida)
        do Regimento Interno da RedeCT, publicada em{' '}
        <strong className="text-primary">19/04/2024</strong>{' '}
        <Badge className="rounded-full border border-primary/40 bg-primary/20 text-primary">
          Dia dos Povos Indígenas do Brasil
        </Badge>
        .
      </p>
      <p>
        Durante 30 dias, a coordenação da RedeCT receberá sugestões de ajustes
        pelo e-mail{' '}
        <a
          className="font-medium underline hover:text-primary"
          href="mailto:redect.pesquisa@gmail.com"
        >
          redect.pesquisa@gmail.com
        </a>
        . Após esta data será publicada a versão com as pequenas correções
        sugeridas. Mas, desde 19/04/2024, este Regimento já é válido e deve ser
        seguido pelos Pesquisadores Filiados da RedeCT.
      </p>
      <div className="flex justify-center">
        <Button asChild size="lg" variant="outline">
          <Link
            download
            href={REGIMENTO_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FileTextIcon />
            Baixar Regimento Interno (PDF)
          </Link>
        </Button>
      </div>
    </section>
  )
}
