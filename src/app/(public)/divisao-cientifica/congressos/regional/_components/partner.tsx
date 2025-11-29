import Image from 'next/image'

interface IPartnerProps {
  partner: {
    id: string
    name: string
    logoUrl: string | null
    congressId: string
  }
}

export function Partner({ partner }: IPartnerProps) {
  if (!partner.logoUrl) return null

  return (
    <div className="flex w-full flex-col gap-4 text-muted-foreground">
      <picture
        key={partner.id}
        className="relative h-56 w-full overflow-hidden rounded-md"
      >
        <Image
          alt={partner.name || ''}
          className="size-full object-cover"
          fill
          src={partner.logoUrl}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent dark:from-black/70 dark:to-transparent" />
      </picture>

      <p className="py-2 text-sm leading-relaxed">{partner.name}</p>
    </div>
  )
}
