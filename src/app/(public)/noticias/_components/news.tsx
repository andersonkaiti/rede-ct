import { CardTitle } from '@components/ui/card'
import { Separator } from '@components/ui/separator'
import { UserProfileHoverCard } from '@components/ui/user-profile-hover-card'
import { formatDate } from '@utils/format-date'
import Image from 'next/image'
import Link from 'next/link'

interface INewsProps {
  news: {
    id: string
    createdAt: string
    updatedAt: string
    title: string
    content: string
    imageUrl: string | null
    author: {
      name: string
      id: string
      avatarUrl: string | null
      createdAt: string
      updatedAt: string
      emailAddress: string
      orcid: string | null
      phone: string | null
      lattesUrl: string | null
      role: 'ADMIN' | 'USER'
    }
  }
}

export function News({ news }: INewsProps) {
  return (
    <div className="flex flex-col gap-2">
      <Link
        aria-label={`Ver notícia: ${news.title}`}
        className="group flex flex-col gap-0 focus:outline-none"
        href={`/noticias/${news.id}`}
        tabIndex={-1}
      >
        <header className="h-60">
          <picture className="relative flex size-full overflow-hidden rounded-lg border border-background-900">
            <Image
              alt={news.title}
              className="object-cover"
              fill
              priority
              src={news.imageUrl || ''}
            />
          </picture>
        </header>

        <div className="flex h-fit grow flex-col justify-between gap-4 py-8">
          <CardTitle className="line-clamp-3 font-semibold text-2xl leading-tight">
            {news.title}
          </CardTitle>

          <div className="space-y-2">
            <p className="line-clamp-3 text-justify text-muted-foreground text-sm leading-relaxed">
              {news.content}
            </p>
          </div>
        </div>
      </Link>

      <footer className="mt-auto flex w-full items-center gap-x-4">
        <UserProfileHoverCard user={news.author} />

        <Separator orientation="vertical" />

        <div className="flex items-center gap-2 text-muted-foreground text-xs">
          <time dateTime={news.updatedAt}>{formatDate(news.updatedAt)}</time>
        </div>
      </footer>
    </div>
  )
}
