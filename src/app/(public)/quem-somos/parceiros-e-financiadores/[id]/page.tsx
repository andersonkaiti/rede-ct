import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { BackArrow } from '@components/ui/back-arrow'
import { getPartnerById } from '@http/partners/get-partner-by-id'
import { getInitials } from '@utils/get-initials'
import { PageContainer, PageMain } from '../../../_components/page-container'
import { MeetingButton } from '../../reunioes-e-atas/[id]/_components/meeting-button'

interface IMeetingDetailsProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: IMeetingDetailsProps) {
  const { id } = await params

  const partner = await getPartnerById(id)

  return {
    title: partner.name,
  }
}

export default async function PartnerDetails({ params }: IMeetingDetailsProps) {
  const { id } = await params

  const partner = await getPartnerById(id)

  const formattedDate = partner.since.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <PageContainer>
      <BackArrow href="/quem-somos/parceiros-e-financiadores" />

      <PageMain className="flex flex-col items-center gap-8 md:flex-row">
        <Avatar className="size-30 shadow-lg sm:size-50">
          <AvatarImage alt={partner.name} src={partner.logoUrl || undefined} />
          <AvatarFallback className="font-semibold text-2xl">
            {getInitials(partner.name)}
          </AvatarFallback>
        </Avatar>

        <div className="w-full space-y-8">
          <div className="space-y-1">
            <h1 className="text-balance font-semibold text-2xl">
              {partner.name}
            </h1>

            <p className="text-muted-foreground text-xs capitalize">
              {partner.category}
            </p>
          </div>

          <time className="block text-muted-foreground text-sm">
            Parceria desde {formattedDate}
          </time>

          <p className="whitespace-pre-wrap text-justify">
            {partner.description}
          </p>

          {partner.websiteUrl && (
            <MeetingButton meetingLink={partner.websiteUrl} />
          )}
        </div>
      </PageMain>
    </PageContainer>
  )
}
