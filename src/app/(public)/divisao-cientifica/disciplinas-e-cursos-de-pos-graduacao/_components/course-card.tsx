import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import { CardTitle } from '@components/ui/card'
import type { ICourse } from '@mocks/courses/courses'
import { ArrowRight, MapPin, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ICourseCardProps {
  course: ICourse
}

export function CourseCard({
  course: { title, imageUrl, link, date, time, location, vacancies, category },
}: ICourseCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <header className="h-80">
        <picture className="relative flex size-full overflow-hidden rounded-md border-1 border-muted-foreground">
          <Image alt={title} className="object-cover" fill src={imageUrl} />
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
          <h4 className="w-fit font-semibold text-sm">Categoria</h4>
          <div className="flex items-center gap-2 text-sm leading-4">
            <Badge
              className="rounded-full px-2 py-0.5 font-semibold"
              variant="secondary"
            >
              {category}
            </Badge>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <MapPin className="size-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <Users className="size-4" />
            <span>{vacancies}</span>
          </div>
        </div>

        <footer>
          <Button asChild className="group w-full font-bold" variant="outline">
            <Link className="w-full" href={link}>
              <ArrowRight className="!size-4 transition-all duration-200 group-hover:translate-x-1" />
              Inscreva-se
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}
