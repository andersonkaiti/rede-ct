import { Separator } from '@components/ui/separator'
import { MailIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function SocialMedia() {
  return (
    <div className="space-y-8 text-secondary-foreground">
      <div className="flex gap-2">
        <Link
          className="relative size-6"
          href="https://www.facebook.com/redect01/"
          target="_blank"
        >
          <Image
            alt="Facebook"
            className="object-contain p-0.5 brightness-50 duration-300 hover:brightness-0 dark:hover:brightness-100"
            fill
            src="/images/icons/facebook-brands.svg"
          />
        </Link>

        <div className="flex items-center">
          <Separator className="h-4" orientation="vertical" />
        </div>

        <Link className="relative size-6" href="/" target="_blank">
          <Image
            alt="Youtube"
            className="object-contain p-0.5 brightness-50 duration-300 hover:brightness-0 dark:hover:brightness-100"
            fill
            src="/images/icons/youtube-brands.svg"
          />
        </Link>

        <div className="flex items-center">
          <Separator className="h-4" orientation="vertical" />
        </div>

        <Link
          className="relative size-6"
          href="https://www.instagram.com/redecomunidadestradicionais/"
          target="_blank"
        >
          <Image
            alt="Instagram"
            className="object-contain p-0.5 brightness-50 duration-300 hover:brightness-0 dark:hover:brightness-100"
            fill
            src="/images/icons/instagram-brands.svg"
          />
        </Link>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        <MailIcon className="size-4" />
        contato@redect.org
      </div>
    </div>
  )
}
