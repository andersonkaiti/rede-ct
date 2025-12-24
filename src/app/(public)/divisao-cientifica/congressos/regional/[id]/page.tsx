import { BackArrow } from '@components/ui/back-arrow'
import { Badge } from '@components/ui/badge'
import { HighlightedLink } from '@components/ui/highlighted-link'
import { Separator } from '@components/ui/separator'
import { ShareButton } from '@components/ui/share-button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@components/ui/tooltip'
import { getRegionalCongressById } from '@http/congress/regional/get-regional-congress-by-id'
import { formatDate } from '@utils/format-date'
import Image from 'next/image'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../../_components/page-container'
import { CongressButton } from './_components/congress-button'

interface ICongressDetailsProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: ICongressDetailsProps) {
  const { id } = await params

  const congress = await getRegionalCongressById(id)

  return {
    title: congress.title,
  }
}

export default async function CongressDetails({
  params,
}: ICongressDetailsProps) {
  const { id } = await params

  const congress = await getRegionalCongressById(id)

  const hasLinks =
    congress.congressLink ||
    congress.noticeUrl ||
    congress.scheduleUrl ||
    congress.programUrl ||
    congress.adminReportUrl ||
    congress.proceedingsUrl

  return (
    <PageContainer>
      <BackArrow href="/divisao-cientifica/congressos/regional" />

      <PageHeader className="flex-col items-start gap-8">
        <Badge className="whitespace-nowrap rounded-full bg-primary/20 px-4 py-1 font-semibold text-primary">
          {congress.edition}ª Edição
        </Badge>

        <h1 className="font-bold text-5xl">{congress.title}</h1>

        <div className="flex flex-col items-start gap-4 text-muted-foreground text-sm md:flex-row md:items-center">
          <time>
            {formatDate(String(congress.startDate))} a{' '}
            {formatDate(String(congress.endDate))}
          </time>

          {congress.location && <span>{congress.location}</span>}
        </div>

        <div className="flex w-full flex-col gap-2">
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <CongressButton congressLink={congress.congressLink} />

            <Separator
              orientation="vertical"
              className="hidden h-3! sm:block"
            />

            <ShareButton
              title={congress.title}
              text={congress.description || ''}
            />
          </div>

          <Separator />
        </div>
      </PageHeader>

      <PageMain className="gap-16">
        {congress.description && (
          <p className="whitespace-pre-wrap text-justify">
            {congress.description}
          </p>
        )}

        <section className="my-4 space-y-8">
          <h1 className="font-bold text-2xl">Documentos e Recursos</h1>

          {!hasLinks && (
            <p className="whitespace-pre-wrap text-justify">
              Nenhum documento cadastrado ainda.
            </p>
          )}

          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {congress.noticeUrl && (
              <HighlightedLink href={congress.noticeUrl}>
                Edital do congresso
              </HighlightedLink>
            )}

            {congress.scheduleUrl && (
              <HighlightedLink href={congress.scheduleUrl}>
                Cronograma
              </HighlightedLink>
            )}

            {congress.programUrl && (
              <HighlightedLink href={congress.programUrl}>
                Programação
              </HighlightedLink>
            )}

            {congress.adminReportUrl && (
              <HighlightedLink href={congress.adminReportUrl}>
                Relatório Administrativo
              </HighlightedLink>
            )}

            {congress.proceedingsUrl && (
              <HighlightedLink href={congress.proceedingsUrl}>
                Anais
              </HighlightedLink>
            )}
          </div>
        </section>

        <section className="my-4 space-y-8">
          <h1 className="font-bold text-2xl">Galeria de Fotos</h1>

          {congress.regionalCongressGalleryItems.length === 0 && (
            <p className="whitespace-pre-wrap text-justify">
              Nenhuma galeria cadastrada ainda.
            </p>
          )}

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {congress.regionalCongressGalleryItems.map((gallery) => (
              <Tooltip key={gallery.id}>
                <TooltipTrigger>
                  <div className="relative h-60 w-full overflow-hidden rounded-md">
                    <Image
                      src={gallery.imageUrl}
                      fill
                      className="object-cover"
                      alt={gallery.caption || gallery.id}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-80">
                  <p className="whitespace-pre-wrap text-justify">
                    {gallery.caption}
                  </p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </section>

        <section className="my-4 space-y-8">
          <h1 className="font-bold text-2xl">Nossas Parcerias</h1>

          {congress.regionalCongressPartners.length === 0 && (
            <p className="whitespace-pre-wrap text-justify">
              Nenhuma parceria cadastrada ainda.
            </p>
          )}

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {congress.regionalCongressPartners.map((partner) =>
              partner.logoUrl ? (
                <Tooltip key={partner.id}>
                  <TooltipTrigger>
                    <div className="relative h-60 w-full overflow-hidden rounded-md">
                      <Image
                        src={partner.logoUrl}
                        fill
                        className="object-cover"
                        alt={partner.name}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-80">
                    <p className="whitespace-pre-wrap text-justify">
                      {partner.name}
                    </p>
                  </TooltipContent>
                </Tooltip>
              ) : null,
            )}
          </div>
        </section>
      </PageMain>
    </PageContainer>
  )
}
