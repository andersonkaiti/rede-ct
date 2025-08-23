import { MailIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function SocialMedia() {
  return (
    <div className="space-y-8 text-white">
      <div className="flex gap-2">
        <Link
          className="flex items-center justify-center rounded-full bg-gray-800 p-2 transition-all duration-300 hover:bg-gray-600"
          href="https://www.facebook.com/redect01/"
          target="_blank"
        >
          <div className="relative size-5">
            <Image
              alt="Facebook"
              className="object-cover"
              fill
              src="/images/icons/facebook-brands.svg"
            />
          </div>
        </Link>
        <Link
          className="flex items-center justify-center rounded-full bg-gray-800 p-2 transition-all duration-300 hover:bg-gray-600"
          href="/"
          target="_blank"
        >
          <div className="relative size-5">
            <Image
              alt="Youtube"
              className="object-cover"
              fill
              src="/images/icons/youtube-brands.svg"
            />
          </div>
        </Link>
        <Link
          className="flex items-center justify-center rounded-full bg-gray-800 p-2 transition-all duration-300 hover:bg-gray-600"
          href="https://www.instagram.com/redecomunidadestradicionais/"
          target="_blank"
        >
          <div className="relative size-5">
            <Image
              alt="Instagram"
              className="object-cover"
              fill
              src="/images/icons/instagram-brands.svg"
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <MailIcon className="!size-4" />
        contato@redect.org
      </div>
    </div>
  )
}
