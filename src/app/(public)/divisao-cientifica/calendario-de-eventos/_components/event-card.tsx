import { Button } from '@components/ui/button'
import { CardTitle } from '@components/ui/card'
import type { IEvent } from '@mocks/events/events'
import { ArrowRight, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function EventCard({
  event: { title, href, image, status, subscriptionPeriod, subtitle },
}: {
  event: IEvent
}) {
  return (
    <div className="flex flex-col gap-2">
      <header className="h-80">
        <picture className="relative flex size-full overflow-hidden rounded-md border-1 border-muted-foreground">
          <Image
            alt={image.alt}
            className="object-cover"
            fill
            src={image.url}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent dark:from-black/70 dark:to-transparent" />
        </picture>
      </header>

      <div className="flex h-fit flex-grow flex-col justify-between gap-4 py-2">
        <div className="space-y-4">
          <time className="flex items-center gap-2 text-sm leading-4">
            <span className="text-muted-foreground">
              Período de inscrição: {subscriptionPeriod.start} até{' '}
              {subscriptionPeriod.end}
            </span>
          </time>

          <CardTitle className="font-semibold text-2xl">
            {title} ({subtitle})
          </CardTitle>
        </div>

        <div className="space-y-2">
          <h4 className="w-fit font-semibold text-sm">Informações</h4>
          <div className="flex items-center">
            <Clock className="!size-4 mr-1.5 text-muted-foreground" />
            <div className="font-semibold text-muted-foreground text-sm leading-0.5">
              {subscriptionPeriod.time}
            </div>
          </div>
        </div>

        <footer>
          <Button asChild className="group w-full font-bold" variant="outline">
            <Link className="w-full" href={href}>
              {status === 'inscricoes-abertas'
                ? 'Inscreva-se'
                : 'Inscrições encerradas'}
              <ArrowRight className="!size-4 transition-all duration-200 group-hover:translate-x-1" />
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}
