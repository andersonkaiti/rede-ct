import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import { ChevronUp } from 'lucide-react'
import Image from 'next/image'

interface ICongressGalleryImageProps {
  image: {
    imageUrl: string
    caption: string | null
  }
}

export function CongressGalleryImage({
  image: { imageUrl, caption },
}: ICongressGalleryImageProps) {
  return (
    <div className="flex w-full flex-col gap-4 text-muted-foreground">
      <picture className="relative h-56 w-full overflow-hidden rounded-md border-muted-foreground">
        <Image
          alt={caption || ''}
          className="size-full object-cover"
          fill
          src={imageUrl}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent dark:from-black/70 dark:to-transparent" />
      </picture>

      <Collapsible>
        <CollapsibleTrigger className="group flex w-full cursor-pointer items-center justify-between gap-2">
          <span className="line-clamp-1 flex-1 text-left text-sm">
            {caption}
          </span>

          <ChevronUp className="size-4 transition duration-300 group-data-[state=open]:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <p className="py-2 text-sm leading-relaxed">{caption}</p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
