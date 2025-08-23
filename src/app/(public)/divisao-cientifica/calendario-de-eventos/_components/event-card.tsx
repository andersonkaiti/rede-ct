import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import type { IEvent } from '@mocks/events/events'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function EventCard({
  event: {
    title,
    description,
    href,
    image,
    status,
    subscriptionPeriod,
    subtitle,
  },
}: {
  event: IEvent
}) {
  return (
    <Card className="flex flex-col items-stretch gap-2 rounded-lg border border-gray-200 p-0 shadow-sm md:flex-row">
      <picture className="relative h-64 w-full overflow-hidden rounded-t-lg md:h-auto md:w-2/4 md:rounded-l-lg md:rounded-tr-none">
        <Image
          alt={image.alt}
          className="absolute h-full w-full object-cover"
          fill
          src={image.url}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </picture>

      <div className="w-full space-y-4 p-6 md:w-3/4">
        <CardHeader className="space-y-4 p-0">
          <time className="flex items-stretch gap-2 text-sm">
            <Badge className="rounded-md bg-primary/20 p-1 font-bold text-primary">
              <Calendar className="!size-5 h-fit text-primary" />
            </Badge>
            <div className="flex flex-col leading-4">
              <span className="font-bold text-black">
                Período de inscrição: {subscriptionPeriod.start} até{' '}
                {subscriptionPeriod.end}
              </span>
              <div className="flex items-center gap-2">
                <Clock className="!size-3 text-muted-foreground" />
                <span className="text-muted-foreground">
                  {subscriptionPeriod.time}
                </span>
              </div>
            </div>
          </time>

          <CardTitle className="font-bold text-xl">
            {title} ({subtitle})
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <CardDescription className="text-justify text-muted-foreground">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-0">
          <Link className="w-full" href={href}>
            <Button className="group w-full font-bold">
              {status === 'inscricoes-abertas'
                ? 'Inscreva-se'
                : 'Inscrições encerradas'}
              <ArrowRight className="!size-4 transition-all duration-200 group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  )
}
