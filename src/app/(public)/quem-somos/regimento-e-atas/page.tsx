import { FileTextIcon } from '@components/icons/file-text'
import { Badge } from '@components/ui/badge'
import { ListNumber } from '@components/ui/list-number'
import { InternalRegulations } from './_components/internal-regulations'
import { MeetingCalendar } from './_components/meeting-calendar'
import { Meetings } from './_components/meetings'
import { Minutes } from './_components/minutes'

export default function RegimentoEAtas() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <FileTextIcon />
          </Badge>
          <h1 className="title-2">Regimento, Convocações, Pautas e Atas</h1>
        </div>

        <p className="text-justify">
          Nesta seção do site, a{' '}
          <span className="font-semibold text-primary">RedeCT</span> mantém três
          áreas distintas:
        </p>

        <ul className="space-y-2">
          <li className="flex items-start">
            <ListNumber>1</ListNumber>
            <span>
              Seu <strong className="text-primary">Regimento Interno</strong>{' '}
              (atualizado e vigente);
            </span>
          </li>
          <li className="flex items-start">
            <ListNumber>2</ListNumber>
            <span>
              As <strong className="text-primary">convocações e pautas</strong>{' '}
              das reuniões e assembleias programadas;
            </span>
          </li>
          <li className="flex items-start">
            <ListNumber>3</ListNumber>
            <span>
              As <strong className="text-primary">atas</strong> das reuniões
              gerais e setoriais (por exemplo, das vice-coordenadorias ou dos
              GTs).
            </span>
          </li>
        </ul>
      </section>

      <InternalRegulations />

      <Meetings />

      <Minutes />

      <MeetingCalendar />
    </main>
  )
}
