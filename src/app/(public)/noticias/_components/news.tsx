import { CardTitle } from '@components/ui/card'
import { Separator } from '@components/ui/separator'
import UserProfileHoverCard from '@components/user-profile-hover-card'
import { formatDate } from '@utils/format-date'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { INews } from 'types/news'

export function Noticia({
  news: { title, content, updatedAt, imageUrl, author, id },
}: {
  news: INews
}) {
  return (
    <div className="flex flex-col gap-2">
      <Link
        aria-label={`Ver notícia: ${title}`}
        className="group flex flex-col gap-0 focus:outline-none"
        href={`/noticias/${id}`}
        tabIndex={-1}
      >
        <header className="h-60">
          <picture className="relative flex size-full overflow-hidden rounded-lg border-1 border-slate-900">
            <Image
              alt={title}
              className="object-cover"
              fill
              priority
              src={imageUrl}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent dark:from-black/70 dark:to-transparent" />
          </picture>
        </header>

        <div className="flex h-fit flex-grow flex-col justify-between gap-4 py-2">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
              <time dateTime={updatedAt}>{formatDate(updatedAt)}</time>
            </div>
            <CardTitle className="line-clamp-3 font-semibold text-2xl leading-tight">
              {title}
            </CardTitle>
          </div>

          <div className="space-y-2">
            <p className="line-clamp-3 text-justify text-muted-foreground text-sm leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      </Link>
      <footer className="mt-auto">
        <Separator />

        <div className="flex w-full items-center justify-between gap-x-2 pt-2">
          <UserProfileHoverCard user={author} />

          <span
            aria-hidden="true"
            className="group flex items-center gap-1 px-2 font-semibold hover:underline"
            tabIndex={-1}
          >
            <ArrowRight className="size-4 transition-all duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </footer>
    </div>
  )
}
