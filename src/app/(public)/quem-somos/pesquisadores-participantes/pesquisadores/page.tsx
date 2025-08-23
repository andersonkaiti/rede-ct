import { BackArrow } from '@components/back-arrow'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import { getResearcherCategories } from '@mocks/researchers'

export default async function Pesquisadores() {
  const researcherCategories = await getResearcherCategories()

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <BackArrow />
      <section className="space-y-14">
        <h1 className="title-1 text-center">Pesquisadores da RedeCT</h1>

        <Tabs defaultValue="Pesquisador Sênior">
          <TabsList className="w-full">
            {researcherCategories.map(({ type }, index: number) => (
              <TabsTrigger key={index} value={type}>
                {type}
              </TabsTrigger>
            ))}
          </TabsList>
          {researcherCategories.map(({ members, type }, index: number) =>
            members.map(({ name, info }) => (
              <TabsContent key={`${index}-${name}`} value={type}>
                <p className="text-gray-500">
                  <span className="font-bold text-black">{name}</span> {info}
                </p>
              </TabsContent>
            ))
          )}
        </Tabs>
      </section>
    </main>
  )
}
