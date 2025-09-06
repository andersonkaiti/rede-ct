import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@components/ui/card'
import { Separator } from '@components/ui/separator'
import { formatDate } from '@utils/format-date'
import { getInitials } from '@utils/get-initials'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { INews } from 'types/news'

export function Noticia({
  news: {
    title,
    content,
    updatedAt,
    imageUrl,
    author: { avatarUrl, name },
    id,
  },
}: {
  news: INews
}) {
  return (
    <Card className="hover:-translate-y-1 flex w-full flex-col items-start justify-between gap-0 rounded-md p-0 shadow-md transition-all duration-300 hover:shadow-xl">
      <picture className="relative h-60 w-full overflow-hidden rounded-t-md">
        <Image
          alt={`Foto de ${name}`}
          className="object-cover transition-all duration-300 hover:scale-110"
          fill
          src={imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </picture>

      <CardContent className="flex w-full grow flex-col justify-between gap-4 p-6">
        <CardHeader className="p-0">
          <time className="text-muted-foreground" dateTime={updatedAt}>
            {formatDate(updatedAt)}
          </time>
        </CardHeader>
        <CardDescription className="group relative space-y-2 p-0">
          <h3 className="font-semibold text-foreground text-lg/6 group-hover:text-primary">
            <Link href={`/noticias/${id}`}>
              <span className="absolute inset-0" />
              {title}
            </Link>
          </h3>
          <div className="line-clamp-3 truncate text-justify text-muted-foreground text-sm leading-relaxed group-hover:text-primary">
            {content}
          </div>
        </CardDescription>
        <Separator />
        <CardFooter className="relative flex w-full items-center justify-between gap-x-2 p-0 text-xs">
          <div className="flex items-center gap-x-2">
            <Avatar className="size-6">
              <AvatarImage
                alt={`Foto de ${name}`}
                className="rounded-full object-cover"
                src={avatarUrl}
              />
              <AvatarFallback>{getInitials(name)}</AvatarFallback>
            </Avatar>
            <div className="font-semibold text-foreground">{name}</div>
          </div>
          <Link className="group size-4" href={`/noticias/${id}`}>
            <ArrowRight className="size-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  )
}
