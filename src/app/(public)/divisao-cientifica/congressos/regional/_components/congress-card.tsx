import { Button } from '@components/ui/button'
import { CardTitle } from '@components/ui/card'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface CongressCardProps {
  title: string
  description: string
  imageUrl: string
  link: string
  date: string
}

export function CongressCard({
  title,
  description,
  imageUrl,
  link,
  date,
}: CongressCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <header className="h-80">
        <picture className="relative flex size-full overflow-hidden rounded-md">
          <Image
            alt={title}
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
            <span className="text-muted-foreground">{date}</span>
          </time>

          <CardTitle className="font-semibold text-2xl">{title}</CardTitle>
          <p className="text-justify text-muted-foreground">{description}</p>
        </div>

        <footer>
          <Button asChild className="group w-full font-bold" variant="outline">
            <Link className="w-full" href={link}>
              <ArrowRight className="!size-4 transition-all duration-200 group-hover:translate-x-1" />
              Link do congresso
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}
