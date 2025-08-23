import { Button } from '@components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@components/ui/card'
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
    <Card className="hover:-translate-y-1 rounded-xl border border-gray-100 bg-white shadow-md transition duration-300 hover:shadow-2xl">
      <CardHeader className="space-y-4">
        <picture className="relative h-40 w-full rounded-md">
          <Image
            alt={name}
            className="overflow-hidden object-contain"
            fill
            src={image}
          />
        </picture>
        <h2 className="text-center font-semibold text-xl">{name}</h2>
      </CardHeader>
      <CardContent className="mt-auto">
        <p className="text-justify text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Link className="w-full" href={url} target="_blank">
          <Button className="group w-full">
            Acessar publicação
            <ExternalLink className="transition-all duration-300 group-hover:translate-x-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
