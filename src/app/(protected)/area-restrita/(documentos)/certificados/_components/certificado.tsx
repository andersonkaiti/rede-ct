import type { ICertification } from '@mocks/certifications'
import { formatDate } from '@utils/format-date'
import { Award, Calendar } from 'lucide-react'
import { CertificadoButton } from './certificado-button'

export function Certificado({ name, description, date, url }: ICertification) {
  return (
    <article className="space-y-4 rounded-sm border border-gray-200 p-10 shadow-sm">
      <h2 className="title-3 flex items-center gap-2">
        <Award /> {name}
      </h2>
      <p className="text-justify">{description}</p>
      <div className="flex w-fit items-center gap-2">
        <Calendar className="h-4 w-4 text-gray-500" />
        <time className="text-gray-500" dateTime={date}>
          {formatDate(date)}
        </time>
      </div>
      <CertificadoButton url={url} />
    </article>
  )
}
