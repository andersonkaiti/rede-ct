import { BackArrow } from '@components/ui/back-arrow'
import { Badge } from '@components/ui/badge'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import { HighlightedLink } from '@components/ui/highlighted-link'
import { Separator } from '@components/ui/separator'
import { getInternationalScientificCongressById } from '@http/congress/international-scientific/get-international-scientific-congress-by-id'
import { formatDate } from '@utils/format-date'
import { ChevronUp } from 'lucide-react'
import Image from 'next/image'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../../_components/page-container'
import { CongressButton } from './_components/congress-button'
import { NotFound } from './_components/not-found'
import { ShareButton } from './_components/share-button'

interface ICongressDetailsProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: ICongressDetailsProps) {
  const { id } = await params

  const congress = await getInternationalScientificCongressById(id)

  return {
    title: congress?.title,
  }
}

export default async function CongressDetails({
  params,
}: ICongressDetailsProps) {
  const { id } = await params

  const congress = await getInternationalScientificCongressById(id)

  if (!congress) {
    return <NotFound />
  }

  const hasLinks =
    congress.congressLink ||
    congress.noticeUrl ||
    congress.scheduleUrl ||
    congress.programUrl ||
    congress.adminReportUrl ||
    congress.proceedingsUrl

  return (
    <PageContainer>
      <BackArrow href="/quem-somos/reunioes-e-atas" />

      <PageHeader className="flex-col items-start">
        <Badge className="whitespace-nowrap rounded-full bg-primary/20 px-4 py-1 font-semibold text-primary">
          {congress.edition}ª Edição
        </Badge>

        <h1 className="mt-4 font-bold text-5xl">{congress.title}</h1>
      </PageHeader>

      <div className="flex flex-col items-start gap-4 text-muted-foreground md:flex-row md:items-center">
        <time>
          {formatDate(String(congress.startDate))} a{' '}
          {formatDate(String(congress.endDate))}
        </time>

        {congress.location && <span>{congress.location}</span>}
      </div>

      <div className="flex flex-col items-center gap-2 md:flex-row">
        <CongressButton congressLink={congress.congressLink} />

        <ShareButton congress={congress} />
      </div>

      <Separator />

      <PageMain className="gap-8">
        {congress.description && (
          <section className="my-4 space-y-8">
            <h1 className="font-bold text-2xl">Descrição</h1>

            <p className="whitespace-pre-wrap text-justify">
              {congress.description}
            </p>
          </section>
        )}

        <section className="my-4 space-y-8">
          <h1 className="font-bold text-2xl">Documentos e Recursos</h1>

          {!hasLinks && (
            <p className="whitespace-pre-wrap text-justify">
              Nenhum documento cadastrado ainda.
            </p>
          )}

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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

          {congress.galleries.length === 0 && (
            <p className="whitespace-pre-wrap text-justify">
              Nenhuma galeria cadastrada ainda.
            </p>
          )}

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {congress.galleries.map((gallery) => (
              <div className="space-y-2" key={gallery.id}>
                <div className="relative h-60 w-full overflow-hidden rounded-md">
                  <Image
                    src={gallery.imageUrl}
                    fill
                    className="object-cover"
                    alt={gallery.caption || gallery.id}
                  />
                </div>

                <Collapsible>
                  <CollapsibleTrigger className="group flex w-full cursor-pointer items-center justify-between">
                    <span>Legenda</span>
                    <ChevronUp className="size-4 transition-transform group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="whitespace-pre-wrap text-justify">
                      {gallery.caption}
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}
          </div>
        </section>

        <section className="my-4 space-y-8">
          <h1 className="font-bold text-2xl">Nossas Parcerias</h1>

          {congress.partners.length === 0 && (
            <p className="whitespace-pre-wrap text-justify">
              Nenhuma parceria cadastrada ainda.
            </p>
          )}

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {congress.partners.map((partner) => (
              <div className="space-y-2" key={partner.id}>
                <div className="relative h-60 w-full overflow-hidden rounded-md">
                  <Image
                    src={partner.logoUrl}
                    fill
                    className="object-cover"
                    alt={partner.name}
                  />
                </div>

                <p className="whitespace-pre-wrap text-justify">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </PageMain>
    </PageContainer>
  )
}
