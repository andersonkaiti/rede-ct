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
import { Calendar, Clock, Play, User } from 'lucide-react'
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
    <Card className="flex flex-col gap-2 overflow-hidden rounded-lg bg-white p-0 transition-all duration-200 hover:shadow-xl md:flex-row">
      <picture className="relative flex h-67 items-stretch bg-gray-100 p-0 md:h-auto md:w-2/4">
        <Image
          alt={speakers[0].split(' - ')[0]}
          className="object-cover"
          fill
          priority
          src={imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </picture>

      <CardContent className="space-y-4 p-6 md:w-3/4">
        <CardHeader className="space-y-4 p-0">
          <time className="flex items-center gap-2 text-sm leading-4">
            <Badge className="rounded-md bg-primary/20 p-1 font-bold text-primary">
              <Calendar className="!size-3 text-primary" />
            </Badge>
            <span className="text-muted-foreground">{date}</span>
            <Badge className="rounded-md bg-primary/20 p-1 font-bold text-primary">
              <Clock className="!size-3 text-primary" />
            </Badge>
            <span className="text-muted-foreground">{time}</span>
          </time>

          <CardTitle className="font-bold text-2xl">{title}</CardTitle>
        </CardHeader>

        <CardDescription className="space-y-2">
          <Badge className="rounded-full bg-primary/20 px-3 py-0 font-bold text-primary">
            <User />
            <h4 className="w-fit font-semibold text-sm">Convidada</h4>
          </Badge>
          <div className="flex items-center">
            <picture className="relative mr-3 size-6 flex-shrink-0 overflow-hidden rounded-full">
              <Image
                alt={speakers[0].split('(')[0].trim()}
                className="object-cover"
                fill
                sizes="48px"
                src={speakerImageUrl}
              />
            </picture>
            <div className="text-muted-foreground leading-4">{speakers[0]}</div>
          </div>
        </CardDescription>

        <CardFooter className="p-0">
          <Link className="w-full" href={link}>
            <Button className="group w-full font-bold">
              <Play className="!size-4 transition-all duration-200 group-hover:translate-x-1" />
              Acessar Webinário
            </Button>
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  )
}
