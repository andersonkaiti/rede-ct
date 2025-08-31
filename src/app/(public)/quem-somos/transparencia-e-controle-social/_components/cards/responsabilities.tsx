import { Card } from '@components/ui/card'

export function ResponsabilitiesCard() {
  return (
    <Card className="space-y-4 rounded-md bg-background p-8 text-justify">
      <h2 className="title-3">
        O Comitê Legitimador tem como responsabilidades:
      </h2>
      <ol className="space-y-4">
        <li className="flex items-start">
          <span className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-base text-primary">
            1
          </span>
          Referendar ou vetar a Carta Anual da RedeCT;
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-base text-primary">
            2
          </span>
          Vetar publicações científicas oriundas dos fluxos editorias da RedeCT
          a partir da observância de problemas éticos;
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-base text-primary">
            3
          </span>
          Levar à Coordenação Geral da RedeCT eventuais problemas ou questões de
          diversas natureza, solicitando providências;
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-base text-primary">
            4
          </span>
          Emitir recomendação de admissão ou veto ao ingresso de Membros
          Honorários na RedeCT;
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-base text-primary">
            5
          </span>
          Analisar e emitir parecer acerca de encaminhamentos feitos à esta
          instância pela Coordenação Geral da RedeCT.
        </li>
      </ol>
    </Card>
  )
}
