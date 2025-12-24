import { BackArrow } from '@components/ui/back-arrow'
import { Separator } from '@components/ui/separator'
import { ShareButton } from '@components/ui/share-button'
import { UserProfileHoverCard } from '@components/ui/user-profile-hover-card'
import { getWebinarById } from '@http/webinars/get-webinar-by-id'
import { formatDate } from '@utils/format-date'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../_components/page-container'
import { WebinarButton } from './_components/webinar-button'

interface IMeetingDetailsProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: IMeetingDetailsProps) {
  const { id } = await params

  const webinar = await getWebinarById(id)

  return {
    title: webinar.title,
  }
}

export default async function MeetingDetails({ params }: IMeetingDetailsProps) {
  const { id } = await params

  const webinar = await getWebinarById(id)

  const formattedDate = format(
    webinar.scheduledAt,
    "d 'de' MMMM 'de' yyyy 'às' HH:mm",
    { locale: ptBR },
  )

  return (
    <PageContainer>
      <BackArrow href="/divisao-cientifica/webinario-permanente" />

      <PageHeader className="flex-col items-start gap-8">
        <h1 className="font-bold text-5xl tracking-tight">{webinar.title}</h1>

        <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <time className="text-muted-foreground text-sm">
            Última atualização em {formatDate(webinar.updatedAt)}
          </time>

          <ShareButton title={webinar.title} text={webinar.title} />
        </div>
      </PageHeader>

      <PageMain className="gap-10">
        {webinar.thumbnailUrl && (
          <div className="relative h-88 w-full overflow-hidden">
            <Image
              alt={webinar.title}
              className="rounded-md object-cover"
              fill
              src={webinar.thumbnailUrl}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </div>
        )}

        <div className="mt-4 space-y-2">
          {webinar.guests && webinar.guests.length > 0 && (
            <section className="space-y-2">
              <h2 className="flex items-center text-muted-foreground">
                Convidados
              </h2>

              <div className="flex flex-wrap gap-4">
                {webinar.guests.map((guest) => (
                  <UserProfileHoverCard key={guest.id} user={guest} />
                ))}
              </div>
            </section>
          )}

          <Separator />
        </div>

        <section className="space-y-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <h2 className="text-muted-foreground">Data</h2>
              <p>{formattedDate}</p>
            </div>
          </div>

          {webinar.description && (
            <p className="whitespace-pre-wrap text-justify">
              {webinar.description}
            </p>
          )}

          <WebinarButton webinarLink={webinar.webinarLink} />
        </section>
      </PageMain>
    </PageContainer>
  )
}
