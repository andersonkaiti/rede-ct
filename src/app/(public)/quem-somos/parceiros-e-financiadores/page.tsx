import { Badge } from '@components/ui/badge'
import { getPartnerships } from '@mocks/partnerships'
import { Users } from 'lucide-react'
import { Partnership } from './_components/partnetship'

export default async function ParceirosEFinanciadores() {
  const partnerships = await getPartnerships()

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <Users className="!size-7" />
          </Badge>
          <h1 className="title-2">PARCERIAS INSTITUCIONAIS E FINANCIAMENTOS</h1>
        </div>
        <p className="text-justify text-muted-foreground">
          Nesta seção, a RedeCT apresenta cada um de seus Parceiros
          Institucionais, descreve quando e como a parceria foi estabelecida e
          os resultados alcançados.
        </p>
      </section>

      <section className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {partnerships.map((partnership, index: number) => (
          <Partnership key={index} partnership={partnership} />
        ))}
      </section>

      {/* <NavigationCard href="/contato" variant="red">
        <div className="flex flex-col gap-4">
          <h2 className="title-3 flex items-center gap-2">
            <Handshake />
            Interessado em ser um parceiro?
          </h2>
          <p>
            Entre em contato conosco para saber mais sobre como podemos
            colaborar para o sucesso da RedeCT.
          </p>
        </div>
      </NavigationCard> */}
    </main>
  )
}
