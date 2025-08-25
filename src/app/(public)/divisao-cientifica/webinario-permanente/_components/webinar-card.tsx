import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { Button } from '@components/ui/button'
import { CardTitle } from '@components/ui/card'
import { Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface WebinarCardProps {
  title: string
  description: string
  imageUrl: string
  speakerImageUrl: string
  link: string
  date: string
  time: string
  speakers: string[]
}

export function WebinarCard({
  title,
  imageUrl,
  speakerImageUrl,
  link,
  date,
  time,
  speakers,
}: WebinarCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <header className="h-80">
        <picture className="v relative flex size-full overflow-hidden rounded-md">
          <Image
            alt={speakers[0].split(' - ')[0]}
            className="object-cover"
            fill
            priority
            src={imageUrl}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent dark:from-black/70 dark:to-transparent" />
        </picture>
      </header>

      <div className="flex h-fit flex-grow flex-col justify-between gap-4 py-2">
        <div className="space-y-4">
          <time className="flex items-center gap-2 text-sm leading-4">
            <span className="text-muted-foreground">
              Dia {date} às {time}
            </span>
          </time>

          <CardTitle className="font-semibold text-2xl">{title}</CardTitle>
        </div>

        <div className="space-y-2">
          <h4 className="w-fit font-semibold text-sm">Convidada</h4>
          <div className="flex items-center">
            <Avatar className="mr-1.5 size-5.5">
              <AvatarImage
                alt={speakers[0].split('(')[0].trim()}
                src={speakerImageUrl}
              />
              <AvatarFallback />
            </Avatar>
            <div className="font-semibold text-muted-foreground text-sm leading-0.5">
              {speakers[0]}
            </div>
          </div>
        </div>

        <footer>
          <Button asChild className="group w-full font-bold" variant="outline">
            <Link className="w-full" href={link}>
              <Play className="!size-4 transition-all duration-200 group-hover:translate-x-1" />
              Acessar Webinário
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}
