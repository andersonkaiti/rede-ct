'use client'

import { Accordion } from '@components/ui/accordion'
import { getEtps } from '@http/etps/get-etps'
import { useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'
import { ETPAccordionItem } from './etp-accordion-item'
import { ETPFilterInput } from './etp-filter-input'
import { LoadingSkeleton } from './loading-skeleton'

export function EPTAccordion() {
  const [filter] = useQueryState('filter')

  const { data, isLoading } = useQuery({
    queryKey: ['etps'],
    queryFn: async () => await getEtps({}),
  })

  const filteredETPs = data?.etps.filter((etp) =>
    filter
      ? Object.entries(etp).some(
          ([, value]) =>
            typeof value === 'string' &&
            value.toLowerCase().includes(filter.toLowerCase())
        )
      : true
  )

  return (
    <div className="space-y-2">
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <div className="w-full flex-1">
          <ETPFilterInput />
        </div>
        <span className="mt-1 text-right font-medium text-muted-foreground text-xs sm:mt-0 sm:text-left">
          {filteredETPs?.length} resultado
          {filteredETPs?.length === 1 ? '' : 's'}
        </span>
      </div>

      {isLoading && <LoadingSkeleton />}

      {!isLoading && filteredETPs?.length === 0 && (
        <span className="mt-4 flex py-4 text-muted-foreground text-sm">
          Nenhum ETP foi cadastrado ainda.
        </span>
      )}

      <Accordion collapsible type="single">
        {filteredETPs?.map((etp) => (
          <ETPAccordionItem etp={etp} key={etp.id} />
        ))}
      </Accordion>
    </div>
  )
}
