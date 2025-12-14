'use client'

import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import { Card, CardContent, CardHeader } from '@components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import { HighlightedLink } from '@components/ui/highlighted-link'
import { Separator } from '@components/ui/separator'
import { cn } from '@utils/cn'
import { format } from 'date-fns'
import {
  Calendar,
  ChevronDown,
  FileText,
  ImageIcon,
  MapPin,
  Users,
} from 'lucide-react'
import { useState } from 'react'
import { CongressGalleryImage } from './congress-gallery-image'
import { Partner } from './partner'

interface CongressCardProps {
  congress: {
    id: string
    title: string
    edition: number
    startDate: string
    endDate: string
    description: string | null
    location: string | null
    congressLink: string | null
    noticeUrl: string | null
    scheduleUrl: string | null
    programUrl: string | null
    adminReportUrl: string | null
    proceedingsUrl: string | null
    createdAt: string
    updatedAt: string
    partners: {
      id: string
      name: string
      logoUrl: string
      congressId: string
    }[]
    galleries: {
      id: string
      imageUrl: string
      caption: string | null
      congressId: string
    }[]
  }
}

export function CongressCard({ congress }: CongressCardProps) {
  const [openDescription, setOpenDescription] = useState(false)
  const [openGallery, setOpenGallery] = useState(false)
  const [openPartners, setOpenPartners] = useState(false)
  const [openLinks, setOpenLinks] = useState(false)

  const hasLinks =
    congress.congressLink ||
    congress.noticeUrl ||
    congress.scheduleUrl ||
    congress.programUrl ||
    congress.adminReportUrl ||
    congress.proceedingsUrl

  return (
    <Card className="flex flex-col">
      <CardHeader className="border-border border-b p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-foreground text-xl">
              {congress.edition}º Congresso Científico Internacional
            </h3>

            <Badge variant="outline" className="whitespace-nowrap text-xs">
              Edição {congress.edition}
            </Badge>
          </div>

          <h4 className="text-justify font-normal text-muted-foreground text-sm">
            {congress.title}
          </h4>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        {congress.description && (
          <>
            <Collapsible
              open={openDescription}
              onOpenChange={setOpenDescription}
            >
              <CollapsibleTrigger asChild>
                <Button
                  type="button"
                  className="group flex w-full items-center justify-between gap-2"
                  variant="ghost"
                >
                  <h4 className="flex gap-2 font-semibold text-muted-foreground text-xs uppercase tracking-wide">
                    <FileText className="size-4" />
                    <span>Descrição</span>
                  </h4>

                  <ChevronDown
                    className={cn(
                      'ml-1 size-4 text-muted-foreground transition-transform group-hover:cursor-pointer',
                      openDescription && 'rotate-180',
                    )}
                  />
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent className="w-full p-4 text-justify text-muted-foreground text-sm transition-all data-[state=open]:animate-fadeIn">
                {congress.description}
              </CollapsibleContent>
            </Collapsible>

            <Separator />
          </>
        )}

        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Calendar className="size-4" />
            <span>{format(new Date(congress.startDate), 'dd/MM/yyyy')}</span>
          </div>

          {congress.location && (
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="size-4" />
              <span>{congress.location}</span>
            </div>
          )}

          {congress.partners.length > 0 && (
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Users className="size-4" />
              <span>{congress.partners.length} parceiro(s)</span>
            </div>
          )}

          {congress.galleries.length > 0 && (
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <ImageIcon className="size-4" />
              <span>{congress.galleries.length} foto(s) na galeria</span>
            </div>
          )}
        </div>

        {hasLinks && (
          <>
            <Separator />

            <Collapsible open={openLinks} onOpenChange={setOpenLinks}>
              <CollapsibleTrigger asChild>
                <Button
                  type="button"
                  className="group flex w-full items-center justify-between gap-2"
                  variant="ghost"
                >
                  <h4 className="flex gap-2 font-semibold text-muted-foreground text-xs uppercase tracking-wide">
                    <FileText className="size-4" />
                    <span>Documentos e Links</span>
                  </h4>

                  <ChevronDown
                    className={cn(
                      'ml-1 size-4 text-muted-foreground transition-transform group-hover:cursor-pointer',
                      openLinks && 'rotate-180',
                    )}
                  />
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="flex flex-col gap-2 p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {congress.congressLink && (
                      <HighlightedLink href={congress.congressLink}>
                        Link do congresso
                      </HighlightedLink>
                    )}

                    {congress.noticeUrl && (
                      <HighlightedLink href={congress.noticeUrl}>
                        Edital do congresso
                      </HighlightedLink>
                    )}

                    {congress.scheduleUrl && (
                      <HighlightedLink href={congress.scheduleUrl}>
                        Cronograma
                      </HighlightedLink>
                    )}

                    {congress.programUrl && (
                      <HighlightedLink href={congress.programUrl}>
                        Programação
                      </HighlightedLink>
                    )}

                    {congress.adminReportUrl && (
                      <HighlightedLink href={congress.adminReportUrl}>
                        Relatório Administrativo
                      </HighlightedLink>
                    )}

                    {congress.proceedingsUrl && (
                      <HighlightedLink href={congress.proceedingsUrl}>
                        Anais
                      </HighlightedLink>
                    )}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </>
        )}

        {congress.galleries.length > 0 && (
          <>
            <Separator />

            <Collapsible open={openGallery} onOpenChange={setOpenGallery}>
              <CollapsibleTrigger asChild>
                <Button
                  type="button"
                  className="group flex w-full items-center justify-between gap-2"
                  variant="ghost"
                >
                  <h4 className="flex gap-2 font-semibold text-muted-foreground text-xs uppercase tracking-wide">
                    <ImageIcon className="size-4" />
                    <span>Galeria</span>
                  </h4>

                  <ChevronDown
                    className={cn(
                      'ml-1 size-4 text-muted-foreground transition-transform group-hover:cursor-pointer',
                      openGallery && 'rotate-180',
                    )}
                  />
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="grid grid-cols-3 gap-4 p-4">
                  {congress.galleries.map((gallery) => (
                    <CongressGalleryImage key={gallery.id} image={gallery} />
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </>
        )}

        {congress.partners.length > 0 && (
          <>
            <Separator />

            <Collapsible open={openPartners} onOpenChange={setOpenPartners}>
              <CollapsibleTrigger asChild>
                <Button
                  type="button"
                  className="group flex w-full items-center justify-between gap-2"
                  variant="ghost"
                >
                  <h4 className="flex gap-2 font-semibold text-muted-foreground text-xs uppercase tracking-wide">
                    <Users className="size-4" />
                    <span>Parceiros</span>
                  </h4>

                  <ChevronDown
                    className={cn(
                      'ml-1 size-4 text-muted-foreground transition-transform group-hover:cursor-pointer',
                      openPartners && 'rotate-180',
                    )}
                  />
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3">
                  {congress.partners.map((partner) => (
                    <Partner key={partner.id} partner={partner} />
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </>
        )}
      </CardContent>
    </Card>
  )
}
