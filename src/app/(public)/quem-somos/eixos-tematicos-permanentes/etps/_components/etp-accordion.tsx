import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/ui/accordion'
import { getEtps } from '@mocks/etps'
import { ETPCoordenation } from './etp-coordenation'
import { GTMembers } from './gt-members'

export async function EPTAccordion() {
  const etps = await getEtps()

  return (
    <Accordion collapsible type="single">
      {etps.map(({ name, description, members, text, gtMembers, gtText }) => (
        <AccordionItem key={name} value={name}>
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              <span className="title-3">{name}</span>
              <span className="font-medium text-base text-muted-foreground">
                {description}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-7">
            <p className="text-justify">{text}</p>

            <ETPCoordenation members={members} />

            <GTMembers gtMembers={gtMembers} />

            <h3 className="mb-2 font-semibold text-muted-foreground text-sm">
              Sobre o Grupo de Trabalho
            </h3>
            <p className="text-justify">{gtText}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
