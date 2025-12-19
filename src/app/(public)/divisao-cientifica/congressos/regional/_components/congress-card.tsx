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
import { Calendar, Handshake, ImageIcon, MapPin } from 'lucide-react'
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

      <CardContent className="space-y-3">
        <div className="flex items-center gap-1 text-sm">
          <Calendar className="size-4" />
          <span>{format(new Date(congress.startDate), 'dd/MM/yyyy')}</span>
        </div>

        {congress.location && (
          <div className="flex items-center gap-1 text-sm">
            <MapPin className="size-4" />
            <span>{congress.location}</span>
          </div>
        )}

        {congress.regionalCongressPartners.length > 0 && (
          <div className="flex items-center gap-1 text-sm">
            <Handshake className="size-4" />
            <span>{congress.regionalCongressPartners.length} parceiro(s)</span>
          </div>
        )}

        {congress.regionalCongressGalleryItems.length > 0 && (
          <div className="flex items-center gap-1 text-sm">
            <ImageIcon className="size-4" />
            <span>
              {congress.regionalCongressGalleryItems.length} foto(s) na galeria
            </span>
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
