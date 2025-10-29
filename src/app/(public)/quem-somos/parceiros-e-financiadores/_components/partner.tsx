import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import { format } from 'date-fns'
import {
  Calendar,
  CheckCircle,
  ChevronUp,
  ExternalLink,
  RefreshCw,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { IPartner } from 'types/partner'

interface IPartnerProps {
  partner: IPartner
}

export function Partner({ partner }: IPartnerProps) {
  return (
    <Collapsible className="group rounded-lg border border-muted/30 bg-background shadow-sm transition hover:shadow-md">
      <CollapsibleTrigger asChild>
        <Button
          className="flex w-full items-center justify-between gap-2 px-6 py-6 font-semibold text-lg"
          variant="ghost"
        >
          <span className="truncate">{partner.name}</span>
          <ChevronUp className="size-5 text-muted-foreground transition group-data-[state=open]:rotate-180" />
        </Button>
      </CollapsibleTrigger>

      <CollapsibleContent className="flex w-full flex-col gap-8 rounded-b-lg bg-background px-6 py-8 md:flex-row">
        <div className="flex items-center justify-center md:flex-1">
          <div className="flex w-full flex-col items-center gap-3">
            <div className="relative flex size-36 items-center justify-center overflow-hidden rounded-full bg-muted md:size-44">
              {partner.logoUrl ? (
                <Image
                  alt={partner.name}
                  className="rounded-full object-cover"
                  fill
                  sizes="150px"
                  src={partner.logoUrl}
                />
              ) : (
                <span className="text-muted-foreground text-xs">
                  Sem imagem
                </span>
              )}
            </div>

            <h2 className="mt-2 text-center font-bold text-xl md:text-2xl">
              {partner.name}
            </h2>

            {partner.category && (
              <Badge className="mt-1 rounded-full bg-muted px-3 py-1 font-medium text-foreground/70 text-xs">
                {partner.category}
              </Badge>
            )}

            {partner.isActive ? (
              <Badge className="mt-1 flex items-center gap-2 rounded-full border border-green-200 bg-green-100 px-2 py-0.5 font-semibold text-green-700 text-xs">
                <CheckCircle className="size-4" />
                <span>Parceria Ativa</span>
              </Badge>
            ) : (
              <Badge className="mt-1 flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-2 py-0.5 font-semibold text-gray-500 text-xs">
                <span>Parceria Inativa</span>
              </Badge>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-[2]">
          <section>
            <h3 className="mb-1 font-bold text-base text-muted-foreground">
              Sobre
            </h3>

            <p className="text-justify">
              {partner.description || (
                <span className="text-xs italic">Sem descrição.</span>
              )}
            </p>
          </section>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-1 items-center gap-3 rounded-lg p-4">
              <Badge className="flex items-center justify-center bg-primary/10 p-1">
                <Calendar className="!size-6 mb-1 text-primary" />
              </Badge>

              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground text-xs">
                  Parceiro desde
                </span>
                <span className="mt-1 font-semibold text-sm">
                  {partner.since ? format(partner.since, 'dd/MM/yyyy') : '—'}
                </span>
              </div>
            </div>
            <div className="flex min-w-[150px] flex-1 items-center gap-3 rounded-lg p-4">
              <Badge className="flex items-center justify-center bg-primary/10 p-1">
                <RefreshCw className="!size-6 text-primary" />
              </Badge>

              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground text-xs">
                  Última atualização
                </span>
                <span className="mt-1 font-semibold text-sm">
                  {partner.updatedAt
                    ? format(partner.updatedAt, 'dd/MM/yyyy')
                    : '—'}
                </span>
              </div>
            </div>
          </div>

          {partner.websiteUrl && (
            <div className="mt-8 flex justify-center">
              <Button
                asChild
                className="flex w-full items-center gap-2"
                variant="outline"
              >
                <Link
                  href={partner.websiteUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ExternalLink className="mr-1 size-4" />
                  Visitar website
                </Link>
              </Button>
            </div>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
