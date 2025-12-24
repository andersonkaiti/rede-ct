import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Link from 'next/link'

interface IPartnerProps {
  partner: {
    name: string
    id: string
    logoUrl: string | null
    websiteUrl: string | null
    description: string | null
    category: string | null
    since: Date
    isActive: boolean
    createdAt: Date
    updatedAt: Date
  }
}

export function PartnerCard({ partner }: IPartnerProps) {
  const formattedSince = format(
    partner.since,
    "d 'de' MMMM 'de' yyyy 'às' HH:mm",
    { locale: ptBR },
  )

  return (
    <Card>
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

        <div className="space-y-1">
          <CardTitle>{partner.name}</CardTitle>

          <p className="text-muted-foreground text-xs capitalize">
            {partner.category}
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-1 text-sm">
          <span className="text-muted-foreground">Parceiro(a) desde</span>
          <div className="whitespace-pre-wrap text-justify">
            {formattedSince}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-center gap-8">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/quem-somos/parceiros-e-financiadores/${partner.id}`}>
            Ver mais detalhes
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
