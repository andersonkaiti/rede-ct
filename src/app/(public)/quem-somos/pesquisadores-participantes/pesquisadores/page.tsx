import { BackArrow } from '@components/back-arrow'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import {
  getResearchers,
  type Seniority,
  seniorities,
  seniorityMapping,
} from '@mocks/researchers'
import { ResearcherCard } from './_components/researcher-card'

export default async function PesquisadoresParticipantesRedeCT() {
  const researchers = await getResearchers()

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-14 p-6 py-10 lg:p-28">
      <BackArrow />

      <header className="space-y-8">
        <h1 className="title-2">Pesquisadores Participantes da RedeCT</h1>
        <p className="text-muted-foreground">
          Conheça os pesquisadores participantes da Rede CT, organizados por
          categoria de atuação e experiência. Explore o perfil de cada
          pesquisador(a) para saber mais sobre sua trajetória, área de pesquisa
          e formas de contato.
        </p>
      </header>

      <Tabs className="items-center" defaultValue={seniorities[0]}>
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
          const filtered = researchers.filter(
            (researcher) => researcher.seniority === seniority
          )
          return (
            <TabsContent
              className="space-y-4"
              key={seniority}
              value={seniority}
            >
              {!researchers ||
              researchers.length === 0 ||
              filtered.length === 0 ? (
                <p className="p-4 text-center text-muted-foreground text-xs">
                  Nenhum pesquisador cadastrado nesta categoria.
                </p>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {filtered.map((researcher) => (
                    <ResearcherCard
                      key={`${researcher.user.first_name} ${researcher.user.last_name} ${researcher.user.email_addresses?.[0]?.email_address || ''}`}
                      researcher={researcher}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          )
        })}
      </Tabs>
    </main>
  )
}
