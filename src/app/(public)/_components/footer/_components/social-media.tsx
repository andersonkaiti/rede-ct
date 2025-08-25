import { Button } from '@components/ui/button'
import { MailIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function SocialMedia() {
  return (
    <div className="space-y-8 text-secondary-foreground">
      <div className="flex gap-2">
        <Button asChild variant="ghost">
          <Link
            className="relative size-5"
            href="https://www.facebook.com/redect01/"
            target="_blank"
          >
            <Image
              alt="Facebook"
              className="object-contain p-1 invert dark:invert-0"
              fill
              src="/images/icons/facebook-brands.svg"
            />
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link className="relative size-5" href="/" target="_blank">
            <Image
              alt="Youtube"
              className="object-contain p-1 invert dark:invert-0"
              fill
              src="/images/icons/youtube-brands.svg"
            />
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link
            className="relative size-5"
            href="https://www.instagram.com/redecomunidadestradicionais/"
            target="_blank"
          >
            <Image
              alt="Instagram"
              className="object-contain p-1 invert dark:invert-0"
              fill
              src="/images/icons/instagram-brands.svg"
            />
          </Link>
        </Button>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <MailIcon className="!size-4" />
        contato@redect.org
      </div>
    </div>
  )
}
