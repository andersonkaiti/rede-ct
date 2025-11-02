import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/ui/accordion'
import type { etpResearcherSchema, etpSchema } from '@http/etps/get-etps'
import type z from 'zod'
import { ETPCoordenation } from './etp-coordenation'
import { GTMembers } from './gt-members'

interface IETPAccordionItemProps {
  etp: z.infer<typeof etpSchema>
}

interface IETPResearcher extends z.infer<typeof etpResearcherSchema> {}

export function ETPAccordionItem({ etp }: IETPAccordionItemProps) {
  const coordenation: IETPResearcher[] = []

  if (etp.leader) {
    coordenation.push(etp.leader.researcher)
  }

  if (etp.deputyLeader) {
    coordenation.push(etp.deputyLeader.researcher)
  }

  if (etp.secretary) {
    coordenation.push(etp.secretary.researcher)
  }

  const coordenationUsers = coordenation.map(
    (coordenator) => coordenator
  ) satisfies IETPResearcher[]

  const workingGroup: IETPResearcher[] = [...coordenationUsers, ...etp.members]

  return (
    <AccordionItem key={etp.id} value={etp.code}>
      <AccordionTrigger>
        <div className="flex flex-col gap-1 text-left">
          <span className="title-3">{etp.code}</span>
          <span className="font-medium text-base text-muted-foreground">
            {etp.title}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="space-y-7">
        <p className="text-justify">{etp.description}</p>

        <ETPCoordenation members={coordenation} />

        <GTMembers gtMembers={workingGroup} />

        <h3 className="mb-2 font-semibold text-muted-foreground text-sm">
          Sobre o Grupo de Trabalho
        </h3>

        <p className="text-justify">{etp.notes}</p>
      </AccordionContent>
    </AccordionItem>
  )
}
