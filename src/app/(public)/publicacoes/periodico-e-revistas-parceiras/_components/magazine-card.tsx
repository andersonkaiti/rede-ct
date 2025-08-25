import { Button } from '@components/ui/button'
import type { IMagazine } from '@mocks/magazines/magazines'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function MagazineCard({
  magazine: { description, image, name, url },
}: {
  magazine: IMagazine
}) {
  return (
    <div className="flex w-full flex-col gap-4">
      <picture className="relative h-40 w-full rounded-md">
        <Image
          alt={name}
          className="overflow-hidden rounded-md border-1 border-muted-foreground object-cover"
          fill
          src={image}
        />
      </picture>

      <div className="flex flex-grow flex-col justify-between gap-4">
        <h2 className="font-semibold text-xl">{name}</h2>

        <span className="text-justify text-muted-foreground text-sm leading-relaxed">
          {description}
        </span>

        <Link className="w-full" href={url} target="_blank">
          <Button className="group w-full" variant="outline">
            Acessar publicação
            <ExternalLink className="transition-all duration-300 group-hover:translate-x-2" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
