import { BackArrow } from '@components/ui/back-arrow'
import { Book } from '@components/ui/book'
import { Separator } from '@components/ui/separator'
import { UserProfileHoverCard } from '@components/ui/user-profile-hover-card'
import { getBookVolumeById } from '@http/book-volumes/get-book-volume-by-id'
import { formatDate } from '@utils/format-date'
import Image from 'next/image'
import Link from 'next/link'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../_components/page-container'
import { CatalogSheetButton } from './_components/catalog-sheet-button'
import { NotFound } from './_components/not-found'

interface IBookVolumeDetailsProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: IBookVolumeDetailsProps) {
  const { id } = await params

  const volume = await getBookVolumeById(id)

  return {
    title: volume?.title,
  }
}

export default async function BookVolumeDetails({
  params,
}: IBookVolumeDetailsProps) {
  const { id } = await params

  const volume = await getBookVolumeById(id)

  if (!volume) {
    return <NotFound />
  }

  return (
    <PageContainer>
      <BackArrow href="/publicacoes/livros-da-redect" />

      <PageHeader className="flex-col items-start gap-8">
        <h1 className="font-bold text-5xl tracking-tight">{volume.title}</h1>

        <time className="text-muted-foreground text-sm">
          Última atualização em {formatDate(volume.updatedAt)}
        </time>
      </PageHeader>

      <PageMain className="gap-10">
        {volume.coverImageUrl && (
          <div className="relative h-88 w-full overflow-hidden">
            <Image
              alt={volume.title}
              className="rounded-md object-cover"
              fill
              src={volume.coverImageUrl}
            />
          </div>
        )}

        {volume.author && (
          <div className="space-y-1">
            <h2 className="text-muted-foreground">Autor</h2>
            <UserProfileHoverCard user={volume.author} />

            <Separator />
          </div>
        )}

        <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
          <div className="flex flex-col gap-4">
            {volume.description && (
              <div className="space-y-1">
                <h2 className="text-muted-foreground">Descrição</h2>
                <p className="whitespace-pre-wrap text-justify">
                  {volume.description}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <h2 className="text-muted-foreground">Volume</h2>
                <p className="whitespace-pre-wrap text-justify">
                  {volume.volumeNumber}
                </p>
              </div>

              <div className="space-y-1">
                <h2 className="text-muted-foreground">Ano</h2>
                <time className="whitespace-pre-wrap text-justify">
                  {volume.year}
                </time>
              </div>
            </div>
          </div>

          <Link
            href={volume.accessUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Book
              author={volume.author.name}
              textColor="white"
              color="#1A1A1A"
              variant="hardcover"
              animation="hover"
            >
              <div className="space-y-4 pl-3">
                <h1 className="text-xs">{volume.title}</h1>
                <p className="text-primary text-xs">Clique aqui para acessar</p>
              </div>
            </Book>
          </Link>
        </div>

        <CatalogSheetButton catalogSheetUrl={volume.catalogSheetUrl} />
      </PageMain>
    </PageContainer>
  )
}
