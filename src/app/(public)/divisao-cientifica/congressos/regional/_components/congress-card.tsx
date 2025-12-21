'use client'

import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { format } from 'date-fns'
import Link from 'next/link'

interface CongressCardProps {
  congress: {
    id: string
    title: string
    edition: number
    startDate: Date
    endDate: Date
    description: string | null
    location: string | null
    congressLink: string | null
    noticeUrl: string | null
    scheduleUrl: string | null
    programUrl: string | null
    adminReportUrl: string | null
    proceedingsUrl: string | null
    createdAt: Date
    updatedAt: Date
    regionalCongressPartners: {
      id: string
      name: string
      logoUrl: string | null
      congressId: string
    }[]
    regionalCongressGalleryItems: {
      id: string
      imageUrl: string
      caption: string | null
      congressId: string
    }[]
  }
}

export function CongressCard({ congress }: CongressCardProps) {
  return (
    <Card>
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="font-semibold text-foreground text-xl">
            {congress.edition}º Congresso Regional
          </CardTitle>

          <Badge className="whitespace-nowrap border-primary/20 bg-primary/20 text-primary text-xs">
            {congress.edition}ª Edição
          </Badge>
        </div>

        <h4 className="text-justify text-sm">{congress.title}</h4>
      </CardHeader>

      <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-1 text-sm">
          <h2 className="text-muted-foreground">Data</h2>
          <p className="whitespace-pre-wrap text-justify text-sm">
            {format(congress.startDate, 'dd/MM/yyyy')}
          </p>
        </div>

        {congress.location && (
          <div className="space-y-1 text-sm">
            <h2 className="text-muted-foreground">Local</h2>
            <p className="whitespace-pre-wrap text-justify text-sm">
              {congress.location}
            </p>
          </div>
        )}

        {congress.regionalCongressPartners.length > 0 && (
          <div className="space-y-1 text-sm">
            <h2 className="text-muted-foreground">Parceria(s)</h2>
            <p className="whitespace-pre-wrap text-justify text-sm">
              {congress.regionalCongressPartners.length} parceiro(s)
            </p>
          </div>
        )}

        {congress.regionalCongressGalleryItems.length > 0 && (
          <div className="space-y-1 text-sm">
            <h2 className="text-muted-foreground">Galeria</h2>
            <p className="whitespace-pre-wrap text-justify text-sm">
              {congress.regionalCongressGalleryItems.length} foto(s) na galeria
            </p>
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full" variant="outline">
          <Link href={`/divisao-cientifica/congressos/regional/${congress.id}`}>
            Ver mais detalhes
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
