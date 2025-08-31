import { HighlightedLink } from '@components/highlighted-link'
import { FileTextIcon } from '@components/icons/file-text'

const ATAS = [
  {
    title: 'Ata da Assembleia Geral - 01/02/2024',
    url: '/docs/ata-assembleia-2024-02-01.pdf',
  },
  {
    title: 'Ata da Reunião de Coordenação - 15/03/2024',
    url: '/docs/ata-coordenacao-2024-03-15.pdf',
  },
]

export function Minutes() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-2">
        <FileTextIcon className="text-primary" />
        <h2 className="title-3 font-bold">Atas de reuniões</h2>
      </div>
      <div className="flex flex-col gap-8">
        <div className="w-full space-y-4">
          <h2 className="font-semibold">Atas Recentes</h2>
          <ul className="space-y-3">
            {ATAS.map((ata, index) => (
              <li key={ata.title + index}>
                <HighlightedLink href={ata.url}>{ata.title}</HighlightedLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <div className="font-bold text-base text-foreground">
            <span>Solicitação de Atas Anteriores</span>
          </div>
          <aside className="break-all rounded-md border border-primary/20 bg-primary/20 p-6">
            <span className="font-bold text-foreground">⚠️ Atenção:</span>
            &nbsp;Para solicitar atas de reuniões anteriores, envie um e-mail
            para&nbsp;
            <a
              className="font-medium underline hover:text-primary"
              href="mailto:redect.pesquisa@gmail.com"
            >
              redect.pesquisa@gmail.com
            </a>
            . Informe seu nome completo, vínculo com a RedeCT e o motivo da
            solicitação. O acesso às atas integrais pode ser restrito a membros
            filiados ou participantes de reuniões específicas.
          </aside>
        </div>
      </div>
    </section>
  )
}
