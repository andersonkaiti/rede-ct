import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Link from 'next/link'

interface ScientificArticleCardProps {
  article: {
    id: string
    title: string
    author: string
    journal: string | null
    volume: string | null
    edition: string | null
    pageStart: number | null
    pageEnd: number | null
    startDate: Date
    endDate: Date
    city: string | null
    state: string | null
    country: string | null
    publisher: string | null
    description: string | null
    year: number | null
    accessUrl: string | null
    createdAt: Date
    updatedAt: Date
  }
}

export function ScientificArticleCard({
  article: {
    title,
    author,
    journal,
    volume,
    edition,
    pageStart,
    pageEnd,
    startDate,
    endDate,
    city,
    state,
    country,
    publisher,
    year,
    accessUrl,
    description,
  },
}: ScientificArticleCardProps) {
  return (
    <Card className="flex flex-col gap-4 rounded-md transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="font-semibold text-xl leading-tight">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-justify text-muted-foreground">
          {author.split(' ')[author.split(' ').length - 1].toUpperCase()},{' '}
          {author.split(' ').slice(0, -1).join(' ')}. {title}.{' '}
          {journal && (
            <>
              {journal}
              {volume && `, ${volume}`}
              {edition && `, ${edition}`}
              {pageStart && pageEnd && `, p. ${pageStart}-${pageEnd}`}
              {pageStart && !pageEnd && `, p. ${pageStart}`}
              {', '}
              {format(new Date(startDate), 'MMM', { locale: ptBR })}.
              {format(new Date(startDate), 'yyyy', { locale: ptBR })}-
              {format(new Date(endDate), 'MMM', { locale: ptBR })}.
              {format(new Date(endDate), 'yyyy', { locale: ptBR })}.{' '}
            </>
          )}
          {city && `${city}`}
          {city && state && '/'}
          {state && `${state}`}
          {(city || state) && country && '/'}
          {country && `${country}`}
          {(city || state || country) && publisher && ': '}
          {publisher && `${publisher}`}
          {year && `, ${year}`}.
        </p>

        {description && <CardDescription>{description}</CardDescription>}
      </CardContent>

      {accessUrl && (
        <CardFooter className="mt-4">
          <Button asChild className="w-full" variant="outline">
            <Link href={accessUrl || '#'} target="_blank">
              Acessar artigo
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
