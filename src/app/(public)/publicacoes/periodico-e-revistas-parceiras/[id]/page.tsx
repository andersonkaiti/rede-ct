import { BackArrow } from '@components/ui/back-arrow'
import { getScientificJournalById } from '@http/scientific-journals/get-scientific-journal-by-id'
import { formatDate } from '@utils/format-date'
import Image from 'next/image'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../_components/page-container'
import { JournalButton } from './_components/journal-button'
import { NotFound } from './_components/not-found'

interface IJournalDetailsProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: IJournalDetailsProps) {
  const { id } = await params

  const journal = await getScientificJournalById(id)

  return {
    title: journal?.name,
  }
}

export default async function JournalDetails({ params }: IJournalDetailsProps) {
  const { id } = await params

  const journal = await getScientificJournalById(id)

  if (!journal) {
    return <NotFound />
  }

  return (
    <PageContainer>
      <BackArrow href="/publicacoes/periodico-e-revistas-parceiras" />

      <PageHeader className="flex-col items-start gap-8">
        <h1 className="font-bold text-5xl tracking-tight">{journal.name}</h1>

        <time className="text-muted-foreground text-sm">
          Última atualização em {formatDate(new Date(journal.updatedAt))}
        </time>
      </PageHeader>

      <PageMain className="gap-10">
        {journal.logoUrl && (
          <div className="relative h-88 w-full overflow-hidden">
            <Image
              alt={journal.name}
              className="rounded-md object-cover"
              fill
              src={journal.logoUrl}
            />
          </div>
        )}

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {journal.directors && (
            <div className="space-y-1">
              <h2 className="text-muted-foreground">Diretores</h2>
              <p className="whitespace-pre-wrap text-justify">
                {journal.directors}
              </p>
            </div>
          )}

          {journal.editorialBoard && (
            <div className="space-y-1">
              <h2 className="text-muted-foreground">Conselho Editorial</h2>
              <p className="whitespace-pre-wrap text-justify">
                {journal.editorialBoard}
              </p>
            </div>
          )}
        </section>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <h2 className="text-muted-foreground">ISSN</h2>
            <p>{journal.issn}</p>
          </div>
        </div>

        {journal.description && (
          <div className="space-y-1">
            <h2 className="text-muted-foreground">Descrição</h2>
            <p className="whitespace-pre-wrap text-justify">
              {journal.description}
            </p>
          </div>
        )}

        <JournalButton journalUrl={journal.journalUrl} />
      </PageMain>
    </PageContainer>
  )
}
