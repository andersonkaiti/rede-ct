'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import {
  getResearchers,
  seniorities,
  seniorityMapping,
  type Seniority,
} from '@mocks/researchers/researchers'
import { useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'
import { LoadingSkeleton } from './loading-skeleton'
import { ResearcherCard } from './researcher-card'
import { ResearcherFilterInput } from './researcher-filter-input'

export function ResearcherTabs() {
  const [nome] = useQueryState('nome')
  const [tab, setTab] = useQueryState('tab')

  const { data: researchers, isLoading } = useQuery({
    queryKey: ['researchers'],
    queryFn: getResearchers,
  })

  const currentTab =
    tab && seniorities.includes(tab as Seniority)
      ? (tab as Seniority)
      : seniorities[0]

  const filteredByName = researchers?.filter((researcher) =>
    nome
      ? researcher.user.name.toLowerCase().includes(nome.toLowerCase())
      : true
  )

  const hasNoResults = filteredByName?.length && filteredByName?.length < 1

  const shouldShowResults = !(isLoading || hasNoResults)

  const numberOfRows = filteredByName?.length

  return (
    <div className="space-y-2">
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <div className="w-full flex-1">
          <ResearcherFilterInput />
        </div>
        <span className="mt-1 text-right font-medium text-muted-foreground text-xs sm:mt-0 sm:text-left">
          {numberOfRows} resultado{numberOfRows === 1 ? '' : 's'}
        </span>
      </div>

      <Tabs
        className="items-center"
        defaultValue={currentTab}
        onValueChange={setTab}
      >
        <TabsList className="flex w-full flex-col gap-1 bg-transparent sm:flex-row">
          {seniorities.map((seniority) => (
            <TabsTrigger
              className="w-full rounded-full border border-background data-[state=active]:border-border data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-none"
              key={seniority}
              value={seniority}
            >
              {seniorityMapping[seniority as Seniority] || seniority}
            </TabsTrigger>
          ))}
        </TabsList>

        {seniorities.map((seniority) => {
          const filteredBySeniority = filteredByName?.filter(
            (researcher) => researcher.seniority === seniority
          )

          return (
            <TabsContent
              className="w-full space-y-4"
              key={seniority}
              value={seniority}
            >
              {isLoading && <LoadingSkeleton />}

              {!isLoading && hasNoResults && (
                <span className="mt-4 flex py-4 text-muted-foreground text-sm">
                  Nenhum pesquisador cadastrado nesta categoria.
                </span>
              )}

              {shouldShowResults && (
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {filteredBySeniority?.map((researcher) => (
                    <ResearcherCard
                      key={`${researcher.user.name} ${researcher.user.emailAddress}`}
                      researcher={researcher}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}
