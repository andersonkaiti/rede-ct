import { BackArrow } from '@components/ui/back-arrow'
import { UserProfileHoverCard } from '@components/ui/user-profile-hover-card'
import { getNewsById } from '@http/news/get-news-by-id'
import { formatDate } from '@utils/format-date'
import Image from 'next/image'
import { PageContainer } from '../../_components/page-container'
import { ShareButton } from './_components/share-button'

interface INewsPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: INewsPageProps) {
  const { id } = await params

  const news = await getNewsById(id)

  return {
    title: news.title,
  }
}

export default async function NewsPage({ params }: INewsPageProps) {
  const { id } = await params

  const news = await getNewsById(id)

  return (
    <PageContainer>
      <BackArrow href="/noticias" />

      <header className="space-y-8">
        <h1 className="font-bold text-5xl text-foreground tracking-tight">
          {news.title}
        </h1>

        <div className="flex flex-col justify-between gap-2 sm:flex-row">
          <div className="space-y-2 text-sm">
            <time className="flex items-center gap-x-1 text-muted-foreground text-sm">
              Última atualização em {formatDate(news.updatedAt)}
            </time>

            <div className="flex items-center gap-1">
              <span className="text-muted-foreground">Por</span>
              <UserProfileHoverCard
                avatarVisibility={false}
                user={news.author}
              />
            </div>
          </div>

          <ShareButton news={news} />
        </div>
      </header>

      <picture className="relative h-88 w-full overflow-hidden">
        <Image
          alt={news.title}
          className="rounded-md object-cover"
          fill
          src={news.imageUrl ?? ''}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
      </picture>

      <p className="text-justify text-base/7 text-muted-foreground">
        {news.content}
      </p>
    </PageContainer>
  )
}
