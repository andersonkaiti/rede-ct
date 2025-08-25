import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@components/ui/dialog'
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">{name}</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[60vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Badge className="rounded-full bg-primary/20 p-1 text-primary">
              <Building2 className="!size-5" />
            </Badge>
            {name}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 flex flex-col items-center gap-4">
          <div className="relative h-24 w-full overflow-hidden rounded-md">
            <Image alt={alt} className="object-contain" fill src={src} />
          </div>
          <Badge className="flex h-fit gap-2 rounded-full border border-primary/30 bg-background/20 px-4 py-2 font-semibold text-primary text-sm">
            <Calendar className="size-4" />
            <span>{startDate}</span>
          </Badge>
          <p className="mt-2 text-justify text-muted-foreground">
            {description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
