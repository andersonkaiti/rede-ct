import { getNewsById } from '@http/news/get-news-by-id'
import { formatDate } from '@utils/format-date'
import Image from 'next/image'

import { ShareButton } from './_components/share-button'

export default async function NoticiaPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const news = await getNewsById(id)

  return (
    <main className="mx-auto my-10 flex w-full max-w-5xl flex-col justify-center gap-7 p-5 py-8">
      <header className="space-y-8">
        <h1 className="font-semibold text-2xl text-foreground tracking-tight sm:text-4xl">
          {news.title}
        </h1>

        <div className="flex flex-col justify-between gap-2 sm:flex-row">
          <div className="space-y-2 text-background-foreground text-sm">
            <time className="flex items-center gap-x-1">
              Última atualização em {formatDate(news.updated_at)}
            </time>

            <div>
              Por{' '}
              <span className="font-bold text-primary">
                {news.author.first_name} {news.author.last_name}
              </span>
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
          src={news.image_url ?? ''}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </picture>

      <p className="text-justify text-base/7">{news.content}</p>
    </main>
  )
}
