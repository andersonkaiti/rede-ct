import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import { Separator } from '@components/ui/separator'
import { format } from 'date-fns'
import { ChevronDown, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface IPartnerProps {
  partner: {
    name: string
    id: string
    logoUrl: string | null
    websiteUrl: string | null
    description: string | null
    category: string | null
    since: string
    isActive: boolean
    createdAt: string
    updatedAt: string
  }
}

export function PartnerCard({ partner }: IPartnerProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16 shrink-0 border">
          <AvatarImage
            src={partner.logoUrl || undefined}
            alt={partner.name}
            className="size-full object-cover"
          />
          <AvatarFallback className="text-base">
            {partner.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="mb-1 line-clamp-2">{partner.name}</CardTitle>
          {partner.category && (
            <CardDescription className="text-xs capitalize">
              {partner.category}
            </CardDescription>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        {partner.description ? (
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button
                className="group flex w-full justify-between"
                variant="ghost"
              >
                Descrição
                <ChevronDown className="transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </CollapsibleTrigger>

            <CollapsibleContent className="p-3">
              <p className="text-justify text-sm">{partner.description}</p>
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <p className="text-muted-foreground text-sm">
            {partner.description || <em>Sem descrição</em>}
          </p>
        )}
      </CardContent>

      <Separator />

      <CardFooter className="flex items-end justify-between gap-2 px-6">
        <div className="space-y-2">
          <span className="text-muted-foreground text-xs leading-tight">
            Parceiro(a) desde
          </span>
          <div className="font-semibold text-sm">
            {format(partner.since, 'dd/MM/yyyy')}
          </div>
        </div>

        {partner.websiteUrl ? (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="gap-2"
            title={`Acessar página de ${partner.name}`}
          >
            <Link
              href={partner.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              <span>Acessar página</span>
            </Link>
          </Button>
        ) : (
          <Button size="sm">
            <ExternalLink size={16} />
            <span>Acessar página</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
