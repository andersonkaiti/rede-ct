import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { Separator } from '@components/ui/separator'
import { ExternalLink, User } from 'lucide-react'
import Link from 'next/link'

import type { IPortfolioData } from '../_constants/portfolio-data'

interface ICardProps {
  item: IPortfolioData['content'][number]
}

export function CardComponent({ item }: ICardProps) {
  const formattedDate = new Date(item.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <Card className="flex flex-col gap-4 overflow-hidden rounded-xl border border-border shadow-md transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <time className="flex items-center gap-2 text-muted-foreground text-xs">
            {formattedDate}
          </time>
        </div>
        <CardTitle className="line-clamp-2 font-semibold text-foreground text-lg md:text-xl">
          {item.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="line-clamp-4 text-justify text-muted-foreground text-sm md:text-base">
          {item.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="mt-auto flex w-full flex-col items-start gap-3">
        <Separator />
        <div className="flex items-center gap-2 text-muted-foreground text-xs">
          <User className="size-4" />
          <span>{item.author}</span>
        </div>
        <Button
          asChild
          className="group w-full font-semibold"
          variant="outline"
        >
          <Link
            aria-label={`Saiba mais sobre ${item.title}`}
            href={item.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            Saiba mais
            <ExternalLink className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
