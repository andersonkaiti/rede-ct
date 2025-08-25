import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import { Card, CardContent, CardHeader } from '@components/ui/card'
import type { ICourse } from '@mocks/courses/courses'
import { ArrowRight, Calendar, Clock, MapPin, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ICourseCardProps {
  course: ICourse
}

export function CourseCard({
  course: {
    title,
    description,
    imageUrl,
    link,
    date,
    time,
    location,
    vacancies,
    category,
  },
}: ICourseCardProps) {
  return (
    <Card className="flex flex-col items-stretch gap-2 rounded-lg p-0 shadow-lg md:flex-row">
      <picture className="relative h-64 w-full overflow-hidden rounded-t-lg p-0 md:h-auto md:w-2/4 md:rounded-l-lg md:rounded-tr-none">
        <Image
          alt={title}
          className="absolute h-full w-full object-cover"
          fill
          src={imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </picture>

      <CardContent className="w-full space-y-4 p-6 md:w-3/4">
        <CardHeader className="space-y-4 p-0">
          <Badge className="rounded-full bg-primary/20 p-1 px-2 font-bold text-primary">
            {category}
          </Badge>

          <h3 className="font-bold text-2xl">{title}</h3>
        </CardHeader>

        <p className="text-justify text-muted-foreground">{description}</p>

        <div className="space-y-4">
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
        </div>

        <Link className="w-full" href={link}>
          <Button className="group w-full font-bold">
            Inscreva-se
            <ArrowRight className="!size-4 transition-all duration-200 group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
