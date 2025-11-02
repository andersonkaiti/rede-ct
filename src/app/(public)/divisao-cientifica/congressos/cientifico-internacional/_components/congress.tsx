import { HighlightedLink } from '@components/highlighted-link'
import { Calendar, MapPin } from 'lucide-react'
import type { ICongress, IDocument } from '@/@types/congress'

interface ICongressProps {
  congress: ICongress
  index: number
}

export function Congress({ congress, index }: ICongressProps) {
  return (
    <div className="flex-1 space-y-4 rounded-md text-justify sm:p-8">
      <header className="space-y-2 text-center">
        <h2 className="font-bold text-2xl md:text-3xl">{congress.edition}</h2>
        <p className="inline-flex items-center gap-2 font-medium text-lg text-primary">
          <Calendar className="h-4 w-4" /> {congress.initialDate} a{' '}
          {congress.finalDate}
        </p>
        <h3 className="font-semibold text-xl">{congress.title}</h3>
        <p className="inline-flex items-center gap-2 font-medium text-lg text-primary">
          <MapPin className="h-4 w-4" />
          <span>{congress.location}</span>
        </p>
      </header>
      <div className="space-y-4 text-justify text-muted-foreground">
        <p>{congress.description}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 pt-4">
        {congress.documents.map((document: IDocument) => (
          <HighlightedLink
            href={document.url}
            key={`${index}-${document.title}-${document.url}`}
          >
            <span className="font-medium">{document.title}</span>
          </HighlightedLink>
        ))}
      </div>
    </div>
  )
}
