import { BackArrow } from '@components/back-arrow'
import UserProfileHoverCard from '@components/user-profile-hover-card'
import { getNewsById } from '@http/news/get-news-by-id'
import { formatDate } from '@utils/format-date'
import Image from 'next/image'
import { ShareButton } from './_components/share-button'

export default async function NewsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const news = await getNewsById(id)

  return (
    <main className="mx-auto my-10 flex w-full max-w-5xl flex-col justify-center gap-7 p-5 py-8">
      <BackArrow />

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
                user={{
                  ...news.author,
                  avatarUrl: news.author.avatarUrl ?? '',
                }}
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
          src={news.imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </picture>

      <p className="text-justify text-base/7 text-muted-foreground">
        {news.content}
      </p>
    </main>
  )
}
