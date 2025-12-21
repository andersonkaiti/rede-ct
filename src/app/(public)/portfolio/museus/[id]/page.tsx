import { BackArrow } from '@components/ui/back-arrow'
import { getMuseumById } from '@http/museums/get-museum-by-id'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../_components/page-container'
import { MuseumButton } from './_components/museum-button'
import { NotFound } from './_components/not-found'

interface IMuseumDetailsProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: IMuseumDetailsProps) {
  const { id } = await params

  const museum = await getMuseumById(id)

  return {
    title: museum?.name,
  }
}

export default async function MuseumDetails({ params }: IMuseumDetailsProps) {
  const { id } = await params

  const museum = await getMuseumById(id)

  if (!museum) {
    return <NotFound />
  }

  const formattedUpdatedAt = format(
    museum.updatedAt,
    "d 'de' MMMM 'de' yyyy 'às' HH:mm",
    { locale: ptBR },
  )

  const location = [museum.city, museum.state, museum.country]
    .filter(Boolean)
    .join(', ')

  return (
    <PageContainer>
      <BackArrow href="/portfolio/museus" />

      <PageHeader className="flex-col items-start gap-8">
        <h1 className="font-bold text-5xl tracking-tight">{museum.name}</h1>

        <time className="text-muted-foreground text-sm">
          Última atualização em {formattedUpdatedAt}
        </time>
      </PageHeader>

      <PageMain className="gap-10">
        {museum.logoUrl && (
          <div className="relative h-88 w-full overflow-hidden">
            <Image
              alt={museum.name}
              className="rounded-md object-cover"
              fill
              src={museum.logoUrl}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </div>
        )}

        <section className="space-y-10">
          <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
            {location && (
              <div className="space-y-1">
                <h2 className="text-muted-foreground">Localização</h2>
                <p>{location}</p>
              </div>
            )}

            {museum.email && (
              <div className="space-y-1">
                <h2 className="text-muted-foreground">E-mail</h2>
                <p>{museum.email}</p>
              </div>
            )}

            {museum.phone && (
              <div className="space-y-1">
                <h2 className="text-muted-foreground">Telefone</h2>
                <p>{museum.phone}</p>
              </div>
            )}

            {museum.address && (
              <div className="space-y-1">
                <h2 className="text-muted-foreground">Endereço</h2>
                <p>{museum.address}</p>
              </div>
            )}

            {museum.functioning && (
              <div className="space-y-1">
                <h2 className="text-muted-foreground">Funcionamento</h2>
                <p>{museum.functioning}</p>
              </div>
            )}
          </div>

          {museum.description && (
            <p className="whitespace-pre-wrap text-justify text-sm">
              {museum.description}
            </p>
          )}

          <MuseumButton url={museum.website} />
        </section>
      </PageMain>
    </PageContainer>
  )
}
