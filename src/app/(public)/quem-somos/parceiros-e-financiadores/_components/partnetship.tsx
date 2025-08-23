import { Badge } from '@components/ui/badge'
import { Card, CardContent, CardHeader } from '@components/ui/card'
import { Building2, Calendar } from 'lucide-react'
import Image from 'next/image'
import type { IPartnership } from 'types/partnership'

export function Partnership({
  partnership: {
    name,
    image: { src, alt },
    description,
    startDate,
  },
}: {
  partnership: IPartnership
}) {
  return (
    <Card className="flex flex-col items-center gap-0 overflow-hidden border-0 border-primary border-b-4 p-0">
      <CardHeader className="flex w-full items-stretch gap-4 bg-primary p-5">
        <div className="relative h-auto min-h-20 w-1/4 overflow-hidden rounded-md ring-4 ring-white/20">
          <Image alt={alt} className="absolute object-cover" fill src={src} />
        </div>
        <div className="flex w-3/4 items-center space-y-2 p-4">
          <Badge className="ml-auto flex h-fit gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 font-semibold text-sm text-white">
            <Calendar className="size-4" />
            <span>{startDate}</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-7">
        <h2 className="flex items-center gap-2 font-bold text-2xl">
          <Badge className="rounded-md bg-primary/20 p-1 text-primary">
            <Building2 className="!size-5" />
          </Badge>
          {name}
        </h2>
        <p className="flex-2 text-justify text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
