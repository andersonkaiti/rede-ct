'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/ui/accordion'
import { getEtps } from '@mocks/etps'
import { useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'
import { ETPCoordenation } from './etp-coordenation'
import { ETPFilterInput } from './etp-filter-input'
import { GTMembers } from './gt-members'
import { LoadingSkeleton } from './loading-skeleton'

export function EPTAccordion() {
  const [filter] = useQueryState('filter')

  const { data: etps = [], isLoading } = useQuery({
    queryKey: ['etps'],
    queryFn: getEtps,
  })

  const filteredETPs = etps.filter((etp) =>
    filter
      ? Object.entries(etp).some(
          ([, value]) =>
            typeof value === 'string' &&
            value.toLowerCase().includes(filter.toLowerCase())
        )
      : true
  )

  const hasNoResults = filteredETPs.length < 1

  const numberOfRows = filteredETPs.length

  return (
    <div className="space-y-2">
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <div className="w-full flex-1">
          <ETPFilterInput />
        </div>
        <span className="mt-1 text-right font-medium text-muted-foreground text-xs sm:mt-0 sm:text-left">
          {numberOfRows} resultado{numberOfRows === 1 ? '' : 's'}
        </span>
      </div>

      {isLoading && <LoadingSkeleton />}

      {!isLoading && hasNoResults && (
        <span className="mt-4 flex py-4 text-muted-foreground text-sm">
          Nenhum ETP foi cadastrado ainda.
        </span>
      )}

      <Accordion collapsible type="single">
        {filteredETPs.map(
          ({
            code,
            description,
            gtText,
            id,
            members,
            text,
            title,
            gtMembers,
          }) => (
            <AccordionItem key={id} value={code}>
              <AccordionTrigger>
                <div className="flex flex-col gap-1 text-left">
                  <span className="title-3">{title}</span>
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
          )
        )}
      </Accordion>
    </div>
  )
}
