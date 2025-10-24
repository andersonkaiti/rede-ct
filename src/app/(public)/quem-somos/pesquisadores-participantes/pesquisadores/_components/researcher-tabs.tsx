'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'

import {
  type Seniority,
  seniorities,
  seniorityMapping,
  useResearchers,
} from '../_hooks/use-researchers.hook'
import { LoadingSkeleton } from './loading-skeleton'
import { ResearcherCard } from './researcher-card'
import { ResearcherFilterInput } from './researcher-filter-input'

export function ResearcherTabs() {
  const { currentTab, filteredByName, isLoading, setTab } = useResearchers()

  const numberOfRows = filteredByName?.length

  return (
    <div className="space-y-8">
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <div className="w-full flex-1">
          <ResearcherFilterInput />
        </div>
        <span className="mt-1 text-right font-medium text-muted-foreground text-xs sm:mt-0 sm:text-left">
          {numberOfRows} resultado{numberOfRows === 1 ? '' : 's'}
        </span>
      </div>

      <Tabs
        className="items-center gap-8"
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

              {!isLoading && filteredByName && filteredByName?.length < 1 && (
                <span className="mt-4 flex py-4 text-muted-foreground text-sm">
                  Nenhum pesquisador cadastrado nesta categoria.
                </span>
              )}

              {filteredByName && filteredByName?.length > 0 && (
                <div className="grid gap-6 lg:grid-cols-2">
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
