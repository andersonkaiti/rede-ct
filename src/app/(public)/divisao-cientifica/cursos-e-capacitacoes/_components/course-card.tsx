import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import type { ICourse } from '@mocks/courses/courses'
import { ArrowRight, Calendar, Clock, MapPin, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function CourseCard({
  title,
  imageUrl,
  link,
  date,
  time,
  location,
  vacancies,
  category,
}: ICourse) {
  return (
    <Card className="md flex w-full flex-col items-stretch gap-2 overflow-hidden rounded-lg bg-background p-0 shadow-lg transition-all duration-200 hover:shadow-xl md:flex-row">
      <picture className="relative h-64 w-full overflow-hidden rounded-t-lg md:h-auto md:w-2/4 md:rounded-l-lg md:rounded-tr-none">
        <Image
          alt={title}
          className="h-full w-full object-cover"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 33vw"
          src={imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </picture>

      <CardContent className="w-full space-y-4 p-6 md:w-3/4">
        <Badge className="rounded-full bg-primary/20 p-1 px-2 font-bold text-primary">
          {category}
        </Badge>

        <CardHeader className="p-0">
          <CardTitle className="font-bold text-2xl">{title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 p-0">
          <time className="flex items-center gap-2 p-2 text-primary text-sm">
            <Badge className="rounded-md bg-primary/20 p-1 font-bold text-primary">
              <Calendar className="!size-6.5 text-primary" />
            </Badge>
            <div className="flex flex-col">
              <span className="font-bold text-foreground">{date}</span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock className="!size-3 text-muted-foreground" />
                {time}
              </span>
            </div>
          </time>

          <div className="flex items-center gap-2 p-2">
            <Badge className="rounded-md bg-primary/20 p-1 font-bold text-primary">
              <MapPin className="!size-6.5 text-primary" />
            </Badge>
            <div className="flex flex-col text-sm">
              <span className="font-bold">Local</span>
              <span className="text-muted-foreground">{location}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2">
            <Badge className="rounded-md bg-primary/20 p-1 font-bold text-primary">
              <Users className="!size-6.5 text-primary" />
            </Badge>
            <div className="flex flex-col text-sm">
              <span className="font-bold">Vagas</span>
              <span className="text-muted-foreground">{vacancies}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-0">
          <Link className="w-full" href={link}>
            <Button className="group w-full font-bold">
              Inscreva-se
              <ArrowRight className="!size-4 transition-all duration-200 group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  )
}
