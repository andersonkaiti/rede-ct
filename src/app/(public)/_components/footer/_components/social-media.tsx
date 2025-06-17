import { MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SocialMedia() {
  return (
    <div className="space-y-8 text-white">
      <div className="flex gap-2">
        <Link
          href="https://www.facebook.com/redect01/"
          target="_blank"
          className="flex items-center justify-center rounded-full bg-gray-800 p-2 transition-all duration-300 hover:bg-gray-600"
        >
          <div className="relative size-5">
            <Image
              src="/images/icons/facebook-brands.svg"
              alt="Facebook"
              fill
              className="object-cover"
            />
          </div>
        </Link>
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-center rounded-full bg-gray-800 p-2 transition-all duration-300 hover:bg-gray-600"
        >
          <div className="relative size-5">
            <Image
              src="/images/icons/youtube-brands.svg"
              alt="Youtube"
              fill
              className="object-cover"
            />
          </div>
        </Link>
        <Link
          href="https://www.instagram.com/redecomunidadestradicionais/"
          target="_blank"
          className="flex items-center justify-center rounded-full bg-gray-800 p-2 transition-all duration-300 hover:bg-gray-600"
        >
          <div className="relative size-5">
            <Image
              src="/images/icons/instagram-brands.svg"
              alt="Instagram"
              fill
              className="object-cover"
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <MailIcon className="!size-4" />
        contato@redect.org
      </div>
    </div>
  );
}
