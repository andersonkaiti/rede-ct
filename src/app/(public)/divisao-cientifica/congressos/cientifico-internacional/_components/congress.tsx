import { HighlightedLink } from '@components/highlighted-link'
import { format } from 'date-fns'
import { CongressGalleryImage } from './congress-gallery-image'

interface ICongressProps {
  congress: {
    id: string
    title: string
    edition: number
    startDate: string
    endDate: string
    description: string | null
    location: string | null
    congressLink: string | null
    noticeUrl: string | null
    scheduleUrl: string | null
    programUrl: string | null
    adminReportUrl: string | null
    proceedingsUrl: string | null
    createdAt: string
    updatedAt: string
    partners: {
      id: string
      name: string
      logoUrl: string
      congressId: string
    }[]
    galleries: {
      id: string
      imageUrl: string
      caption: string | null
      congressId: string
    }[]
  }
}

export function Congress({ congress }: ICongressProps) {
  return (
    <div className="flex-1 space-y-16 rounded-md text-justify text-muted-foreground">
      <header className="space-y-6 text-center">
        <h2 className="font-bold text-2xl md:text-3xl">
          {congress.edition}º Congresso Científico Internacional da RedeCT
        </h2>

        <h3 className="text-balance font-normal text-lg">{congress.title}</h3>

        {congress.location && (
          <h3 className="font-medium text-lg">
            <span>{congress.location}</span>
          </h3>
        )}

        <h4 className="font-medium text-base">
          {format(congress.startDate, 'dd/MM/yyyy')}
        </h4>
      </header>

      <div className="space-y-4 text-justify">
        <p className="text-justify">{congress.description}</p>
      </div>

      <div className="grid grid-cols-1 flex-wrap items-center justify-center gap-4 pt-4 md:grid-cols-2 lg:grid-cols-3">
        {congress.congressLink && (
          <HighlightedLink href={congress.congressLink}>
            Link do congresso
          </HighlightedLink>
        )}

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

      {congress.galleries.length > 0 && (
        <section className="space-y-4">
          <h3 className="text-center font-semibold text-2xl">Galeria</h3>

          <div className="grid grid-cols-2 flex-wrap items-center justify-center gap-4 pt-4 lg:grid-cols-3">
            {congress.galleries.map((gallery) => (
              <CongressGalleryImage key={gallery.id} image={gallery} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
